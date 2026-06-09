# Yoora Sarah — UX/CRO Audit

**Prepared by:** Meanwhile  
**Project:** Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** UX / CRO Audit  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Executive Summary

Yoora Sarah memiliki fondasi visual ecommerce yang kuat: fashion imagery, category-led browsing, product grid, product detail with variants, wishlist, cart, and WhatsApp support.

Namun, untuk menjadi primary ecommerce channel, UX perlu ditingkatkan dari visual-first menjadi conversion-ready.

Main UX/CRO priorities:

1. stronger homepage CTA and trust strip
2. better mobile category discovery
3. PLP filter drawer and product badges
4. PDP trust block near add-to-cart
5. clearer variant and CTA states
6. improved review/social proof strategy
7. ecommerce funnel tracking for CRO measurement

---

## 2. Audit Scope

Observed pages:

- homepage desktop/mobile
- category page `/id/dress`
- product page `/id/dress/clara-dress-5254`

Areas reviewed:

- first impression
- mobile navigation
- category discovery
- product listing usability
- product detail conversion
- trust signals
- purchase confidence
- analytics/CRO measurement readiness

---

## 3. CRO Principle

Fashion ecommerce conversion depends on 5 factors:

```txt
Desire → Discovery → Confidence → Ease → Measurement
```

Yoora Sarah already has desire through strong visuals. Next improvements should focus on:

- discovery: filters, navigation, product hierarchy
- confidence: trust, reviews, shipping/return info
- ease: variant clarity, CTA clarity, mobile usability
- measurement: GA4 funnel events

---

## 4. Homepage Audit

### 4.1 Observed Strengths

- strong visual-first fashion presentation
- category-led hero carousel
- premium brand potential
- category breadth visible
- header actions available:
  - search
  - wishlist
  - cart
  - user
  - language
- WhatsApp support visible
- bilingual direction exists

### 4.2 Observed Gaps

| Gap | Impact | Priority |
|---|---|---:|
| CTA not strong enough in first viewport | user may browse passively, not shop | P2 |
| Trust strip not visible above fold | purchase confidence delayed | P2 |
| Category carousel may dilute action | user decision unclear | P2 |
| Best seller/new arrival not prominent | weak product discovery | P2 |
| Mobile navigation dense | discovery friction | P2 |
| Brand value proposition minimal | weak differentiation | P3 |

### 4.3 Recommendations

#### Homepage CTA

Add clear CTAs per hero/category slide:

- `Belanja Sekarang`
- `Lihat Koleksi`
- `Shop New Arrival`
- `Lihat Limited Offer`

Acceptance:

- primary CTA visible on mobile first viewport
- CTA contrast meets readability
- CTA click tracked

#### Trust Strip

Add trust strip below hero or first section:

- secure payment
- official store
- easy exchange/return
- WhatsApp support
- shipping information

Acceptance:

- visible before user reaches product grid
- concise mobile layout

#### Product Discovery Module

Add modules:

- New Arrival
- Best Seller
- Limited Offer
- Recommended for You if data supports

Acceptance:

- user sees shoppable products without relying only on carousel
- module click/view tracked

#### Mobile Category Discovery

Improve category browsing:

- compact category chips
- expandable category drawer
- image category cards
- sticky search/category access where useful

Acceptance:

- usable on 360px viewport
- no horizontal navigation confusion

---

## 5. Category / PLP Audit

### 5.1 Observed Strengths

Observed `/id/dress`:

- category hero banner
- category title area
- product count: `Hasil: 7 Item`
- sort control
- mobile 2-column grid
- product cards show:
  - image
  - color variants
  - size list
  - name
  - price
  - wishlist/cart icons

Strength meaning:

> PLP already has real commerce structure. It can scale if filter, hierarchy, and tracking are improved.

### 5.2 Observed Gaps

| Gap | Impact | Priority |
|---|---|---:|
| Filter not observed | difficult discovery as SKU grows | P2 |
| Stock/urgency not shown on PLP | missed conversion cue | P3 |
| Icon-only CTAs | unclear for some users | P2/P3 |
| Many color dots may crowd mobile card | cognitive load | P3 |
| No visible social proof/rating | lower trust | P3 |
| Category SEO title uses raw slug in some categories | weak quality signal | P1 SEO |

### 5.3 Recommendations

#### Mobile Filter Drawer

Filters:

- size
- color
- price range
- availability
- promo/sale
- collection
- material/occasion if data exists

Acceptance:

- filter drawer accessible on mobile
- selected filters shown as chips
- filter state persists in URL
- empty result state helpful

#### Sorting Improvements

Sort options:

- newest
- best seller
- price low to high
- price high to low
- discount
- availability

Acceptance:

- sort changes product order clearly
- sort event tracked

#### Product Badges

Add badges where data supports:

- New
- Best Seller
- Sale
- Limited Stock
- Restock

Acceptance:

- badges do not clutter card
- badge rules documented

#### Product Card CTA Clarity

Improve:

- accessible labels for cart/wishlist icons
- optional microcopy on hover/press
- prevent add-to-cart if variant selection required

Acceptance:

- icon purpose clear
- invalid cart action prevented

---

## 6. Product Detail / PDP Audit

### 6.1 Observed Strengths

Observed `Clara Dress` PDP:

- product gallery carousel
- product name visible
- many color variants
- size selector S/M/L/XL
- stock count: `Sisa Stok: 7`
- size guide link
- price visible
- quantity selector
- add to cart
- add to wishlist
- product description
- material section
- care section
- review section exists

Strength meaning:

> PDP has mature product content foundation. Conversion trust layer needs improvement.

### 6.2 Observed Gaps

| Gap | Impact | Priority |
|---|---|---:|
| Product title metadata wrong | SEO/share weakness | P1 SEO |
| Many color variants | decision fatigue | P2 |
| Empty review state | weak social proof | P3 |
| Trust block not visible near CTA | purchase confidence lower | P2 |
| Product description can be more structured | scanning harder | P3 |
| Disabled CTA state may be unclear | conversion friction | P2 |
| Delivery/return/payment not near CTA | checkout hesitation | P2 |

### 6.3 Recommendations

#### PDP Trust Block

Place near add-to-cart:

- secure payment
- shipping estimate
- return/exchange policy
- WhatsApp support
- official store assurance

Acceptance:

- trust block visible before checkout
- no need to scroll to footer/policy for basic reassurance

#### Variant UX

Improve:

- group colors by family if many variants
- show selected color clearly
- mark unavailable combinations
- disable invalid add-to-cart with clear reason
- keep stock message tied to selected variant

Acceptance:

- user knows selected size/color
- invalid variant cannot be added
- disabled CTA explains reason

#### Product Content Structure

Improve description:

- short summary
- material bullet list
- fit/model size
- care instruction bullets/icons
- occasion/use-case notes

Acceptance:

- PDP content easy to scan on mobile
- key buying details visible before long text

#### Review Strategy

Short term:

- improve empty state copy
- show trust alternative: “Belum ada ulasan, hubungi WhatsApp untuk konsultasi size.”

Medium term:

- post-purchase review request
- photo review support if feasible
- moderation/admin workflow

Acceptance:

- empty review area does not feel abandoned
- review collection process defined

---

## 7. Checkout Trust Recommendations

Even if checkout was not fully tested in this final passive session, full ecommerce migration should include checkout trust improvements.

Recommended trust elements:

- transparent shipping cost and delivery estimate
- payment method logos
- secure payment note
- return/exchange summary
- WhatsApp support shortcut
- account/guest checkout strategy
- clear error messages
- voucher rule clarity
- order summary sticky on mobile where useful

Benchmark context:

Baymard reports common abandonment reasons include extra costs, slow delivery, credit-card trust concern, forced account creation, and complicated checkout.

Implication:

> Trust and checkout clarity are revenue protection, not decorative content.

---

## 8. Mobile UX Priorities

Mobile priorities:

1. hero CTA visible without confusion
2. category navigation compact and discoverable
3. filter drawer easy to open/close
4. product card actions clear
5. PDP variant selection easy with thumb use
6. trust block near CTA
7. sticky cart/checkout CTA where useful
8. form fields optimized for autofill
9. WhatsApp support accessible but not blocking CTA

Acceptance:

- key flows usable on 360px viewport
- no critical CTA hidden behind floating elements
- filter/variant/checkout interactions work by touch

---

## 9. CRO Measurement Plan

CRO improvements must be measured.

Recommended events:

| Event | Purpose |
|---|---|
| `view_item_list` | PLP/category view |
| `select_item` | product card click |
| `view_item` | PDP view |
| `add_to_cart` | add-to-cart intent |
| `remove_from_cart` | cart friction |
| `begin_checkout` | checkout start |
| `add_shipping_info` | shipping step |
| `add_payment_info` | payment step |
| `purchase` | conversion |
| `search` | demand signal |
| `filter_apply` | product discovery behavior |
| `sort_apply` | listing behavior |
| `wishlist_add` | product interest |
| `whatsapp_click` | support-assisted commerce |

CRO dashboard should show:

- product list to PDP click-through
- PDP to add-to-cart rate
- add-to-cart to checkout rate
- checkout to purchase rate
- conversion by category/product
- WhatsApp assisted clicks
- filter usage
- device split

---

## 10. Prioritized UX/CRO Backlog

| ID | Item | Priority |
|---|---|---:|
| UX-001 | Homepage hero CTA | P2 |
| UX-002 | Homepage trust strip | P2 |
| UX-003 | Mobile category discovery | P2 |
| UX-004 | PLP filter drawer | P2 |
| UX-005 | PLP badges and product card clarity | P2/P3 |
| UX-006 | PDP trust block near CTA | P2 |
| UX-007 | PDP variant clarity | P2 |
| UX-008 | Checkout trust messaging | P2 |
| UX-009 | Review empty state and review collection | P3 |
| UX-010 | Product content structure improvements | P3 |

---

## 11. Final UX/CRO Recommendation

Yoora Sarah visual foundation is strong. Next step is not heavy redesign first. Next step is conversion hardening:

```txt
Clear CTA + Better Discovery + More Trust + Easier Selection + Measurable Funnel
```

Recommended order:

1. fix security and SEO P1 first
2. add homepage CTA/trust
3. add PLP filter drawer
4. add PDP trust and variant clarity
5. instrument CRO events
6. optimize monthly based on data
