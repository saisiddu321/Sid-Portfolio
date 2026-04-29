# Siddharth Pamidi — Personal site

A cozy, book-like portfolio: home, about, projects, gallery, and a writing section.
Built with Next.js 15 (App Router), Tailwind 4, and MDX blog posts.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Edit content

Almost everything is data-driven:

| What                  | File                                   |
|-----------------------|----------------------------------------|
| Projects              | `data/content.ts` → `PROJECTS`         |
| Experience, Education | `data/content.ts` → `EXPERIENCE`, `EDUCATION` |
| "Currently" strip     | `data/content.ts` → `CURRENTLY`        |
| Photos                | `data/content.ts` → `PHOTOS` (+ images in `public/photos/`) |
| Blog posts            | `content/posts/*.mdx` (frontmatter: title, date, summary, tag, published) |
| Hero copy             | `app/page.tsx`                         |
| About body            | `app/about/page.tsx`                   |
| Colors / fonts        | `app/globals.css` (CSS custom properties at the top) |

## Add real photos

1. Drop images into `public/photos/` (e.g. `public/photos/madison-snow.jpg`).
2. In `data/content.ts`, set `src: "/photos/madison-snow.jpg"` on that `PHOTOS` entry.
   `PhotoPlaceholder` uses the real image when `src` is present, and falls back to the
   warm SVG placeholder otherwise.

## Write a blog post

Create `content/posts/my-post.mdx`:

```md
---
title: "Title of the post"
date: "2026-04-20"
summary: "One-line summary."
tag: "Essay"
published: true
---

Write the post in Markdown / MDX here.
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<you>/sid-portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and import the repo.
3. Set `NEXT_PUBLIC_SITE_URL` to your deployed URL (e.g. `https://siddharthpamidi.com`)
   in Vercel's Environment Variables — this feeds the sitemap and RSS feed.
4. Done. Pushes to `main` auto-deploy.

## Add a custom domain

In Vercel → Project → Settings → Domains, add your domain and follow the DNS
instructions (usually one `A` or `CNAME` record).

## Structure

```
app/
  layout.tsx           # shell, header, footer, fonts, paper grain
  globals.css          # all cozy styles
  page.tsx             # Home
  about/page.tsx       # About
  projects/page.tsx    # Work
  gallery/page.tsx     # Gallery (server) + GalleryClient (client)
  blog/page.tsx        # TOC
  blog/[slug]/page.tsx # Individual post
  sitemap.ts           # /sitemap.xml
  rss.xml/route.ts     # /rss.xml
components/
  PhotoPlaceholder.tsx
  GalleryClient.tsx
content/posts/         # MDX posts
data/content.ts        # Projects, experience, education, photos
lib/posts.ts           # MDX loader
public/photos/         # Your real images
```

— Sid
