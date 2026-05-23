"use client";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Backend Development Internship",
    issuer: "Syntecxhub",
    date: "May 2026",
    desc: "Successfully completed a 1-month backend development internship (Apr–May 2026) with active participation and unwavering dedication.",
    color: "var(--accent)",
  },
  {
    title: "AI-Driven RNA Therapeutics: From Data to Drug Design",
    issuer: "NIT Agartala — Dept. of CSE & Bio Engineering",
    date: "Mar 2026",
    desc: "5-day intensive workshop on AI applications in RNA therapeutics, drug design, and bioinformatics (23–27 March 2026).",
    color: "var(--accent-2)",
  },
  {
    title: "Docker Certified Associate (DCA)",
    issuer: "Docker Inc.",
    date: "2025",
    desc: "Industry-recognized certification covering container management, Docker Compose, networking, security, and orchestration.",
    color: "#2496ED",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Label text="05 / CERTIFICATIONS" />
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 80, lineHeight: 1.1 }}>
          Credentials<br /><span style={{ color: "var(--text-dim)" }}>& awards.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {certs.map((cert, i) => (
            <div key={i} style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              borderRadius: 12, padding: 36,
              transition: "all 0.3s", position: "relative", overflow: "hidden",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
            >
              {/* Color bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: cert.color, opacity: 0.6 }} />

              <Award size={28} style={{ color: cert.color, marginBottom: 20 }} />

              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{cert.title}</h3>
              <p style={{ fontSize: 13, color: cert.color, fontWeight: 600, marginBottom: 16 }}>{cert.issuer}</p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>{cert.desc}</p>
              <span className="mono" style={{ fontSize: 12, color: "var(--text-dim)" }}>{cert.date}</span>
            </div>
          ))}
        </div>

        {/* Best Project Award Banner */}
        <div style={{
          marginTop: 32,
          background: "linear-gradient(135deg, rgba(232,255,71,0.05), rgba(71,255,184,0.05))",
          border: "1px solid rgba(232,255,71,0.2)",
          borderRadius: 12, padding: 40,
          display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 48 }}>🏆</span>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Best Final Year Project Award</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
              "Non-Invasive Glucose Monitoring" — Department of Electrical Engineering, NIT Agartala · 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ text }: { text: string }) {
  return <p className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 3, marginBottom: 24 }}>{text}</p>;
}
