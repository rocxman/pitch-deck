import { reportMeta } from "@/data/reportMeta";

export function DeckCover() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
          [ PITCH DECK ]
        </p>
        <h1 className="max-w-4xl font-sans text-4xl font-medium leading-[1.06] tracking-tight text-white md:text-6xl lg:text-[4.7rem]">
          Readiness report 2026 —<br />
          <span className="text-white">Strategic ecommerce</span><br />
          <span className="text-white/40">audit & roadmap.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 border-t border-white/20 pt-8 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
            [ CLIENT ]
          </p>
          <p className="text-xl font-medium text-white md:text-2xl">
            {reportMeta.client}.
          </p>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
            [ AGENCY ]
          </p>
          <p className="text-xl font-medium text-white md:text-2xl">
            {reportMeta.agency}.
          </p>
        </div>
      </div>
    </div>
  );
}
