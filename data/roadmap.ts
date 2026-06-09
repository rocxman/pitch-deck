export type RoadmapPhase = {
  phase: string;
  title: string;
  objective: string;
  deliverables: string[];
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: "01",
    title: "Discovery & Konfirmasi Akses",
    objective: "Mengunci scope, kepemilikan teknis, akses, dan model paket.",
    deliverables: ["Checklist akses", "Scope terkonfirmasi", "Register dependency", "Paket yang disetujui"],
  },
  {
    phase: "02",
    title: "Perbaikan Keamanan P1",
    objective: "Perbaiki celah isolasi data dan guest state sebelum website jadi channel penjualan.",
    deliverables: ["Perbaikan kepemilikan pesanan", "Hardening guest-state", "Minimalisasi response sensitif", "Retest dua akun/sesi"],
  },
  {
    phase: "03",
    title: "Perbaikan SEO",
    objective: "Pastikan produk dan kategori bisa diindeks Google dengan benar.",
    deliverables: ["Perbaikan canonical", "Perbaikan sitemap/robots", "Perbaikan metadata", "Validasi H1/hreflang/structured data"],
  },
  {
    phase: "04",
    title: "Peningkatan UX & Konversi",
    objective: "Tingkatkan product discovery, trust, kepercayaan beli, dan usability mobile ecommerce.",
    deliverables: ["Hero CTA/trust strip", "Filter drawer PLP", "Trust block PDP", "Kejelasan varian"],
  },
  {
    phase: "05",
    title: "Analytics & Performance",
    objective: "Buat funnel terukur dan tetapkan target kecepatan per halaman.",
    deliverables: ["Peta event GA4", "Deduplication purchase", "Outline dashboard", "Baseline CWV"],
  },
  {
    phase: "06",
    title: "QA, UAT & Retest Keamanan",
    objective: "Validasi perjalanan customer kritis sebelum launch produksi.",
    deliverables: ["Laporan QA", "Rangkuman retest keamanan", "List issue yang diketahui", "Checklist approval UAT"],
  },
  {
    phase: "07",
    title: "Go-live & Serah Terima",
    objective: "Launch dengan aman dan transfer kejelasan operasional.",
    deliverables: ["Checklist go-live", "Rencana rollback", "Smoke test produksi", "Dokumentasi handover"],
  },
  {
    phase: "08",
    title: "Maintenance & Optimasi Growth",
    objective: "Stabilkan setelah launch dan optimalkan performa ecommerce setiap bulan.",
    deliverables: ["Review kesehatan bulanan", "Review SEO/indexing", "Laporan funnel", "Backlog CRO"],
  },
];
