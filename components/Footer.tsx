import { SITE } from "@/lib/data";
import { buildWaLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Jasa sewa drone dan pilot, Indonesia</span>
        </div>
      </footer>
      <a className="btn fab" href={buildWaLink("Halo Sibero, saya ingin bertanya.")} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp">
        WhatsApp
      </a>
    </>
  );
}
