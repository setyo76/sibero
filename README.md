# Sibero Drone Website

Next.js (App Router) + TypeScript.

## Menjalankan
1. `npm install`
2. Salin `.env.example` menjadi `.env.local`, isi `GEMINI_API_KEY`
3. `npm run dev` lalu buka http://localhost:3000

## Yang perlu Anda sesuaikan
- `lib/data.ts`: proyek, layanan, teks Keselamatan & Perizinan, kontak. Periksa lokasi proyek p4, p13, p16.
- Foto proyek: simpan (WebP) di `public/portfolio/` lalu isi field `image` di `lib/data.ts`.
- `lib/prompt.ts`: isi alat dan layanan yang benar-benar tersedia.
- `lib/rateLimit.ts`: ganti dengan Upstash Redis / Vercel KV sebelum produksi.

## Deploy ke Vercel
Impor repo, lalu tambahkan environment variable `GEMINI_API_KEY`, `GEMINI_MODEL`, `NEXT_PUBLIC_SITE_URL`.
