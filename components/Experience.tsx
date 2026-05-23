"use client";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Label text="02 / EXPERIENCE" />
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 80, lineHeight: 1.1 }}>
          Where I've<br /><span style={{ color: "var(--text-dim)" }}>worked.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="exp-grid">
          {/* Timeline */}
          <div style={{ position: "sticky", top: 100 }} className="sticky-label">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }} className="mono">04/2026 – 05/2026</span>
              <span style={{ fontSize: 11, color: "var(--text-dim)" }} className="mono">1 month</span>
            </div>
            <div style={{ marginTop: 24, width: 40, height: 1, background: "var(--accent)", opacity: 0.4 }} />
          </div>

          {/* Content */}
          <div>
            <div style={{
              background: "var(--bg-2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: 40, marginBottom: 24,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Backend Developer</h3>
                  <p style={{ fontSize: 14, color: "var(--accent)", fontWeight: 600 }}>Syntecxhub</p>
                </div>
                <span style={{
                  background: "var(--accent-dim)", color: "var(--accent)",
                  padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                }} className="mono">Remote · Internship</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Engineered a distributed task queue system using Celery, Redis, and FastAPI with priority-based routing (high/default/low queues), concurrent execution, and exponential backoff retry logic.",
                  "Built a real-time monitoring dashboard with WebSocket-driven live stats, Chart.js throughput visualization, and a Celery worker inspector with one-click task revocation.",
                  "Containerized and deployed a 6-service application using Docker Compose locally and Docker on Render cloud, integrating Upstash Redis (TLS/SSL) as a managed broker.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginTop: 5, flexShrink: 0 }}>▸</span>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>{item}</p>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 28 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["FastAPI", "Celery", "Redis", "Docker", "WebSockets"].map(t => (
                    <span key={t} style={{
                      background: "var(--bg-3)", border: "1px solid var(--border)",
                      padding: "4px 12px", borderRadius: 4, fontSize: 12, color: "var(--text-muted)",
                    }} className="mono">{t}</span>
                  ))}
                </div>
                <a href="https://drive.google.com/file/d/1a6N1xMBv0PVAzM2z-OtS-fRMGyMnuWln/view?usp=sharing"
                  target="_blank"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "8px 18px", borderRadius: 4, fontSize: 12, fontWeight: 600,
                    border: "1px solid var(--accent)", color: "var(--accent)",
                    textDecoration: "none", transition: "all 0.2s",
                    background: "var(--accent-dim)",
                  }}
                  className="mono"
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#000"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--accent-dim)"; e.currentTarget.style.color = "var(--accent)"; }}
                >
                  ↗ View Certificate
                </a>
              </div>
            </div>

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
                }} className="mono">2022 – 2026</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
                🏆 <strong style={{ color: "var(--text)" }}>Best Final Year Project Award</strong> — "Non-Invasive Glucose Monitoring", Dept. of EE.
                Vice-President of SPIC MACAY Heritage Club, led 20+ member team across cultural initiatives.
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
