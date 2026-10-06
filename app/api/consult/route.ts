import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import type { ConsultResult } from "@/lib/types";

export const runtime = "nodejs";

// gemini-2.5-flash is scheduled for shutdown (October 2026). Set GEMINI_MODEL in .env.local to override.
const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.5-flash";
const MAX_INPUT = 600;

// Gemini structured-output schema: the model must return exactly these fields.
const responseSchema = {
  type: "OBJECT",
  properties: {
    serviceType: { type: "STRING" },
    estimatedDuration: { type: "STRING" },
    followUpQuestions: { type: "ARRAY", items: { type: "STRING" } },
    summary: { type: "STRING" },
    outOfScope: { type: "BOOLEAN" },
  },
  required: ["serviceType", "estimatedDuration", "followUpQuestions", "summary", "outOfScope"],
};

interface GeminiPart {
  text?: string;
  thought?: boolean;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Konsultan AI belum dikonfigurasi." }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Terlalu banyak permintaan. Coba lagi beberapa menit lagi atau hubungi via WhatsApp." }, { status: 429 });
  }

  let message = "";
  try {
    const body = await req.json();
    message = typeof body?.message === "string" ? body.message.trim() : "";
  } catch {
    return NextResponse.json({ error: "Permintaan tidak valid." }, { status: 400 });
  }
  if (message.length < 10 || message.length > MAX_INPUT) {
    return NextResponse.json({ error: `Tulis kebutuhan Anda antara 10 dan ${MAX_INPUT} karakter.` }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema,
            temperature: 0.4,
            // Gemini 3 models can spend output tokens on internal reasoning, so leave headroom
            // or the JSON gets truncated.
            maxOutputTokens: 1500,
          },
        }),
      },
    );

    if (!res.ok) {
      // Log the response body to the server console so 400/403/404 causes are visible.
      const detail = await res.text().catch(() => "");
      throw new Error(`Gemini ${res.status} (model: ${MODEL}) ${detail.slice(0, 300)}`);
    }

    const data = await res.json();
    const candidate = data?.candidates?.[0];
    if (candidate?.finishReason === "MAX_TOKENS") throw new Error("Output truncated (MAX_TOKENS)");

    // Join the answer parts and skip any "thought" parts a reasoning model may return.
    const parts: GeminiPart[] = candidate?.content?.parts ?? [];
    const text = parts.filter((p) => !p.thought && p.text).map((p) => p.text).join("");
    if (!text) throw new Error("Empty response");

    // Tolerate accidental ```json fences.
    const clean = text.replace(/```json|```/g, "").trim();
    const result = JSON.parse(clean) as ConsultResult;
    if (!Array.isArray(result.followUpQuestions)) result.followUpQuestions = [];
    return NextResponse.json(result);
  } catch (err) {
    console.error("consult error", err);
    return NextResponse.json({ error: "Konsultan AI sedang tidak tersedia. Silakan hubungi kami lewat WhatsApp." }, { status: 502 });
  }
}