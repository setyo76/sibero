import { SITE } from "@/lib/data";
import { buildWaLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          {/* Left column: text and actions */}
          <div className="left-hero">
            <h1>Sewa drone,<br />lengkap dengan pilotnya.</h1>
            <p className="lead">
              Dokumentasi aerial untuk event, industri, infrastruktur, televisi, dan film. Anda tentukan lokasi dan hasil
              yang dibutuhkan, kami yang menerbangkan dan merekam.
            </p>
            <div className="hero-actions">
              {/* Primary action: jumps to the AI consultant section (id="konsultasi") */}
              <a className="btn" href="#konsultasi">Ceritakan kebutuhan Anda</a>
              <a
                className="btn ghost"
                href={buildWaLink("Halo Sibero, saya ingin menanyakan sewa drone dan pilot.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya via WhatsApp
              </a>
              <a className="btn ghost" href="#proyek">Lihat proyek</a>
            </div>
            <div className="hero-years">
              <strong>{SITE.years}</strong>
              <span>tahun fokus pada dokumentasi aerial</span>
            </div>
          </div>

          {/* Right column: vertical video with cinematic glow */}
          <div className="right-hero">
            <div className="video-glow-wrapper">
              <div className="video-container">
                <video autoPlay loop muted playsInline className="hero-video">
                  <source src="/fun-run.mp4" type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}