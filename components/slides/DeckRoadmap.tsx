import { roadmap } from "@/data/roadmap";

export function DeckRoadmap() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ STRATEGIC ROADMAP ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Remediation-first migration, then controlled launch and growth.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {roadmap.slice(0, 8).map((phase) => (
          <div
            key={phase.phase}
            className="flex min-h-44 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <span className="font-mono text-xs text-white/40">{phase.phase}</span>
            <div>
              <h3 className="mb-2 text-base font-medium leading-tight text-white">
                {phase.title}
              </h3>
              <p className="line-clamp-3 text-xs leading-5 text-white/50">
                {phase.objective}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
