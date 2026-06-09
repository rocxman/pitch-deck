# Yoora Sarah — Roles, Responsibilities & SLA

**Prepared by:** Meanwhile  
**Project:** Yoora Sarah Digital Commerce Migration, Security Remediation & Growth Readiness  
**Document Type:** Roles, Responsibilities, Ownership & Service Level Agreement  
**Version:** 1.0  
**Date:** 2026-06-08

---

## 1. Purpose

Dokumen ini menjelaskan pembagian peran, tanggung jawab, hak, kewajiban, ownership, warranty, support policy, dan SLA antara **Yoora Sarah** sebagai client dan **Meanwhile** sebagai agency/implementation partner.

Tujuannya:

- mengurangi miskomunikasi scope
- memastikan akses dan approval berjalan tepat waktu
- membedakan bug fix, change request, dan new feature
- menjaga ownership asset dan source code jelas
- memastikan post-launch support punya batasan profesional
- melindungi kepentingan client dan agency secara seimbang

---

## 2. Engagement Context

Berdasarkan audit dan passive live observation, Yoora Sarah sudah memiliki fondasi ecommerce modern: katalog produk, kategori, product detail, wishlist, cart, akun customer, unpaid order flow, payment handoff, policy pages, dan WhatsApp support.

Namun, sebelum website dijadikan primary ecommerce channel, ada beberapa area prioritas:

1. confirmed security remediation pada order ownership dan guest wishlist trust boundary
2. SEO rescue: canonical, sitemap, product metadata, H1, hreflang consistency
3. UX/CRO improvement untuk homepage, PLP/category, PDP/product detail, checkout trust
4. analytics ecommerce tracking untuk funnel measurement
5. performance and Core Web Vitals baseline
6. go-live readiness, retest, and handover process

Dokumen ini menjadi governance layer agar execution berjalan rapi.

---

## 3. Parties

| Party | Role | Primary Responsibility |
|---|---|---|
| Yoora Sarah | Client / Business Owner | Business decisions, content, product data, access, approvals, operational ownership |
| Meanwhile | Agency / Implementation Partner | Audit finalization, remediation planning, implementation support, documentation, QA coordination, handover |
| Existing Vendor / Internal Dev Team | Current Technical Owner, if any | Current source code, infrastructure knowledge, technical access, legacy system clarification |
| Third-party Providers | External Service Providers | Hosting, payment gateway, domain, SMS/WhatsApp/OTP, email, analytics, AI/API services |

---

## 4. Client Rights

Yoora Sarah has the right to:

1. receive clear scope, deliverables, timeline, and acceptance criteria before implementation
2. approve or reject proposed deliverables based on agreed criteria
3. receive factual audit explanation without unnecessary alarmist framing
4. receive remediation summary and retest result for critical findings
5. own final approved content, brand assets, and business data
6. receive source code handover after full payment, unless specific third-party/license terms restrict redistribution
7. request clarification on technical decisions, cost implications, and risk tradeoffs
8. approve production go-live timing
9. approve third-party service spend before subscription/activation
10. request change quotation for work outside agreed scope

---

## 5. Client Obligations

Yoora Sarah is responsible for:

### 5.1 Access & Authorization

Providing timely access or authorized coordination for:

- source code repository
- hosting/Vercel account
- backend/Fly.io or equivalent backend account
- database or database admin access, where required
- object storage/media storage
- domain registrar/DNS
- payment gateway dashboard and sandbox/production credentials
- email/SMS/WhatsApp provider
- GA4, Google Tag Manager, Search Console
- Meta Pixel, TikTok Pixel, Google Ads if used
- error monitoring/logging tools if used

If access cannot be given directly, Yoora Sarah must assign authorized technical PIC/vendor to execute required changes under guidance.

### 5.2 Business & Content Decisions

Yoora Sarah must provide or approve:

- product catalog source of truth
- product names, descriptions, prices, variants, stock policy
- shipping method and delivery rules
- payment methods
- return/refund/exchange policy
- promo/voucher rules
- brand copy, campaign copy, and visual direction
- legal/privacy/terms content
- language/localization requirements

### 5.3 Review & Approval

Yoora Sarah must:

- review deliverables within agreed review window
- consolidate feedback from internal stakeholders
- assign one decision-making PIC for approval
- approve UAT before go-live
- approve production change window
- separate bugs from new requests

### 5.4 Third-party Cost Ownership

Yoora Sarah is responsible for all third-party costs unless stated otherwise in written scope:

- domain registration/renewal
- hosting/Vercel or equivalent
- backend cloud/VPS/Fly.io or equivalent
- database/storage/object storage
- payment gateway fees
- SMS/OTP/WhatsApp/email provider fees
- analytics/monitoring tools
- AI API/token usage
- premium plugins, themes, fonts, stock assets, SaaS licenses

Meanwhile can assist setup, configuration, and management if included in scope, but commercial ownership remains with Yoora Sarah.

---

## 6. Meanwhile Rights

Meanwhile has the right to:

1. receive required access, information, and approvals before starting dependent work
2. pause or reschedule tasks blocked by missing access, missing content, or late approvals
3. reject requests that are destructive, unauthorized, illegal, or outside agreed security testing scope
4. separate change requests from bug fixes
5. quote additional work for new features, scope changes, or post-warranty work
6. require staging validation before production deployment
7. require written approval before go-live or high-risk production change
8. limit warranty coverage to bugs caused by delivered scope
9. protect internal methods, templates, and reusable agency IP not specifically delivered as client-owned source code
10. recommend safer implementation path if requested shortcut increases security, SEO, or operational risk

---

## 7. Meanwhile Obligations

Meanwhile is responsible for:

### 7.1 Delivery Quality

- produce professional, factual, agency-grade deliverables
- use evidence from master insight and live passive audit consistently
- define assumptions, dependencies, and risks clearly
- provide acceptance criteria for critical deliverables
- avoid overstating unconfirmed vulnerabilities
- keep sensitive security details in appropriate technical appendix

### 7.2 Technical Execution, if implementation scope is approved

- remediate agreed P1 security issues
- apply ownership checks for order resources
- redesign guest wishlist identity boundary where in scope
- reduce unnecessary payment metadata exposure
- support SEO fixes: canonical, sitemap, metadata, H1, structured data
- support UX/CRO improvements according to approved scope
- set up analytics event tracking according to approved tracking plan
- coordinate QA and retest
- document go-live and handover checklist

### 7.3 Security Conduct

- perform only authorized testing
- avoid destructive testing without written approval
- avoid brute force, DoS, payment abuse, or invasive testing unless explicit authorization and safe test environment exist
- document security findings factually
- recommend remediation and retest path

### 7.4 Communication

- report blockers early
- state what is done, pending, blocked, or out-of-scope
- provide concise weekly/status updates if maintenance/project management is included
- communicate production risk before deployment

---

## 8. Responsibility Matrix

| Area | Yoora Sarah | Meanwhile | Notes |
|---|---|---|---|
| Business goals | Accountable | Consulted | Client decides priorities |
| Product data | Accountable | Support if scoped | Client owns accuracy |
| Brand assets | Accountable | Support if scoped | Client owns brand usage approval |
| Source code access | Accountable | Needs access | Existing vendor may be involved |
| Security remediation | Approves/owns risk | Implements/supports if scoped | Requires code/backend access |
| SEO strategy | Approves | Recommends/implements if scoped | Search Console access needed |
| Analytics events | Approves KPIs | Specifies/implements if scoped | GA4/GTM access needed |
| Payment gateway | Accountable | Integrates/configures if scoped | Client owns account/fees |
| Shipping/logistics | Accountable | Integrates if scoped | Provider credentials needed |
| Hosting/cloud | Accountable | Configures if scoped | Client-paid/client-owned recommended |
| DNS/domain | Accountable | Supports if scoped | Production changes need approval |
| QA/UAT | Accountable for sign-off | Coordinates/supports | UAT approval required before launch |
| Go-live approval | Accountable | Executes/supports if scoped | Written approval recommended |
| Post-launch warranty | Reports bugs | Fixes delivered-scope bugs | 1 month warranty |
| Maintenance | Optional | Optional package | Scope depends selected plan |

---

## 9. Ownership Policy

### 9.1 Source Code

Recommended policy:

- Custom source code specifically developed for Yoora Sarah under paid project scope is handed over to Yoora Sarah after full payment.
- Meanwhile may retain reusable internal know-how, templates, methods, snippets, checklists, and non-client-specific frameworks unless explicitly sold as exclusive IP.
- Third-party libraries remain governed by their original licenses.
- Existing code owned by Yoora Sarah or prior vendor remains under its existing ownership terms.

### 9.2 Business Data

Yoora Sarah owns:

- customer data
- order data
- product data
- pricing
- inventory data
- analytics data
- campaign data
- payment records

Meanwhile may access data only for approved implementation, QA, troubleshooting, reporting, or maintenance scope.

### 9.3 Accounts & Infrastructure

Recommended policy:

- Domain, hosting, cloud, payment gateway, email/SMS/WhatsApp provider, analytics, and AI provider accounts should be Yoora Sarah-owned.
- Meanwhile can be added as collaborator/admin during project.
- Access should be reviewed and adjusted after handover or contract end.

### 9.4 Documentation

Final approved documents delivered for the Yoora Sarah engagement may be used by Yoora Sarah for internal planning, vendor coordination, and project governance.

---

## 10. Third-party Cost Matrix

| Cost Item | Owner | Paid By | Managed By | Notes |
|---|---|---|---|---|
| Domain registration/renewal | Yoora Sarah | Yoora Sarah | Yoora Sarah / Meanwhile if scoped | Client should retain registrar control |
| DNS | Yoora Sarah | Yoora Sarah | Yoora Sarah / Meanwhile if scoped | Changes need approval |
| Vercel/frontend hosting | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Client-owned account recommended |
| Backend hosting/Fly.io/VPS | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Includes compute/network cost |
| Database | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Backup policy required |
| Object/media storage | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Product images/media cost |
| Payment gateway | Yoora Sarah | Yoora Sarah | Yoora Sarah / Meanwhile if scoped | Transaction fees client-owned |
| Email provider | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Transactional email cost |
| SMS/OTP/WhatsApp | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Usage-based cost |
| GA4/GTM/Search Console | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Usually free but client-owned |
| Meta/TikTok/Google Ads | Yoora Sarah | Yoora Sarah | Client/marketing team | Ad spend excluded |
| Monitoring/logging | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Depends chosen tool |
| AI API/token usage | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | Separate subscription/quota |
| Premium plugins/assets | Yoora Sarah | Yoora Sarah | Meanwhile if scoped | License terms apply |

---

## 11. Warranty Terms

### 11.1 Warranty Period

Recommended warranty:

```txt
1 month after go-live or formal handover, whichever is agreed in contract.
```

Warranty start date must be written in handover or go-live approval document.

### 11.2 Warranty Includes

Warranty covers reproducible bugs caused by delivered scope, including:

- frontend bugs caused by delivered implementation
- backend bugs caused by delivered implementation
- layout breakage caused by delivered implementation
- security regression caused by delivered remediation
- cart/checkout/product flow bugs caused by delivered implementation
- analytics bugs caused by delivered tracking implementation
- SEO implementation bugs caused by delivered scope

### 11.3 Warranty Excludes

Warranty does not include:

- new features
- new design requests
- requirement changes
- new promo/voucher rules not in original scope
- client content/data entry mistakes
- third-party outage or provider API/policy change
- payment gateway downtime or account issue
- hosting/cloud outage outside delivered code
- manual production changes by client, vendor, or other party
- issues caused by expired third-party subscription/credit/quota
- post-warranty support unless covered by maintenance package

### 11.4 Warranty Process

Bug report must include:

- issue summary
- affected URL/page
- steps to reproduce
- screenshot/screen recording if possible
- expected result
- actual result
- user/account/order example if relevant and safe to share
- severity requested

Meanwhile validates whether issue is:

1. warranty bug
2. maintenance support item
3. change request
4. third-party/client-side issue
5. new feature request

---

## 12. SLA Model

SLA below is recommended for maintenance clients. One-time project without maintenance may receive best-effort support after warranty.

### 12.1 Severity Definitions

| Severity | Definition | Example |
|---|---|---|
| Critical / P0 | Production outage or severe security/privacy exposure affecting many users | Website down, checkout cannot complete, confirmed live PII leak |
| High / P1 | Major business flow broken or confirmed security issue with limited scope | Payment handoff broken, user can access another user order |
| Medium / P2 | Important function impaired but workaround exists | Product filter broken, analytics event missing, layout issue on key device |
| Low / P3 | Minor defect, cosmetic issue, low impact improvement | Copy typo, spacing issue, non-critical enhancement |

### 12.2 Response & Resolution Targets

| Plan / Context | P0 Response | P1 Response | P2 Response | P3 Response |
|---|---:|---:|---:|---:|
| Warranty only | 1 business day | 1 business day | 2 business days | 3 business days |
| Basic Maintenance | 8 business hours | 1 business day | 2 business days | 5 business days |
| Growth Maintenance | 4 business hours | 8 business hours | 1–2 business days | 3–5 business days |
| Priority Maintenance | 2 business hours | 4 business hours | 1 business day | 2–3 business days |

Resolution depends on root cause, access, third-party provider response, approval speed, and risk level. For severe production incidents, first target may be mitigation/rollback before permanent fix.

### 12.3 Business Hours

Default business hours unless agreed otherwise:

```txt
Monday–Friday, 09:00–18:00 WIB
Excluding public holidays
```

Emergency support outside business hours requires Priority Maintenance or separate emergency agreement.

---

## 13. Change Request Policy

A change request is any request that changes approved scope, behavior, design, content structure, integration, or acceptance criteria.

Examples:

- new feature not listed in original scope
- new payment method or shipping provider
- new campaign/voucher engine rule
- redesign beyond approved layout
- new language/domain/market support
- new AI feature or new token quota model
- new dashboard/report not included in analytics scope
- additional admin workflow
- post-approval content restructuring

Change request process:

1. Client submits request.
2. Meanwhile reviews impact.
3. Meanwhile classifies request: bug, improvement, new feature, third-party issue, or operational task.
4. Meanwhile provides estimate/timeline/cost if outside scope.
5. Client approves before work starts.
6. Timeline and dependencies are updated.

---

## 14. Production Change & Go-live Policy

Production changes should follow controlled process:

1. change prepared and tested in staging where feasible
2. QA checklist completed
3. security-sensitive flows retested if affected
4. rollback path defined
5. Yoora Sarah approves go-live window
6. deployment executed
7. smoke test completed
8. monitoring/log review performed after release

High-risk changes require written approval:

- DNS/domain changes
- payment production credentials
- checkout/payment logic
- auth/session logic
- order data model
- database migration
- security remediation affecting access control
- analytics purchase tracking
- major SEO canonical/sitemap change

---

## 15. Security Testing Authorization Boundary

Meanwhile may perform only approved testing activities.

Allowed by default in audit/remediation context:

- passive review
- code review, if source code access provided
- controlled functional QA
- authorized two-account authorization retest
- staging security validation
- non-destructive API validation

Requires explicit written approval:

- production security retest beyond passive checks
- payment sandbox/production transaction testing
- bulk scanning
- rate-limit testing
- destructive test cases
- admin/backoffice security testing
- data export/import manipulation

Not allowed without explicit authorization and safe scope:

- denial-of-service testing
- brute force
- credential stuffing
- real payment abuse
- unauthorized access attempts outside agreed test accounts
- destructive data deletion/modification

---

## 16. Access Management

Recommended access process:

1. Use named user accounts, not shared credentials.
2. Grant least privilege needed for task.
3. Use temporary access where possible.
4. Enable 2FA for critical accounts.
5. Record who has production access.
6. Review access after go-live/handover.
7. Remove or downgrade Meanwhile access if maintenance is not active.
8. Store secrets only in approved secret manager/environment settings.
9. Never share production secrets in chat screenshots or public documents.

---

## 17. Acceptance Criteria

This roles/SLA framework is accepted when:

- Yoora Sarah PIC is assigned
- Meanwhile PIC is assigned
- access responsibility is agreed
- third-party cost ownership is agreed
- warranty start rule is agreed
- support channel is agreed
- severity definitions are agreed
- change request process is agreed
- production approval process is agreed
- source code ownership policy is agreed

---

## 18. Recommended Client-facing Summary

> Meanwhile will support Yoora Sarah as an implementation and migration partner with clear scope, technical governance, remediation discipline, and post-launch support boundaries. Yoora Sarah retains ownership of business decisions, infrastructure accounts, product data, customer data, and third-party costs. Meanwhile is responsible for delivering the agreed technical scope professionally, documenting risks, supporting QA/retest, and separating bugs from change requests so the migration remains controlled and trustworthy.
