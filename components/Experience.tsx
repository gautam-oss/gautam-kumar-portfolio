"use client";

const experiences = [
  {
    period: "Apr 2026 – May 2026",
    duration: "Internship",
    title: "Backend Development Intern",
    org: "Syntecxhub",
    tag: "Internship",
    accent: "var(--accent)",
    bullets: [
      "Developed and maintained backend services and REST APIs supporting core application features.",
      "Contributed to debugging, code reviews, testing, and incremental feature delivery in an Agile/Scrum environment.",
      "Implemented Redis caching to reduce average database query latency by approximately 40%.",
    ],
    tags: ["REST APIs", "Relational Databases", "Redis", "Git", "Agile/Scrum"],
    certLink: null,
  },
  {
    period: "2026",
    duration: "Upskilling Program",
    title: "AI Upskilling Certificate: Hands-On Development from Model to App",
    org: "Qualcomm",
    tag: "Training",
    accent: "var(--accent-2)",
    bullets: [
      "Engineered and deployed 3 edge AI models — keyword spotting, gesture recognition, and computer vision — using Edge Impulse.",
      "Fine-tuned MobileNetV2 via transfer learning for person detection on resource-constrained embedded targets.",
    ],
    tags: ["Edge AI", "MobileNetV2", "Transfer Learning", "Edge Impulse"],
    certLink: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Label text="02 / EXPERIENCE" />
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 80, lineHeight: 1.1 }}>
          Where I&apos;ve<br /><span style={{ color: "var(--text-dim)" }}>built.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="exp-grid">
          {/* Timeline */}
          <div style={{ position: "sticky", top: 100 }} className="sticky-label">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }} className="mono">May 2026</span>
              <span style={{ fontSize: 11, color: "var(--text-dim)" }} className="mono">NIT Agartala</span>
            </div>
            <div style={{ marginTop: 24, width: 40, height: 1, background: "var(--accent)", opacity: 0.4 }} />
          </div>

          {/* Content */}
          <div>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{
                background: "var(--bg-2)", border: "1px solid var(--border)",
                borderRadius: 8, padding: 40, marginBottom: 24,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{exp.title}</h3>
                    <p style={{ fontSize: 14, color: exp.accent, fontWeight: 600 }}>{exp.org}</p>
                  </div>
                  <span style={{
                    background: "var(--accent-dim)", color: exp.accent,
                    padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                  }} className="mono">{exp.tag}</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                  {exp.bullets.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <span style={{ color: exp.accent, marginTop: 5, flexShrink: 0 }}>▸</span>
                      <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>{item}</p>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 28 }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{
                        background: "var(--bg-3)", border: "1px solid var(--border)",
                        padding: "4px 12px", borderRadius: 4, fontSize: 12, color: "var(--text-muted)",
                      }} className="mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div style={{
              background: "var(--bg-2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: 40,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>B.Tech — Electrical Engineering</h3>
                  <p style={{ fontSize: 14, color: "var(--accent-2)", fontWeight: 600 }}>NIT Agartala</p>
                </div>
                <span style={{
                  background: "rgba(71,255,184,0.08)", color: "var(--accent-2)",
                  padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                }} className="mono">May 2026</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
                Bachelor of Technology in Electrical Engineering, with a strong foundation in object-oriented programming,
                data structures and algorithms, unit testing, and Agile/Scrum development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .sticky-label { position: static !important; }
        }
      `}</style>
    </section>
  );
}

function Label({ text }: { text: string }) {
  return (
    <p className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 3, marginBottom: 24 }}>{text}</p>
  );
}