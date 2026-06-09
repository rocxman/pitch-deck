import { roadmap } from "@/data/roadmap";

export function SolutionRoadmap() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Urutan kerja dibuat untuk menurunkan risiko terlebih dahulu.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mt-auto border-t border-white/20 pt-8">
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ ROADMAP STRATEGIS ]
          </p>
          <p className="font-sans text-base leading-relaxed opacity-80 font-light">
            Pendekatan ini menjaga agar ecommerce Yoora Sarah aman secara teknis, terukur secara data, dan siap mendukung pertumbuhan brand sejak hari pertama.
          </p>
        </div>

        <div className="w-full space-y-0 pr-2">
          {roadmap.map((phase, index) => (
            <div key={index} className="py-4 border-b border-white/10 last:border-0">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs font-semibold opacity-40 shrink-0">
                  [ FASE {phase.phase} ]
                </span>
                <h3 className="text-lg md:text-xl font-medium tracking-tight">
                  {phase.title}
                </h3>
              </div>

              <p className="text-xs opacity-70 leading-relaxed pl-[5.25rem] mb-4 font-light">
                {phase.objective}
              </p>

              <div className="pl-[5.25rem] flex flex-wrap gap-2">
                {phase.deliverables.map((del, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono tracking-tight opacity-80 border border-white/20 px-2 py-1"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
