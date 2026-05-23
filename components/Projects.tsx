"use client";

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const projects = [
  {
    num: "01",
    title: "PyMart",
    subtitle: "Full-Stack E-commerce Platform",
    description: "Async multi-vendor marketplace REST API with JWT token rotation, RBAC, and race condition prevention via SELECT FOR UPDATE. Razorpay payment integration with HMAC-SHA256 webhook verification. Elasticsearch full-text product search with relevance scoring.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React", "Docker", "AWS S3", "Elasticsearch"],
    github: "https://github.com/gautam-oss/PyMart",
    highlights: ["105 pytest-asyncio tests >80% coverage", "5-service Docker Compose", "Razorpay + webhook idempotency"],
    accent: "var(--accent)",
  },
  {
    num: "02",
    title: "Distributed Task Queue",
    subtitle: "Internship Project @ Syntecxhub",
    description: "Priority-based task routing across high/default/low queues using Celery + Redis + FastAPI. Real-time monitoring dashboard with WebSocket live stats, Chart.js throughput graphs, and a worker inspector with one-click task revocation.",
    tags: ["Celery", "FastAPI", "Redis", "WebSockets", "Docker", "Upstash"],
    github: "https://github.com/gautam-oss/distributed-task-queue",
    highlights: ["Exponential backoff retries", "6-service Docker Compose", "Deployed on Render"],
    accent: "var(--accent-2)",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 3, marginBottom: 24 }}>03 / PROJECTS</p>
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 80, lineHeight: 1.1 }}>
          Things I&apos;ve<br /><span style={{ color: "var(--text-dim)" }}>built.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((p) => (
            <div key={p.num} style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              borderRadius: 12, padding: 48, transition: "all 0.3s",
              position: "relative", overflow: "hidden",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
            >
              <span style={{
                position: "absolute", right: 40, top: 20,
                fontSize: 120, fontWeight: 900, color: "rgba(255,255,255,0.02)",
                lineHeight: 1, userSelect: "none", pointerEvents: "none",
              }}>{p.num}</span>

              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "flex-start" }} className="proj-head">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span className="mono" style={{ fontSize: 12, color: p.accent, letterSpacing: 2 }}>{p.num}</span>
                    <div style={{ width: 24, height: 1, background: p.accent, opacity: 0.6 }} />
                  </div>
                  <h3 style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1, marginBottom: 4 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: p.accent, fontWeight: 600, marginBottom: 20 }}>{p.subtitle}</p>
                  <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 640, marginBottom: 28 }}>{p.description}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                    {p.highlights.map(h => (
                      <span key={h} style={{
                        fontSize: 12, color: "var(--text-muted)",
                        padding: "6px 12px", borderRadius: 4,
                        background: "var(--bg-3)", border: "1px solid var(--border)",
                        display: "flex", alignItems: "center", gap: 6,
                      }} className="mono">
                        <span style={{ color: p.accent }}>✓</span> {h}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 12, background: "var(--bg-3)", border: "1px solid var(--border)",
                        padding: "3px 10px", borderRadius: 100, color: "var(--text-muted)",
                      }} className="mono">{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                  <a href={p.github} target="_blank" style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 20px", borderRadius: 4, border: "1px solid var(--border)",
                    color: "var(--text-muted)", textDecoration: "none", fontSize: 13, fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--text)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                  >
                    <GithubIcon /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .proj-head { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
