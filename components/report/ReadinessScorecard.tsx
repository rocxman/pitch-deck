import { scorecard } from "@/data/scorecard";

export function ReadinessScorecard() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-2xl md:text-[34px] leading-[1.05] tracking-tight font-medium max-w-3xl">
        Hasil evaluasi kesiapan teknis dan operasional ecommerce.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 lg:gap-10 mt-auto border-t border-white/20 pt-5">
        <div>
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ SCORECARD ]
          </p>
          <p className="font-sans text-sm md:text-base leading-[1.4] opacity-80 font-light">
            Score ini menunjukkan area prioritas tinggi yang perlu diperkuat untuk mendukung migrasi yang aman.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {scorecard.map((item, index) => {
            const isBlocker = item.priority.includes("P1");
            return (
              <div key={index} className="flex flex-col border-b border-white/10 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] opacity-50">[ 0{index + 1} ]</span>
                    <span className="text-lg md:text-xl font-medium tracking-tight">{item.area}</span>
                  </div>
                  <span className="font-mono text-lg font-bold">{item.score}%</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-end">
                  <p className="text-xs opacity-60 leading-relaxed font-light">{item.label} — {item.summary}</p>

                  <div className="flex-grow h-[1px] bg-white/20 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${isBlocker ? "bg-red-brand" : "bg-white"}`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
