# Yoora Sarah — Final Audit Report

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Final Audit Report  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Executive Summary

Yoora Sarah sudah memiliki fondasi ecommerce modern: katalog produk, kategori, product detail page, wishlist, cart, customer account, unpaid order flow, payment handoff, policy/help pages, dan WhatsApp support.

Namun, audit menemukan blocker penting sebelum website aman dijadikan primary ecommerce channel:

- 5 confirmed vulnerabilities pada order authorization dan guest wishlist state
- canonical dan sitemap issue yang dapat menghambat SEO
- product page metadata fallback ke homepage title
- no H1 extracted pada passive check
- UX/CRO gaps pada CTA, trust messaging, PLP filter, PDP trust block
- full GA4 ecommerce tracking belum confirmed
- performance perlu route-level Core Web Vitals baseline

Final verdict:

> Yoora Sarah should run remediation-first ecommerce migration before using website as main sales channel.

---

## 2. Audit Scope

### 2.1 Included

Audit final report ini mencakup:

- consolidation of existing security artifacts
- passive live observation on public website
- HTTP header and infrastructure signal review
- robots/sitemap/metadata review
- homepage UX observation
- category/PLP UX observation
- product/PDP UX observation
- ecommerce migration readiness assessment
- commercial and operational readiness implications

### 2.2 Not Included

Not included unless separately authorized:

- destructive security testing
- brute force
- denial-of-service testing
- payment abuse testing
- real transaction manipulation
- invasive production data testing
- full source code audit
- authenticated admin/backoffice audit
- load testing
- legal/privacy compliance opinion by lawyer

---

## 3. Methodology

Evidence sources:

1. Existing audit `.md` artifacts consolidated into master insight
2. Result folder vulnerability summaries
3. Passive live website observation
4. HTTP header review
5. sitemap/robots checks
6. browser observation of:
   - homepage desktop/mobile
   - category page `/id/dress`
   - product page `/id/dress/clara-dress-5254`
7. external ecommerce benchmark references for checkout, Core Web Vitals, and GA4 ecommerce measurement

Testing posture:

- read-only where live
- non-destructive
- no unauthorized exploitation
- evidence-based wording

---

## 4. Technical Stack Signals

Observed platform signals:

| Area | Evidence | Assessment |
|---|---|---|
| Frontend | `X-Powered-By: Next.js`, `X-Matched-Path` routes | Next.js / React storefront |
| Hosting | `Server: Vercel`, `X-Vercel-*` headers | Vercel frontend/edge |
| Routing | `/[locale]`, `/[locale]/[category]`, `/[locale]/[category]/[product]` | locale/category/product architecture |
| Backend | `api.yoorasarah.com`, Fly.io markers | separate backend/API service likely |
| Media | Tigris object storage signals in prior artifacts | object storage for product assets |
| Support | WhatsApp visible | customer support channel exists |

Likely architecture:

```txt
Vercel Next.js frontend
  → /api/webstore/* or api.yoorasarah.com
  → Fly.io-backed backend/service
  → object storage/media services
```

---

## 5. Security Findings

### 5.1 Summary

Confirmed vulnerabilities:

| ID | Severity | Finding | Affected Area | Priority |
|---|---:|---|---|---:|
| SEC-001 | High | IDOR in unpaid order detail page | `/id/profile/unpaid/<order_id>` | P1 |
| SEC-002 | High | BOLA in order detail API | `/api/webstore/orders/<order_id>` | P1 |
| SEC-003 | Medium | Cross-account unpaid order list exposure | `/id/profile/unpaid` | P1 |
| SEC-004 | Medium | Cross-account unpaid order API collection exposure | `/api/webstore/orders?...status=perlu_dibayar` | P1 |
| SEC-005 | Medium | Guest wishlist takeover via `X-Device-ID` | `/api/webstore/wishlists` | P1 |

Severity count:

| Severity | Count |
|---|---:|
| High | 2 |
| Medium | 3 |
| Low | 0 |
| Total | 5 |

---

### 5.2 SEC-001 — IDOR in Unpaid Order Detail Page

**Severity:** High  
**Priority:** P1  
**CWE:** CWE-639  
**Affected route:** `/id/profile/unpaid/<order_id>`

Finding:

An authenticated unrelated customer could access another customer's unpaid order detail page by directly visiting known unpaid order URL.

Impact:

- order detail exposure
- product/order information exposure
- shipping/payment context exposure
- privacy and trust impact
- possible unauthorized payment action context exposure

Root cause pattern:

```txt
Authenticated user + valid order ID = access
```

Expected secure pattern:

```txt
Authenticated user + valid order ID + ownership match = access
```

Recommended fix:

- add server-side ownership check
- return `403` or generic `404` for unauthorized access
- log unauthorized attempts safely
- add two-account regression test

---

### 5.3 SEC-002 — BOLA in Order Detail API

**Severity:** High  
**Priority:** P1  
**CWE:** CWE-639  
**Affected endpoint:** `/api/webstore/orders/<order_id>`

Finding:

An unrelated authenticated user could request another customer's order API and receive structured JSON.

Data exposed according to prior artifact:

- shipping address
- phone number
- email address
- order total
- payment external ID
- payment session ID
- payment-related metadata

Impact:

- PII disclosure
- payment metadata exposure
- automation/harvesting risk
- privacy violation
- brand trust risk

Recommended fix:

- scope API query by authenticated user
- minimize response payload
- remove unnecessary payment metadata
- return `403` or generic `404`
- test all order states, not only unpaid

---

### 5.4 SEC-003 — Cross-account Unpaid Order List Exposure

**Severity:** Medium  
**Priority:** P1  
**Affected route:** `/id/profile/unpaid`

Finding:

An unrelated authenticated user could see another customer's unpaid order summary in unpaid order list.

Data impact:

- order ID
- product name
- quantity
- total amount
- unpaid status

Business risk:

- order ID harvesting
- privacy exposure
- pivot to detail/API IDOR

Recommended fix:

- filter list data by current user
- add multi-user regression test
- verify all status filters

---

### 5.5 SEC-004 — Cross-account Unpaid Order Collection API Exposure

**Severity:** Medium  
**Priority:** P1  
**Affected endpoint:** `/api/webstore/orders?page=1&limit=10&status=perlu_dibayar`

Finding:

Order collection API returned another customer's unpaid order entry to unrelated authenticated user.

Impact:

- bulk order exposure
- payment metadata exposure
- order ID harvesting
- easier exploitation of detail endpoints

Recommended fix:

- add `user_id = current_user_id` to all collection queries
- audit every status filter
- test paginated responses
- verify response minimization

---

### 5.6 SEC-005 — Guest Wishlist Takeover via `X-Device-ID`

**Severity:** Medium  
**Priority:** P1  
**Affected endpoint:** `/api/webstore/wishlists`  
**Methods:** `GET`, `POST`, `DELETE`

Finding:

Guest wishlist trusts caller-controlled `X-Device-ID` as identity boundary.

Unsafe model:

```txt
request header X-Device-ID = guest identity
```

Confirmed behavior from artifact:

- session A creates wishlist under chosen device ID
- session B uses same device ID without shared cookies/login
- session B can read/change/delete same wishlist state

Impact:

- unauthorized read of guest wishlist
- unauthorized modification/deletion
- shopping state tampering
- browsing intent exposure
- customer trust friction

Recommended fix:

- stop trusting caller-supplied `X-Device-ID` as sole authority
- generate high-entropy server-issued guest token
- store token in secure cookie where feasible
- sign/verify client identifiers if used
- bind guest state server-side
- add expiry/rotation
- invalidate legacy identifiers safely

---

## 6. Security Header Review

Observed positive headers:

```txt
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: present
```

Strengths:

- strong HTTPS/HSTS baseline
- clickjacking protection exists
- MIME sniffing protection exists
- referrer policy exists
- sensitive browser API permissions restricted
- CSP exists

Improvement notes:

- `X-Powered-By: Next.js` exposes framework fingerprint
- CSP includes `'unsafe-inline'` and `'unsafe-eval'`
- auth cookie flags were not fully evaluated in passive header call

Recommendations:

- disable `X-Powered-By` where feasible
- gradually reduce `unsafe-eval`
- move toward nonce/hash-based CSP where practical
- confirm auth cookies use `Secure`, `HttpOnly`, and appropriate `SameSite`

---

## 7. SEO Findings

### 7.1 Canonical

Observed issue:

- homepage canonical uses non-www host while visited host is www
- English homepage canonical points to Indonesian homepage
- category pages canonicalize to homepage
- product canonical strategy needs correction

Impact:

- category/product pages may be treated as duplicates
- English page may not index independently
- SEO relevance diluted
- hreflang/canonical conflict

Recommendation:

- self-referencing canonical per page
- consistent host strategy
- domain-aware canonical for production/staging
- locale-aware canonical for `/id` and `/en`

---

### 7.2 Sitemap & Robots

Observed:

```txt
robots.txt → Sitemap: https://yoorasarah.com/id/sitemap.xml
```

Issue:

- `/id/sitemap.xml` returns HTML category-style page, not XML
- root sitemap returns XML but includes suspicious nested locale paths:
  - `/id/en/`
  - `/id/id/`

Impact:

- crawl waste
- invalid/duplicate locale paths
- Search Console submission problems
- canonical/sitemap mismatch

Recommendation:

- point robots to valid XML sitemap
- fix sitemap generation
- remove nested locale paths
- align sitemap URLs with canonical URLs

---

### 7.3 Metadata

Observed:

- product page title: `Beranda | Yoora Sarah`
- category titles use raw slugs/numeric suffixes in some cases
- product/category meta descriptions need route-specific generation

Impact:

- product SEO weak
- share previews weak
- duplicate title risk
- category search intent underused

Recommendation:

- product title uses product name
- category title uses display category name
- localized meta descriptions
- Open Graph metadata per route

---

### 7.4 H1

Observed:

- no H1 extracted in passive checks

Impact:

- weaker crawler semantics
- poorer page-topic clarity

Recommendation:

- one SSR-visible H1 per indexable page
- homepage H1 reflects brand
- category H1 reflects category
- product H1 reflects product name

---

### 7.5 Structured Data

Observed:

- JSON-LD exists in some pages, but product schema needs validation

Recommendation:

- validate Product schema
- include name, image, description, offer, price, currency, availability
- add BreadcrumbList where useful
- avoid fake AggregateRating if reviews are absent

---

## 8. UX/CRO Findings

### 8.1 Homepage

Strengths:

- strong visual-first fashion presentation
- category-led storytelling potential
- WhatsApp support visible
- premium editorial direction possible

Gaps:

- CTA not strong enough in first viewport
- category carousel may dilute action
- trust strip absent/not prominent above fold
- best-seller/new-arrival module not prominent
- mobile navigation dense

Recommendations:

- add clear hero CTA
- add trust strip
- add best seller/new arrival module
- improve mobile category discovery

---

### 8.2 Category / PLP

Strengths:

- efficient mobile product grid
- product card includes variant/size/price info
- wishlist/cart icons exist
- sale price visible

Gaps:

- filter not observed
- stock/urgency not visible at listing level
- icon-only CTA may be unclear
- product cards lack social proof

Recommendations:

- add filter drawer
- add badges
- improve CTA labels/accessibility
- track product list interactions

---

### 8.3 Product / PDP

Strengths:

- product gallery
- variant system
- size selector
- stock count
- size guide
- material/care content
- wishlist/cart actions

Gaps:

- metadata title wrong
- many color variants can overload decision-making
- empty review section weakens trust
- delivery/return/payment trust not visible near CTA
- product copy can be more structured

Recommendations:

- group variants
- show unavailable combinations clearly
- add trust block near CTA
- improve review empty state
- add fit/model/size guidance

---

## 9. Analytics Findings

Observed:

- Vercel analytics domains present in CSP
- GA4/Meta/TikTok not confirmed from passive header crawl

Required for full ecommerce:

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
- WhatsApp click events

Acceptance:

- events fire once
- `items` complete
- `currency` set
- `transaction_id` stable
- purchase deduplicated
- dashboard shows funnel drop-off

---

## 10. Performance Findings

Observed:

- Brotli compression enabled
- Vercel edge delivery
- many font preload signals
- public pages may return `private, no-cache, no-store`
- Vercel cache HIT for robots/sitemap, MISS for dynamic pages

Risk:

- public category/product pages may not benefit from edge cache
- font preload count may compete with LCP image
- image-heavy fashion ecommerce needs careful optimization

Recommended targets:

| Metric | Target |
|---|---:|
| LCP | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |

Measurement rule:

- 75th percentile
- mobile and desktop segmented
- page types: homepage, category, product, cart, checkout

---

## 11. Risk Matrix

| Risk | Likelihood | Impact | Priority | Recommended Action |
|---|---:|---:|---:|---|
| Cross-account order exposure | High | High | P1 | Fix ownership checks and retest |
| Order API PII/payment metadata exposure | High | High | P1 | Scope queries and minimize payload |
| Guest wishlist takeover | Medium | Medium | P1 | Server-issued trusted guest token |
| SEO canonical conflict | High | Medium | P1 | Self-referencing canonical per route |
| Broken sitemap reference | High | Medium | P1 | Fix robots and sitemap XML |
| Product metadata fallback | High | Medium | P1 | Product/category metadata generator |
| Missing H1 semantics | Medium | Medium | P1/P2 | SSR-visible H1 per template |
| Weak PLP filters | Medium | Medium | P2 | Mobile filter drawer |
| PDP trust gap | Medium | Medium | P2 | Trust block near CTA |
| Incomplete analytics | Medium | High | P2 | GA4 ecommerce tracking |
| Performance unknown | Medium | Medium | P2 | CWV baseline and optimization |

---

## 12. Migration Readiness Assessment

| Area | Current State | Readiness | Priority |
|---|---|---:|---:|
| Product catalog | Exists | Medium-High | P2 |
| Product detail | Good baseline, trust/SEO gaps | Medium | P2 |
| Wishlist/cart | Exists, guest wishlist issue confirmed | Medium-Low | P1 |
| Checkout/order | Exists, order auth issue confirmed | Low | P1 |
| Account/session | Exists, refresh instability noted | Medium-Low | P2 |
| Security/privacy | Confirmed vulnerabilities | Low | P1 |
| SEO | Major technical SEO issues | Medium-Low | P1 |
| UX/CRO | Strong visual, conversion gaps | Medium | P2 |
| Analytics | Not fully confirmed | Unknown | P2 |
| Performance | Needs route-level baseline | Unknown | P2 |

Verdict:

```txt
Not ready for full migration as-is.
Ready for structured remediation and ecommerce growth-readiness program.
```

---

## 13. Recommended Remediation Roadmap

### P1 — Must Fix Before Migration

1. unpaid order ownership checks
2. order API ownership checks
3. unpaid list/API filtering
4. guest wishlist identity boundary
5. payment metadata minimization
6. canonical generation
7. robots/sitemap generation
8. product metadata fallback
9. H1 per page template
10. security retest

### P2 — Required Before Scale

1. cart guest-state audit
2. session/refresh stability
3. all order status authorization tests
4. PLP filters
5. PDP trust block
6. GA4 ecommerce events
7. Core Web Vitals baseline
8. mobile navigation improvement

### P3 — Optimization

1. review/social proof strategy
2. stock/urgency badges
3. product content structure
4. CSP hardening
5. font/image optimization
6. campaign landing improvements

---

## 14. Final Recommendation

Meanwhile recommends:

1. approve remediation-first ecommerce migration
2. select **Commerce Growth Partnership** package
3. start with P1 security and SEO remediation
4. run two-account/session retest
5. proceed to UX/CRO, analytics, performance, and go-live readiness
6. maintain website after launch through monthly support

Client-facing closing:

> Yoora Sarah already has strong ecommerce potential, but trust foundation and discoverability must be fixed before scale. The safest path is a structured migration program covering security, SEO, UX/CRO, analytics, performance, and post-launch support.
