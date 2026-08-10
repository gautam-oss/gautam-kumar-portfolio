"use client";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart USA (via Forage)",
    date: "2026",
    desc: "Engineered a custom 2k-ary max heap in Java for priority insertion/extraction; designed database schemas and automated data-preprocessing pipelines for enterprise inventory datasets.",
    color: "var(--accent)",
  },
  {
    title: "AI Upskilling: Hands-On Development from Model to App",
    issuer: "Qualcomm",
    date: "2026",
    desc: "Engineered and deployed 3 edge AI models (keyword spotting, gesture recognition, computer vision) using Edge Impulse; fine-tuned MobileNetV2 via transfer learning for embedded targets.",
    color: "var(--accent-2)",
  },
];

const coursework = [
  "Building Event-Driven Applications in Go",
  "Kubernetes: Microservices",
  "Advanced SQL for Application Development",
  "Advanced RAG Applications with Vector Databases",
  "Migrating from REST to GraphQL",
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Label text="05 / CERTIFICATIONS" />
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 80, lineHeight: 1.1 }}>
          Training<br /><span style={{ color: "var(--text-dim)" }}>& coursework.</span>
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

        {/* Additional Coursework Banner */}
        <div style={{
          marginTop: 32,
          background: "linear-gradient(135deg, rgba(232,255,71,0.05), rgba(71,255,184,0.05))",
          border: "1px solid rgba(232,255,71,0.2)",
          borderRadius: 12, padding: 40,
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Additional Coursework</h3>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {coursework.map(c => (
              <span key={c} style={{
                fontSize: 13, padding: "8px 16px",
                background: "var(--bg-3)", border: "1px solid var(--border)",
                borderRadius: 100, color: "var(--text-muted)",
              }} className="mono">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ text }: { text: string }) {
  return <p className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 3, marginBottom: 24 }}>{text}</p>;
}