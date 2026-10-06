"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={SITE.name} onClick={closeMenu}>
          {/* Logo file lives in public/sibero-logo.png */}
          <Image
            src="/sibero-logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="nav desktop-nav" aria-label="Navigasi utama">
          <a href="#layanan">Layanan</a>
          <a href="#proyek">Proyek</a>
          <a href="#keselamatan">Keselamatan & Perizinan</a>
          <a href="#konsultasi">Konsultasi</a>
          <a href="#kontak">Kontak</a>
        </nav>

        {/* Hamburger button for mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="mobile-nav-dropdown">
          <a href="#layanan" onClick={closeMenu}>Layanan</a>
          <a href="#proyek" onClick={closeMenu}>Proyek</a>
          <a href="#keselamatan" onClick={closeMenu}>Keselamatan & Perizinan</a>
          <a href="#konsultasi" onClick={closeMenu}>Konsultasi</a>
          <a href="#kontak" onClick={closeMenu}>Kontak</a>
        </div>
      )}
    </header>
  );
}