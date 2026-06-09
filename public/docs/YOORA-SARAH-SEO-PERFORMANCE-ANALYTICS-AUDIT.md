# Yoora Sarah — SEO, Performance & Analytics Audit

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** SEO / Performance / Analytics Audit  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Executive Summary

Yoora Sarah has public ecommerce pages that can become strong organic acquisition and campaign landing assets. However, passive live audit found major technical SEO blockers and unconfirmed ecommerce analytics readiness.

Top priorities:

1. fix canonical generation
2. fix robots/sitemap references and malformed locale paths
3. fix product/category metadata
4. add SSR-visible H1 per page
5. validate hreflang/canonical alignment
6. validate Product structured data
7. implement GA4 ecommerce event tracking
8. establish Core Web Vitals baseline

---

## 2. Audit Scope

Observed sources:

- homepage `/id`
- homepage `/en`
- category pages including `/id/dress`
- product page `/id/dress/clara-dress-5254`
- `robots.txt`
- `sitemap.xml`
- `/id/sitemap.xml`
- response headers

Review areas:

- canonical
- sitemap/robots
- metadata
- H1
- hreflang
- structured data
- cache/performance signals
- analytics readiness

---

## 3. SEO Findings

## SEO-001 — Canonical Misconfiguration

**Priority:** P1

Observed examples:

- Indonesian homepage canonical uses non-www host while visited host is `www`
- English homepage canonical points to Indonesian homepage
- category pages canonicalize to homepage
- product pages need page-specific canonical validation

Impact:

- category/product pages may be treated as duplicate homepage
- English page may not index independently
- hreflang and canonical signals conflict
- SEO equity diluted

Recommendation:

- self-referencing canonical per route
- consistent production host
- locale-aware canonical
- domain-aware canonical for multi-domain/staging

Acceptance criteria:

- `/id` canonical points to `/id`
- `/en` canonical points to `/en`
- `/id/dress` canonical points to `/id/dress`
- `/id/dress/clara-dress-5254` canonical points to exact product URL
- tracking/query params stripped

---

## SEO-002 — Robots & Sitemap Issue

**Priority:** P1

Observed robots:

```txt
User-Agent: *
Allow: /
Sitemap: https://yoorasarah.com/id/sitemap.xml
```

Issue:

- `/id/sitemap.xml` resolves to HTML page, not XML
- root sitemap exists but includes suspicious malformed locale paths:
  - `/id/en/`
  - `/id/en/dress/deluna`
  - `/id/id/`
  - `/id/id/dress/deluna`

Impact:

- crawl waste
- invalid URL discovery
- duplicate locale confusion
- Search Console submission risk
- sitemap/canonical mismatch

Recommendation:

- robots should reference valid XML sitemap
- sitemap must include canonical live URLs only
- remove nested locale paths
- validate content-type `application/xml`
- submit corrected sitemap in Search Console

Acceptance criteria:

- `robots.txt` points to valid sitemap URL
- sitemap returns XML
- sitemap URLs are 200/indexable/canonical
- no `/id/id` or `/id/en` malformed paths

---

## SEO-003 — Product Metadata Fallback

**Priority:** P1

Observed product page:

```txt
https://www.yoorasarah.com/id/dress/clara-dress-5254
Title: Beranda | Yoora Sarah
```

Impact:

- product SEO weak
- duplicate title risk
- product share preview weak
- search intent for product name not targeted

Recommendation:

Generate product metadata from product data:

```txt
<title>{Product Name} | Yoora Sarah</title>
<meta name="description" content="{Short product description, category, key selling point}">
```

Optional improved format:

```txt
Clara Dress — Dress Muslim Wanita | Yoora Sarah
```

Acceptance criteria:

- product title includes product name
- meta description route-specific
- OG title/image reflect product
- no product page uses homepage fallback title

---

## SEO-004 — Category Metadata Quality

**Priority:** P1/P2

Observed category title examples include raw slug/numeric suffix patterns:

- `Kategori limited-offer-5310 | Yoora Sarah`
- `Kategori abaya-2481 | Yoora Sarah`
- `Kategori pashmina-2310 | Yoora Sarah`

Impact:

- poor search appearance
- weak category intent targeting
- less professional SERP snippet

Recommendation:

Use display category names:

- `Dress Muslim Wanita | Yoora Sarah`
- `Koleksi Abaya | Yoora Sarah`
- `Pashmina Premium | Yoora Sarah`
- `Limited Offer | Yoora Sarah`

Acceptance criteria:

- category title uses user-friendly display name
- description explains category value
- OG title matches category

---

## SEO-005 — H1 Missing / Not Extracted

**Priority:** P1/P2

Observed:

- no H1 extracted in initial passive checks

Impact:

- weaker semantic page structure
- crawler may not identify primary topic clearly
- accessibility and SEO quality reduced

Recommendation:

Add one SSR-visible H1 per page:

| Page Type | H1 Example |
|---|---|
| Homepage | `Yoora Sarah — Brand Fashion Muslim Premium` |
| Category | `Dress` / `Koleksi Dress Muslim` |
| Product | `Clara Dress` |
| Policy | page-specific policy name |

Acceptance criteria:

- one H1 per indexable route
- H1 exists in server-rendered HTML or crawler-visible content
- H1 matches page intent

---

## SEO-006 — Hreflang Alignment

**Priority:** P2

Observed:

- hreflang system exists for `/id`, `/en`, and `x-default`
- canonical conflicts with hreflang because canonical points to `/id/`

Impact:

- localized pages may confuse search engines
- English pages may not index as intended

Recommendation:

- fix canonical first
- validate reciprocal hreflang pairs
- ensure `/id` points to `/en` alternate and vice versa
- define `x-default` strategy
- ensure product/category alternates exist and return 200

Acceptance criteria:

- canonical and hreflang not conflicting
- reciprocal hreflang valid
- x-default intentional

---

## SEO-007 — Structured Data

**Priority:** P2

Observed:

- JSON-LD present, but product schema needs validation

Recommendation:

Product schema should include:

- name
- image
- description
- sku if available
- brand
- offer
- price
- priceCurrency
- availability
- URL

Breadcrumb schema recommended for:

```txt
Home → Category → Product
```

Avoid:

- fake review aggregate when no reviews exist
- price/stock mismatch between schema and visible page

Acceptance criteria:

- Product Rich Results validation passes
- schema matches visible content
- no invalid review/rating markup

---

## 4. Performance Audit

### 4.1 Observed Signals

Positive:

- Brotli compression enabled
- Vercel edge delivery
- static route cache HIT for robots/sitemap
- modern Next.js stack

Potential issues:

- public pages observed with `private, no-cache, no-store`
- `X-Vercel-Cache: MISS` on public route requests
- many font preload signals
- image-heavy fashion pages likely LCP-sensitive

---

### 4.2 Core Web Vitals Targets

Google-recommended targets:

| Metric | Target | Meaning |
|---|---:|---|
| LCP | ≤ 2.5s | loading performance |
| INP | ≤ 200ms | interaction responsiveness |
| CLS | ≤ 0.1 | visual stability |

Reporting standard:

- 75th percentile
- mobile and desktop segmented
- route/page-type based

---

### 4.3 Performance Recommendations

#### Route-level Baseline

Measure:

- homepage
- category/PLP
- product/PDP
- cart
- checkout
- account/order pages

Acceptance:

- each page type has LCP/INP/CLS baseline
- mobile and desktop separated

#### Cache Strategy

Review caching:

- public homepage/category/product pages may use ISR/edge caching where safe
- account/cart/checkout/order pages must remain private/no-cache
- product stock/pricing invalidation must be considered

Acceptance:

- public pages cache safely
- private pages never cache sensitive content

#### Image Optimization

Tasks:

- responsive image sizes
- LCP image priority
- lazy load below-fold images
- compress without harming fashion visual quality
- ensure width/height to prevent CLS

Acceptance:

- hero/product images optimized
- CLS remains ≤ 0.1

#### Font Optimization

Tasks:

- reduce unnecessary font preloads
- keep critical font weights only
- use `font-display` strategy
- avoid blocking LCP image

Acceptance:

- no visible typography regression
- font loading no longer competes excessively with LCP

---

## 5. Analytics Audit

### 5.1 Current Observation

Observed:

- Vercel Analytics / Speed Insights domains in CSP
- GA4/Meta/TikTok not confirmed from passive header crawl

Risk:

- website may not have complete ecommerce funnel tracking
- conversion decisions may rely on incomplete data

---

### 5.2 Required GA4 Ecommerce Events

| Funnel Step | GA4 Event |
|---|---|
| Category/product list viewed | `view_item_list` |
| Product selected | `select_item` |
| Product detail viewed | `view_item` |
| Add to cart | `add_to_cart` |
| Remove from cart | `remove_from_cart` |
| Checkout started | `begin_checkout` |
| Shipping added | `add_shipping_info` |
| Payment added | `add_payment_info` |
| Purchase completed | `purchase` |
| Refund/cancel tracked | `refund` |
| Search performed | `search` |
| Login | `login` |
| Registration | `sign_up` |

Additional useful events:

- `filter_apply`
- `sort_apply`
- `wishlist_add`
- `whatsapp_click`
- `voucher_apply`
- `checkout_error`

---

### 5.3 Event Data Requirements

For ecommerce events, include:

- `currency`
- `value`
- `items[]`
- `item_id`
- `item_name`
- `item_category`
- `item_variant`
- `price`
- `quantity`
- `discount` where applicable

For purchase:

- stable `transaction_id`
- final paid value
- shipping/tax if available
- coupon/voucher if used
- deduplication rule

Acceptance:

- events fire once
- purchase event not duplicated on refresh
- refund/cancel logic defined
- DebugView validates payload

---

### 5.4 Dashboard Recommendation

Dashboard should show:

- users/sessions by channel
- product list views
- product detail views
- add-to-cart rate
- checkout start rate
- purchase conversion rate
- revenue by product/category
- voucher usage
- WhatsApp click volume
- mobile vs desktop conversion
- funnel drop-off

Use monthly maintenance report to review:

- SEO indexation
- performance metrics
- conversion funnel
- top products/categories
- campaign performance
- issue backlog

---

## 6. Priority Matrix

| ID | Issue | Priority |
|---|---|---:|
| SEO-001 | Canonical misconfiguration | P1 |
| SEO-002 | Robots/sitemap issue | P1 |
| SEO-003 | Product metadata fallback | P1 |
| SEO-004 | Category metadata quality | P1/P2 |
| SEO-005 | H1 missing/not extracted | P1/P2 |
| SEO-006 | Hreflang alignment | P2 |
| SEO-007 | Structured data validation | P2 |
| PERF-001 | CWV baseline | P2 |
| PERF-002 | Cache strategy review | P2/P3 |
| PERF-003 | Image/font optimization | P2/P3 |
| AN-001 | GA4 ecommerce event map | P2 |
| AN-002 | Purchase event validation | P2 |
| AN-003 | Dashboard setup | P2/P3 |

---

## 7. Final Recommendation

Immediate technical SEO fixes should run before major campaign or full migration:

1. canonical
2. sitemap/robots
3. product/category metadata
4. H1
5. hreflang validation

Analytics must be implemented before launch or campaign scale:

1. GA4 ecommerce event spec
2. purchase deduplication
3. DebugView QA
4. funnel dashboard

Performance must be measured by route type:

1. homepage
2. category
3. product
4. cart
5. checkout

Client-facing summary:

> Yoora Sarah has the visual and technical foundation for ecommerce, but discoverability, speed, and measurement must be corrected before scaling. SEO fixes help customers find products; performance helps them stay; analytics helps the team know what to improve.
