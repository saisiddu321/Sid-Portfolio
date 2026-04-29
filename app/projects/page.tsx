import type { Metadata } from "next";
import { PROJECTS, EXPERIENCE, EDUCATION } from "@/data/content";

export const metadata: Metadata = {
  title: "Work — Siddharth Pamidi",
};

const ExtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" style={{ display: "inline-block", marginLeft: 6, verticalAlign: "middle" }}>
    <path d="M14 4h6v6M10 14l10-10M19 14v6H5V5h6" />
  </svg>
);

export default function ProjectsPage() {
  return (
    <main>
      <section className="container-reading page-intro">
        <span className="eyebrow">Work · Selected</span>
        <h1 className="h1">A shelf of projects, from research papers to small satisfying builds.</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          Some of these shipped. Some taught me something I couldn&apos;t have learned any other way.
          Listed in no particular order.
        </p>
      </section>

      <section className="container-reading">
        <ul className="projects-list">
          {PROJECTS.map((p, i) => (
            <li key={i} className="project-entry">
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <div className="body">
                <div className="kicker">{p.kicker}</div>
                <h3>{p.title}</h3>
                {p.org && <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--muted)", marginBottom: 10 }}>{p.org}</div>}
                <p>{p.summary}</p>
                <ul className="details">
                  {p.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
              <div className="stack-col">
                <span className="eyebrow">Stack</span>
                <div className="chips">
                  {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
                {p.link && (
                  <a className="ext" href={p.link.href} target="_blank" rel="noopener noreferrer">
                    {p.link.label}<ExtIcon />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="experience-block">
          <h2 className="h2"><span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", marginRight: 12, letterSpacing: "0.1em", fontWeight: 400 }}>§</span>Experience</h2>
          {EXPERIENCE.map((x, i) => (
            <div className="exp-row" key={i}>
              <div className="when">{x.when}</div>
              <div className="what">
                <div className="role">{x.role} · <span className="org">{x.org}</span></div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{x.where}</div>
                <p>{x.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-block" style={{ marginTop: 56 }}>
          <h2 className="h2"><span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", marginRight: 12, letterSpacing: "0.1em", fontWeight: 400 }}>§</span>Education</h2>
          {EDUCATION.map((x, i) => (
            <div className="exp-row" key={i}>
              <div className="when">{x.when}</div>
              <div className="what">
                <div className="role">{x.role} · <span className="org">{x.org}</span></div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{x.where}</div>
                <p>{x.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
