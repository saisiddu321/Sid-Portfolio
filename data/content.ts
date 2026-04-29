// Shared content — edit anything here and it flows to the site.

export const PROFILE = {
  name: "Siddharth Pamidi",
  shortName: "Sid",
  role: "Software Engineer",
  company: "Epic Systems",
  location: "Madison, WI",
  email: "siddharthsai.pamidi@gmail.com",
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/siddharth-pamidi/",
    paper: "https://ieeexplore.ieee.org/document/10539599",
  },
};

export const CURRENTLY = [
  "climbing at the local gym",
  "reading the courage to be disliked",
  "learning to crochet",
  "enjoying the scenery",
  "playing pickleball",
];

export type Project = {
  kicker: string;
  title: string;
  org?: string;
  summary: string;
  details: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const PROJECTS: Project[] = [
  {
    kicker: "Research · IEEE WF-IOT 2023",
    title: "Near real-time wireless signal classification",
    org: "Intelligent Digital Communications Lab · Georgia Tech",
    summary:
      "Led an ML team building a system that identifies and localizes wireless users in noisy RF environments. Trained Vision Transformers and Faster R-CNN on challenging spectrograms; synthesized a compact network onto an FPGA for real-time inference.",
    details: [
      "mIoU 65–75% on noisy datasets",
      "Trained on PACE-ICE supercomputing cluster",
      "Co-authored paper accepted at IEEE WF-IOT 2023",
    ],
    stack: ["PyTorch", "ViT", "Faster R-CNN", "FPGA", "Python"],
    link: { label: "Read the paper", href: "https://ieeexplore.ieee.org/document/10539599" },
  },
  {
    kicker: "Personal · Quant",
    title: "Stocks trading with ML",
    summary:
      "An LSTM that reads past price behavior and emits buy/sell signals, paired with a Black-Scholes based volatility forecaster. The interesting part wasn't the model — it was the backtesting harness that kept me honest.",
    details: [
      "LSTM for directional signals on OHLCV data",
      "Black-Scholes implied volatility forecasting",
      "Walk-forward backtests for validation",
    ],
    stack: ["Python", "NumPy", "PyTorch"],
  },
  {
    kicker: "Personal · Computer Vision",
    title: "Artistic style transfer for video",
    summary:
      "VGG-19 perceptual features plus a temporal-consistency loss, wrapped in a GAN-ish training loop. Stylized UCF-101 clips without the flicker that ruins most naive approaches.",
    details: [
      "Perceptual + temporal loss on UCF-101",
      "Trained against WikiArt style corpus",
      "Smooth frame-to-frame transitions",
    ],
    stack: ["PyTorch", "VGG-19", "GAN"],
  },
  {
    kicker: "Personal · Systems",
    title: "In-memory relational database",
    summary:
      "A small SQL engine written in Java. Clean custom grammar using ANTLR, a query planner, and a new respect for join algorithms.",
    details: [
      "Custom SQL grammar via ANTLR",
      "In-memory storage with indexes",
      "Select, join, group-by, aggregates",
    ],
    stack: ["Java", "ANTLR"],
  },
  {
    kicker: "Personal · ML",
    title: "Diabetes diagnosis models",
    summary:
      "A semester project that grew legs. Compared logistic regression and neural nets, then implemented a from-scratch EM-based semi-supervised learner that leverages unlabeled data.",
    details: [
      "EM-based semi-supervised training",
      "Compared against baselines on public dataset",
      "Careful cross-validation",
    ],
    stack: ["PyTorch", "scikit-learn", "Python"],
  },
];

export type Experience = {
  when: string;
  role: string;
  org: string;
  where: string;
  note: string;
};

export const EXPERIENCE: Experience[] = [
  {
    when: "Mar 2025 — present",
    role: "Software Engineer",
    org: "Epic Systems",
    where: "Madison, WI",
    note: "Building pharmacy workflows — stockouts, slow-movers, fast-movers — that help pharmacists make fewer small, expensive mistakes. Certified in Willow Inventory and Willow Inpatient.",
  },
  {
    when: "Jan 2023 — Dec 2024",
    role: "Undergraduate Researcher · ML Team Lead",
    org: "Intelligent Digital Communications Lab",
    where: "Georgia Tech",
    note: "Led a small ML team on wireless signal classification. Shipped an FPGA-deployed network and a peer-reviewed paper.",
  },
  {
    when: "Jan 2022 — May 2022",
    role: "Software Engineering Intern",
    org: "Wharf Street Strategies",
    where: "Remote",
    note: "Flask + MongoDB backend for an online wallet. Shipped REST services and learned what production actually means.",
  },
];

export const EDUCATION: Experience[] = [
  {
    when: "2022 — 2024",
    role: "B.S. Computer Science",
    org: "Georgia Institute of Technology",
    where: "Intelligence + Modeling & Simulation concentration",
    note: "Dean's List · Zell Miller Scholarship. Coursework in ML, deep learning, computer vision, numerical analysis.",
  },
];

export type Photo = {
  id: number;
  title: string;
  category: "Landscape" | "Street" | "Portrait" | "Travel" | "Studies";
  place: string;
  date: string;
  shape?: "tall" | "wide" | "square";
  hue: number;
  light: number;
  // Optionally: src: string  — drop a real image in /public/photos and reference it here.
  src?: string;
};

export const PHOTO_CATEGORIES = ["All", "Landscape", "Street", "Portrait", "Travel", "Studies"] as const;

export const PHOTOS: Photo[] = [
  { id: 1, title: "Senso-ji, the five-storied pagoda", category: "Travel",    place: "Asakusa, Tokyo",          date: "2026", shape: "tall",   hue: 8,   light: 62, src: "/photos/senso-ji-pagoda.jpg" },
  { id: 2, title: "Ten thousand gates",                category: "Travel",    place: "Fushimi Inari, Kyoto",    date: "2026", shape: "wide",   hue: 18,  light: 62, src: "/photos/fushimi-inari.jpg" },
  { id: 3, title: "Kiyomizu eaves, overcast",          category: "Travel",    place: "Kyoto, Japan",            date: "2026", shape: "wide",   hue: 14,  light: 60, src: "/photos/kiyomizu-eaves.jpg" },
  { id: 4, title: "A calico, unbothered",              category: "Portrait",  place: "Tokyo, Japan",            date: "2026", shape: "wide",   hue: 100, light: 60, src: "/photos/calico-cat.jpg" },
  { id: 5, title: "Dusk, the dome across the field",   category: "Landscape", place: "Wisconsin",               date: "2025", shape: "wide",   hue: 24,  light: 72, src: "/photos/dusk-dome.jpg" },
  { id: 6, title: "Streets of Akihabara",              category: "Street",    place: "Tokyo, Japan",            date: "2026", shape: "wide",  hue: 20,  light: 60, src: "/photos/akihabara.jpg"  },
  { id: 7, title: "Craters of Hawaii",                 category: "Landscape", place: "Maui, Hawaii",            date: "2024", shape: "wide",  hue: 24,  light: 60, src: "/photos/haleakala_volcano.jpg" },
  { id: 8, title: "Road to Hana - Banana bread",       category: "Travel",    place: "Maui, Hawaii",            date: "2024", shape: "wide",  hue: 20,  light: 60, src: "/photos/hana_bread.jpg" },
  { id: 9, title: "Road to Hana - Streetside hut",     category: "Travel",    place: "Maui, Hawaii",            date: "2024", shape: "wide",  hue: 20,  light: 60, src: "/photos/hana_hut.jpg" },
  { id: 10, title: "Spheres in Seattle",               category: "Portrait",  place: "Seattle, Washington",     date: "2023", shape: "tall",  hue: 8,  light: 62, src: "/photos/AmazonSphere.jpg" },
  { id: 11, title: "Through a tree, Lake Monona",      category: "Landscape", place: "Madison, Wisconsin",      date: "2025", shape: "wide",  hue: 20,  light: 60, src: "/photos/lake-monona.jpg" },

];
