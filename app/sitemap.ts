import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsMeta();
  const postUrls = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [
    { url: `${SITE_URL}/`, lastModified: new Date() },
    { url: `${SITE_URL}/about`, lastModified: new Date() },
    { url: `${SITE_URL}/projects`, lastModified: new Date() },
    { url: `${SITE_URL}/gallery`, lastModified: new Date() },
    { url: `${SITE_URL}/blog`, lastModified: posts[0] ? new Date(posts[0].date) : new Date() },
    ...postUrls,
  ];
}
