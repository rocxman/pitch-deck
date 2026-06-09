export type AgencyDeckCard = {
  title: string;
  body?: string;
  eyebrow?: string;
  items?: string[];
  tone?: "default" | "risk" | "success" | "warning";
};

export type AgencyDeckSlide = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  menuLabel: string;
  subtitle?: string;
  footnote?: string;
  layout?: "hero" | "cards" | "twoColumn" | "table" | "timeline" | "checklist" | "documentIndex" | "thankYou";
  cards?: AgencyDeckCard[];
  bullets?: string[];
  left?: AgencyDeckCard;
  right?: AgencyDeckCard;
  table?: { headers: string[]; rows: string[][] };
  sourceRefs?: string[];
};

export const agencyDeckSlides: AgencyDeckSlide[] = [
  {
    id: "cover",
    number: "00",
    eyebrow: "PITCH-DECK",
    title: "Deep Analytics Findings & UI/UX Frontend E-Commerce Rebuild",
    menuLabel: "Cover",
    layout: "hero",
  },
  {
    id: "why-this-matters",
    number: "01",
    eyebrow: "Why This Matters",
    title: "Website bukan hanya etalase digital. Untuk Yoora Sarah, website dapat menjadi owned commerce channel yang lebih premium, terukur, dan siap scale.",
    menuLabel: "Why It Matters",
    layout: "cards",
    cards: [
      { title: "Owned channel", body: "Website memberi kontrol atas pengalaman brand, margin, data customer, campaign journey, dan repeat purchase tanpa bergantung sepenuhnya pada marketplace." },
      { title: "Trust & conversion", body: "Fashion ecommerce membutuhkan trust signal, product discovery, PDP yang meyakinkan, cart/checkout yang jelas, dan mobile journey yang cepat." },
      { title: "Growth readiness", body: "SEO, analytics, performance, dan frontend structure harus rapi agar traffic dari organic, ads, social, dan WhatsApp dapat diukur serta dioptimalkan." },
    ],
    sourceRefs: ["MASTER-INSIGHT-YOORA-SARAH.md", "YOORA-SARAH-EXECUTIVE-SUMMARY.md"],
  },
  {
    id: "current-opportunity",
    number: "02",
    eyebrow: "Current Opportunity",
    title: "Yoora Sarah sudah memiliki fondasi commerce. Peluang terbesar sekarang adalah mengubah fondasi tersebut menjadi experience belanja yang profesional.",
    menuLabel: "Opportunity",
    layout: "cards",
    cards: [
      { title: "Fondasi sudah ada", body: "Website aktif, katalog, kategori, PDP, varian, wishlist, cart, akun, unpaid order, payment handoff, dan policy pages sudah tersedia." },
      { title: "Brand asset kuat", body: "Visual fashion, product imagery, category structure, dan WhatsApp support sudah mendukung positioning brand yang lebih premium." },
      { title: "Upgrade harus terarah", body: "Prioritas bukan redesign kosmetik, tetapi frontend rebuild berbasis analytic agar trust, discoverability, conversion, dan measurement meningkat." },
    ],
    sourceRefs: ["MASTER-INSIGHT-YOORA-SARAH.md", "YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md"],
  },
  {
    id: "executive-verdict",
    number: "03",
    eyebrow: "Executive Verdict",
    title: "Website layak dikembangkan, tetapi belum ideal menjadi channel penjualan utama tanpa analytic, frontend rebuild, dan rekomendasi perbaikan teknis yang jelas.",
    menuLabel: "Verdict",
    layout: "cards",
    cards: [
      { title: "Business potential", body: "Yoora Sarah punya aset brand dan commerce primitives yang cukup untuk dibangun menjadi ecommerce experience yang lebih kuat.", tone: "success" },
      { title: "Current blockers", body: "Terdapat gap pada security/data isolation, SEO, analytics, performance baseline, dan UX/CRO yang perlu diketahui sebelum traffic dinaikkan.", tone: "warning" },
      { title: "Recommended action", body: "Jalankan Deep Analytic Report lalu UI/UX Frontend Full Rebuild agar keputusan delivery berbasis data, bukan asumsi visual." },
    ],
    sourceRefs: ["YOORA-SARAH-EXECUTIVE-SUMMARY.md", "YOORA-SARAH-FINAL-AUDIT-REPORT.md"],
  },
  {
    id: "analytic-coverage-map",
    number: "04",
    eyebrow: "Deep Analytic Coverage",
    title: "Analytic dilakukan lintas bisnis, UI/UX, frontend, SEO, analytics, performance, ecommerce flow, backend/API, security, dan operations readiness.",
    menuLabel: "Coverage Map",
    layout: "table",
    table: {
      headers: ["Workstream", "Area yang dianalisis", "Output untuk client"],
      rows: [
        ["Business & commerce", "Owned channel, customer journey, campaign readiness, conversion path", "Prioritas bisnis dan peluang growth"],
        ["UI/UX & CRO", "Homepage, PLP, PDP, wishlist, cart, checkout, account/order, static pages", "Gap experience dan rekomendasi rebuild"],
        ["Frontend", "Next.js/React storefront, route pattern, mobile responsiveness, state, component maturity", "Arah frontend rebuild dan design system"],
        ["SEO", "Canonical, robots, sitemap, metadata, H1, locale signal, structured data", "SEO blocker dan SEO-ready structure"],
        ["Analytics & ads", "GA4 ecommerce events, purchase dedupe, UTM, WhatsApp tracking, ads conversion readiness", "Tracking map dan growth measurement plan"],
        ["Performance", "Core Web Vitals baseline, image/font/cache/third-party script considerations", "Performance priorities untuk fashion commerce"],
        ["Backend/API/security", "Order ownership, order list/detail isolation, guest wishlist identity boundary", "Recommendation untuk backend/vendor team"],
        ["Operations", "PIC, access, handover, QA, go-live gates, ownership boundary", "Delivery governance dan client obligations"]
      ],
    },
    sourceRefs: ["YOORA-SARAH-FINAL-AUDIT-REPORT.md", "MASTER-INSIGHT-YOORA-SARAH.md"],
  },
  {
    id: "factual-evidence-summary",
    number: "05",
    eyebrow: "Evidence-Based Methodology",
    title: "Temuan disusun dari observasi pasif, review artefak, inspeksi route/metadata, dan validasi client-safe — bukan asumsi visual.",
    menuLabel: "Evidence Summary",
    layout: "cards",
    cards: [
      { title: "Observed surface", body: "Homepage locale route, category route, product route, robots.txt, sitemap.xml, /id/sitemap.xml, frontend header, route pattern, dan sinyal backend/API." },
      { title: "Review sources", body: "MASTER insight, passive audit evidence, final audit report, remediation backlog, ecommerce migration roadmap, UX/CRO audit, SEO/performance/analytics audit." },
      { title: "Evidence handling", body: "Deck menampilkan fakta, severity, impact, root cause, rekomendasi, acceptance criteria, dan retest scenario. Detail operasional sensitif tetap disimpan sebagai private technical evidence." },
      { title: "Decision value", body: "Client mendapat gambaran factual: apa yang ditemukan, mengapa penting, apa dampaknya, dan apa tindakan perbaikan yang masuk akal." }
    ],
    sourceRefs: ["YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md", "YOORA-SARAH-FINAL-AUDIT-REPORT.md"],
  },
  {
    id: "readiness-scorecard",
    number: "06",
    eyebrow: "Readiness Scorecard",
    title: "Ecommerce foundation exists — readiness still needs hardening.",
    menuLabel: "Scorecard",
    layout: "cards",
    cards: [
      { title: "Keamanan (35/100)", body: "Perlu perbaikan mendesak. Ditemukan celah otorisasi unpaid order detail dan guest session.", tone: "risk" },
      { title: "SEO (45/100)", body: "Ada hambatan indexing. Canonical, sitemap, metadata, H1, dan locale route perlu diperbaiki.", tone: "risk" },
      { title: "UX/Konversi (62/100)", body: "Visual kuat, konversi perlu ditingkatkan. CTA, filter produk, trust block, dan varian perlu diperjelas.", tone: "warning" },
      { title: "Analytics (40/100)", body: "Tracking GA4 ecommerce dan ads conversion belum terkonfirmasi lengkap.", tone: "warning" },
      { title: "Performance (58/100)", body: "Perlu ukur baseline Core Web Vitals dan optimalkan konten visual fashion berat.", tone: "warning" },
      { title: "Fondasi (68/100)", body: "Primitives (katalog, PDP, cart, checkout) sudah ada, tapi perlu diperkuat.", tone: "success" }
    ],
    sourceRefs: ["YOORA-SARAH-FINAL-AUDIT-REPORT.md"],
  },
  {
    id: "top-factual-findings",
    number: "07",
    eyebrow: "Top Factual Findings",
    title: "Temuan paling penting menunjukkan website perlu dibenahi sebelum diposisikan sebagai channel ecommerce utama.",
    menuLabel: "Top Findings",
    layout: "table",
    table: {
      headers: ["#", "Finding", "Impact", "Priority"],
      rows: [
        ["01", "Order detail page membutuhkan ownership validation lebih kuat", "Risiko data order/customer lintas akun", "P1"],
        ["02", "Order detail API membutuhkan object authorization yang konsisten", "Risiko exposure data mentah dari API", "P1"],
        ["03", "Unpaid order list dan order collection perlu isolasi per customer", "Risiko daftar order tidak terbatasi owner", "P1"],
        ["04", "Guest wishlist identity boundary belum ideal jika client-controlled", "Risiko manipulasi/akses shopping intent", "P1"],
        ["05", "Canonical/sitemap/metadata/H1 perlu diperbaiki", "Produk dan kategori sulit ranking/index optimal", "P1"],
        ["06", "GA4 ecommerce and ads conversion readiness belum terkonfirmasi lengkap", "Growth decision tidak reliable", "P2"],
        ["07", "PLP/PDP/cart/checkout confidence perlu diperkuat", "Friction pada discovery dan purchase decision", "P2"],
        ["08", "Performance baseline belum cukup untuk scaling", "Visual fashion dapat memperlambat journey", "P2"]
      ],
    },
    sourceRefs: ["YOORA-SARAH-FINAL-AUDIT-REPORT.md", "YOORA-SARAH-REMEDIATION-BACKLOG.md"],
  },
  {
    id: "security-findings-detail",
    number: "08",
    eyebrow: "Security / Backend / API Findings",
    title: "Security findings perlu dipahami sebagai risiko trust dan data isolation; implementasi perbaikan backend tetap di luar scope frontend rebuild.",
    menuLabel: "Security Detail",
    layout: "table",
    table: {
      headers: ["ID", "Affected area", "Severity", "Factual finding", "Recommended remediation"],
      rows: [
        ["SEC-001", "Unpaid order detail page", "High / P1", "Halaman detail unpaid order perlu memastikan current customer adalah owner order.", "Server-side ownership check, safe denial, two-account regression test"],
        ["SEC-002", "Order detail API", "High / P1", "API order detail perlu object authorization konsisten sebelum response diberikan.", "Centralized authorization helper, ownership-scoped query, response minimization"],
        ["SEC-003", "Unpaid order list", "Medium / P1", "Daftar unpaid order perlu memastikan data yang tampil hanya milik customer aktif.", "Customer-scoped list query, pagination/status boundary test"],
        ["SEC-004", "Order collection API", "Medium / P1", "Collection endpoint perlu filter ownership yang tidak bisa dilewati oleh kombinasi status/page/limit.", "Ownership filter on all collection paths, regression matrix"],
        ["SEC-005", "Guest wishlist", "Medium / P1", "Wishlist guest tidak ideal jika mengandalkan identifier yang dapat dikontrol client/browser.", "Opaque server-issued guest token, integrity protection, expiry/rotation, safe merge"]
      ],
    },
    sourceRefs: ["YOORA-SARAH-FINAL-AUDIT-REPORT.md", "YOORA-SARAH-REMEDIATION-BACKLOG.md"],
  },
  {
    id: "security-impact-acceptance",
    number: "09",
    eyebrow: "Security Impact & Acceptance",
    title: "Client perlu melihat impact dan acceptance criteria agar perbaikan backend/vendor dapat diuji secara objektif.",
    menuLabel: "Security Criteria",
    layout: "cards",
    cards: [
      { title: "Business impact", items: ["Potensi turunnya trust customer", "Risiko paparan order/customer/payment metadata", "Risiko reputasi sebelum traffic dinaikkan", "Risiko data isolation tidak konsisten antara page dan API"] },
      { title: "Technical root cause pattern", items: ["Object authorization belum terpusat", "Ownership query perlu enforced di server", "List/detail endpoint perlu policy seragam", "Guest identity boundary perlu server-issued token"] },
      { title: "Acceptance criteria", items: ["Account A tidak bisa membaca order Account B", "API menolak foreign object dengan safe denial", "Order list hanya berisi data pemilik", "Guest session A tidak bisa membaca/mengubah wishlist session B", "Sensitive fields diminimalkan"] },
      { title: "Retest plan", body: "Retest dilakukan dengan skenario dua akun dan dua guest session, mencakup page route, API detail, API collection, pagination/filter, dan guest state merge." }
    ],
    sourceRefs: ["YOORA-SARAH-REMEDIATION-BACKLOG.md"],
  },
  {
    id: "seo-findings-detail",
    number: "10",
    eyebrow: "SEO Findings Detail",
    title: "SEO blocker utama berada pada sinyal canonical, sitemap/robots, metadata produk, H1, dan structured data readiness.",
    menuLabel: "SEO Detail",
    layout: "table",
    table: {
      headers: ["Finding", "Observed issue", "Impact", "Recommended fix"],
      rows: [
        ["Canonical", "Canonical terindikasi tidak spesifik pada halaman tertentu", "Google dapat membaca produk/kategori sebagai duplikat atau kurang relevan", "Generate canonical per route/product/category/locale"],
        ["Robots / sitemap", "Robots dan sitemap perlu divalidasi; path locale/sitemap perlu dirapikan", "Crawler bisa diarahkan ke struktur yang tidak optimal", "Valid XML sitemap, robots.txt pointing to correct sitemap, submit to Search Console"],
        ["Product metadata", "Product page metadata terindikasi fallback generic", "Relevance search dan social preview melemah", "Dynamic title, meta description, OG image/title per product"],
        ["H1 / hierarchy", "H1 perlu tersedia dan jelas di page penting", "Crawler dan accessibility kehilangan heading signal", "One H1 per template: homepage/category/product"],
        ["Structured data", "Product schema dan breadcrumb schema perlu direncanakan", "Rich result readiness belum optimal", "Product, BreadcrumbList, Organization/WebSite schema placement"]
      ],
    },
    sourceRefs: ["YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md", "YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md"],
  },
  {
    id: "analytics-ads-findings-detail",
    number: "11",
    eyebrow: "Analytics & Ads Findings Detail",
    title: "Growth tidak bisa dioptimalkan tanpa event ecommerce yang lengkap, transaction_id stabil, dan attribution rule yang jelas.",
    menuLabel: "Analytics Detail",
    layout: "cards",
    cards: [
      { title: "Core ecommerce events", items: ["view_item_list", "select_item", "view_item", "add_to_cart", "remove_from_cart", "begin_checkout", "add_shipping_info", "add_payment_info", "purchase", "refund"] },
      { title: "Optimization events", items: ["search", "login", "sign_up", "whatsapp_click", "wishlist_add", "filter_apply", "sort_apply", "voucher_apply", "checkout_error"] },
      { title: "Ads readiness", items: ["UTM handling", "Google/Meta/TikTok conversion readiness", "Purchase dedupe", "Stable transaction_id", "WhatsApp assisted sales measurement", "Campaign landing page readiness"] },
      { title: "Business value", body: "Client dapat membaca product discovery, add-to-cart, checkout drop-off, paid traffic quality, WhatsApp assist contribution, dan revenue performance." }
    ],
    sourceRefs: ["YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md"],
  },
  {
    id: "performance-findings-detail",
    number: "12",
    eyebrow: "Performance Findings Detail",
    title: "Fashion ecommerce sangat bergantung pada visual; performance harus diperlakukan sebagai faktor conversion, bukan hanya skor teknis.",
    menuLabel: "Performance Detail",
    layout: "cards",
    cards: [
      { title: "Areas to baseline", items: ["LCP image", "Image size and format", "Font loading", "Layout shift", "Third-party scripts", "Cache strategy", "Mobile rendering", "Product/category rendering"] },
      { title: "Recommended targets", items: ["LCP ≤ 2.5s", "INP ≤ 200ms", "CLS ≤ 0.1", "75th percentile mobile/desktop", "Monitor after launch"] },
      { title: "Observed concern", body: "Public page cache behavior, image-heavy fashion layout, font preload, and third-party analytics/scripts need review before paid traffic scaling." },
      { title: "Recommended action", body: "Create Core Web Vitals baseline, optimize product/hero images, review font loading, review public page cache, and monitor after launch." }
    ],
    sourceRefs: ["YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md", "YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md"],
  },
  {
    id: "ux-cro-findings-detail",
    number: "13",
    eyebrow: "UX / CRO Findings Detail",
    title: "UX/CRO findings menunjukkan shopping journey perlu dibuat lebih tegas dari first impression sampai checkout confidence.",
    menuLabel: "UX/CRO Detail",
    layout: "table",
    table: {
      headers: ["Area", "Finding", "Impact", "Frontend recommendation"],
      rows: [
        ["Homepage", "CTA dan trust signal perlu lebih kuat di first viewport", "Visitor bisa melihat-lihat tanpa lanjut belanja", "Hero with clear CTA, trust strip, campaign/new arrival/best seller"],
        ["PLP", "Discovery tools belum cukup menjadi pengalaman utama", "Customer lambat menemukan produk cocok", "Mobile filter drawer, sort, active chips, badges, clearer product card CTA"],
        ["PDP", "Trust dan decision support perlu lebih dekat ke CTA", "Ragu memilih size/variant atau lanjut add-to-cart", "Sticky add-to-cart, trust block, size guide, variant grouping, related products"],
        ["Cart", "Summary, promo, shipping/payment expectation perlu lebih jelas", "Abandonment sebelum checkout", "Clear cart summary, promo UI, delivery note, secure payment signal"],
        ["Checkout", "Error handling dan step clarity perlu dikuatkan", "Customer bingung saat gagal/menunggu payment", "Step indicator, clear error state, WhatsApp help fallback"],
        ["Account/order", "Order list/detail perlu clarity dan trust", "Customer support load meningkat", "Readable order status, payment instruction, support/handoff option"]
      ],
    },
    sourceRefs: ["YOORA-SARAH-UX-CRO-AUDIT.md"],
  },
  {
    id: "ecommerce-flow-findings-detail",
    number: "14",
    eyebrow: "Ecommerce Flow Findings Detail",
    title: "Ecommerce flow sudah ada, tetapi perlu dibuat lebih profesional agar setiap tahap punya clarity, trust, dan measurement.",
    menuLabel: "Flow Detail",
    layout: "timeline",
    cards: [
      { title: "Discovery", body: "Customer masuk dari homepage, category, search, social, ads, atau WhatsApp; frontend perlu membantu product discovery cepat." },
      { title: "Evaluation", body: "PDP harus membantu keputusan lewat gallery, variant clarity, size guide, stock, delivery/return info, trust block, and related products." },
      { title: "Commitment", body: "Wishlist/cart harus jelas menampilkan item, price, promo, shipping expectation, error state, dan help fallback." },
      { title: "Checkout", body: "Checkout UI harus punya step clarity, payment expectation, secure signal, and recovery path if error occurs." },
      { title: "Post-order", body: "Account/order UI perlu status yang readable, payment instruction, support handoff, and consistent customer trust." }
    ],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md", "YOORA-SARAH-UX-CRO-AUDIT.md"],
  },
  {
    id: "remediation-matrix",
    number: "15",
    eyebrow: "Remediation Matrix",
    title: "Matrix perbaikan membantu client membedakan mana yang masuk scope frontend dan mana yang harus ditangani backend/vendor.",
    menuLabel: "Remediation Matrix",
    layout: "table",
    table: {
      headers: ["Priority", "Workstream", "Action", "Owner recommendation", "Included in Rp120.000.000?"],
      rows: [
        ["P1", "Security/API", "Order ownership, API authorization, guest wishlist hardening", "Backend/vendor team", "No — recommendation only"],
        ["P1", "SEO", "Canonical, sitemap, robots, metadata, H1, structured data placement", "Frontend + backend/vendor if server-side needed", "Frontend structure included"],
        ["P2", "UX/CRO", "Homepage, PLP, PDP, cart, checkout, account/order rebuild", "Meanwhile", "Yes"],
        ["P2", "Analytics", "Event hook plan and frontend placement", "Meanwhile + analytics implementer", "Hook plan included"],
        ["P2", "Performance", "Image/font/cache recommendations and frontend optimization direction", "Meanwhile + infrastructure owner", "Frontend direction included"],
        ["P2", "Operations", "Client ownership, handover, QA, go-live checklist", "Meanwhile + Yoora Sarah", "Yes"]
      ],
    },
    sourceRefs: ["YOORA-SARAH-REMEDIATION-BACKLOG.md", "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "solution-frontend-rebuild",
    number: "16",
    eyebrow: "Solution",
    title: "Solusi utama: UI/UX Frontend Full Rebuild untuk migrasi experience menuju ecommerce profesional.",
    menuLabel: "Solution",
    layout: "cards",
    cards: [
      { title: "Not cosmetic redesign", body: "Rebuild bukan hanya mengganti warna/layout, tetapi membangun ulang struktur pengalaman belanja dari discovery sampai checkout confidence." },
      { title: "Mobile-first commerce", body: "Frontend dirancang untuk customer fashion yang banyak datang dari social, ads, organic, dan mobile browsing." },
      { title: "Conversion architecture", body: "Setiap halaman diarahkan untuk aksi: discover product, compare options, trust decision, add to cart, checkout, dan request help." },
      { title: "Ready for growth", body: "SEO-ready structure dan analytics event hook plan disiapkan agar channel growth bisa diukur setelah launch." },
    ],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md", "YOORA-SARAH-UX-CRO-AUDIT.md"],
  },
  {
    id: "rebuild-scope-by-page",
    number: "17",
    eyebrow: "Rebuild Scope by Page",
    title: "Scope frontend mencakup storefront utama dan halaman pendukung yang memengaruhi trust serta conversion.",
    menuLabel: "Page Scope",
    layout: "table",
    table: {
      headers: ["Page / module", "Frontend rebuild focus", "Expected improvement"],
      rows: [
        ["Homepage", "Hero, CTA, trust strip, campaign, new arrival/best seller", "Lebih cepat mengarahkan visitor ke shopping journey"],
        ["Category / PLP", "Grid, filter, sort, badges, active chips, product card CTA", "Product discovery lebih mudah dan terukur"],
        ["Product / PDP", "Gallery, variant, size guide, trust block, sticky CTA, related products", "Purchase decision lebih jelas dan meyakinkan"],
        ["Wishlist / cart", "Saved items, cart summary, promo UI, help entry", "Friction sebelum checkout berkurang"],
        ["Checkout UI", "Step indicator, delivery/payment expectation, error state", "Checkout confidence meningkat"],
        ["Account / order", "Order list/detail UI, payment instruction, support handoff", "Customer trust dan clarity meningkat"],
        ["Static pages", "Policy/help/about pages, SEO-ready structure", "Trust dan discoverability lebih baik"],
      ],
    },
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "ecommerce-design-system",
    number: "18",
    eyebrow: "Ecommerce Design System",
    title: "Design system membuat frontend konsisten, scalable, dan mudah dirawat setelah handover.",
    menuLabel: "Design System",
    layout: "cards",
    cards: [
      { title: "Core UI foundations", body: "Typography, spacing, grid, color usage, buttons, cards, badges, forms, modals/drawers, empty/error/loading states." },
      { title: "Commerce components", body: "Product card, price display, sale badge, filter chip, variant selector, size guide, trust block, cart summary, checkout step." },
      { title: "Responsive rules", body: "Mobile-first breakpoints, navigation behavior, sticky CTA, filter drawer, and touch-friendly interaction patterns." },
      { title: "Handover value", body: "Design system membantu internal/vendor team maintain halaman baru tanpa kembali ke UI yang tidak konsisten." },
    ],
    sourceRefs: ["YOORA-SARAH-UX-CRO-AUDIT.md", "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "analytics-seo-ready-structure",
    number: "19",
    eyebrow: "SEO + Analytics Ready Structure",
    title: "Frontend akan disiapkan agar halaman penting lebih mudah dibaca crawler dan event ecommerce lebih mudah dipasang.",
    menuLabel: "SEO + Analytics",
    layout: "twoColumn",
    left: { title: "SEO-ready frontend", items: ["Page-level H1 structure", "Product/category metadata pattern", "Canonical recommendation", "Structured data placement plan", "SEO content block placement", "Internal linking pattern"] },
    right: { title: "Analytics hook plan", items: ["view_item_list", "select_item", "view_item", "add_to_cart", "begin_checkout", "purchase hook readiness", "wishlist_add", "filter_apply", "sort_apply", "whatsapp_click"] },
    sourceRefs: ["YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md", "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "ai-stylist-assistant-concept",
    number: "20",
    eyebrow: "AI Concept Placement",
    title: "AI Stylist dan AI Assistant disarankan sebagai frontend placement concept, bukan backend AI production scope.",
    menuLabel: "AI Concept",
    layout: "cards",
    cards: [
      { title: "AI Stylist placement", body: "Style quiz, occasion-based recommendation, complete-the-look section, outfit bundle UI, save/share look, dan add-all-to-cart concept." },
      { title: "AI Assistant placement", body: "Chat launcher, FAQ quick replies, product-aware help entry, size/shipping/payment guidance, dan WhatsApp handoff button." },
      { title: "Data requirement", body: "Butuh product taxonomy, tagging, size/color/style structure, availability signal, dan content quality sebelum AI recommendation menjadi production-grade." },
      { title: "Scope boundary", body: "AI backend, model orchestration, API integration, vector/search infrastructure, dan production AI guardrail tidak termasuk paket ini.", tone: "warning" },
    ],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "not-included",
    number: "21",
    eyebrow: "Scope Boundary",
    title: "Agar delivery sehat, scope harus eksplisit: paket ini fokus analytic + frontend rebuild, bukan backend/platform rebuild.",
    menuLabel: "Not Included",
    layout: "cards",
    cards: [
      { title: "Backend / API", body: "Backend implementation, API rebuild, order authorization patch, database schema work, and server-side business logic are excluded." },
      { title: "Payment / security", body: "Payment backend, payment gateway logic, security patching, penetration retest, and compliance/legal consulting are excluded." },
      { title: "AI / ads", body: "AI backend/model/API, recommendation engine, ads campaign operation, and paid media optimization are excluded." },
      { title: "Third-party cost", body: "Domain, hosting, cloud, storage, payment gateway, OTP/SMS/WhatsApp, monitoring, analytics, and ad spend are client-paid and client-owned.", tone: "warning" },
    ],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md", "YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md"],
  },
  {
    id: "quotation-rp120m",
    number: "22",
    eyebrow: "Quotation",
    title: "Penawaran utama: Rp120.000.000 untuk Deep Analytic Report + UI/UX Frontend Full Rebuild.",
    menuLabel: "Quotation Rp120 Juta",
    layout: "table",
    footnote: "Seluruh komponen penawaran, lingkup pekerjaan, dan nilai investasi dalam dokumen ini bersifat indikatif dan terbuka untuk didiskusikan lebih lanjut agar dapat disesuaikan dengan kebutuhan spesifik serta prioritas bisnis Yoora Sarah.",
    table: {
      headers: ["Komponen", "Status", "Keterangan"],
      rows: [
        ["Deep Analytic Report", "Included", "Audit mendalam UI/UX, frontend, ecommerce flow, SEO, analytics, ads readiness, performance, backend/security/API recommendation, benchmark, roadmap"],
        ["UI/UX Frontend Full Rebuild", "Included", "Homepage, PLP, PDP, wishlist, cart, checkout, account/order, static pages, design system, SEO-ready structure, analytics hook plan"],
        ["Frontend QA + handover", "Included", "QA frontend, documentation, walkthrough, and handover notes"],
        ["Total fixed offer", "Rp120.000.000", "One-time project fee untuk fixed scope"],
      ],
    },
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "commercial-options",
    number: "23",
    eyebrow: "Commercial Options",
    title: "Tiga model kerja dapat dipilih sesuai kebutuhan ownership, support, dan growth partnership.",
    menuLabel: "Commercial Options",
    layout: "table",
    footnote: "Model kerja, struktur pembayaran, dan terms yang tercantum di atas merupakan opsi awal yang dapat dinegosiasikan. Kami terbuka untuk menyesuaikan skema sesuai preferensi dan kapasitas operasional klien.",
    table: {
      headers: ["Model Kerja", "Struktur Biaya", "Kesesuaian Kebutuhan", "Ketentuan & Catatan Retainer"],
      rows: [
        [
          "Project-Based (One-Time Setup)",
          "Rp120.000.000",
          "Klien yang membutuhkan audit & rebuild frontend e-commerce selesai sebagai proyek dengan lingkup tetap (fixed scope).",
          "Mencakup garansi perbaikan bug pasca-rilis. Pemeliharaan berkala atau fitur baru di luar scope akan dikutip terpisah."
        ],
        [
          "Setup + Retainer Bulanan",
          "Rp120.000.000 (Setup) + Biaya Pemeliharaan Bulanan",
          "Klien yang memerlukan dukungan berkelanjutan (ongoing support), pemantauan berkala, pembaruan minor, & campaign readiness.",
          "Biaya pemeliharaan bulanan disepakati bersama sesuai SLA dan kapasitas dukungan teknis yang dialokasikan."
        ],
        [
          "Setup + Growth Partnership",
          "Rp120.000.000 (Setup) + 5% Komisi Penjualan Bersih",
          "Klien yang menginginkan kolaborasi pertumbuhan (growth partnership) jangka panjang berbasis performa komersial platform.",
          "Komisi 5% dihitung dari total omzet bersih bulanan website. Memerlukan integrasi tracking revenue yang valid & transparan."
        ]
      ],
    },
    sourceRefs: ["YOORA-SARAH-PROPOSAL-SCOPE-AND-PACKAGES.md", "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "timeline-milestones",
    number: "24",
    eyebrow: "Timeline & Milestones",
    title: "Delivery disarankan bertahap agar analytic, design, rebuild, QA, dan handover berjalan terkontrol.",
    menuLabel: "Timeline",
    layout: "timeline",
    cards: [
      { title: "Week 1–2 · Analytic", body: "Deep analytic, findings consolidation, ecommerce benchmark, priority roadmap, and client walkthrough." },
      { title: "Week 3–4 · UX direction", body: "Information architecture, frontend direction, design system foundation, and page/module planning." },
      { title: "Week 5–8 · Rebuild", body: "Homepage, PLP, PDP, wishlist/cart/checkout/account/order UI, static pages, responsive implementation." },
      { title: "Week 9–10 · QA & handover", body: "Frontend QA, SEO-ready check, analytics hook review, documentation, final walkthrough, and handover." },
    ],
    sourceRefs: ["YOORA-SARAH-EXECUTION-CHECKLIST.md", "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "deliverables",
    number: "25",
    eyebrow: "Deliverables",
    title: "Output dibuat agar Yoora Sarah mendapat insight, frontend implementation, dan handover yang bisa dilanjutkan secara operasional.",
    menuLabel: "Deliverables",
    layout: "cards",
    cards: [
      { title: "Analytic deliverables", items: ["Executive analytic report", "Full website findings summary", "UI/UX and frontend issue map", "SEO/analytics/performance recommendations", "Backend/security/API recommendation summary", "Prioritized roadmap"] },
      { title: "Frontend deliverables", items: ["Rebuilt storefront UI", "Responsive mobile-first pages", "Ecommerce design system", "SEO-ready frontend structure", "Analytics event hook plan", "AI placement suggestion"] },
      { title: "QA & handover", items: ["Frontend QA notes", "Known assumptions", "Handover documentation", "Final walkthrough", "Recommendation for next phase"] },
    ],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "rights-obligations",
    number: "26",
    eyebrow: "Rights, Obligations & Ownership",
    title: "Hak dan kewajiban perlu jelas sejak awal, terutama untuk domain, hosting, payment, analytics, data, dan third-party tools.",
    menuLabel: "Hak & Kewajiban",
    layout: "twoColumn",
    left: { title: "Yoora Sarah owns & provides", items: ["Domain ownership dan DNS access", "Hosting/cloud/Vercel atau infrastructure account jika dipakai", "Payment gateway account dan settlement ownership", "GA4/Search Console/Ads/Meta/TikTok account ownership", "Product/category/customer/content data", "Brand assets, product imagery, copy approval", "Technical PIC/vendor coordination", "Third-party subscription/usage fees"] },
    right: { title: "Meanwhile delivers & supports", items: ["Deep analytic and client-safe findings", "UI/UX frontend rebuild sesuai scope", "Frontend design system and responsive implementation", "SEO-ready frontend structure recommendation", "Analytics event hook plan", "Frontend QA and handover", "Scope clarity and change request control", "Optional maintenance if selected"] },
    sourceRefs: ["YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md", "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "client-inputs",
    number: "27",
    eyebrow: "Client Inputs",
    title: "Beberapa input wajib disiapkan agar project tidak tersendat di tengah delivery.",
    menuLabel: "Client Inputs",
    layout: "checklist",
    bullets: ["Technical PIC dan decision maker", "Brand guideline, logo, product imagery, tone of voice", "Product/category data reference", "Priority business goals dan target customer", "Access atau read-only reference untuk GA4/Search Console/Ads jika ingin review lebih akurat", "Current vendor/backend contact jika ada dependency", "Approval boundary untuk technical recommendation dan security retest jika dilakukan pihak lain", "Feedback dan approval tepat waktu pada milestone"],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md", "YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md"],
  },
  {
    id: "next-steps",
    number: "28",
    eyebrow: "Next Steps",
    title: "Jika proposal disetujui, langkah berikutnya adalah mengunci scope, timeline, PIC, dan model komersial yang dipilih.",
    menuLabel: "Next Steps",
    layout: "checklist",
    bullets: ["Confirm selected commercial model: one-time, setup + maintenance, atau setup + 5% fee", "Approve Rp120.000.000 base scope", "Confirm project PIC, communication channel, and approval flow", "Confirm domain/hosting/payment/analytics ownership and access boundary", "Kick off deep analytic phase", "Review analytic findings and lock rebuild direction", "Execute frontend rebuild, QA, handover, and final walkthrough"],
    sourceRefs: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md"],
  },
  {
    id: "appendix-technical-findings",
    number: "29",
    eyebrow: "Appendix A",
    title: "Technical findings detail tetap sanitized namun cukup actionable untuk technical PIC.",
    menuLabel: "Technical Appendix",
    layout: "table",
    table: {
      headers: ["Bucket", "Jumlah / scope", "Recommended action"],
      rows: [
        ["Security", "5 confirmed", "Server-side ownership checks and guest token hardening"],
        ["SEO", "7 observed/recommended", "Canonical, sitemap, metadata, H1, hreflang, structured data"],
        ["UX/CRO", "7 priority areas", "CTA, trust, PLP filter, PDP variants/reviews, checkout clarity"],
        ["Analytics", "Core ecommerce events", "Event map, purchase dedupe, dashboard, WhatsApp tracking"],
        ["Performance", "CWV baseline", "Image, font, cache, and third-party script review"],
        ["Ops", "Launch readiness", "Access, environments, go-live, rollback, handover"],
      ],
    },
    sourceRefs: ["YOORA-SARAH-FINAL-AUDIT-REPORT.md", "YOORA-SARAH-REMEDIATION-BACKLOG.md"],
  },
  {
    id: "appendix-security-detail",
    number: "30",
    eyebrow: "Appendix B",
    title: "Security/backend/API detail disimpan di appendix agar main deck tetap business-friendly.",
    menuLabel: "Security Detail",
    layout: "cards",
    cards: [
      { title: "SEC-001 / SEC-002", body: "Order detail page dan order detail API perlu ownership validation yang konsisten. Severity: High / P1.", tone: "risk" },
      { title: "SEC-003 / SEC-004", body: "Unpaid order list dan order collection API perlu isolasi data per customer. Severity: Medium / P1.", tone: "warning" },
      { title: "SEC-005", body: "Guest wishlist perlu server-issued guest token, integrity protection, dan safe merge saat login. Severity: Medium / P1.", tone: "warning" },
      { title: "Evidence rule", body: "Exploit steps, payload, real order ID, sensitive response body, dan payment/customer identifier tidak ditampilkan di deck." },
    ],
    sourceRefs: ["YOORA-SARAH-FINAL-AUDIT-REPORT.md", "MASTER-INSIGHT-YOORA-SARAH.md"],
  },
  {
    id: "appendix-governance",
    number: "31",
    eyebrow: "Appendix C",
    title: "Governance, warranty, maintenance, dan change request boundary melindungi kualitas delivery.",
    menuLabel: "Governance",
    layout: "table",
    table: {
      headers: ["Area", "Ringkasan", "Implikasi"],
      rows: [
        ["Warranty", "Bug akibat pekerjaan yang diserahkan dapat dicakup selama periode warranty yang disepakati", "Tidak mencakup fitur baru atau perubahan requirement"],
        ["Maintenance", "Optional monthly maintenance untuk support, monitoring, minor improvement, dan campaign readiness", "Dipilih jika client ingin ongoing partnership"],
        ["Change request", "Scope baru, design baru, backend work, atau integration tambahan harus dikutip terpisah", "Mencegah scope creep"],
        ["Third-party dependency", "Outage, billing, policy change, atau limitation dari provider pihak ketiga bukan tanggung jawab implementation scope", "Client tetap menjadi owner akun dan biaya"],
      ],
    },
    sourceRefs: ["YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md"],
  },
  {
    id: "appendix-documents",
    number: "32",
    eyebrow: "Appendix D",
    title: "Indeks dokumen sumber lengkap untuk client dan delivery team.",
    menuLabel: "Document Index",
    layout: "documentIndex",
    cards: [
      { title: "Strategy", items: ["MASTER-INSIGHT-YOORA-SARAH.md", "YOORA-SARAH-EXECUTIVE-SUMMARY.md", "YOORA-SARAH-PITCH-DECK.md"] },
      { title: "Audit", items: ["YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md", "YOORA-SARAH-FINAL-AUDIT-REPORT.md", "YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md", "YOORA-SARAH-UX-CRO-AUDIT.md"] },
      { title: "Implementation", items: ["YOORA-SARAH-REMEDIATION-BACKLOG.md", "YOORA-SARAH-ECOMMERCE-MIGRATION-ROADMAP.md", "YOORA-SARAH-EXECUTION-CHECKLIST.md", "YOORA-SARAH-INTERACTIVE-REPORT-IMPLEMENTATION-TIMELINE.md"] },
      { title: "Commercial / Governance", items: ["YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md", "YOORA-SARAH-PROPOSAL-SCOPE-AND-PACKAGES.md", "YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md", "YOORA-SARAH-GO-LIVE-HANDOVER-CHECKLIST.md"] },
    ],
    sourceRefs: ["YOORA-SARAH-AGENCY-BUNDLE/*.md"],
  },
  {
    id: "thank-you",
    number: "33",
    eyebrow: "",
    title: "Let's build together",
    menuLabel: "Thank You",
    layout: "thankYou",
  }
];
