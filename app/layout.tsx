import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gautam Kumar — Backend Engineer",
  description: "Backend & Full Stack Engineer. Building scalable systems with Python, FastAPI, Docker, and more.",
  keywords: ["Gautam Kumar", "Backend Developer", "FastAPI", "Python", "NIT Agartala"],
  authors: [{ name: "Gautam Kumar" }],
  openGraph: {
    title: "Gautam Kumar — Backend Engineer",
    description: "Backend & Full Stack Engineer building scalable distributed systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
