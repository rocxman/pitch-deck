# Yoora Sarah — Laporan Analytic Mendalam & Penawaran Frontend Ecommerce Rebuild

**Client:** Yoora Sarah  
**Prepared by:** Meanwhile  
**Tanggal:** 9 Juni 2026  
**Dokumen:** Deep Website Analytic Report + UI/UX Frontend Rebuild Commercial Offer  
**Scope implementasi harga:** Analytic report dan UI/UX frontend rebuild. Backend/security remediation tidak termasuk scope pengerjaan implementasi.

---

## 1. Executive Summary

Yoora Sarah sudah memiliki fondasi ecommerce yang cukup bernilai: website aktif, katalog produk, halaman kategori, halaman produk, wishlist, cart, akun customer, unpaid order flow, payment handoff, serta brand visual yang sudah mengarah ke fashion commerce premium.

Namun berdasarkan analytic mendalam dari bundle audit, website belum ideal untuk dijadikan channel penjualan utama tanpa perbaikan terstruktur. Risiko dan gap utama berada pada beberapa area:

1. **Security & data isolation** — ditemukan isu akses data order dan guest wishlist trust boundary yang perlu diperlakukan sebagai prioritas tinggi sebelum traffic dinaikkan.
2. **UI/UX & conversion flow** — pengalaman belanja sudah punya visual yang baik, tetapi CTA, trust signal, product discovery, filter, PDP, dan checkout confidence belum sekuat ecommerce profesional.
3. **SEO & discoverability** — canonical, sitemap, metadata, H1, hreflang, dan structured data perlu diperbaiki agar produk dan kategori lebih mudah ditemukan Google.
4. **Analytics & ads readiness** — funnel ecommerce belum terkonfirmasi lengkap untuk keputusan growth berbasis data.
5. **Performance readiness** — Core Web Vitals baseline, image optimization, font loading, dan cache strategy perlu ditinjau karena fashion ecommerce sangat bergantung pada visual.
6. **Frontend maturity** — dibutuhkan frontend rebuild yang lebih profesional, mobile-first, conversion-ready, SEO-ready, dan siap mendukung campaign.

Dokumen ini dimulai dari **laporan analytic mendalam**, lalu dilanjutkan dengan rekomendasi solusi, suggestion fitur, benchmark terhadap ecommerce profesional, roadmap prioritas, dan satu penawaran komersial spesifik untuk analytic + UI/UX frontend full rebuild.

> Catatan scope: Temuan backend/API/security ditampilkan secara faktual sebagai hasil analytic dan rekomendasi. Implementasi backend, API, database, authorization policy, payment logic, dan security patching tidak termasuk dalam scope harga frontend rebuild.

---

## 2. Tujuan Analytic Report

Analytic ini bertujuan menjawab pertanyaan bisnis dan teknis berikut:

- Apa saja kekurangan website Yoora Sarah saat ini?
- Risiko apa saja yang perlu diketahui sebelum website dijadikan channel penjualan utama?
- Bagian mana yang harus diperbaiki dari sisi UI/UX, frontend, SEO, analytics, dan performance?
- Temuan backend/security apa yang perlu diketahui dan diteruskan ke backend/vendor terkait?
- Fitur apa yang belum ada dan bisa meningkatkan pengalaman ecommerce?
- Bagaimana Yoora Sarah dibandingkan dengan standard ecommerce profesional?
- Apa satu penawaran yang paling tepat untuk analytic mendalam dan frontend rebuild?

---

## 3. Sumber Analytic

Analytic ini dikonsolidasikan dari dokumen-dokumen berikut di folder `YOORA-SARAH-AGENCY-BUNDLE`:

1. `MASTER-INSIGHT-YOORA-SARAH.md`
2. `YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md`
3. `YOORA-SARAH-EXECUTIVE-SUMMARY.md`
4. `YOORA-SARAH-FINAL-AUDIT-REPORT.md`
5. `YOORA-SARAH-REMEDIATION-BACKLOG.md`
6. `YOORA-SARAH-ECOMMERCE-MIGRATION-ROADMAP.md`
7. `YOORA-SARAH-UX-CRO-AUDIT.md`
8. `YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md`
9. `YOORA-SARAH-PROPOSAL-SCOPE-AND-PACKAGES.md`
10. `YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md`
11. `YOORA-SARAH-GO-LIVE-HANDOVER-CHECKLIST.md`
12. `YOORA-SARAH-EXECUTION-CHECKLIST.md`
13. `YOORA-SARAH-PITCH-DECK.md`
14. `YOORA-SARAH-INTERACTIVE-REPORT-IMPLEMENTATION-TIMELINE.md`

---

## 4. Audit Methodology & Evidence Handling

Analytic dilakukan dengan pendekatan:

- passive read-only crawl;
- browser observation;
- HTTP header collection;
- route and metadata inspection;
- review terhadap prior confirmed audit artifacts;
- screenshot-based UX observation;
- SEO/sitemap/robots validation;
- ecommerce flow review;
- client-safe technical risk summary.

### Area yang diamati

- `https://www.yoorasarah.com`
- homepage locale route `/id` dan `/en`
- category route seperti `/id/dress`
- product route seperti `/id/dress/clara-dress-5254`
- `robots.txt`
- `sitemap.xml`
- `/id/sitemap.xml`
- backend/API signal seperti `api.yoorasarah.com`
- order/account/wishlist flow berdasarkan prior confirmed artifacts

### Evidence safety

Karena sebagian temuan menyentuh area security dan customer data, dokumen client-facing ini memakai prinsip:

- factual but safe;
- endpoint class boleh disebut jika diperlukan;
- payload, exploit step, real order ID, response body sensitif, dan payment/customer identifier tidak ditampilkan mentah;
- data sensitif direpresentasikan sebagai `[REDACTED]` atau kategori risiko;
- detail teknis lebih dalam sebaiknya dibagikan hanya ke technical PIC yang authorized.

---

## 5. Current Website Strengths

Website Yoora Sarah memiliki fondasi awal yang layak dikembangkan.

### 5.1 Brand dan visual

- Visual brand sudah mengarah ke fashion commerce premium.
- Product imagery menjadi aset kuat.
- Struktur kategori dan halaman produk sudah ada.
- Material/care information dan size guidance sudah mulai tersedia.
- WhatsApp support terlihat sebagai jalur bantuan customer.

### 5.2 Ecommerce primitives

Fitur dasar yang sudah terlihat:

- katalog produk;
- category / product listing;
- product detail page;
- color/size variants;
- wishlist;
- cart;
- account/profile;
- unpaid order flow;
- payment handoff;
- policy/help pages.

### 5.3 Technical foundation

Sinyal teknis yang terlihat:

- frontend modern berbasis Next.js/React;
- deployment frontend melalui Vercel;
- route pattern berbasis locale;
- backend/API terpisah;
- ecommerce flow sudah mulai terbentuk.

### 5.4 Kesimpulan kekuatan

Yoora Sarah tidak perlu diposisikan sebagai website yang “belum ada fondasi”. Yang lebih tepat:

> Yoora Sarah sudah memiliki fondasi ecommerce, tetapi belum cukup matang untuk scaling traffic dan conversion tanpa remediation, frontend improvement, SEO rescue, dan tracking foundation.

---

## 6. Deep Analytic Findings — Security / Backend / API Risk

Bagian ini menampilkan temuan security/backend/API sebagai hasil analytic dan rekomendasi. Implementasi backend tidak termasuk dalam scope frontend rebuild.

### 6.1 Summary temuan security

Ditemukan 5 isu terkonfirmasi:

| ID | Area | Severity | Priority | Ringkasan |
|---|---|---:|---:|---|
| SEC-001 | Order detail page | High | P1 | Halaman unpaid order detail perlu validasi ownership lebih kuat. |
| SEC-002 | Order detail API | High | P1 | API order detail perlu server-side object authorization yang konsisten. |
| SEC-003 | Unpaid order list | Medium | P1 | Daftar unpaid order perlu isolasi data per customer. |
| SEC-004 | Order collection API | Medium | P1 | API collection order perlu filter ownership yang lebih ketat. |
| SEC-005 | Guest wishlist | Medium | P1 | Wishlist guest tidak boleh bergantung pada identifier yang dapat dikontrol client. |

### 6.2 SEC-001 — Order detail page ownership risk

**Affected area:** unpaid order detail page class  
**Severity:** High  
**Priority:** P1

#### Factual finding

Terdapat indikasi bahwa halaman detail unpaid order membutuhkan validasi ownership yang lebih kuat agar customer hanya dapat mengakses order miliknya sendiri.

#### Business impact

- Risiko customer dapat melihat informasi order yang bukan miliknya.
- Risiko trust terhadap brand menurun jika data order/customer terlihat lintas akun.
- Risiko reputasi sebelum website dijadikan channel penjualan utama.

#### Technical impact

- Access control perlu enforce ownership di server side.
- Page route tidak boleh hanya mengandalkan keberadaan `order_id`.
- Order detail harus dicek terhadap current authenticated customer.

#### Evidence handling

- Order identifier asli tidak ditampilkan di dokumen ini.
- Payload/reproduction step detail tidak ditampilkan di main proposal.
- Evidence sensitif sebaiknya hanya dibuka untuk technical PIC authorized.

#### Recommendation

- Tambahkan ownership check di server/API layer.
- Pastikan order detail hanya bisa diakses oleh customer pemilik order.
- Return safe denial untuk order yang bukan milik user.
- Lakukan retest dengan minimal dua akun customer berbeda.

#### Acceptance criteria

- Account A tidak bisa membuka order detail milik Account B.
- UI tidak menampilkan data order asing.
- API tidak mengembalikan object order asing.
- Error/denial response aman dan tidak membocorkan metadata sensitif.

---

### 6.3 SEC-002 — Order detail API BOLA / object authorization risk

**Affected area:** order detail API class  
**Severity:** High  
**Priority:** P1

#### Factual finding

API order detail membutuhkan enforcement object authorization yang lebih kuat agar response hanya diberikan jika current user berhak atas order tersebut.

#### Business impact

- Potensi paparan informasi customer/order/payment metadata.
- Risiko compliance dan trust.
- Risiko lebih tinggi karena API dapat mengembalikan data mentah yang tidak terlihat di UI.

#### Technical impact

- Query API harus dibatasi berdasarkan customer/session aktif.
- API response perlu meminimalkan field sensitif.
- Authorization policy harus konsisten di semua endpoint order.

#### Recommendation

- Centralize order ownership authorization.
- Scope query berdasarkan authenticated customer.
- Minimalkan data sensitif di response.
- Tambahkan regression test untuk valid order, invalid order, dan foreign order.

#### Acceptance criteria

- API menolak request object yang bukan milik current user.
- Tidak ada PII/payment metadata yang terbuka untuk foreign object.
- Semua endpoint detail order mengikuti policy yang sama.

---

### 6.4 SEC-003 — Unpaid order list exposure risk

**Affected area:** unpaid order list page  
**Severity:** Medium  
**Priority:** P1

#### Factual finding

Daftar unpaid order perlu memastikan data yang tampil hanya milik customer yang sedang login.

#### Business impact

- Customer dapat kehilangan trust jika daftar order tidak terisolasi.
- Risiko confusion pada account/order area.
- Potensi eksposur data order lintas akun.

#### Recommendation

- Filter unpaid order list berdasarkan current customer.
- Pastikan pagination/status filter tidak melewati boundary ownership.
- Retest dengan dua akun dan beberapa status order.

---

### 6.5 SEC-004 — Order collection API exposure risk

**Affected area:** order collection API class  
**Severity:** Medium  
**Priority:** P1

#### Factual finding

API collection order perlu memastikan filter status, pagination, dan list query tetap dibatasi ke customer pemilik data.

#### Business impact

- Risiko data order terkumpul dari customer lain.
- Risiko API menjadi sumber exposure lebih besar dibanding UI.

#### Recommendation

- Terapkan ownership filter di semua collection query.
- Validasi kombinasi `status`, `page`, dan `limit` agar tidak mengembalikan data asing.
- Tambahkan test untuk status unpaid/paid/cancelled jika tersedia.

---

### 6.6 SEC-005 — Guest wishlist trust boundary risk

**Affected area:** guest wishlist  
**Severity:** Medium  
**Priority:** P1

#### Factual finding

Wishlist guest tidak ideal jika bergantung pada identifier yang dapat dikontrol dari sisi client/browser. Guest identity seharusnya diterbitkan, divalidasi, dan dilindungi oleh server.

#### Business impact

- Wishlist dapat merepresentasikan interest dan intent belanja customer.
- Risiko trust menurun jika wishlist dapat berubah/terbaca lintas session.
- Shopping state dapat dimanipulasi.

#### Technical impact

- Client-controlled identifier tidak cukup kuat sebagai guest identity.
- Guest token harus opaque, server-issued, dan memiliki integrity protection.
- Merge wishlist saat login perlu dirancang aman.

#### Recommendation

- Gunakan opaque guest token dari server.
- Tambahkan expiry/rotation jika diperlukan.
- Lindungi token dari tampering/replay.
- Tambahkan test untuk guest session A vs guest session B.

---

### 6.7 Backend/API summary recommendation

Backend/security work yang direkomendasikan untuk vendor/backend team:

1. Centralized authorization policy untuk order/account resources.
2. Ownership-scoped query untuk semua order detail dan order list endpoint.
3. Safe denial response untuk object yang bukan milik user.
4. Data minimization pada order/payment response.
5. Server-issued guest token untuk wishlist/cart guest state.
6. Session/auth refresh flow review.
7. Security regression testing untuk two-account dan two-session scenarios.
8. Staging/production environment separation.
9. Go-live retest sebelum traffic dinaikkan.

> Catatan: Semua item di atas adalah rekomendasi backend/security. Implementasi backend tidak termasuk dalam paket frontend rebuild yang ditawarkan di dokumen ini.

---

## 7. Deep Analytic Findings — UI/UX & Frontend

### 7.1 Homepage

#### Temuan

Homepage sudah punya visual brand yang cukup kuat, tetapi area awal belum sepenuhnya diarahkan sebagai conversion entry point.

#### Masalah utama

- CTA belum cukup eksplisit untuk mengarahkan customer ke belanja.
- Trust signal belum terlihat kuat di first viewport.
- New arrival, best seller, campaign, dan product highlight dapat dibuat lebih strategis.
- Mobile navigation masih bisa diringkas.
- Hero area bisa lebih fokus pada action, bukan hanya visual.

#### Business impact

- Pengunjung bisa hanya melihat-lihat tanpa lanjut ke product exploration.
- Campaign traffic dari ads/social bisa kehilangan momentum.
- Brand terlihat premium, tetapi conversion direction belum maksimal.

#### Recommendation

- Tambahkan CTA utama: `Belanja Sekarang`, `Lihat Koleksi`, `Shop New Arrival`.
- Tambahkan trust strip: secure checkout, easy exchange, WhatsApp support, official store.
- Tampilkan best seller/new arrival lebih cepat.
- Buat campaign/product drop section.
- Optimalkan mobile hierarchy.

---

### 7.2 Category / PLP

#### Temuan

PLP sudah menampilkan grid produk, tetapi discovery tools masih perlu diperkuat agar customer lebih cepat menemukan produk yang cocok.

#### Masalah utama

- Filter size/color/price/availability belum menjadi pengalaman utama.
- Sort belum cukup jelas untuk newest, best seller, price, discount.
- Active filter chips perlu ditampilkan.
- Product badges seperti `New`, `Best Seller`, `Sale`, `Limited Stock` dapat meningkatkan urgency.
- Product card CTA dapat dibuat lebih jelas.

#### Recommendation

- Mobile filter drawer.
- Sort bar.
- Active filter chips.
- Product badge system.
- Quick add / quick view jika sesuai backend.
- Tracking untuk filter_apply, sort_apply, select_item.

---

### 7.3 Product Detail Page / PDP

#### Temuan

PDP memiliki komponen dasar yang baik seperti gallery, variant, size, stock, material/care, tetapi trust dan decision support perlu diperkuat.

#### Masalah utama

- Trust block belum cukup kuat di dekat CTA.
- Variant/size selector dapat dibuat lebih ringan.
- Empty review state belum memberi social proof.
- Product metadata perlu diperbaiki.
- Informasi delivery, return/exchange, dan payment assurance perlu lebih dekat ke purchase decision.

#### Recommendation

- Sticky add-to-cart untuk mobile.
- Trust block dekat CTA.
- Better size guide placement.
- Variant grouping.
- Unavailable state yang jelas.
- Related products / complete the look.
- Review empty-state yang tetap membangun trust.

---

### 7.4 Cart & Checkout UI

#### Temuan

Cart dan checkout adalah area kritis untuk conversion. Walau backend/payment logic tidak termasuk scope frontend rebuild, UI/UX checkout tetap perlu dibuat lebih jelas dan meyakinkan.

#### Masalah utama

- Trust signal perlu muncul sebelum customer melanjutkan pembayaran.
- Error handling dan state kosong perlu jelas.
- Promo/voucher input perlu user-friendly.
- Shipping/payment expectation perlu lebih transparan.
- WhatsApp help fallback dapat mengurangi abandonment.

#### Recommendation

- Cart summary yang jelas.
- Promo/voucher UI yang mudah dipakai.
- Shipping estimate / delivery note.
- Secure payment trust signal.
- WhatsApp help entry point.
- Checkout step indicator.
- Clear error state.

---

### 7.5 Account / Order UI

#### Temuan

Account/order area perlu meningkatkan trust dan clarity karena berhubungan langsung dengan data customer dan riwayat transaksi.

#### Recommendation

- Order list dengan status jelas.
- Order detail UI yang aman dan readable.
- Payment instruction clarity.
- Support/handoff option.
- Empty state yang informatif.
- Copy yang menenangkan customer saat order belum dibayar/diproses.

---

## 8. Deep Analytic Findings — SEO

### 8.1 Canonical issue

#### Temuan

Beberapa halaman terindikasi mengarah ke canonical yang tidak spesifik ke halaman tersebut.

#### Dampak

- Google dapat membaca halaman produk/kategori sebagai duplikat.
- Halaman produk/kategori sulit ranking.
- Search equity tidak diarahkan ke URL yang tepat.

#### Recommendation

- Generate canonical per product/category/page.
- Pastikan locale canonical konsisten.
- Validasi canonical di `/id` dan `/en`.

---

### 8.2 Sitemap / robots issue

#### Temuan

robots dan sitemap perlu diperbaiki agar crawler membaca struktur website dengan benar.

#### Dampak

- Crawl path tidak optimal.
- Path locale dapat membingungkan crawler.
- Produk/kategori berisiko tidak terindex optimal.

#### Recommendation

- Generate XML sitemap valid.
- Pastikan robots.txt mengarah ke sitemap yang benar.
- Hapus malformed locale path.
- Submit sitemap ke Google Search Console.

---

### 8.3 Metadata issue

#### Temuan

Product page metadata perlu spesifik. Fallback seperti `Beranda | Yoora Sarah` pada product page akan melemahkan relevance.

#### Recommendation

- Dynamic title per product.
- Meta description per product/category.
- Open Graph image/title per product.
- Product structured data.

---

### 8.4 H1 / content hierarchy

#### Temuan

H1 perlu tersedia dan jelas di halaman penting.

#### Recommendation

- Satu H1 per page template.
- Homepage H1 sesuai brand/category positioning.
- Category H1 sesuai nama kategori.
- Product H1 sesuai nama produk.
- Content hierarchy harus accessible dan crawlable.

---

## 9. Deep Analytic Findings — Analytics & Ads Readiness

### 9.1 GA4 ecommerce events belum lengkap

Website perlu event map yang jelas untuk mengukur funnel ecommerce.

#### Required events

- `view_item_list`
- `select_item`
- `view_item`
- `add_to_cart`
- `remove_from_cart`
- `begin_checkout`
- `add_shipping_info`
- `add_payment_info`
- `purchase`
- `refund`
- `search`
- `login`
- `sign_up`
- `whatsapp_click`

#### Additional events

- `filter_apply`
- `sort_apply`
- `wishlist_add`
- `voucher_apply`
- `checkout_error`

### 9.2 Ads readiness

Untuk Google Ads, Meta Ads, TikTok Ads, dan campaign traffic, website perlu:

- conversion event yang valid;
- UTM handling;
- landing page campaign;
- purchase dedupe;
- product/category event mapping;
- WhatsApp click tracking;
- dashboard revenue/funnel.

### 9.3 Recommendation

- Buat event tracking specification.
- Siapkan frontend event hook points.
- Integrasikan GA4/Meta/TikTok/Google Ads sesuai kebutuhan.
- Validasi semua event di staging sebelum campaign aktif.

---

## 10. Deep Analytic Findings — Performance

### Temuan

Fashion ecommerce sangat bergantung pada image dan visual. Karena itu, performance tidak bisa diperlakukan sebagai pekerjaan kecil.

### Area yang perlu dianalisis/diperbaiki

- LCP image.
- Image size dan format.
- Font loading.
- Layout shift.
- Third-party scripts.
- Cache strategy.
- Mobile performance.
- Product/category rendering.

### Target recommended

- LCP ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1
- 75th percentile mobile/desktop

### Recommendation

- Buat Core Web Vitals baseline.
- Optimalkan hero/product image.
- Audit font loading.
- Review public page cache.
- Monitor after launch.

---

## 11. AI Feature Opportunity

AI tidak disarankan langsung menjadi core scope sebelum fondasi ecommerce aman dan terukur. Namun Yoora Sarah punya use case yang kuat untuk AI feature setelah frontend foundation matang.

### 11.1 AI Stylist

#### Concept

AI Stylist membantu customer memilih produk berdasarkan:

- occasion;
- warna favorit;
- style preference;
- ukuran;
- budget;
- item yang sedang dilihat;
- product availability.

#### Frontend feature suggestion

- Style quiz.
- Outfit recommendation result.
- Product bundle UI.
- Complete the look section.
- Save/share look.
- Add all to cart.

#### Requirement

- Product tagging.
- Size/color/style taxonomy.
- Recommendation rules or AI layer.
- Data quality.

### 11.2 AI Assistant + CS handoff

#### Concept

AI Assistant membantu pertanyaan awal customer, lalu handoff ke CS/WhatsApp jika perlu manusia.

#### Use cases

- cari produk;
- size guide;
- shipping question;
- return/exchange question;
- payment help;
- product recommendation;
- order assistance;
- campaign FAQ.

#### Handoff logic

Handoff ke CS jika:

- customer meminta human;
- confidence rendah;
- pertanyaan terkait order/payment issue;
- ada complaint;
- customer siap membeli dan butuh bantuan cepat.

#### Frontend suggestion

- Chat launcher.
- Product-aware assistant entry.
- FAQ quick replies.
- WhatsApp handoff button.
- Conversation summary passed to CS.

> Catatan: AI backend/model/API integration tidak termasuk dalam frontend rebuild dasar. Dapat menjadi add-on setelah fondasi ecommerce siap.

---

## 12. Professional Ecommerce Benchmark

Website ecommerce profesional umumnya memiliki:

| Area | Standard profesional | Gap Yoora Sarah |
|---|---|---|
| Homepage | CTA kuat, trust strip, product highlight | CTA dan trust perlu diperkuat |
| PLP | Filter, sort, badges, active chips | Discovery tools perlu ditingkatkan |
| PDP | Sticky CTA, trust, review, related products | Trust dan decision support perlu diperkuat |
| Cart | Clear summary, promo, shipping info | Perlu UX clarity |
| Checkout | Step clarity, payment trust, error handling | Perlu UX confidence |
| SEO | canonical, sitemap, metadata, H1, schema valid | Ada P1 blocker |
| Analytics | GA4 ecommerce + ads conversion | Belum terkonfirmasi lengkap |
| Security | ownership enforcement | Perlu backend/vendor remediation |
| Performance | CWV baseline dan image optimization | Baseline perlu dibuat |
| AI readiness | product taxonomy + recommendation UI | Opportunity belum dimanfaatkan |

---

## 13. Solusi & Recommendation Summary

### UI/UX & Frontend

- Full ecommerce frontend rebuild.
- Premium mobile-first layout.
- Homepage conversion structure.
- PLP filter/sort/badge system.
- PDP trust/variant/review improvements.
- Cart/checkout UI clarity.
- Account/order UI refinement.
- Campaign landing template.
- Design system.

### SEO

- Dynamic metadata structure.
- Correct canonical per route.
- Valid XML sitemap.
- Correct robots.txt.
- H1 per page template.
- Product structured data.
- Category SEO content blocks.

### Analytics / Ads

- GA4 ecommerce event map.
- Conversion tracking readiness.
- WhatsApp click tracking.
- UTM/campaign readiness.
- Dashboard metrics.

### Performance

- CWV baseline.
- Image optimization.
- Font optimization.
- Cache review.
- Mobile speed optimization.

### Backend / Security Recommendation Only

- Order ownership remediation.
- API authorization enforcement.
- Guest wishlist token hardening.
- Data minimization.
- Session/auth review.
- Security retest.

### AI / Growth Feature Opportunity

- AI Stylist.
- AI Assistant + CS handoff.
- Product recommendation UI.
- Campaign landing system.
- Promo/voucher abuse prevention recommendation.

---

## 14. Single Offer

### Yoora Sarah — Deep Analytic Report & Professional Ecommerce Frontend Rebuild

**Harga:** Rp120.000.000 all-in  
**Model:** Fixed scope, one-time project  
**Scope utama:** Analytic mendalam + UI/UX frontend full rebuild  
**Catatan:** Backend/security/API findings masuk sebagai rekomendasi, bukan implementasi.

Penawaran ini sengaja dibuat sebagai **satu paket spesifik**, bukan daftar opsi bertingkat. Tujuannya agar Yoora Sarah mendapatkan keputusan yang jelas: analytic yang cukup dalam untuk memahami masalah website saat ini, lalu frontend ecommerce yang dibangun ulang secara profesional untuk memperbaiki pengalaman belanja, struktur SEO frontend, dan kesiapan tracking.

---

## 15. Scope Pekerjaan 1 — Deep Analytic Report

Deep Analytic Report mencakup:

- laporan analytic mendalam;
- temuan UI/UX;
- temuan frontend;
- ecommerce flow;
- SEO;
- analytics/ads readiness;
- performance;
- backend/security/API findings sebagai rekomendasi saja;
- professional ecommerce benchmark;
- roadmap prioritas.

### Deliverables

- Executive analytic report.
- Full website findings summary.
- UI/UX and frontend issue map.
- Ecommerce flow review.
- SEO, analytics, ads readiness, and performance recommendations.
- Backend/security/API recommendation summary.
- Professional ecommerce benchmark.
- Prioritized roadmap.
- Presentation/walkthrough material.

---

## 16. Scope Pekerjaan 2 — UI/UX Frontend Full Rebuild

UI/UX Frontend Full Rebuild mencakup:

- rebuild UI/UX frontend ecommerce profesional;
- homepage;
- category / PLP;
- product detail / PDP;
- wishlist UI;
- cart UI;
- checkout UI;
- account/order UI;
- static pages;
- mobile-first responsive;
- ecommerce design system;
- SEO-ready frontend structure;
- analytics event hook plan;
- AI Stylist / AI Assistant placement suggestion sebagai frontend concept;
- frontend QA + handover.

### Output frontend

- Struktur halaman ecommerce yang lebih premium dan conversion-ready.
- Component/design system untuk storefront utama.
- Responsive mobile-first UI.
- SEO-ready frontend pattern untuk halaman penting.
- Tracking hook plan untuk event ecommerce.
- Handover notes untuk internal/vendor team.

---

## 17. Tidak Termasuk Scope

Harga Rp120.000.000 all-in tidak termasuk:

- backend implementation;
- API rebuild;
- database;
- payment backend;
- security patching;
- AI backend/model/API;
- ads campaign operation;
- legal/compliance consulting;
- third-party subscription fees;
- hosting/cloud cost di luar frontend deployment yang disepakati;
- mass SEO content writing;
- maintenance bulanan setelah handover, kecuali dibuat agreement terpisah.

Backend/security/API findings tetap dicatat dalam report sebagai rekomendasi agar dapat diteruskan ke backend/vendor yang authorized.

---

## 18. Required Client Inputs

Sebelum analytic/rebuild dimulai, Yoora Sarah perlu menyediakan:

- technical PIC;
- staging or safe test access jika tersedia;
- current website/backend/vendor contact jika diperlukan;
- brand guideline/logo/assets;
- product/category data reference;
- priority business goals;
- target market/customer profile;
- access to Search Console/GA4/Ads jika ingin analytics/SEO review lebih akurat;
- approval boundary untuk security retest jika dilakukan terpisah oleh backend/security vendor.

---

## 19. Final Recommendation

Rekomendasi Meanwhile: gunakan satu paket **Yoora Sarah — Deep Analytic Report & Professional Ecommerce Frontend Rebuild** senilai **Rp120.000.000 all-in**.

Alasan:

1. Scope fokus pada dua pekerjaan yang paling relevan saat ini: analytic mendalam dan frontend rebuild.
2. Harga tidak mengambil tanggung jawab backend/security remediation yang membutuhkan scope, akses, dan otorisasi terpisah.
3. Yoora Sarah tetap mendapat insight backend/security/API yang cukup untuk diteruskan ke vendor/backend team.
4. Frontend dapat dibangun lebih premium, mobile-first, SEO-ready, analytics-ready, dan conversion-ready.
5. AI Stylist / AI Assistant ditempatkan sebagai konsep UI dan placement suggestion, bukan backend AI production scope.

Dengan pendekatan ini, Yoora Sarah mendapatkan dokumen analytic yang jelas sekaligus frontend ecommerce profesional tanpa membuat scope melebar ke backend, database, payment, atau security implementation.
