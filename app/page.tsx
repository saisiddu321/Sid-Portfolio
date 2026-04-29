import Link from "next/link";
import Image from "next/image";
import { PROJECTS, CURRENTLY, PHOTOS } from "@/data/content";
import { getLatestPosts } from "@/lib/posts";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default async function Home() {
  const latest = await getLatestPosts(3);
  const featured = PROJECTS.slice(0, 2);
  const featuredPhotos = PHOTOS.slice(0, 5);

  return (
    <main>
      <section className="container-wide hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="greeting">Building off the top of my head</div>
            <h1>
              Siddharth <em>Pamidi</em>
            </h1>
            <p className="subtitle">
              Software engineer at <a href="https://www.epic.com/" target="_blank" style={{ color: "var(--accent-600)", textDecoration: "underline", textUnderlineOffset: 3 }}>Epic Systems</a> in Madison.
              Before that I studied CS at <a href="Georgia Tech" target="_blank" style={{ color: "var(--accent-600)", textDecoration: "underline", textUnderlineOffset: 3 }}>Georgia Tech</a> and spent two years leading ML research on wireless
              signal classification. This website is where my engineering, photography, and writing
              share the same shelf.
            </p>
            <div className="meta">
              <span><span className="dot" />Madison, Wisconsin</span>
              <span>&middot;</span>
              <span>B.S. Computer Science, Georgia Tech</span>
              <span>&middot;</span>
              <a href="mailto:siddharthsai.pamidi@gmail.com" style={{ color: "var(--accent-600)" }}>siddharthsai.pamidi@gmail.com</a>
            </div>

            <div className="currently">
              <span className="label">Currently</span>
              <div className="items">
                {CURRENTLY.map((c, i) => <span key={i}>{c}</span>)}
              </div>
            </div>
          </div>

          <figure className="hero-portrait" aria-label="Portrait of Siddharth Pamidi">
            <Image
              src="/photos/siddharth-pamidi-portrait.jpg"
              alt="Siddharth Pamidi in a suit"
              fill
              priority
              sizes="(max-width: 880px) 220px, 300px"
            />
          </figure>
        </div>
      </section>

      <section className="container-reading home-section">
        <div className="section-head">
          <h2><span className="num">I.</span>Selected work</h2>
          <Link className="more-link" href="/projects">See everything &rarr;</Link>
        </div>
        <div className="project-teaser-grid">
          {featured.map((p, i) => (
            <Link key={i} href="/projects" className="project-teaser">
              <span className="eyebrow">{p.kicker}</span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="stack">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className={`chip ${i === 0 ? "sage" : "rust"}`}>{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide home-section">
        <div className="section-head" style={{ maxWidth: 720, margin: "0 auto 24px" }}>
          <h2><span className="num">II.</span>From the camera roll</h2>
          <Link className="more-link" href="/gallery">Open the gallery &rarr;</Link>
        </div>
        <div className="gallery-teaser" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {featuredPhotos.map((p) => (
            <Link key={p.id} className="tile" href="/gallery">
              <PhotoPlaceholder photo={p} showLabel={false} />
            </Link>
          ))}
        </div>
      </section>

      <section className="container-reading home-section">
        <div className="section-head">
          <h2><span className="num">III.</span>Latest writing</h2>
          <Link className="more-link" href="/blog">All essays &rarr;</Link>
        </div>
        <ul className="essay-list">
          {latest.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="title">{p.title}</span>
                  <span className="summary">{p.summary}</span>
                </span>
                <span className="meta">
                  {new Date(p.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })}
                  {" "}&middot; {p.readingMinutes} min
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
