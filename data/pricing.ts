export type PricingTier = {
  name: string;
  price: string;
  timeline: string;
  position: string;
  recommended?: boolean;
  includes: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Essential Audit",
    price: "Rp35.000.000",
    timeline: "7–10 hari kerja",
    position: "Paket masuk",
    includes: ["Ringkasan audit eksekutif", "Daftar risiko prioritas", "Arah perbaikan", "Presentasi klien"],
  },
  {
    name: "Deep Ecommerce Readiness Assessment",
    price: "Rp65.000.000",
    timeline: "14–21 hari kerja",
    position: "Audit serius + strategi",
    includes: ["Review keamanan", "Review SEO/CRO/analytics", "Rencana migrasi", "Arahan paket komersial"],
  },
  {
    name: "Secure Commerce Rebuild",
    price: "Rp285.000.000",
    timeline: "10–14 minggu",
    position: "Rekomendasi utama",
    recommended: true,
    includes: ["Perbaikan keamanan P1", "SEO rescue", "Rebuild frontend ecommerce", "Fondasi analytics", "QA/UAT", "Garansi 1 bulan"],
  },
  {
    name: "Growth Commerce Build",
    price: "Rp395.000.000",
    timeline: "12–18 minggu",
    position: "Build untuk growth",
    includes: ["Scope Secure Commerce", "Support backend/growth lebih kuat", "Support campaign landing", "Backlog CRO", "Optimasi performance"],
  },
  {
    name: "Full Ecommerce Growth Build",
    price: "Rp470.000.000",
    timeline: "16–24 minggu",
    position: "Full build + setup growth/AI",
    includes: ["Scope Growth Commerce", "Advanced analytics", "Setup AI/growth", "QA lebih luas", "Sistem handover"],
  },
  {
    name: "Enterprise Commerce Transformation",
    price: "Mulai Rp650.000.000+",
    timeline: "6–9+ bulan",
    position: "Transformasi custom enterprise",
    includes: ["Arsitektur custom", "Multi-domain readiness", "Advanced abuse prevention", "Model support enterprise", "Integrasi custom"],
  },
];

export const addOns = [
  { name: "AI Stylist MVP", range: "Rp45.000.000 – Rp75.000.000", description: "Rekomendasi outfit/produk dengan pengalaman belanja yang dipandu." },
  { name: "AI Assistant + CS Handoff", range: "Rp50.000.000 – Rp90.000.000", description: "Alur bantuan customer dengan batasan jelas kapan dialihkan ke manusia." },
  { name: "Advanced Voucher/Promo Abuse Engine", range: "Rp75.000.000 – Rp150.000.000", description: "Kontrol untuk penyalahgunaan promo, fake account, dan pola redemption mencurigakan." },
  { name: "Advanced Backend Rebuild", range: "Rp100.000.000 – Rp250.000.000", description: "Refactor API, domain model, scalability, dan security yang lebih dalam." },
  { name: "Ads Funnel + Campaign Landing Setup", range: "Rp25.000.000 – Rp60.000.000", description: "Landing page dan tracking untuk campaign paid/social." },
  { name: "Server-side Tracking / Advanced Analytics", range: "Rp35.000.000 – Rp90.000.000", description: "Data ecommerce lebih reliable dan reporting lebih siap dashboard." },
  { name: "Marketplace Sync Planning", range: "Rp35.000.000 – Rp100.000.000", description: "Planning sinkronisasi katalog untuk Shopee/TikTok Shop/marketplace." },
];

export const maintenancePackages = [
  { name: "Basic Care", price: "Rp15.000.000/bulan", recommended: false, includes: ["Bug support", "Health check", "Minor fixes", "Laporan bulanan"] },
  { name: "Growth Care", price: "Rp25.000.000/bulan", recommended: true, includes: ["Basic Care", "Review SEO", "Review analytics", "Review performance", "Backlog CRO"] },
  { name: "Priority Care", price: "Rp40.000.000/bulan", recommended: false, includes: ["Growth Care", "SLA lebih cepat", "Support campaign", "Priority fixes"] },
  { name: "Enterprise Care", price: "Mulai Rp75.000.000/bulan", recommended: false, includes: ["Dedicated allocation", "Monitoring", "Optimasi", "Model support custom"] },
];
