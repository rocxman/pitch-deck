import { findingCounts } from "@/data/findings";
import { reportMeta } from "@/data/reportMeta";

export function DeckExecutiveSummary() {
  const kpis = [
    { label: "Issues Confirmed", value: "5", tone: "text-yellow-400" },
    { label: "High Risk", value: "2", tone: "text-red-400" },
    { label: "P1 Priority", value: String(findingCounts.p1), tone: "text-orange-400" },
  ];

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ EXECUTIVE SUMMARY ]
        </p>
        <h2 className="mb-8 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {reportMeta.verdict}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className={`mb-2 text-5xl font-semibold ${kpi.tone}`}>
              {kpi.value}
            </p>
            <p className="text-sm text-white/60">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/20 bg-white/[0.05] p-6">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ RECOMMENDATION ]
        </p>
        <p className="text-xl font-medium text-white">
          {reportMeta.recommendedPackage} — {reportMeta.recommendedPrice}
        </p>
      </div>
    </div>
  );
}
