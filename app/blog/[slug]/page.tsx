import type { Metadata } from "next";
import Link from "next/link";
import { getPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.frontmatter.title} — Siddharth Pamidi`,
    description: post.frontmatter.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="container-reading" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <nav style={{ marginBottom: 32, fontSize: 14 }}>
        <Link href="/blog" style={{ color: "var(--accent-600)" }}>← All essays</Link>
      </nav>

      <article className="prose" style={{ fontFamily: "var(--font-serif)" }}>
        <h1 style={{ fontSize: 36, fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.15, margin: "0 0 8px" }}>
          {post.frontmatter.title}
        </h1>
        <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 0, fontFamily: "var(--font-sans)" }}>
          {new Date(post.frontmatter.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })}
          {" · "}{post.readingMinutes} min read
        </p>
        {post.content}
      </article>
    </main>
  );
}
