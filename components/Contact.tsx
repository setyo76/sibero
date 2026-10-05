import { SITE } from "@/lib/data";
import { buildWaLink } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="kontak" className="safety">
      <div className="wrap">
        <h2>Kontak</h2>
        <p>Kami membalas lewat WhatsApp paling cepat.</p>
        <p style={{ color: "var(--text)" }}>
          WhatsApp: <a href={buildWaLink()} target="_blank" rel="noopener noreferrer">{SITE.whatsappDisplay}</a><br />
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
          Instagram: <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener noreferrer">@{SITE.instagram}</a>
        </p>
      </div>
    </section>
  );
}
