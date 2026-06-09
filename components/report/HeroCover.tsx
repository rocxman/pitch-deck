import { reportMeta } from "@/data/reportMeta";

export function HeroCover() {
  return (
    <div className="relative flex flex-col justify-between w-full h-full">
      <div>
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60 mb-6">
          [ PITCH DECK ]
        </p>
        <h1 className="font-sans text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight font-medium max-w-5xl">
          Readiness report 2026 —<br />
          <span className="opacity-100">Strategic ecommerce</span><br />
          <span className="text-white/40">audit & roadmap.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8 mt-12">
        <div>
          <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest mb-2">[ CLIENT ]</p>
          <p className="text-lg md:text-xl font-medium">{reportMeta.client}.</p>
        </div>
        <div>
          <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest mb-2">[ AGENCY ]</p>
          <p className="text-lg md:text-xl font-medium">{reportMeta.agency}.</p>
        </div>
      </div>
    </div>
  );
}
