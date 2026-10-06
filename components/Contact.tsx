import { PROJECTS, SITE } from "@/lib/data";
import { buildWaLink } from "@/lib/whatsapp";
import QuoteTicker, { type TickerItem } from "@/components/QuoteTicker";

// Only list facts you can stand behind. Keep these in sync with the portfolio.
const STRENGTHS = [
  {
    title: "12 tahun fokus pada aerial",
    text: "Dokumentasi udara adalah fokus kerja kami, bukan layanan tambahan.",
  },
  {
    title: "Dipercaya organisasi besar",
    text: "Pernah mengerjakan proyek untuk perusahaan nasional, lembaga internasional, dan produksi media.",
  },
  {
    title: "Satu tim, banyak kebutuhan",
    text: "Dari event massa dan industri berat sampai film dan televisi, dengan standar kerja yang sama.",
  },
];

// ADD ONLY REAL TESTIMONIALS, with the client's consent. Example shape:
// { quote: "Hasilnya rapi dan tepat waktu.", name: "Manajer Komunikasi", role: "perusahaan nasional" }
// While this is empty, the ticker shows real past projects instead.
const TESTIMONIALS: TickerItem[] = [];

export default function Contact() {
  const hasTestimonials = TESTIMONIALS.length > 0;
  const feed: TickerItem[] = hasTestimonials
    ? TESTIMONIALS
    : PROJECTS.slice(0, 10).map((p) => ({ quote: p.title, name: p.location, role: p.category }));

  return (
    <section id="kontak" className="safety">
      <div className="wrap">
        <div className="contact-grid">
          {/* Left: contact details */}
          <div className="contact-main">
            <h2>Kontak</h2>
            <p>Kami membalas lewat WhatsApp paling cepat.</p>

            <a className="btn" href={buildWaLink()} target="_blank" rel="noopener noreferrer">
              Chat via WhatsApp
            </a>

            <dl className="contact-list">
              <div>
                <dt>WhatsApp</dt>
                <dd><a href={buildWaLink()} target="_blank" rel="noopener noreferrer">{SITE.whatsappDisplay}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener noreferrer">
                    @{SITE.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: why Sibero, plus a one-card-at-a-time ticker */}
          <div className="contact-trust">
            <h3 className="trust-title">Mengapa Sibero</h3>
            <ul className="strengths">
              {STRENGTHS.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>

            <h4 className="ticker-title">{hasTestimonials ? "Kata klien" : "Jejak proyek kami"}</h4>
            <QuoteTicker items={feed} />
          </div>
        </div>
      </div>
    </section>
  );
}