import type { Photo } from "@/data/content";

export default function PhotoPlaceholder({
  photo,
  showLabel = true,
}: {
  photo: Pick<Photo, "id" | "hue" | "light" | "place" | "src">;
  showLabel?: boolean;
}) {
  if (photo.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={photo.src} alt={photo.place} className="ph" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />;
  }
  const sat = 22;
  const bgA = `hsl(${photo.hue}, ${sat}%, ${photo.light}%)`;
  const bgB = `hsl(${(photo.hue + 20) % 360}, ${sat - 6}%, ${photo.light - 12}%)`;
  const stripe = `hsl(${photo.hue}, ${sat - 10}%, ${photo.light - 20}%)`;

  return (
    <div className="ph" style={{ background: `linear-gradient(135deg, ${bgA} 0%, ${bgB} 100%)`, overflow: "hidden" }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <linearGradient id={`g${photo.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={bgA} stopOpacity="0" />
            <stop offset="1" stopColor={stripe} stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#g${photo.id})`} />
        <line x1="0" y1={40 + (photo.id % 5) * 6} x2="100" y2={42 + (photo.id % 5) * 6} stroke={stripe} strokeOpacity="0.35" strokeWidth="0.4" />
        <circle cx={20 + (photo.id * 13) % 60} cy={25 + (photo.id * 7) % 30} r={3 + (photo.id % 3)} fill={stripe} fillOpacity="0.2" />
      </svg>
      {showLabel && <span className="ph-label">photo · {photo.place}</span>}
    </div>
  );
}
