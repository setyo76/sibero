export const SITE = {
  name: "Sibero Drone",
  tagline: "Sewa drone dengan pilot profesional",
  description:
    "Jasa sewa drone beserta pilot/operator untuk dokumentasi aerial event, industri, infrastruktur, film, dan televisi. Pengalaman 12 tahun.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sibero.id",
  whatsapp: "6281381383926",
  whatsappDisplay: "0813 8138 3926",
  email: "muanta@gmail.com",
  instagram: "sibero_drone",
  years: 12,
};

export type Category = "Korporat & Industri" | "Infrastruktur" | "Event" | "TV & Film" | "Pendidikan & Sosial";

export const CATEGORIES: Category[] = [
  "Korporat & Industri",
  "Infrastruktur",
  "Event",
  "TV & Film",
  "Pendidikan & Sosial",
];

export interface Project {
  id: string;
  title: string;
  location: string;
  category: Category;
  note?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  { id: "p1", title: "Gedung perkantoran perbankan syariah", location: "DKI Jakarta", category: "Korporat & Industri", note: "Foto dan video udara kawasan bisnis.", image: "/portfolio/Muan Aerial Portofolio-2-04.png" },
  { id: "p2", title: "Pabrik pengolahan ikan", location: "Majalengka, Jawa Barat", category: "Korporat & Industri", note: "Dokumentasi lokasi untuk materi perusahaan.", image: "/portfolio/Muan Aerial Portofolio-2-05.png" },
  { id: "p3", title: "Pertambangan dan pemuatan bauksit", location: "Ketapang, Kalimantan Barat", category: "Korporat & Industri", note: "Dokumentasi operasi sungai dan tongkang.", image: "/portfolio/Muan Aerial Portofolio-2-08.png" },
  { id: "p4", title: "Kawasan industri baja terintegrasi", location: "Banten", category: "Korporat & Industri", note: "Dokumentasi fasilitas pabrik skala besar.", image: "/portfolio/Muan Aerial Portofolio-2-10.png" },
  { id: "p5", title: "Pelabuhan peti kemas baru", location: "Tibar, Timor Leste", category: "Infrastruktur", note: "Proyek pelabuhan yang dibiayai lembaga pembangunan internasional.", image: "/portfolio/Muan Aerial Portofolio-2-11.png" },
  { id: "p6", title: "Upacara kenegaraan di kawasan ibu kota baru", location: "IKN, Kalimantan Timur", category: "Infrastruktur", image: "/portfolio/Muan Aerial Portofolio-2-15.png" },
  { id: "p7", title: "Salat Id di stadion", location: "JIS, Jakarta", category: "Event", note: "Liputan ribuan jemaah dari udara.", image: "/portfolio/Muan Aerial Portofolio-2-17.png" },
  { id: "p8", title: "Peringatan hari nasional dengan balon udara", location: "ICE BSD, Tangerang Selatan", category: "Event", image: "/portfolio/Muan Aerial Portofolio-2-13.png" },
  { id: "p9", title: "Pameran dan pusat konvensi", location: "JIExpo, Jakarta", category: "Event", image: "/portfolio/Muan Aerial Portofolio-2-14.png" },
  { id: "p10", title: "Kedatangan kapal pesiar", location: "Tanjung Priok, Jakarta", category: "Event", image: "/portfolio/Muan Aerial Portofolio-2-16.png" },
  { id: "p11", title: "Program petualangan televisi", location: "Wakatobi, Sulawesi Tenggara", category: "TV & Film", image: "/portfolio/Muan Aerial Portofolio-2-20.png" },
  { id: "p12", title: "Dokumenter sejarah rempah Nusantara", location: "Tuban, Jawa Timur", category: "TV & Film", note: "Untuk saluran berita internasional.", image: "/portfolio/Muan Aerial Portofolio-2-21.png" },
  { id: "p13", title: "Film layar lebar", location: "Indonesia", category: "TV & Film", image: "/portfolio/Muan Aerial Portofolio-2-19.png" },
  { id: "p14", title: "Sekolah kejuruan dan yayasan pendidikan", location: "Amlapura, Bali", category: "Pendidikan & Sosial", image: "/portfolio/Muan Aerial Portofolio-2-25.png" },
  { id: "p15", title: "Pusat pelatihan manasik", location: "Muncul, Tangerang Selatan", category: "Pendidikan & Sosial", image: "/portfolio/Muan Aerial Portofolio-2-26.png" },
  { id: "p16", title: "Kampanye lingkungan sampah plastik", location: "Indonesia", category: "Pendidikan & Sosial", note: "Dokumentasi untuk produksi film dokumenter.", image: "/portfolio/Muan Aerial Portofolio-2-27.png" },
];

export const SERVICES = [
  { title: "Event dan konser", text: "Peluncuran, lomba lari, konser, dan acara massa. Sudut atas, tracking, dan transisi siang ke malam." },
  { title: "Industri dan korporat", text: "Pabrik, tambang, pelabuhan, dan gedung untuk profil perusahaan dan laporan tahunan." },
  { title: "Progres infrastruktur", text: "Dokumentasi berkala proyek konstruksi dari sudut yang sama agar perkembangan mudah dibandingkan." },
  { title: "TV dan film", text: "Footage sinematik untuk program televisi, dokumenter, dan film, dengan pilot yang paham alur produksi." },
];

export const SAFETY = [
  { title: "Pilot berpengalaman", text: "Setiap pekerjaan dijalankan oleh pilot yang sudah berpengalaman selama bertahun-tahun di lapangan." },
  { title: "Koordinasi izin lokasi", text: "Kami membantu koordinasi dengan pengelola lokasi dan pihak berwenang sebelum terbang, sesuai ketentuan yang berlaku." },
  { title: "Cek cuaca dan area", text: "Kondisi cuaca, kerumunan, dan hambatan di area terbang diperiksa sebelum dan selama pengambilan gambar." },
  { title: "Kru dan peralatan siap", text: "Baterai cadangan dan prosedur darurat disiapkan sebelum drone naik." },
];