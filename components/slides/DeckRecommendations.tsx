import { findings } from "@/data/findings";

export function DeckRecommendations() {
  const items = findings.filter((finding) => finding.priority === "P1").slice(0, 8);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ P1 RECOMMENDATIONS ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          First fix what blocks secure launch and discoverability.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((finding) => (
          <div key={finding.id} className="grid grid-cols-[90px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div>
              <p className="font-mono text-xs text-white/40">{finding.id}</p>
              <p className="mt-2 inline-flex rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-white/50">
                {finding.priority}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-base font-medium text-white">{finding.title}</h3>
              <p className="text-sm leading-6 text-white/55">{finding.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
