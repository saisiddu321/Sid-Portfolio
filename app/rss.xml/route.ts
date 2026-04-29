import { NextResponse } from "next/server";
import { getAllPostsMeta } from "@/lib/posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function GET() {
  const posts = await getAllPostsMeta();

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`;
      const pubDate = new Date(p.date).toUTCString();
      const description = p.summary || "";
      return `
      <item>
        <title><![CDATA[${escapeCdata(p.title)}]]></title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${pubDate}</pubDate>
        <description><![CDATA[${escapeCdata(description)}]]></description>
      </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Siddharth Pamidi — Writing</title>
      <link>${SITE_URL}</link>
      <description>Essays on engineering, attention, and the long way home.</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

function escapeCdata(str: string) {
  return str.replace(/\]\]>/g, "]]&gt;");
}
