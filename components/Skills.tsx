"use client";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash", "C"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Django", "Flask", "React", "SQLAlchemy", "Pydantic", "Celery", "Alembic"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Elasticsearch"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS (EC2, S3, RDS, ECR)", "GitHub Actions", "Nginx", "Vercel", "Render", "Linux"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "REST APIs", "WebSockets", "GraphQL", "JWT", "Pytest", "Postman", "Swagger"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Label text="04 / SKILLS" />
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 80, lineHeight: 1.1 }}>
          My<br /><span style={{ color: "var(--text-dim)" }}>toolkit.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {skillGroups.map((group, i) => (
            <div key={group.category} style={{
              background: "var(--bg-2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: 32,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--accent)", opacity: 0.6 }}>0{i + 1}</span>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 2 }} className="mono">{group.category.toUpperCase()}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map(skill => (
                  <span key={skill} style={{
                    fontSize: 13, padding: "6px 14px",
                    background: "var(--bg-3)", border: "1px solid var(--border)",
                    borderRadius: 4, color: "var(--text)",
                    transition: "all 0.2s", cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.background = "var(--bg-3)";
                  }}
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Label({ text }: { text: string }) {
  return <p className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 3, marginBottom: 24 }}>{text}</p>;
}
