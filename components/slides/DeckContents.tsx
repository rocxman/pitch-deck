export function DeckContents() {
  const contents = [
    "Executive Summary",
    "Readiness Scorecard",
    "Security Findings",
    "SEO Findings",
    "UX/CRO Findings",
    "Analytics Findings",
    "Performance Findings",
    "P1 Recommendations",
    "Strategic Roadmap",
    "Investment Packages",
    "Optional Modules",
    "Maintenance & SLA",
    "Commercial Terms",
    "Appendix Documents",
    "Next Steps",
  ];

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ TABLE OF CONTENTS ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Complete proposal deck, split into proportionate presentation pages.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
        {contents.map((label, index) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3"
          >
            <span className="font-mono text-[11px] text-white/35">
              {String(index + 2).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-white/80">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
