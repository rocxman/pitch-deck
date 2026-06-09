export type AppendixDoc = {
  title: string;
  filename: string;
  category: "Strategy" | "Audit" | "Implementation" | "Commercial" | "Launch";
  description: string;
};

export const documents: AppendixDoc[] = [
  { title: "Master Insight", filename: "MASTER-INSIGHT-YOORA-SARAH.md", category: "Strategy", description: "Master source covering findings, architecture, strategy, benchmark standards, commercial models, and open questions." },
  { title: "Executive Summary", filename: "YOORA-SARAH-EXECUTIVE-SUMMARY.md", category: "Strategy", description: "Verdict, opportunity, risks, recommended roadmap, package direction, client decisions, and immediate next step." },
  { title: "Pitch Deck", filename: "YOORA-SARAH-PITCH-DECK.md", category: "Strategy", description: "Static pitch deck outline covering narrative, findings, roadmap, package options, roles, warranty, and appendices." },
  { title: "Live Passive Audit Evidence", filename: "YOORA-SARAH-LIVE-PASSIVE-AUDIT-EVIDENCE.md", category: "Audit", description: "Passive evidence artifacts, stack signals, headers, SEO metadata, sitemap/robots, UX, performance, and analytics observations." },
  { title: "Final Audit Report", filename: "YOORA-SARAH-FINAL-AUDIT-REPORT.md", category: "Audit", description: "Consolidated security, SEO, UX/CRO, analytics, performance findings with risk matrix and final recommendations." },
  { title: "SEO, Performance & Analytics Audit", filename: "YOORA-SARAH-SEO-PERFORMANCE-ANALYTICS-AUDIT.md", category: "Audit", description: "Technical SEO issues, Core Web Vitals targets, GA4 ecommerce event requirements, and dashboard recommendations." },
  { title: "UX/CRO Audit", filename: "YOORA-SARAH-UX-CRO-AUDIT.md", category: "Audit", description: "Homepage, category/PLP, product/PDP, checkout trust, mobile UX, and CRO measurement recommendations." },
  { title: "Remediation Backlog", filename: "YOORA-SARAH-REMEDIATION-BACKLOG.md", category: "Implementation", description: "Prioritized technical backlog with security, SEO, UX/CRO, analytics, performance, and operations acceptance criteria." },
  { title: "Ecommerce Migration Roadmap", filename: "YOORA-SARAH-ECOMMERCE-MIGRATION-ROADMAP.md", category: "Implementation", description: "Phase-by-phase roadmap from discovery through remediation, growth foundation, QA/UAT, go-live, handover, and support." },
  { title: "Execution Checklist", filename: "YOORA-SARAH-EXECUTION-CHECKLIST.md", category: "Implementation", description: "Agency execution checklist from internal prep to maintenance and growth optimization." },
  { title: "Interactive Report Implementation Timeline", filename: "YOORA-SARAH-INTERACTIVE-REPORT-IMPLEMENTATION-TIMELINE.md", category: "Implementation", description: "Build plan, stack, information architecture, QA, deployment, and handover timeline for this interactive report." },
  { title: "Deep Analytic & Frontend Rebuild Offer", filename: "YOORA-SARAH-DEEP-ANALYTIC-AND-FRONTEND-REBUILD-OFFER.md", category: "Commercial", description: "Client-facing offer with deep analytic findings first, then solutions, pricing for analytic packages, and pricing for UI/UX frontend rebuild only." },
  { title: "Proposal Scope & Packages", filename: "YOORA-SARAH-PROPOSAL-SCOPE-AND-PACKAGES.md", category: "Commercial", description: "Scope pillars, commercial options, recommended package, warranty, exclusions, third-party costs, and success metrics." },
  { title: "Roles, Responsibilities & SLA", filename: "YOORA-SARAH-ROLES-RESPONSIBILITIES-SLA.md", category: "Commercial", description: "Client/Meanwhile responsibilities, ownership, warranty, SLA model, change request policy, access management, and acceptance criteria." },
  { title: "Go-live & Handover Checklist", filename: "YOORA-SARAH-GO-LIVE-HANDOVER-CHECKLIST.md", category: "Launch", description: "Launch gates, security retest, SEO, UX/CRO, payment/order, analytics, performance, DNS/SSL, rollback, smoke test, handover, and monitoring." },
];
