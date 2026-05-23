export default function Footer() {
  return (
    <footer style={{
      padding: "40px 32px",
      borderTop: "1px solid var(--border)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
    }}>
      <span className="mono" style={{ fontSize: 12, color: "var(--text-dim)" }}>
        © 2026 Gautam Kumar — Built with Next.js & deployed on Vercel
      </span>
      <span className="mono" style={{ fontSize: 12, color: "var(--text-dim)" }}>
        gautamkumarnita@gmail.com
      </span>
    </footer>
  );
}
