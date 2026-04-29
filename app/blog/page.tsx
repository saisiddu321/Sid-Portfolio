import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Siddharth Pamidi",
  description: "Table of contents for all essays.",
};

export default async function BlogIndex() {
  const posts = await getAllPostsMeta();

  return (
    <main>
      <section className="container-reading page-intro">
        <span className="eyebrow">Writing · Table of Contents</span>
        <h1 className="h1">Essays, mostly short.</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          A quiet place to think out loud about engineering, attention, and the long way home.
          Published when I have something worth saying, and not a minute sooner.
        </p>
      </section>

      <section className="container-reading">
        <ul className="blog-list">
          {posts.map((p, i) => (
            <li key={p.slug} className="blog-entry">
              <Link href={`/blog/${p.slug}`}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p className="summary">{p.summary}</p>
                  <div className="meta">
                    <span className="tag">{p.tag}</span>
                    {new Date(p.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "2-digit" })}
                    {" · "}{p.readingMinutes} min read
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
