"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.3s",
      background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span className="mono" style={{ fontSize: 13, color: "var(--accent)", letterSpacing: 2, fontWeight: 500 }}>GK.DEV</span>
        <div style={{ display: "flex", gap: 40 }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 13, color: "var(--text-muted)", textDecoration: "none",
              letterSpacing: 1, transition: "color 0.2s", fontWeight: 500,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >{l}</a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", display: "none" }} className="mobile-menu-btn">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "20px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
