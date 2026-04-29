import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { compileMDX } from "next-mdx-remote/rsc";

export type PostFrontmatter = {
  title: string;
  date: string;
  summary?: string;
  tag?: string;
  published?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: React.ReactNode;
  readingMinutes: number;
};

const postsDir = path.join(process.cwd(), "content", "posts");

export async function getPostSlugs(): Promise<string[]> {
  const entries = await fs.readdir(postsDir);
  return entries.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { content: rawContent } = matter(source);
  const { minutes } = readingTime(rawContent);

  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
      },
    },
  });

  return { slug, frontmatter, content, readingMinutes: Math.max(1, Math.round(minutes)) };
}

export async function getAllPostsMeta() {
  const slugs = await getPostSlugs();
  const metas = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(postsDir, `${slug}.mdx`);
      const source = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(source);
      const { minutes } = readingTime(content);
      const fm = data as PostFrontmatter;
      return {
        slug,
        title: fm.title,
        date: fm.date,
        summary: fm.summary ?? "",
        tag: fm.tag ?? "Essay",
        published: fm.published ?? true,
        readingMinutes: Math.max(1, Math.round(minutes)),
      };
    })
  );
  return metas.filter((m) => m.published).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getLatestPosts(count = 3) {
  const all = await getAllPostsMeta();
  return all.slice(0, count);
}
