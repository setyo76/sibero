"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={SITE.name}>
          <span className="brand-mark" aria-hidden="true">S</span>
          {SITE.name}
        </Link>

        {/* Navigasi Desktop */}
        <nav className="nav desktop-nav" aria-label="Navigasi utama">
          <a href="#layanan">Layanan</a>
          <a href="#proyek">Proyek</a>
          <a href="#keselamatan">Keselamatan & Perizinan</a>
          <a href="#konsultasi">Konsultasi</a>
          <a href="#kontak">Kontak</a>
        </nav>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
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
