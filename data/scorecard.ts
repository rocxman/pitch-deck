export type ScorecardItem = {
  area: string;
  score: number;
  label: string;
  priority: string;
  summary: string;
};

export const scorecard: ScorecardItem[] = [
  {
    area: "Keamanan",
    score: 35,
    label: "Perlu perbaikan mendesak",
    priority: "P1 blocker",
    summary: "Ditemukan celah otorisasi dan keamanan guest session yang harus diperbaiki dan ditest ulang sebelum website jadi channel utama.",
  },
  {
    area: "SEO",
    score: 45,
    label: "Ada hambatan di indexing",
    priority: "P1 blocker",
    summary: "Canonical, sitemap, metadata, H1, dan sinyal bahasa perlu diperbaiki agar produk bisa ranking di Google.",
  },
  {
    area: "UX/Konversi",
    score: 62,
    label: "Visual kuat, konversi perlu ditingkatkan",
    priority: "P2 improvement",
    summary: "Fondasi visual sudah bagus, tetapi CTA, filter produk, trust block, dan varian produk perlu dibuat lebih jelas.",
  },
  {
    area: "Analytics",
    score: 40,
    label: "Tracking belum lengkap",
    priority: "P2 setup",
    summary: "Tracking funnel GA4 ecommerce belum terkonfirmasi lengkap; perlu dipasang agar keputusan growth berbasis data.",
  },
  {
    area: "Performance",
    score: 58,
    label: "Perlu ukur baseline dulu",
    priority: "P2 measurement",
    summary: "Core Web Vitals perlu diukur per tipe halaman dan dioptimalkan untuk konten visual fashion yang berat.",
  },
  {
    area: "Fondasi Ecommerce",
    score: 68,
    label: "Fondasi sudah ada, belum siap diskalakan",
    priority: "P1/P2 migration",
    summary: "Katalog, PDP, cart, wishlist, akun, pesanan, dan payment handoff sudah ada. Tinggal diperkuat dan divalidasi ulang.",
  },
];
