"use client";
import { useState } from "react";
import { Mail, Send, MapPin } from "lucide-react";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const contactLinks = [
  { icon: <Mail size={18} />, label: "gautamkumarnita@gmail.com", href: "mailto:gautamkumarnita@gmail.com", accent: "var(--accent)" },
  { icon: <GithubIcon />, label: "github.com/gautam-oss", href: "https://github.com/gautam-oss", accent: "var(--accent)" },
  { icon: <LinkedinIcon />, label: "linkedin.com/in/gautam-oss", href: "https://linkedin.com/in/gautam-oss", accent: "var(--accent-2)" },
  { icon: <MapPin size={18} />, label: "Bikramganj, Bihar · Open to relocation", href: null, accent: "var(--text-muted)" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "10e2bda9-80f6-4842-b1d9-ef117ddb875f",
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p className="mono" style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: 3, marginBottom: 24 }}>06 / CONTACT</p>
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: -2, marginBottom: 24, lineHeight: 1.1 }}>
          Let&apos;s work<br /><span style={{ color: "var(--text-dim)" }}>together.</span>
        </h2>
        <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 80, maxWidth: 480 }}>
          Open to full-time engineering roles. Let&apos;s build something meaningful.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} className="contact-grid">
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactLinks.map((item, i) => (
                item.href ? (
                  <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "16px 20px", borderRadius: 8,
                      border: "1px solid var(--border)", textDecoration: "none",
                      color: "var(--text-muted)", transition: "all 0.2s", fontSize: 14,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--bg-2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = ""; }}
                  >
                    <span style={{ color: item.accent }}>{item.icon}</span>
                    {item.label}
                  </a>
                ) : (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "16px 20px", borderRadius: 8,
                    border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: 14,
                  }}>
                    <span style={{ color: item.accent }}>{item.icon}</span>
                    {item.label}
                  </div>
                )
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { key: "name", placeholder: "Your name", type: "text" },
              { key: "email", placeholder: "Your email", type: "email" },
            ].map(({ key, placeholder, type }) => (
              <input key={key} type={type} placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                style={{
                  background: "var(--bg-2)", border: "1px solid var(--border)",
                  borderRadius: 6, padding: "14px 18px",
                  color: "var(--text)", fontSize: 14, outline: "none",
                  fontFamily: "Syne, sans-serif", transition: "border-color 0.2s",
                }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")}
              />
            ))}
            <textarea placeholder="Your message" rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{
                background: "var(--bg-2)", border: "1px solid var(--border)",
                borderRadius: 6, padding: "14px 18px",
                color: "var(--text)", fontSize: 14, outline: "none",
                fontFamily: "Syne, sans-serif", resize: "vertical",
                transition: "border-color 0.2s",
              }}
              onFocus={e => (e.target.style.borderColor = "var(--accent)")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />
            <button onClick={handleSubmit} disabled={status !== "idle"}
              style={{
                background: status === "sent" ? "var(--accent-2)" : status === "error" ? "#ff4d4d" : "var(--accent)",
                color: "#000", border: "none", borderRadius: 6,
                padding: "14px 28px", fontSize: 14, fontWeight: 700,
                cursor: status !== "idle" ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "Syne, sans-serif", letterSpacing: 0.5,
                transition: "all 0.2s", opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              <Send size={15} />
              {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Failed — Try Again"}
            </button>
            <p style={{ fontSize: 12, color: "var(--text-dim)" }} className="mono">
              * Or email directly: gautamkumarnita@gmail.com
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
