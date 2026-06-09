# Yoora Sarah — Proposal Scope & Packages

**Prepared by:** Meanwhile  
**Project:** Yoora Sarah Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Proposal Scope, Commercial Options & Package Structure  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Executive Positioning

Yoora Sarah tidak membutuhkan redesign biasa. Berdasarkan audit, website sudah memiliki fondasi ecommerce, tetapi belum siap dijadikan primary sales channel tanpa remediation dan migration program yang terstruktur.

Prioritas utama:

1. security remediation pada confirmed authorization issues
2. guest-state identity hardening untuk wishlist/cart risk area
3. SEO rescue untuk canonical, sitemap, metadata, H1, structured data
4. UX/CRO upgrade untuk homepage, category/PLP, product/PDP, checkout trust
5. ecommerce analytics setup untuk funnel tracking
6. performance baseline dan Core Web Vitals optimization
7. go-live checklist, retest, handover, and post-launch support

Proposal ini memposisikan Meanwhile sebagai partner migrasi ecommerce, bukan hanya vendor pembuatan halaman.

---

## 2. Current Situation Summary

### 2.1 Existing Strengths

Yoora Sarah already has:

- modern Next.js/React storefront
- Vercel-hosted frontend
- backend service signal on Fly.io
- category/product structure
- product detail page with variants, stock, size, cart, wishlist
- account/profile flow
- unpaid order and payment handoff flow
- support/policy pages
- WhatsApp support
- bilingual route direction: `/id` and `/en`
- premium visual fashion presentation

### 2.2 Confirmed Blockers

Audit and evidence show:

| Area | Finding | Severity / Priority |
|---|---|---:|
| Security | Authenticated user can access another customer unpaid order detail page | High / P1 |
| Security | Order detail API exposes another customer order/PII/payment metadata | High / P1 |
| Security | Unpaid order list can show another customer unpaid order | Medium / P1 |
| Security | Order collection API can expose other customer unpaid orders | Medium / P1 |
| Security | Guest wishlist takeover via caller-controlled `X-Device-ID` | Medium / P1 |
| SEO | Canonical points many pages to homepage | P1 |
| SEO | `robots.txt` points to broken localized sitemap route | P1 |
| SEO | Sitemap appears to contain malformed locale paths such as `/id/en` and `/id/id` | P1 |
| SEO | Product page title fallback observed as `Beranda | Yoora Sarah` | P1 |
| SEO | No H1 extracted in passive checks | P1 |
| UX/CRO | PLP filter not visible in observed flow | P2 |
| UX/CRO | PDP trust block not strong near purchase CTA | P2 |
| Analytics | Full GA4 ecommerce funnel not confirmed | P2 |
| Performance | Public pages may be `no-cache`; route-level CWV baseline needed | P2 |

### 2.3 Migration Verdict

Yoora Sarah has meaningful ecommerce foundation, but should not migrate fully into website-first ecommerce until P1 security and SEO issues are fixed, retested, and documented.

Recommended engagement path:

```txt
Remediate trust foundation → Fix discoverability → Improve shopping conversion → Instrument analytics → Launch safely → Optimize monthly
```

---

## 3. Scope Pillars

### Pillar 1 — Security Remediation & Trust Foundation

Objective:

Fix confirmed authorization and guest-state issues before website scales as ecommerce channel.

Scope items:

- fix unpaid order detail page ownership check
- fix order detail API ownership check
- filter unpaid order list by current user
- filter order collection API by current user and status
- reduce sensitive payment metadata in API response
- fix guest wishlist trust boundary
- audit guest cart for similar `X-Device-ID` issue
- stabilize login/refresh/session flow if included
- create two-account retest matrix
- document security remediation result

Acceptance:

- user B cannot access user A order page/API
- order list/API returns only current user orders
- guest session B cannot replay/delete session A wishlist state
- no unnecessary payment session metadata exposed
- critical flows pass retest

---

### Pillar 2 — SEO Rescue & Indexing Foundation

Objective:

Make product/category pages indexable, canonical-correct, and search-friendly before ecommerce migration.

Scope items:

- self-referencing canonical per page type
- canonical host consistency between `www` and non-`www`
- localized canonical for `/id` and `/en`
- valid sitemap XML generation
- fix `robots.txt` sitemap reference
- remove malformed locale sitemap paths
- product-specific titles and meta descriptions
- category-specific titles and meta descriptions
- SSR-visible H1 per page
- validate hreflang/canonical alignment
- add/validate product structured data

Acceptance:

- homepage canonical points to homepage
- category canonical points to exact category page
- product canonical points to exact product page
- English page canonical points to English page
- sitemap returns valid XML
- Search Console accepts sitemap
- product page title no longer falls back to homepage title
- crawler extracts one correct H1 per indexable page

---

### Pillar 3 — UX/CRO Optimization

Objective:

Improve browsing, product discovery, trust, and purchase intent.

Scope items:

- homepage CTA improvement
- trust strip: secure payment, official store, exchange/return, WhatsApp support
- new arrival/best seller module recommendation
- mobile category navigation improvement
- PLP filter drawer: size, color, price, availability, promo/sale
- PLP badges: New, Best Seller, Limited Stock, Sale
- product card accessibility and CTA clarity
- PDP variant UX improvement
- PDP trust block near add-to-cart
- review empty-state improvement
- size/fit/model guidance recommendation
- checkout trust messaging recommendation

Acceptance:

- mobile browsing works on 360px viewport
- filters are usable on mobile
- PDP CTA state is clear
- trust messages appear before checkout
- key UX interactions tracked in analytics if analytics scope included

---

### Pillar 4 — Analytics, Performance & Growth Measurement

Objective:

Turn website into measurable ecommerce channel.

Scope items:

- GA4 ecommerce event specification
- GTM/GA4 implementation if included
- funnel events:
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
- Meta/TikTok/Google Ads pixel support if included
- WhatsApp click tracking
- purchase deduplication
- ecommerce dashboard recommendation
- Core Web Vitals baseline
- LCP/INP/CLS route-level targets
- public page caching strategy review
- image/font optimization recommendations

Acceptance:

- events fire once
- `items`, `value`, and `currency` are correct
- `transaction_id` is stable
- purchase/refund/cancel behavior is defined
- dashboard can show funnel drop-off
- CWV targets defined: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 at 75th percentile

---

### Pillar 5 — Go-live, Handover & Post-launch Support

Objective:

Launch safely, document ownership, and support client after launch.

Scope items:

- staging validation
- DNS/SSL readiness
- production environment variable review
- payment gateway readiness
- webhook validation
- Search Console sitemap submission
- analytics validation
- security retest
- smoke test
- rollback plan
- handover documentation
- 1 month warranty
- optional monthly maintenance

Acceptance:

- UAT approved
- production smoke test passes
- payment flow tested according to approved scope
- rollback path exists
- handover docs delivered
- warranty start date recorded

---

## 4. Package Options

## Option A — Secure Foundation Setup

### Positioning

One-time project to fix critical foundation issues and prepare website for safer ecommerce operation.

Best for:

- client wants clear one-time budget
- immediate priority is fixing security and SEO blockers
- client/internal team can handle ongoing optimization after handover
- maintenance not yet approved

### Recommended Scope

Included:

1. final audit review and implementation planning
2. P1 security remediation support
3. order ownership fixes and retest
4. guest wishlist trust-boundary fix or remediation guidance
5. payment metadata minimization recommendation/support
6. SEO rescue:
   - canonical
   - sitemap/robots
   - product/category metadata
   - H1
   - hreflang check
7. basic UX/CRO recommendation implementation or design specs, depending access/scope
8. GA4 ecommerce event specification
9. go-live checklist
10. 1 month bug warranty

Optional add-ons:

- full analytics implementation
- performance optimization
- product content rewrite
- review/social proof module
- checkout redesign
- cart/wishlist extended security audit
- AI features

### Excludes

- monthly support after warranty
- campaign management
- ad spend
- third-party subscriptions
- AI token/API usage
- large redesign outside agreed pages
- new ecommerce features not listed
- warehouse/inventory ERP integration unless scoped

### Commercial Notes

Payment model:

```txt
Fixed setup fee + 1 month warranty
```

After warranty:

```txt
Support is billed separately unless converted into maintenance package.
```

### Pros

- clear cost
- fast decision
- strong foundation remediation
- simple contractual model

### Cons

- no continuous optimization
- client bears more post-launch responsibility
- ecommerce growth support requires separate quotation

---

## Option B — Commerce Growth Partnership

### Positioning

Recommended option. Setup project plus monthly maintenance for reliable ecommerce operation, monitoring, improvement, and campaign support.

Best for:

- Yoora Sarah wants website as primary or serious sales channel
- ongoing product drops/campaigns expected
- client wants partner after go-live
- SEO, analytics, performance, and CRO need monthly iteration
- security remediation needs monitoring and regression discipline

### Recommended Setup Scope

Includes everything in Option A, plus stronger growth foundation:

1. deeper UX/CRO implementation plan
2. GA4 ecommerce tracking implementation support
3. Meta/TikTok/Google Ads tracking support if approved
4. ecommerce dashboard plan or setup
5. route-level Core Web Vitals baseline
6. product/category template optimization
7. checkout trust improvement support
8. staging/go-live/retest coordination
9. full handover documentation
10. 1 month warranty integrated into support transition

### Monthly Maintenance Scope

Possible monthly support:

- bug fixes within maintenance scope
- small frontend/backend adjustments
- monthly security health review
- SEO/indexation review
- sitemap/Search Console check
- analytics funnel review
- performance monitoring
- conversion improvement backlog
- campaign landing/support coordination
- product drop support within included hours
- monthly report
- priority response based on chosen tier

### Maintenance Tier Example

| Tier | Best For | Includes |
|---|---|---|
| Basic Maintenance | stable site support | health check, bug triage, small fixes, monthly report |
| Growth Maintenance | active ecommerce channel | Basic + SEO/analytics/performance review + campaign support |
| Priority Maintenance | high campaign volume | Growth + faster SLA + more support hours + priority incident support |

Final hours and limits should be defined in quotation.

### Excludes

- major new features
- full redesign beyond maintenance allocation
- new integrations not listed
- ad budget and media buying
- third-party subscription costs
- AI token/API usage unless included as separate subscription
- emergency out-of-hours support unless Priority tier includes it

### Commercial Notes

Payment model:

```txt
Setup fee + monthly maintenance retainer
```

Recommended because:

- ecommerce is ongoing operation, not one-time page work
- fashion business depends on product drops, promos, campaign cycles
- analytics and SEO require iteration
- post-launch support improves trust
- agency and client both get predictable operating model

### Pros

- strongest operational fit
- better client confidence after launch
- recurring optimization
- faster issue handling
- clearer support boundary

### Cons

- monthly commitment required
- needs clear included/excluded work policy

---

## Option C — Performance Partnership

### Positioning

Strategic partnership model with setup fee, monthly minimum, and 5% performance fee from agreed website revenue metric.

Best for:

- client wants agency aligned with ecommerce growth
- client can provide transparent revenue/order/analytics access
- website becomes primary measurable sales channel
- both parties agree on attribution and reconciliation rules

### Recommended Structure

Safer structure:

```txt
Setup Fee + Monthly Minimum + 5% Website Net Revenue
```

Avoid pure 5% without monthly minimum.

Reason:

- agency still carries operational workload
- campaigns, stock, pricing, fulfillment, and ad spend depend on client
- attribution disputes are common
- revenue may be affected by factors outside website implementation

### Revenue Basis Options

Choose one written basis:

1. 5% of gross online revenue through website
2. 5% of net online revenue after payment/shipping/refund/cancellation deductions
3. 5% of incremental revenue above baseline
4. 5% of tracked ecommerce revenue from agreed channels

Recommended:

```txt
5% of website net revenue after refunds/cancellations, based on agreed order report and analytics/payment reconciliation.
```

### Required Conditions

This model requires:

- reliable GA4 ecommerce tracking
- access to order report/payment report
- clear refund/cancel policy
- defined attribution window
- monthly reconciliation process
- definition of included/excluded revenue
- clear handling of Shopee/WhatsApp/offline orders
- minimum monthly base fee
- agreement on campaign responsibilities

### Included Scope

Includes Option B setup and maintenance direction, plus:

- monthly ecommerce performance review
- funnel drop-off analysis
- CRO backlog prioritization
- campaign landing support within allocation
- revenue reporting reconciliation
- conversion opportunity recommendations
- analytics quality monitoring

### Excludes

- ad spend
- marketplace revenue unless explicitly included
- offline revenue unless explicitly included
- fulfillment/stock/pricing responsibility
- third-party costs
- AI token/API usage unless separate subscription
- revenue loss from product availability, campaign delays, fulfillment issue, or payment gateway outage outside Meanwhile control

### Pros

- strong partnership narrative
- aligns incentives
- can reduce upfront barrier if setup fee adjusted
- encourages continuous growth focus

### Cons

- higher contract complexity
- requires high trust and transparent reporting
- attribution/revenue disputes possible
- not recommended before analytics matures

---

## 5. Recommended Package

Recommended for Yoora Sarah:

```txt
Option B — Commerce Growth Partnership
```

Reason:

- Yoora Sarah is moving toward full ecommerce, not static company profile
- current findings require remediation and retest
- SEO, analytics, performance, and CRO require continuous improvement
- fashion ecommerce depends on campaigns, product drops, and conversion optimization
- monthly maintenance protects both client and agency after go-live

Client-facing wording:

> Untuk migrasi total ke ecommerce, opsi paling sehat adalah Setup + Monthly Maintenance. Website akan menjadi channel penjualan aktif yang membutuhkan monitoring, security discipline, SEO review, analytics validation, campaign support, dan conversion optimization setelah launch.

---

## 6. Implementation Phases

### Phase 1 — Discovery & Access Confirmation

Deliverables:

- technical access checklist
- business requirement confirmation
- ecommerce operation mapping
- risk and dependency list
- final implementation scope

Acceptance:

- required access requested
- client PIC assigned
- technical PIC/vendor identified
- commercial package selected

---

### Phase 2 — P1 Security Remediation

Deliverables:

- unpaid order ownership fix plan
- order API ownership fix plan
- unpaid list/API filtering fix plan
- guest wishlist identity fix plan
- payment metadata minimization plan
- two-account/session retest

Acceptance:

- confirmed vulnerabilities fixed or formally scoped
- cross-account tests pass
- guest wishlist replay/tamper tests pass
- remediation summary delivered

---

### Phase 3 — SEO Rescue

Deliverables:

- canonical fixes
- sitemap/robots fixes
- metadata fixes
- H1 fixes
- hreflang validation
- structured data validation

Acceptance:

- sitemap valid
- canonical self-referencing per route
- Search Console submission ready
- product page metadata correct

---

### Phase 4 — UX/CRO & Ecommerce Readiness

Deliverables:

- homepage CTA/trust improvement
- PLP filter/sort/badge improvements
- PDP trust and variant UX improvements
- checkout trust recommendations
- review/social proof strategy

Acceptance:

- mobile PLP/PDP flow usable
- trust signals visible
- product discovery improved

---

### Phase 5 — Analytics & Performance

Deliverables:

- GA4 ecommerce event map
- tracking implementation support if scoped
- pixel setup support if scoped
- dashboard/reporting structure
- performance baseline
- optimization backlog

Acceptance:

- critical events validated
- purchase event deduplicated
- funnel visible
- CWV targets established

---

### Phase 6 — Go-live & Handover

Deliverables:

- pre-launch checklist
- QA/UAT report
- security retest report
- production deployment plan
- rollback plan
- handover documentation
- warranty start record

Acceptance:

- UAT approved
- production smoke test passes
- client accepts handover

---

## 7. Out-of-Scope Unless Added

The following are not included unless explicitly written in final quotation:

- complete redesign of all pages
- mobile app development
- ERP/inventory/accounting integration
- warehouse operations system
- CRM implementation
- loyalty program
- advanced recommendation engine
- marketplace integration
- Shopee/TikTok Shop sync
- custom admin/backoffice rebuild
- full content writing for all products
- product photography
- ad buying/media management
- legal/privacy drafting by lawyer
- penetration test beyond approved scope
- load/DoS testing
- AI assistant/AI generation features
- multilingual copywriting for all pages
- large-scale data migration

---

## 8. Warranty

Recommended warranty:

```txt
1 month bug warranty after go-live or formal handover.
```

Included:

- frontend bugs caused by delivered work
- backend bugs caused by delivered work
- security regression caused by delivered remediation
- checkout/cart/product bugs caused by delivered work
- analytics bugs caused by delivered tracking implementation
- layout breakage caused by delivered implementation

Excluded:

- new features
- new design requests
- requirement changes
- client content/data entry mistakes
- third-party outage
- provider API/policy change
- production changes by other parties
- expired third-party subscription/quota
- post-warranty work not covered by maintenance

Recommended wording:

> Garansi 1 bulan mencakup perbaikan bug pada scope pekerjaan yang Meanwhile deliver, baik backend maupun frontend. Garansi tidak mencakup fitur baru, perubahan requirement, third-party outage, atau pekerjaan di luar scope yang telah disepakati.

---

## 9. Paid Support After Warranty

After warranty, work is billed under one of:

1. monthly maintenance retainer
2. hourly/daily support
3. feature-based quotation
4. emergency support premium

Recommended wording:

> Setelah masa garansi selesai, setiap perbaikan bug, request perubahan, optimasi, maupun penambahan fitur akan dikenakan biaya berdasarkan skema maintenance, hourly support, atau quotation terpisah, kecuali sudah termasuk dalam paket maintenance aktif.

---

## 10. AI Token Subscription Policy

If AI features are included, AI cost must be separated from development/setup fee.

Potential AI features:

- product description generator
- campaign copy generator
- customer support assistant
- product tagging/category enrichment
- search assistant
- size/style recommendation

Commercial structure:

```txt
AI Feature Setup Fee + Monthly AI Token/API Subscription
```

Terms to define:

- included monthly token quota
- overage pricing
- model/provider used
- content approval workflow
- usage dashboard/report
- data privacy boundary
- fallback behavior if quota reached

Important:

- AI token/API usage is client-paid unless otherwise agreed.
- AI-generated content should be reviewed by client before publication.
- AI features should be optional add-ons unless specifically approved.

---

## 11. Third-party Costs

Third-party costs are client-owned and client-paid unless explicitly stated otherwise.

Examples:

- domain
- hosting
- backend/cloud/VPS
- database/storage
- payment gateway fee
- SMS/OTP/WhatsApp
- email provider
- analytics/monitoring tools
- AI API/token usage
- premium plugins/assets
- ad spend
- CDN/security tools if added

Meanwhile can setup/manage these services if included in scope, but account ownership should remain with Yoora Sarah.

---

## 12. Client Responsibilities

Yoora Sarah must provide:

- access to required technical accounts
- source code/repository access or vendor coordination
- product data and content
- payment gateway credentials/sandbox
- shipping/logistics rules
- legal/policy content
- brand assets
- analytics/ad accounts
- timely feedback and approval
- UAT sign-off
- production go-live approval

Delay in access, content, or approval may affect timeline.

---

## 13. Meanwhile Responsibilities

Meanwhile will:

- deliver approved scope professionally
- keep findings factual and evidence-based
- separate bug fixes from change requests
- implement or guide remediation according to approved package
- support QA and retest
- document risks, dependencies, and assumptions
- provide handover materials
- support warranty and/or maintenance according to selected package

---

## 14. Success Metrics

Recommended project success metrics:

### Security

- 5 confirmed vulnerabilities fixed or formally scoped
- cross-account order tests pass
- guest wishlist replay/tamper tests pass
- no unnecessary payment metadata exposed

### SEO

- valid sitemap accepted
- canonical correct per route
- product/category metadata unique
- H1 exists per page
- structured data validates

### UX/CRO

- homepage CTA and trust improved
- PLP filters usable
- PDP trust block visible
- variant UX clearer
- checkout trust improved

### Analytics

- ecommerce events validated
- purchase deduplicated
- funnel dashboard available
- WhatsApp/support clicks tracked

### Performance

- CWV baseline created
- LCP ≤ 2.5s target
- INP ≤ 200ms target
- CLS ≤ 0.1 target
- route-level optimization backlog prepared

### Launch

- UAT approved
- go-live checklist complete
- rollback path documented
- warranty started

---

## 15. Final Recommendation

Meanwhile should present three options, but lead with **Commerce Growth Partnership**.

Best final client message:

> Yoora Sarah already has strong ecommerce potential. The next step is not only fixing individual bugs, but building a secure, SEO-correct, measurable, and conversion-ready digital commerce channel. Meanwhile recommends a setup plus monthly maintenance model so remediation, launch, and post-launch optimization are handled as one controlled migration program.
