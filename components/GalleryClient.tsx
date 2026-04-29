"use client";

import { useState, useEffect, useMemo } from "react";
import { PHOTOS, PHOTO_CATEGORIES, type Photo } from "@/data/content";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function GalleryClient() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") {
        setLightbox((p) => {
          if (!p) return p;
          const i = filtered.findIndex((x) => x.id === p.id);
          return filtered[(i + 1) % filtered.length];
        });
      } else if (e.key === "ArrowLeft") {
        setLightbox((p) => {
          if (!p) return p;
          const i = filtered.findIndex((x) => x.id === p.id);
          return filtered[(i - 1 + filtered.length) % filtered.length];
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered]);

  return (
    <>
      <div className="gallery-tools">
        <div className="gallery-filters">
          {PHOTO_CATEGORIES.map((c) => (
            <button key={c} className={c === filter ? "active" : ""} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="gallery-count">
          Showing {filtered.length} of {PHOTOS.length}
        </div>
      </div>

      <div className="gallery-grid">
        {filtered.map((p) => (
          <div key={p.id} className={`photo-card ${p.shape || ""}`} onClick={() => setLightbox(p)}>
            <div className="photo"><PhotoPlaceholder photo={p} /></div>
            <div className="caption">
              <span className="title">{p.title}</span>
              <span className="meta">{p.place} · {p.date}</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="close-btn" onClick={() => setLightbox(null)}>Close ✕</button>
          <button className="nav-btn prev" onClick={(e) => {
            e.stopPropagation();
            const i = filtered.findIndex((x) => x.id === lightbox.id);
            setLightbox(filtered[(i - 1 + filtered.length) % filtered.length]);
          }}>‹</button>
          <div className="frame" onClick={(e) => e.stopPropagation()}>
            <div className="photo"><PhotoPlaceholder photo={lightbox} /></div>
            <div className="caption">
              <span className="title">{lightbox.title}</span>
              <span className="meta">{lightbox.place} · {lightbox.date} · {lightbox.category}</span>
            </div>
          </div>
          <button className="nav-btn next" onClick={(e) => {
            e.stopPropagation();
            const i = filtered.findIndex((x) => x.id === lightbox.id);
            setLightbox(filtered[(i + 1) % filtered.length]);
          }}>›</button>
        </div>
      )}
    </>
  );
}
