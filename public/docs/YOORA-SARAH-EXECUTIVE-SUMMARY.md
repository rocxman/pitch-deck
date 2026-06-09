# Yoora Sarah — Executive Summary

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Executive Summary  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Executive Verdict

Yoora Sarah sudah memiliki fondasi ecommerce yang kuat: storefront modern, katalog produk, kategori, product detail, wishlist, cart, account flow, unpaid order flow, payment handoff, policy pages, dan WhatsApp support.

Namun, website belum disarankan menjadi primary ecommerce channel sebelum P1 remediation selesai.

Reason utama:

- 5 confirmed vulnerabilities ditemukan pada order authorization dan guest wishlist state
- SEO foundation punya blocker besar: canonical salah, sitemap/robots bermasalah, product metadata fallback, H1 tidak terdeteksi
- UX/CRO sudah punya visual kuat, tetapi belum cukup optimal untuk conversion-first ecommerce
- full GA4 ecommerce tracking belum confirmed
- performance perlu baseline per route dan optimization target

Final recommendation:

> Jalankan remediation-first ecommerce migration: secure trust boundary, fix SEO discoverability, improve conversion journey, instrument analytics, then go live with controlled support.

---

## 2. Business Opportunity

Website Yoora Sarah dapat berkembang menjadi owned digital commerce channel yang:

- mengurangi ketergantungan pada marketplace/social commerce
- memperkuat brand experience premium
- mengumpulkan first-party customer data
- mendukung product drop dan campaign landing
- meningkatkan SEO acquisition
- membuat funnel penjualan measurable
- menjadi central hub untuk Shopee, WhatsApp, Instagram, TikTok, dan paid campaigns

Opportunity besar, tetapi foundation harus aman dan measurable dulu.

---

## 3. Current Strengths

| Area | Strength |
|---|---|
| Platform | Next.js/React storefront with Vercel delivery |
| Catalog | Category and product structure already exists |
| Product Detail | Variants, size, stock, price, cart, wishlist, material/care info |
| Support | WhatsApp floating support and policy/help pages |
| Brand | Strong visual-first fashion presentation |
| Localization | `/id` and `/en` route direction exists |
| Ecommerce Flow | Account, unpaid order, cart/wishlist, payment handoff exist |

Interpretation:

> Yoora Sarah is not starting from zero. The project is about making existing commerce foundation secure, SEO-correct, conversion-ready, and scalable.

---

## 4. Critical Risks

### 4.1 Security Risk

Confirmed vulnerability count:

| Severity | Count |
|---|---:|
| High | 2 |
| Medium | 3 |
| Total | 5 |

Confirmed clusters:

1. unpaid order detail page IDOR
2. order detail API BOLA exposing PII/payment metadata
3. unpaid order list cross-account exposure
4. unpaid order collection API cross-account exposure
5. guest wishlist takeover via caller-controlled `X-Device-ID`

Business impact:

- customer order data leak
- payment metadata exposure
- shopping state tampering
- customer trust damage
- higher risk when order volume scales

### 4.2 SEO Risk

Passive live audit found:

- canonical points many pages to homepage
- English page canonical points to Indonesian homepage
- `robots.txt` points to broken localized sitemap
- root sitemap includes malformed locale paths
- product page title observed as `Beranda | Yoora Sarah`
- no H1 extracted in initial passive checks

Business impact:

- product/category pages may not rank properly
- crawl waste
- duplicate/invalid locale signals
- weak product search visibility

### 4.3 Conversion Risk

Observed gaps:

- homepage first viewport needs stronger CTA
- trust strip not prominent above fold
- category filter not visible
- PDP trust block not visible near purchase CTA
- empty review state weakens confidence
- variant selection can feel overloaded

Business impact:

- lower add-to-cart rate
- higher hesitation before checkout
- lower campaign landing conversion

### 4.4 Measurement Risk

Full GA4 ecommerce tracking not confirmed.

Without tracking:

- product list drop-off unknown
- add-to-cart rate unknown
- checkout abandonment unknown
- purchase deduplication risk exists
- campaign ROI harder to prove

---

## 5. Migration Readiness Verdict

| Area | Readiness | Priority |
|---|---:|---:|
| Visual storefront | Medium-High | P2 |
| Product catalog | Medium-High | P2 |
| Product detail | Medium | P2 |
| Security/privacy | Low | P1 |
| SEO/indexing | Medium-Low | P1 |
| Checkout trust | Medium-Low | P2 |
| Analytics | Unknown | P2 |
| Performance baseline | Unknown | P2 |
| Go-live maturity | Medium-Low | P1/P2 |

Verdict:

> Not ready for full migration as-is. Ready for structured remediation and growth-readiness program.

---

## 6. Recommended Roadmap

### Phase 1 — Discovery & Access Confirmation

- confirm business goals
- confirm current vendor/dev ownership
- request required access
- confirm product/payment/shipping/analytics stack
- lock commercial model

### Phase 2 — P1 Security Remediation

- fix order ownership issues
- fix guest wishlist trust boundary
- minimize payment metadata
- retest with 2+ accounts/sessions

### Phase 3 — SEO Rescue

- canonical
- sitemap/robots
- product/category metadata
- H1
- hreflang
- structured data

### Phase 4 — UX/CRO Improvement

- homepage CTA/trust
- PLP filters/badges
- PDP trust block and variant clarity
- checkout trust messaging

### Phase 5 — Analytics & Performance

- GA4 ecommerce event tracking
- pixel setup if needed
- dashboard
- Core Web Vitals baseline
- public page caching review

### Phase 6 — Go-live & Handover

- UAT
- security retest
- smoke test
- rollback plan
- handover docs
- 1 month warranty

---

## 7. Recommended Commercial Package

Recommended package:

```txt
Commerce Growth Partnership — Setup Fee + Monthly Maintenance
```

Why this option fits best:

- ecommerce is ongoing operation, not one-time page build
- security remediation needs retest and monitoring
- SEO and analytics need post-launch validation
- fashion ecommerce depends on product drops and campaigns
- maintenance gives client predictable support after launch
- avoids attribution conflict of pure revenue-share model

Other available options:

1. Secure Foundation Setup — one-time setup
2. Commerce Growth Partnership — setup + monthly maintenance
3. Performance Partnership — setup + monthly minimum + 5% website net revenue

---

## 8. Required Client Decisions

Yoora Sarah needs to confirm:

- website role: primary sales channel or complement to Shopee/WhatsApp/social commerce
- selected commercial package
- technical PIC and current vendor coordination
- access availability
- payment/shipping provider
- product data source
- analytics/ad account access
- go-live target window
- maintenance expectation
- AI feature interest and token subscription if relevant

---

## 9. Immediate Next Step

Recommended next action:

1. approve proposal direction
2. select package
3. start discovery/access collection
4. prioritize P1 security remediation
5. run retest
6. continue SEO, UX/CRO, analytics, performance, and go-live readiness

Client-facing closing:

> Yoora Sarah already has ecommerce potential. Meanwhile recommends a remediation-first migration so website can become a secure, trusted, measurable, and conversion-ready sales channel.
