# Yoora Sarah — Ecommerce Migration Roadmap

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Ecommerce Migration Roadmap  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Roadmap Objective

Roadmap ini menjelaskan langkah migrasi Yoora Sarah dari existing storefront menuju full ecommerce channel yang aman, SEO-correct, measurable, conversion-ready, dan scalable.

Core strategy:

```txt
Secure first → Fix discoverability → Improve conversion → Instrument measurement → Launch safely → Optimize monthly
```

---

## 2. Current Readiness Summary

| Area | Current State | Readiness | Migration Impact |
|---|---|---:|---|
| Storefront | Modern Next.js/React storefront | Medium-High | Good base |
| Catalog | Categories/products/variants exist | Medium-High | Good base |
| Checkout/order | Flow exists, security flaws confirmed | Low | P1 blocker |
| Wishlist/cart | Exists, guest wishlist trust issue confirmed | Medium-Low | P1/P2 blocker |
| SEO | Canonical/sitemap/metadata/H1 issues | Medium-Low | P1 blocker |
| UX/CRO | Strong visual, conversion gaps | Medium | Needs optimization |
| Analytics | Full ecommerce tracking not confirmed | Unknown | Needs setup |
| Performance | Needs CWV baseline | Unknown | Needs measurement |
| Operations | Needs access/go-live/handover governance | Medium-Low | Needs control |

Verdict:

> Proceed with remediation-first migration, not direct full migration.

---

## 3. Roadmap Phases

## Phase 0 — Internal Preparation

**Status:** Completed based on current project context.

Completed:

- source `.md` artifacts reviewed
- result folder findings consolidated
- live passive audit completed
- benchmark research integrated
- bundle folder created
- execution checklist created
- memory updated
- initial final documents generated

Outputs:

- `MASTER-INSIGHT-YOORA-SARAH.md`
- `YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md`
- `YOORA-SARAH-EXECUTION-CHECKLIST.md`
- final proposal document pack

---

## Phase 1 — Discovery & Access Confirmation

**Goal:** Lock business scope, technical ownership, access, and package model.

Key activities:

- confirm whether website becomes primary sales channel or complement
- confirm current vendor/dev team
- collect required access
- confirm payment gateway and shipping workflow
- confirm product data source
- confirm analytics/ad stack
- confirm campaign calendar and expected traffic
- confirm commercial model

Required access:

- source code repo
- frontend hosting/Vercel
- backend/cloud/Fly.io or equivalent
- database
- object storage
- DNS/domain registrar
- payment gateway
- GA4/GTM/Search Console
- Meta/TikTok/Google Ads if used

Deliverables:

- access checklist
- confirmed scope
- dependency register
- technical owner map
- approved package

Acceptance criteria:

- client PIC assigned
- technical PIC/vendor assigned
- required access granted or coordination path confirmed
- package selected
- implementation timeline approved

Estimated duration:

```txt
3–5 business days, depending access readiness
```

---

## Phase 2 — P1 Security Remediation

**Goal:** Fix confirmed object/state isolation issues before scale.

Workstreams:

### 2.1 Order Ownership Remediation

- `/id/profile/unpaid/<order_id>` ownership check
- `/api/webstore/orders/<order_id>` ownership check
- `/id/profile/unpaid` list scoping
- `/api/webstore/orders?...status=perlu_dibayar` collection scoping
- all order status authorization audit
- payment metadata minimization

### 2.2 Guest Wishlist Trust Boundary

- replace raw `X-Device-ID` authority
- use server-issued guest token
- sign/verify identifiers where needed
- bind wishlist server-side
- add legacy handling

### 2.3 Retest

- 2+ customer accounts
- 2+ guest sessions
- GET/POST/DELETE wishlist tests
- order page/API/list/collection tests

Deliverables:

- remediation summary
- retest matrix
- security regression checklist

Acceptance criteria:

- no cross-account order access
- no foreign order data in API response
- guest session cannot takeover another wishlist
- no unnecessary payment session metadata exposed

Estimated duration:

```txt
1–2 weeks, depending codebase complexity and access
```

---

## Phase 3 — SEO Rescue

**Goal:** Make site crawlable, canonical-correct, and product/category pages indexable.

Workstreams:

- canonical self-reference per route
- host consistency strategy
- `/id` and `/en` locale canonical handling
- valid XML sitemap
- robots sitemap reference fix
- malformed locale path removal
- product/category metadata generator
- SSR-visible H1 per page template
- hreflang validation
- Product/Breadcrumb structured data

Deliverables:

- SEO implementation checklist
- sitemap validation result
- Search Console submission readiness
- representative page metadata QA

Acceptance criteria:

- sitemap returns XML
- robots points to valid sitemap
- product title no longer fallback to homepage
- canonical matches page route
- H1 exists per indexable page
- hreflang/canonical not conflicting

Estimated duration:

```txt
1 week
```

---

## Phase 4 — UX/CRO Foundation

**Goal:** Improve product discovery, trust, and purchase intent.

Workstreams:

### Homepage

- hero CTA
- trust strip
- best seller/new arrival module
- mobile category discovery

### Category / PLP

- mobile filter drawer
- filter chips
- sort improvements
- badges
- product card accessibility

### Product / PDP

- variant UX clarity
- unavailable option handling
- trust block near CTA
- review empty-state improvement
- size/fit/model guidance

### Checkout Trust

- payment security message
- shipping/delivery clarity
- return/exchange reassurance
- WhatsApp support path

Deliverables:

- UX/CRO improvement list
- page-level acceptance criteria
- tracking event list for CRO interactions

Acceptance criteria:

- mobile PLP filter usable
- PDP trust visible near CTA
- CTA state clear
- key product interactions measurable

Estimated duration:

```txt
1–2 weeks depending implementation depth
```

---

## Phase 5 — Analytics & Performance Foundation

**Goal:** Make ecommerce funnel measurable and performance targets visible.

Analytics scope:

- GA4 ecommerce event map
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
- WhatsApp click tracking

Performance scope:

- Core Web Vitals baseline
- homepage/category/product/cart/checkout measurement
- image optimization review
- font preload review
- public page cache strategy

Deliverables:

- analytics specification
- DebugView validation evidence
- dashboard outline/setup
- CWV baseline
- performance backlog

Acceptance criteria:

- purchase event fires once
- transaction ID stable
- item data complete
- route-level CWV baseline available
- LCP/INP/CLS target defined

Estimated duration:

```txt
1 week baseline + ongoing optimization
```

---

## Phase 6 — Multi-domain / Multi-instance Readiness

**Goal:** Prepare architecture for staging, campaign domains, locale expansion, or future multi-instance needs.

Workstreams:

- staging vs production environment separation
- staging noindex protection
- domain-aware canonical
- domain-aware sitemap
- domain-aware hreflang
- separate analytics dimensions/properties if needed
- payment sandbox/production separation
- config-driven base URL
- rollback process

Acceptance criteria:

- staging cannot be indexed
- production canonical never points to staging
- sitemap/robots correct per domain
- payment credentials separated by environment

Estimated duration:

```txt
3–5 business days if architecture supports it
```

---

## Phase 7 — Promo / Voucher Abuse Readiness

**Goal:** Reduce fake account, voucher farming, and campaign abuse risk.

Workstreams:

- email verification
- phone/OTP verification where needed
- voucher limits by account/email/phone/device/payment identity
- rate limiting
- IP/device risk signals
- VPN/proxy/datacenter risk signal for promo-sensitive actions
- suspicious activity logs
- admin review path

Acceptance criteria:

- voucher cannot be trivially abused through fake accounts
- suspicious activity logged
- false-positive support path exists
- campaign rules configurable

Estimated duration:

```txt
1–2 weeks depending rule complexity
```

---

## Phase 8 — QA, UAT & Security Retest

**Goal:** Validate implementation before production go-live.

Test areas:

- security cross-account tests
- guest wishlist/cart tests
- auth/session tests
- product browsing
- filter/sort
- product variant selection
- cart/wishlist
- checkout/payment sandbox
- order lifecycle
- SEO metadata/canonical/sitemap
- GA4 DebugView
- Core Web Vitals sample

Deliverables:

- QA report
- retest result
- known issues list
- UAT approval form/checklist

Acceptance criteria:

- no critical/high launch blockers
- P1 security tests pass
- client UAT approved

Estimated duration:

```txt
3–7 business days
```

---

## Phase 9 — Go-live & Handover

**Goal:** Launch safely and transfer operational clarity.

Go-live checklist:

- DNS/SSL ready
- production environment variables configured
- payment production credentials configured
- webhooks configured
- email/SMS/WhatsApp provider configured
- Search Console verified
- sitemap submitted
- analytics live
- monitoring active
- backup active
- admin accounts reviewed
- rollback plan documented

Handover:

- access list
- environment overview
- deployment notes
- analytics notes
- SEO notes
- support/warranty process
- known limitations

Acceptance criteria:

- production smoke test passes
- payment flow tested under approved scope
- rollback path available
- warranty start date recorded

Estimated duration:

```txt
1–2 business days for controlled launch window
```

---

## Phase 10 — Post-launch Warranty & Maintenance

**Goal:** Stabilize after launch and continue growth optimization.

Warranty:

- 1 month bug warranty after go-live/handover
- covers bugs caused by delivered scope
- excludes new features, requirement changes, third-party outages, content mistakes

Maintenance options:

- monthly health check
- security monitoring summary
- SEO/indexation review
- analytics funnel review
- performance review
- campaign support
- CRO backlog
- monthly report

Recommended package:

```txt
Commerce Growth Partnership — Setup + Monthly Maintenance
```

---

## 4. Indicative Timeline

| Phase | Duration | Notes |
|---|---:|---|
| Discovery & Access | 3–5 business days | depends client/vendor access |
| P1 Security Remediation | 1–2 weeks | depends code complexity |
| SEO Rescue | ~1 week | can overlap after security planning |
| UX/CRO Foundation | 1–2 weeks | depends design/implementation scope |
| Analytics & Performance | ~1 week baseline | optimization ongoing |
| Multi-domain Readiness | 3–5 business days | if included |
| Promo Abuse Readiness | 1–2 weeks | if included |
| QA/UAT/Retest | 3–7 business days | before go-live |
| Go-live | 1–2 business days | controlled launch window |
| Warranty | 1 month | after launch/handover |

Total practical migration timeline:

```txt
4–8 weeks for remediation + growth foundation, depending scope/access.
```

---

## 5. Key Dependencies

- source code access
- backend/API access
- database/schema understanding
- current vendor cooperation
- test customer accounts
- payment gateway sandbox
- product data accuracy
- client approval speed
- staging environment readiness
- analytics/Search Console access
- DNS/domain control

---

## 6. Major Risks & Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Late access | Timeline delay | access checklist in Phase 1 |
| Existing vendor bottleneck | Implementation delay | assign technical PIC early |
| Payment gateway unavailable | Checkout delay | sandbox confirmation early |
| Product data inconsistent | UX/SEO delay | product data source of truth |
| Security fix affects order flow | Revenue risk | staging retest + rollback |
| SEO changes misconfigured | indexation risk | validate sitemap/canonical before submit |
| Analytics duplicates purchase | revenue reporting wrong | DebugView + transaction ID dedupe |
| Campaign launched before remediation | scaled exposure | do not scale until P1 pass |

---

## 7. Success Metrics

Security:

- 5 confirmed vulnerabilities fixed or formally closed
- all cross-account tests pass
- guest-state isolation retested

SEO:

- sitemap valid and submitted
- canonical correct per route
- product/category metadata unique
- H1 visible to crawler

UX/CRO:

- PLP filters usable on mobile
- PDP trust block visible
- homepage CTA clear
- checkout trust messaging improved

Analytics:

- GA4 ecommerce events validated
- purchase fires once
- funnel dashboard usable

Performance:

- CWV baseline documented
- LCP/INP/CLS targets tracked

Operations:

- UAT approved
- smoke test passes
- rollback plan exists
- handover complete

---

## 8. Final Roadmap Recommendation

Do not position this as a redesign-only project.

Position as:

> Secure ecommerce migration and growth-readiness program.

Recommended next step:

1. approve package
2. confirm access
3. execute P1 security remediation
4. execute SEO rescue
5. build analytics/performance foundation
6. improve UX/CRO
7. go live with maintenance support
