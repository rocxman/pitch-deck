import { scorecard } from "@/data/scorecard";

export function DeckScorecard() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ READINESS SCORECARD ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Ecommerce foundation exists — readiness still needs hardening.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {scorecard.map((item) => (
          <div key={item.area} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                  {item.priority}
                </p>
                <h3 className="mt-2 text-xl font-medium text-white">{item.area}</h3>
              </div>
              <p className="text-4xl font-semibold tracking-tight text-white">{item.score}</p>
            </div>
            <p className="mb-2 text-sm font-medium text-white/75">{item.label}</p>
            <p className="text-sm leading-6 text-white/50">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
