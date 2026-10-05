"use client";

import { useState } from "react";
import { CATEGORIES, PROJECTS, type Category } from "@/lib/data";

export default function ProjectGrid() {
  const [active, setActive] = useState<Category | "Semua">("Semua");
  const list = active === "Semua" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="proyek">
      <div className="wrap">
        <h2>Proyek yang pernah dikerjakan</h2>
        <p>Pekerjaan untuk perusahaan, lembaga, dan produksi media di berbagai daerah. Nama klien tersedia atas permintaan.</p>

        <div className="filters" role="group" aria-label="Filter kategori proyek">
          {(["Semua", ...CATEGORIES] as const).map((c) => (
            <button key={c} className="chip" aria-pressed={active === c} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid">
          {list.map((p) => (
            <article className="card project" key={p.id}>
              <div className="thumb">
                {p.image ? <img src={p.image} alt={`${p.title}, ${p.location}`} loading="lazy" /> : <span>Foto menyusul</span>}
              </div>
              <div className="body">
                <div className="loc">{p.location}</div>
                <h3>{p.title}</h3>
                {p.note && <p>{p.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
