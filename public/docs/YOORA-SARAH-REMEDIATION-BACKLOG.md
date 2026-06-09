# Yoora Sarah — Remediation Backlog

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Remediation Backlog / Technical Work Register  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Purpose

Dokumen ini menjadi backlog kerja untuk memperbaiki confirmed findings dan meningkatkan readiness Yoora Sarah menuju full ecommerce.

Backlog disusun berdasarkan prioritas:

- **P1:** must fix before full ecommerce migration
- **P2:** required before scaling traffic/campaigns
- **P3:** optimization/hardening

---

## 2. Priority Definition

| Priority | Meaning | Target |
|---|---|---|
| P1 | Launch/migration blocker | Fix before website becomes primary ecommerce channel |
| P2 | Required for scale and growth | Fix before major campaign/traffic scale |
| P3 | Optimization/hardening | Improve after foundation is stable |

---

## 3. Security Backlog

### SEC-001 — Fix Unpaid Order Detail Page IDOR

**Priority:** P1  
**Severity:** High  
**Affected route:** `/id/profile/unpaid/<order_id>`

Problem:

Authenticated unrelated user can access another customer's unpaid order detail page.

Tasks:

- identify route/page data source
- identify order ownership field
- add server-side ownership check
- return `403` or generic `404` for unauthorized access
- ensure page does not render foreign order data
- add safe unauthorized-access logging
- add cross-account regression test

Acceptance criteria:

- user B cannot view user A unpaid order page
- no foreign order data rendered
- payment action context not visible to unauthorized user
- unauthorized request returns `403` or generic `404`
- regression test covers two accounts

Dependencies:

- source code access
- backend/API route access
- test accounts
- sample test orders

---

### SEC-002 — Fix Order Detail API BOLA

**Priority:** P1  
**Severity:** High  
**Affected endpoint:** `/api/webstore/orders/<order_id>`

Problem:

Authenticated unrelated user can fetch another customer's order JSON, including PII and payment metadata.

Tasks:

- identify API handler
- scope query by authenticated user
- enforce ownership at service/repository layer
- minimize API response payload
- remove unnecessary `payment_session_id`, `payment_external_id`, and payment metadata where not required
- return `403` or generic `404` for unauthorized access
- add cross-account API test

Acceptance criteria:

- user B cannot fetch user A order JSON
- response contains no foreign PII
- payment metadata is minimized
- all unauthorized access denied consistently
- automated test covers valid owner vs unrelated user

Dependencies:

- backend access
- auth/session test setup
- order fixture data

---

### SEC-003 — Fix Unpaid Order List Exposure

**Priority:** P1  
**Severity:** Medium  
**Affected route:** `/id/profile/unpaid`

Problem:

Customer unpaid order list can show another customer's unpaid order summary.

Tasks:

- identify list page data source
- ensure list query filters by current user
- verify pagination behavior
- verify empty state
- add multi-user test

Acceptance criteria:

- user sees only own unpaid orders
- user B cannot discover user A order ID
- pagination never leaks foreign orders
- empty state shown if no own unpaid orders

Dependencies:

- frontend/backend route ownership
- test orders across multiple accounts

---

### SEC-004 — Fix Order Collection API Exposure

**Priority:** P1  
**Severity:** Medium  
**Affected endpoint:** `/api/webstore/orders?page=1&limit=10&status=perlu_dibayar`

Problem:

Order collection API can expose another customer's unpaid order entry.

Tasks:

- inspect all collection query paths
- add `user_id = current_user_id` filter
- audit all status filters:
  - unpaid
  - paid
  - processing
  - shipped
  - completed
  - cancelled
  - refunded
- verify pagination and sorting
- add cross-account tests

Acceptance criteria:

- collection API returns only current user orders
- all status filters scoped by current user
- pagination/sort cannot reveal foreign objects
- tests cover multiple statuses

Dependencies:

- backend query layer access
- order status test data

---

### SEC-005 — Replace Guest Wishlist `X-Device-ID` Trust Boundary

**Priority:** P1  
**Severity:** Medium  
**Affected endpoint:** `/api/webstore/wishlists`

Problem:

Guest wishlist uses caller-controlled `X-Device-ID` as identity boundary, allowing replay/takeover if identifier is reused.

Tasks:

- identify wishlist guest identity implementation
- stop treating raw `X-Device-ID` as sole authority
- generate server-issued high-entropy guest token
- store token in secure cookie where feasible
- sign/verify any client-visible identifier
- bind guest wishlist state to trusted identity
- reject unsigned/unknown identifiers
- define migration for legacy guest identifiers
- add GET/POST/DELETE replay tests

Acceptance criteria:

- session B cannot reuse session A identifier to read wishlist
- session B cannot modify/delete session A wishlist
- forged device identifiers rejected or isolated
- legacy identifiers handled safely
- tests cover GET, POST, DELETE

Dependencies:

- guest session architecture decision
- frontend cookie/header update
- backend wishlist storage update

---

### SEC-006 — Audit Guest Cart for Same Trust Boundary

**Priority:** P2  
**Severity:** To be confirmed

Problem:

Wishlist issue suggests cart or other guest-state endpoints may share same caller-controlled identity pattern.

Tasks:

- identify guest cart endpoints
- inspect identity boundary
- test same device-ID replay pattern in authorized safe environment
- remediate if same issue exists
- add regression tests

Acceptance criteria:

- guest cart cannot be read/modified/deleted by another session via forged ID
- cart merge on login remains safe
- guest cart token lifecycle documented

Dependencies:

- cart API access
- safe test environment

---

### SEC-007 — Stabilize Login / Refresh Token Flow

**Priority:** P2

Problem:

Prior artifacts repeatedly observed `RefreshToken wajib diisi`, causing session reliability risk.

Tasks:

- inspect login/register/refresh flow
- confirm cookie/token lifecycle
- confirm refresh endpoint requirements
- fix missing refresh token state
- ensure protected routes behave consistently
- add auth regression tests

Acceptance criteria:

- login state remains stable after register/login
- protected routes do not incorrectly redirect
- refresh works without UI confusion
- auth cookies use `Secure`, `HttpOnly`, and appropriate `SameSite`

Dependencies:

- auth implementation access
- test accounts

---

### SEC-008 — Review Downstream Renderers for Stored Content Safety

**Priority:** P2/P3

Problem:

Stored HTML-like payloads were accepted in some fields, although customer-facing output appeared encoded in tested scope.

Tasks:

- identify downstream consumers:
  - email
  - invoice
  - packing slip
  - admin dashboard
  - support tools
  - warehouse tools
  - PDF/CSV export
- add context-aware encoding
- add stored payload regression tests

Acceptance criteria:

- stored payload renders safely in all downstream views
- no script execution in email/admin/PDF/export surfaces
- tests cover representative payloads

Dependencies:

- admin/backoffice access
- email/template source access

---

### SEC-009 — Security Header Hardening

**Priority:** P3

Tasks:

- disable `X-Powered-By`
- review CSP sources
- reduce `unsafe-eval` where feasible
- reduce `unsafe-inline` with nonce/hash where feasible
- confirm auth cookie flags
- document CSP exceptions

Acceptance criteria:

- app works after CSP changes
- no critical script breakage
- sensitive cookies hardened

---

## 4. SEO Backlog

### SEO-001 — Fix Canonical Strategy

**Priority:** P1

Problem:

Homepage/category/product/English pages show canonical conflicts or homepage fallback.

Tasks:

- implement self-referencing canonical per route
- support `/id` and `/en` separately
- choose canonical host: `www` or non-`www`
- strip tracking parameters
- make canonical domain-aware by environment

Acceptance criteria:

- homepage canonical = homepage
- English homepage canonical = English homepage
- category canonical = category URL
- product canonical = product URL
- staging canonical never points to production unless intentionally blocked/noindex strategy exists

---

### SEO-002 — Fix Robots & Sitemap

**Priority:** P1

Problem:

`robots.txt` points to broken `/id/sitemap.xml`; root sitemap appears malformed.

Tasks:

- point robots to valid XML sitemap
- ensure sitemap route returns `application/xml`
- remove `/id/en` and `/id/id` nested locale paths
- include live product/category URLs
- match sitemap URLs to canonical URLs
- submit to Search Console

Acceptance criteria:

- `robots.txt` points only to valid sitemap
- sitemap returns XML, not HTML
- sitemap URLs match canonical
- Search Console accepts sitemap

---

### SEO-003 — Fix Product & Category Metadata

**Priority:** P1

Tasks:

- product title uses product name and category
- category title uses display name, not raw slug/numeric suffix
- route-specific meta descriptions
- localized metadata for `/id` and `/en`
- Open Graph tags per route
- Twitter card metadata if needed

Acceptance criteria:

- product page title no longer `Beranda | Yoora Sarah`
- category title no longer raw numeric slug when display name exists
- product share preview uses product image/title

---

### SEO-004 — Add SSR-visible H1

**Priority:** P1/P2

Tasks:

- homepage H1
- category H1
- product H1
- policy/help page H1 if indexable
- ensure H1 exists in initial HTML/SSR output

Acceptance criteria:

- crawler extracts one H1 per indexable page
- H1 matches page intent

---

### SEO-005 — Validate Hreflang

**Priority:** P2

Tasks:

- confirm reciprocal hreflang for `/id` and `/en`
- align hreflang with canonical
- define `x-default` strategy
- validate category/product hreflang pairs

Acceptance criteria:

- canonical and hreflang do not conflict
- all alternates return valid pages

---

### SEO-006 — Product Structured Data

**Priority:** P2

Tasks:

- validate Product JSON-LD
- include name, image, description, offer, price, currency, availability
- add BreadcrumbList
- avoid fake review aggregate

Acceptance criteria:

- Rich Results test passes for representative product page
- schema matches visible content

---

## 5. UX/CRO Backlog

### UX-001 — Homepage Conversion CTA

**Priority:** P2

Tasks:

- add primary CTA per hero slide
- add secondary CTA where useful
- add brand value proposition line
- ensure mobile CTA visible above fold

Acceptance criteria:

- homepage first viewport has clear shopping action
- CTA is readable on mobile
- CTA click tracked if analytics scope included

---

### UX-002 — Homepage Trust Strip

**Priority:** P2

Tasks:

- add trust strip below hero or near first viewport
- include secure payment, easy exchange, WhatsApp support, official store
- ensure icons/text accessible

Acceptance criteria:

- trust signals visible before user reaches checkout
- mobile layout readable

---

### UX-003 — PLP Filter Drawer

**Priority:** P2

Tasks:

- add filters: size, color, price, availability, promo/sale
- add mobile drawer
- add filter chips
- preserve filter state in URL
- track filter events

Acceptance criteria:

- filter usable on 360px mobile viewport
- filtered URL shareable/reloadable
- no invalid filter state breaks product grid

---

### UX-004 — Product Card Improvements

**Priority:** P2/P3

Tasks:

- add product badges
- improve wishlist/cart icon labels
- show stock/sale urgency where useful
- improve color variant display
- add accessible labels

Acceptance criteria:

- product card actions clear
- screen reader labels meaningful
- product card does not feel crowded on mobile

---

### UX-005 — PDP Trust Block

**Priority:** P2

Tasks:

- add secure payment note
- add shipping/delivery info
- add return/exchange info
- add WhatsApp support link
- position near add-to-cart

Acceptance criteria:

- trust block visible before checkout
- customer can understand payment/shipping/return confidence before purchase

---

### UX-006 — PDP Variant UX

**Priority:** P2

Tasks:

- group color variants by color family if useful
- mark unavailable combinations
- explain disabled CTA state
- keep selected variant state clear

Acceptance criteria:

- unavailable variant cannot be added to cart
- disabled CTA has clear reason
- selected color/size is obvious

---

### UX-007 — Review Empty State

**Priority:** P3

Tasks:

- improve empty review message
- add trust alternative while reviews absent
- plan post-purchase review collection

Acceptance criteria:

- empty review state does not reduce trust sharply
- review collection path exists

---

## 6. Analytics Backlog

### AN-001 — GA4 Ecommerce Event Map

**Priority:** P2

Tasks:

- define event names
- define required parameters
- define item schema
- define trigger location
- define deduplication rules

Events:

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

Acceptance criteria:

- event spec approved
- item data complete
- currency/value defined

---

### AN-002 — Purchase Event Validation

**Priority:** P2

Tasks:

- define purchase trigger source
- ensure stable `transaction_id`
- handle payment callback/webhook status
- deduplicate refresh/retry
- handle cancellation/refund

Acceptance criteria:

- purchase fires once per completed order
- refund/cancel does not inflate revenue
- DebugView validates payload

---

### AN-003 — Marketing Pixel Support

**Priority:** P2/P3

Tasks:

- confirm Meta Pixel requirement
- confirm TikTok Pixel requirement
- confirm Google Ads conversion requirement
- define consent/privacy handling if needed
- map ecommerce events to pixel events

Acceptance criteria:

- pixel events match funnel
- no duplicate conversion firing

---

### AN-004 — Ecommerce Dashboard

**Priority:** P2/P3

Tasks:

- traffic by channel
- product view to add-to-cart
- cart to checkout
- checkout to purchase
- revenue by product/category
- voucher/promo performance
- WhatsApp click tracking

Acceptance criteria:

- dashboard usable for monthly review
- data sources documented

---

## 7. Performance Backlog

### PERF-001 — Core Web Vitals Baseline

**Priority:** P2

Tasks:

- measure homepage
- measure category page
- measure product page
- measure cart
- measure checkout
- segment mobile/desktop

Acceptance criteria:

- LCP/INP/CLS baseline documented
- 75th percentile target defined

---

### PERF-002 — Public Page Cache Strategy

**Priority:** P2/P3

Tasks:

- review `Cache-Control` on public pages
- evaluate ISR/edge caching for category/product pages
- keep account/cart/checkout private/no-cache
- document invalidation strategy

Acceptance criteria:

- public pages benefit from safe cache where feasible
- private pages remain no-cache

---

### PERF-003 — Image & Font Optimization

**Priority:** P2/P3

Tasks:

- optimize hero images
- responsive product images
- lazy loading below fold
- reduce font preload count
- review LCP image priority

Acceptance criteria:

- LCP improves or target path defined
- no visible image quality regression

---

## 8. Operational Backlog

### OPS-001 — Access & Environment Checklist

**Priority:** P1

Tasks:

- repo access
- Vercel/hosting access
- backend/cloud access
- database access
- object storage access
- DNS/domain access
- payment gateway access
- analytics/Search Console access

Acceptance criteria:

- access owner confirmed
- access granted or vendor coordination assigned

---

### OPS-002 — Staging & Production Separation

**Priority:** P1/P2

Tasks:

- define staging domain
- protect staging from indexing
- separate environment variables
- separate payment sandbox/production
- separate analytics where needed

Acceptance criteria:

- staging cannot be indexed
- production canonical never points to staging
- payment credentials separated

---

### OPS-003 — Go-live & Rollback Plan

**Priority:** P1

Tasks:

- define go-live window
- DNS/SSL checklist
- production env checklist
- smoke test checklist
- rollback procedure
- monitoring plan

Acceptance criteria:

- go-live approved
- rollback path documented
- smoke test passes

---

## 9. Suggested Execution Order

1. OPS-001 — Access & Environment Checklist
2. SEC-001 to SEC-005 — P1 security remediation
3. SEO-001 to SEO-004 — P1 SEO rescue
4. OPS-002 — staging/production separation
5. AN-001 and AN-002 — analytics foundation
6. UX-001 to UX-006 — conversion foundation
7. PERF-001 — performance baseline
8. OPS-003 — go-live/rollback
9. P2/P3 optimization backlog

---

## 10. Final Backlog Recommendation

Immediate sprint should focus on:

```txt
Security P1 + SEO P1 + Analytics event spec + Go-live readiness foundation
```

Do not scale campaigns or migrate fully before:

- order ownership retest passes
- guest wishlist identity fixed
- sitemap/canonical fixed
- product metadata fixed
- analytics purchase tracking validated
- production smoke test checklist exists
