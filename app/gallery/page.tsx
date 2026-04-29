import type { Metadata } from "next";
import { PHOTOS } from "@/data/content";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Siddharth Pamidi",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="container-reading page-intro">
        <span className="eyebrow">Gallery · {PHOTOS.length} photographs</span>
        <h1 className="h1">A running journal in pictures.</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          Aesthethics that bring peace. Pictures that inspire. Capturing the moment and the
          emotions.
        </p>
      </section>

      <section className="container-wide">
        <GalleryClient />
      </section>
    </main>
  );
}
