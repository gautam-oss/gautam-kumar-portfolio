"use client";
import { Mail, ArrowDown } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      padding: "120px 32px 80px",
    }} className="grid-bg">
      <div style={{
        position: "absolute", top: "20%", right: "10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(232,255,71,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300,
        background: "radial-gradient(circle, rgba(71,255,184,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 64 }} className="hero-inner">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--bg-3)", border: "1px solid var(--border)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 48,
            animation: "fadeUp 0.6s ease both",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent-2)", display: "inline-block", boxShadow: "0 0 8px var(--accent-2)" }} />
            <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: 1 }}>Available for opportunities</span>
          </div>

          <div style={{ animation: "fadeUp 0.6s 0.1s ease both", opacity: 0 }}>
            <p className="mono" style={{ fontSize: 13, color: "var(--accent)", letterSpacing: 3, marginBottom: 20, fontWeight: 400 }}>GAUTAM KUMAR</p>
            <h1 style={{
              fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 800,
              lineHeight: 1.0, letterSpacing: -3, marginBottom: 32, color: "var(--text)",
            }}>
              Backend<br />
              <span style={{ color: "var(--text-dim)" }}>Engineer.</span>
            </h1>
          </div>

          <div style={{ animation: "fadeUp 0.6s 0.2s ease both", opacity: 0 }}>
            <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.7, marginBottom: 48, fontWeight: 400 }}>
              2026 Electrical Engineering graduate from <span style={{ color: "var(--text)" }}>NIT Agartala</span>. I build distributed systems, ship APIs, and own the stack end-to-end — FastAPI, Python, Docker, PostgreSQL, Redis.
            </p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.6s 0.3s ease both", opacity: 0 }}>
            <a href="#contact" style={{
              background: "var(--accent)", color: "#000",
              padding: "14px 32px", borderRadius: 4,
              fontWeight: 700, fontSize: 14, textDecoration: "none",
              letterSpacing: 0.5, transition: "all 0.2s",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,255,71,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <Mail size={16} /> Get in touch
            </a>
            <a href="https://github.com/gautam-oss" target="_blank" style={{
              background: "transparent", color: "var(--text)",
              padding: "14px 32px", borderRadius: 4, border: "1px solid var(--border)",
              fontWeight: 600, fontSize: 14, textDecoration: "none",
              letterSpacing: 0.5, transition: "all 0.2s",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/gautam-oss" target="_blank" style={{
              background: "transparent", color: "var(--text-muted)",
              padding: "14px", borderRadius: 4, border: "1px solid var(--border)",
              transition: "all 0.2s", display: "inline-flex", alignItems: "center",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        <div style={{ flexShrink: 0, animation: "fadeUp 0.6s 0.2s ease both", opacity: 0 }} className="hero-avatar">
          <div style={{ position: "relative" }}>
            <div style={{
              width: 300, height: 300, borderRadius: "50%",
              border: "1px solid var(--border)",
              overflow: "hidden", position: "relative",
              boxShadow: "0 0 80px rgba(232,255,71,0.06)",
            }}>
              <img src="/avatar.jpg" alt="Gautam Kumar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute", inset: -1, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(232,255,71,0.15) 0%, transparent 50%)",
              pointerEvents: "none",
            }} />
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          animation: "float 2s ease-in-out infinite",
        }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 2 }}>SCROLL</span>
          <ArrowDown size={14} style={{ color: "var(--text-dim)" }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column-reverse !important; gap: 40px !important; }
          .hero-avatar div div { width: 180px !important; height: 180px !important; }
        }
      `}</style>
    </section>
  );
}
