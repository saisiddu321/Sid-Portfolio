import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Source_Serif_4, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddharth Pamidi — Engineer, Writer, Wanderer",
  description:
    "Software engineer at Epic Systems. Photography, writing, and projects — a portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${jetbrains.variable} ${caveat.variable} antialiased`}
      >
        {/* paper grain */}
        <svg className="grain" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <filter id="paperNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0.17  0 0 0 0 0.17  0 0 0 0 0.17  0 0 0 0.45 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paperNoise)" />
        </svg>

        <div style={{ position: "relative", zIndex: 2 }}>
          <header className="site-header">
            <div className="header-inner">
              <Link href="/" className="brand">Sid Pamidi</Link>
              <nav className="primary">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Work</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/blog">Writing</Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="site-footer">
            <div className="footer-inner">
              <div>
                © {new Date().getFullYear()} Siddharth Pamidi · Madison, WI
                <div style={{ fontFamily: "var(--font-hand)", color: "var(--accent-600)", fontSize: 20, marginTop: 6 }}>
                  — thanks for reading.
                </div>
              </div>
              <div className="links">
                <a href="mailto:siddharthsai.pamidi@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/siddharth-pamidi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://ieeexplore.ieee.org/document/10539599" target="_blank" rel="noopener noreferrer">IEEE Paper</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
