import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="layanan">
      <div className="wrap">
        <h2>Layanan</h2>
        <p>Semua layanan sudah termasuk drone dan pilot/operator. Anda tidak perlu menyiapkan alat atau penerbang sendiri.</p>
        <div className="grid">
          {SERVICES.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
