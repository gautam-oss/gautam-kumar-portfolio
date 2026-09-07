import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gautam Kumar — Backend Engineer",
  description: "Backend Engineer building scalable services with Java, Spring Boot, Python, FastAPI, microservices, and cloud-native technologies.",
  keywords: ["Gautam Kumar", "Backend Engineer", "Spring Boot", "FastAPI", "Microservices", "NIT Agartala"],
  authors: [{ name: "Gautam Kumar" }],
  openGraph: {
    title: "Gautam Kumar — Backend Engineer",
    description: "Backend Engineer building scalable distributed systems with Java, Python, and cloud-native technologies.",
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
