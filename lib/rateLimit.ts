// Pembatas sederhana di memori. Cukup untuk awal, tetapi di Vercel (serverless)
// penghitungnya tidak dibagi antar instance. Untuk produksi, ganti dengan Upstash Redis / Vercel KV.
const hits = new Map<string, number[]>();

export function rateLimit(key: string, max = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}
