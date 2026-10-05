import { SAFETY } from "@/lib/data";

export default function Safety() {
  return (
    <section id="keselamatan" className="safety">
      <div className="wrap">
        <h2>Keselamatan & Perizinan</h2>
        <p>Terbang di atas kerumunan atau fasilitas industri butuh persiapan. Ini yang kami lakukan di setiap pekerjaan.</p>
        <div className="grid">
          {SAFETY.map((s) => (
            <div className="card" key={s.title} style={{ background: "var(--bg)" }}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <p className="small" style={{ marginTop: 20 }}>
          Butuh dokumen pendukung untuk pengajuan vendor? Hubungi kami dan sebutkan kebutuhannya.
        </p>
      </div>
    </section>
  );
}
