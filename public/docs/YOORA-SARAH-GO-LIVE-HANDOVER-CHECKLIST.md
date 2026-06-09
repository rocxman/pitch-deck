# Yoora Sarah — Go-live & Handover Checklist

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Go-live & Handover Checklist  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Purpose

Dokumen ini menjadi checklist untuk memastikan Yoora Sarah launch secara aman, terkontrol, terdokumentasi, dan siap dioperasikan setelah handover.

Go-live should happen only after:

- P1 security remediation passes retest
- SEO P1 fixes validated
- analytics purchase tracking validated
- payment/shipping flow approved
- production smoke test passes
- rollback path ready
- client UAT approved

---

## 2. Go-live Readiness Rule

Do not go live or scale campaigns if any of these remain unresolved:

- cross-account order access still possible
- guest wishlist takeover still possible
- payment metadata exposure not minimized
- sitemap/robots still invalid
- product page title still falls back to homepage
- purchase event fires duplicate or not at all
- payment production flow not validated under approved scope
- rollback plan unavailable
- client UAT not approved

---

## 3. Pre-launch Checklist

### 3.1 Scope & Approval

- [ ] final scope approved
- [ ] selected package approved
- [ ] client PIC assigned
- [ ] technical PIC/vendor assigned
- [ ] production go-live window approved
- [ ] UAT sign-off completed
- [ ] known limitations documented
- [ ] warranty start rule agreed

### 3.2 Access

- [ ] source code repository access confirmed
- [ ] Vercel/frontend hosting access confirmed
- [ ] backend/cloud access confirmed
- [ ] database access confirmed
- [ ] object/media storage access confirmed
- [ ] DNS/domain access confirmed
- [ ] payment gateway dashboard access confirmed
- [ ] email/SMS/WhatsApp provider access confirmed
- [ ] GA4/GTM/Search Console access confirmed
- [ ] Meta/TikTok/Google Ads access confirmed if used

### 3.3 Environment

- [ ] staging environment available
- [ ] production environment available
- [ ] environment variables separated
- [ ] staging protected from indexing
- [ ] payment sandbox separated from production
- [ ] analytics staging/production separation defined
- [ ] secrets stored in approved environment/secret manager

---

## 4. Security Retest Checklist

### 4.1 Order Authorization

- [ ] user A creates unpaid order
- [ ] user B cannot access user A unpaid order page
- [ ] user B cannot access user A order detail API
- [ ] user B unpaid list shows only user B orders
- [ ] order collection API returns only current user orders
- [ ] pagination does not leak foreign orders
- [ ] all relevant status filters scoped by current user
- [ ] unauthorized access returns `403` or generic `404`
- [ ] unauthorized access does not expose PII/payment metadata

### 4.2 Guest Wishlist / Guest State

- [ ] session A creates guest wishlist
- [ ] session B cannot read session A wishlist by replaying identifier
- [ ] session B cannot delete session A wishlist
- [ ] session B cannot modify session A wishlist
- [ ] forged/unknown guest identifiers rejected or isolated
- [ ] legacy identifiers handled safely

### 4.3 Cart / Checkout / Payment Security

- [ ] guest cart checked for same trust-boundary issue
- [ ] logged-in cart belongs only to current user
- [ ] checkout belongs only to current user/session
- [ ] payment link/handoff bound to correct order/customer
- [ ] payment metadata minimized in API response
- [ ] invalid object IDs return safe error
- [ ] no raw stack traces exposed

### 4.4 Auth / Session

- [ ] login works consistently
- [ ] registration works consistently
- [ ] refresh token flow stable
- [ ] protected routes do not incorrectly redirect after valid login
- [ ] auth cookies use `Secure`
- [ ] auth cookies use `HttpOnly`
- [ ] auth cookies use appropriate `SameSite`
- [ ] logout clears session correctly

---

## 5. SEO Launch Checklist

### 5.1 Canonical

- [ ] homepage canonical correct
- [ ] English homepage canonical correct
- [ ] category canonical self-referencing
- [ ] product canonical self-referencing
- [ ] canonical host consistent
- [ ] staging canonical/noindex strategy correct
- [ ] tracking params stripped from canonical

### 5.2 Sitemap & Robots

- [ ] `robots.txt` accessible
- [ ] robots points to valid XML sitemap
- [ ] sitemap returns `application/xml`
- [ ] sitemap contains live canonical URLs
- [ ] sitemap has no `/id/id` nested locale paths
- [ ] sitemap has no `/id/en` nested locale paths
- [ ] sitemap submitted to Search Console
- [ ] Search Console accepts sitemap

### 5.3 Metadata

- [ ] homepage title and description correct
- [ ] English homepage title and description correct
- [ ] category titles use display names
- [ ] product titles use product names
- [ ] product page no longer title `Beranda | Yoora Sarah`
- [ ] Open Graph tags correct
- [ ] product image used in share preview

### 5.4 H1 & Structured Data

- [ ] one H1 on homepage
- [ ] one H1 on category page
- [ ] one H1 on product page
- [ ] H1 visible to crawler/SSR output
- [ ] Product JSON-LD validates
- [ ] Breadcrumb JSON-LD validates if used
- [ ] no fake review aggregate if no review data

---

## 6. UX/CRO Launch Checklist

### 6.1 Homepage

- [ ] hero CTA visible
- [ ] trust strip visible
- [ ] key categories easy to access
- [ ] best seller/new arrival module ready if included
- [ ] mobile first viewport usable

### 6.2 Category / PLP

- [ ] product grid loads correctly
- [ ] sort works
- [ ] filter drawer works if included
- [ ] filter chips show selected filters
- [ ] product cards show name, price, variant/size info
- [ ] product card wishlist/cart actions work safely
- [ ] empty state helpful

### 6.3 Product / PDP

- [ ] gallery loads correctly
- [ ] variant selection works
- [ ] unavailable options handled clearly
- [ ] CTA state clear
- [ ] add-to-cart works
- [ ] wishlist works
- [ ] price/stock correct
- [ ] size guide accessible
- [ ] material/care content visible
- [ ] trust block near CTA if included
- [ ] review empty state acceptable

### 6.4 Mobile

- [ ] homepage usable on 360px viewport
- [ ] category navigation usable on mobile
- [ ] PLP grid usable on mobile
- [ ] filter drawer usable on mobile
- [ ] PDP variant selection usable by touch
- [ ] floating WhatsApp does not block critical CTA
- [ ] checkout forms usable on mobile

---

## 7. Payment & Order Checklist

### 7.1 Payment Gateway

- [ ] payment gateway account owner confirmed
- [ ] sandbox credentials tested
- [ ] production credentials configured
- [ ] webhook URL configured
- [ ] webhook secret configured if required
- [ ] payment success flow tested
- [ ] payment failure flow tested
- [ ] payment pending/unpaid flow tested
- [ ] payment cancellation flow tested
- [ ] refund/cancel policy defined

### 7.2 Order Lifecycle

- [ ] cart to checkout works
- [ ] checkout to payment works
- [ ] unpaid order created correctly
- [ ] paid order updates correctly
- [ ] order status visible to correct customer only
- [ ] email/notification sent if included
- [ ] admin/support process defined if applicable

### 7.3 Shipping / Fulfillment

- [ ] shipping provider/rules configured
- [ ] shipping cost calculation verified
- [ ] delivery estimate visible if included
- [ ] receiver name/address/phone validation works
- [ ] fulfillment workflow documented

---

## 8. Analytics Checklist

### 8.1 GA4/GTM

- [ ] GA4 property confirmed
- [ ] GTM container confirmed if used
- [ ] DebugView access available
- [ ] production measurement ID configured
- [ ] staging measurement separation defined

### 8.2 Ecommerce Events

- [ ] `view_item_list`
- [ ] `select_item`
- [ ] `view_item`
- [ ] `add_to_cart`
- [ ] `remove_from_cart`
- [ ] `begin_checkout`
- [ ] `add_shipping_info`
- [ ] `add_payment_info`
- [ ] `purchase`
- [ ] `refund`
- [ ] `search`
- [ ] `login`
- [ ] `sign_up`
- [ ] `whatsapp_click`

### 8.3 Data Quality

- [ ] events fire once
- [ ] item data complete
- [ ] currency set
- [ ] value correct
- [ ] transaction ID stable
- [ ] purchase deduplicated
- [ ] refund/cancel handled correctly
- [ ] dashboard/reporting ready

### 8.4 Marketing Pixels

- [ ] Meta Pixel configured if used
- [ ] TikTok Pixel configured if used
- [ ] Google Ads conversion configured if used
- [ ] duplicate conversion avoided
- [ ] consent/privacy handling confirmed if required

---

## 9. Performance Checklist

- [ ] homepage CWV baseline measured
- [ ] category page CWV baseline measured
- [ ] product page CWV baseline measured
- [ ] cart/checkout baseline measured if accessible
- [ ] LCP target defined: ≤ 2.5s
- [ ] INP target defined: ≤ 200ms
- [ ] CLS target defined: ≤ 0.1
- [ ] hero image optimized
- [ ] product images responsive
- [ ] below-fold images lazy-loaded
- [ ] font preload reviewed
- [ ] public page cache strategy reviewed
- [ ] private pages no-cache confirmed

---

## 10. DNS / SSL / Domain Checklist

- [ ] production domain confirmed
- [ ] `www` vs non-`www` canonical host decided
- [ ] DNS records prepared
- [ ] DNS TTL reviewed before go-live
- [ ] SSL certificate active
- [ ] HTTP redirects to HTTPS
- [ ] root domain redirects correctly
- [ ] `www` domain redirects/serves correctly according to host strategy
- [ ] staging domain not indexable
- [ ] domain-aware canonical verified

---

## 11. Backup & Rollback Checklist

- [ ] database backup available before launch
- [ ] deployment rollback available
- [ ] previous production deployment identified
- [ ] environment variable rollback plan documented
- [ ] DNS rollback plan documented if DNS changes included
- [ ] payment credential rollback plan documented if changed
- [ ] emergency contact list ready
- [ ] incident communication template ready

Rollback trigger examples:

- checkout fails for real customers
- payment callback broken
- order ownership regression appears
- production deployment causes major frontend breakage
- analytics purchase duplication severe enough to corrupt reporting
- SEO canonical points production to wrong/staging domain

---

## 12. Smoke Test Checklist

Run immediately after production deploy:

### Public Pages

- [ ] homepage loads
- [ ] category page loads
- [ ] product page loads
- [ ] search works
- [ ] language switch works
- [ ] footer/policy links work
- [ ] WhatsApp link works

### Commerce Flow

- [ ] product variant selectable
- [ ] add to cart works
- [ ] wishlist works
- [ ] cart loads
- [ ] checkout starts
- [ ] payment handoff works under approved test scope
- [ ] order status page loads for correct user

### Security Quick Retest

- [ ] foreign order page denied
- [ ] foreign order API denied
- [ ] unpaid list only own orders
- [ ] guest wishlist replay denied

### SEO/Analytics Quick Check

- [ ] canonical correct on homepage/category/product
- [ ] sitemap returns XML
- [ ] robots points to correct sitemap
- [ ] GA4 DebugView receives expected events
- [ ] purchase test event validated if safe/approved

---

## 13. Handover Documents

Deliver to client:

- [ ] final audit report
- [ ] remediation summary
- [ ] security retest result
- [ ] SEO implementation summary
- [ ] analytics event map
- [ ] performance baseline
- [ ] go-live checklist
- [ ] rollback notes
- [ ] access/account list
- [ ] environment variable overview without exposing secrets
- [ ] deployment process notes
- [ ] support/warranty process
- [ ] known limitations
- [ ] maintenance recommendation

---

## 14. Warranty Process

Warranty period:

```txt
1 month after go-live or formal handover, based on agreement.
```

Included:

- bugs caused by delivered scope
- frontend/backend defects caused by delivered implementation
- security regression caused by delivered remediation
- checkout/cart/product flow bugs caused by delivered work
- analytics implementation bug caused by delivered work

Excluded:

- new features
- new design requests
- requirement changes
- content/data entry mistakes
- third-party outage
- provider API/policy changes
- manual production changes by other parties
- expired subscription/quota

Bug report format:

- affected URL
- steps to reproduce
- expected result
- actual result
- screenshot/video if available
- account/order example if safe
- severity requested

---

## 15. Post-launch Monitoring

First 24–72 hours:

- [ ] monitor checkout/payment errors
- [ ] monitor order creation/update
- [ ] monitor API errors
- [ ] monitor auth/session errors
- [ ] monitor analytics purchase events
- [ ] monitor sitemap/Search Console status
- [ ] monitor customer support/WhatsApp complaints
- [ ] monitor performance regressions

First month:

- [ ] weekly issue review
- [ ] warranty bug triage
- [ ] analytics funnel review
- [ ] SEO indexation check
- [ ] performance review
- [ ] client feedback review
- [ ] maintenance backlog planning

---

## 16. Final Go-live Approval

Go-live approval should include:

| Item | Status |
|---|---|
| P1 security retest passed | [ ] |
| SEO P1 fixes validated | [ ] |
| payment flow approved | [ ] |
| analytics events validated | [ ] |
| smoke test plan ready | [ ] |
| rollback plan ready | [ ] |
| client UAT approved | [ ] |
| warranty start date agreed | [ ] |
| maintenance/support model agreed | [ ] |

Client approval statement:

> Yoora Sarah approves production go-live based on completed UAT, security retest, SEO validation, analytics validation, and rollback readiness.

---

## 17. Final Recommendation

Go-live should be controlled, not rushed.

Recommended launch principle:

```txt
No P1 security blocker. No broken sitemap/canonical. No unvalidated payment flow. No blind purchase tracking. No launch without rollback.
```

After launch, continue with Commerce Growth Partnership maintenance for stability, reporting, and monthly optimization.
