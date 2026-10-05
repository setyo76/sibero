"use client";

import { useState } from "react";
import type { ConsultResult } from "@/lib/types";
import { buildWaLink } from "@/lib/whatsapp";

export default function Consultant() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ConsultResult | null>(null);

  async function submit() {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Terjadi kesalahan.");
      setResult(data as ConsultResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  const waText = result
    ? `Halo Sibero, saya ingin berkonsultasi.\n\n${result.summary}`
    : "Halo Sibero, saya ingin berkonsultasi soal sewa drone.";

  return (
    <section id="konsultasi">
      <div className="wrap">
        <h2>Ceritakan kebutuhan Anda</h2>
        <p>Tulis lokasi, jenis acara atau proyek, dan hasil yang diinginkan. Asisten akan menyarankan layanan dan menyiapkan ringkasan untuk tim kami.</p>

        <div className="consult-box">
          <label htmlFor="need" className="small">Kebutuhan Anda</label>
          <textarea
            id="need"
            value={message}
            maxLength={600}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Contoh: Dokumentasi lomba lari 5.000 peserta di BSD bulan depan, butuh video untuk media sosial."
          />
          <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
            <button className="btn" onClick={submit} disabled={loading || message.trim().length < 10}>
              {loading ? "Menyusun saran..." : "Minta saran"}
            </button>
            <a className="btn ghost" href={buildWaLink(waText)} target="_blank" rel="noopener noreferrer">Langsung ke WhatsApp</a>
          </div>

          {error && <p className="error" role="alert">{error}</p>}

          {result && (
            <div className="result" aria-live="polite">
              <dl>
                <dt>Layanan yang cocok</dt><dd>{result.serviceType}</dd>
                <dt>Perkiraan durasi</dt><dd>{result.estimatedDuration}</dd>
                <dt>Yang perlu kami ketahui</dt>
                <dd><ul>{result.followUpQuestions.map((q) => <li key={q}>{q}</li>)}</ul></dd>
              </dl>
              <p className="small">Saran ini bersifat awal. Harga, jadwal, dan izin terbang dikonfirmasi oleh tim.</p>
              <a className="btn" href={buildWaLink(waText)} target="_blank" rel="noopener noreferrer">Kirim ringkasan ke tim via WhatsApp</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
