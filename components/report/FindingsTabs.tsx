"use client";

import { useState } from "react";
import { findingsByCategory, type FindingCategory } from "@/data/findings";
import { cn } from "@/lib/cn";

const categories: FindingCategory[] = ["Keamanan", "SEO", "UX/Konversi", "Analytics", "Performance"];

export function FindingsTabs() {
  const [activeCategory, setActiveCategory] = useState<FindingCategory>("Keamanan");
  const [expandedId, setExpandedId] = useState<string | null>("SEC-001");
  
  const categoryFindings = findingsByCategory(activeCategory);

  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Temuan audit utama berdasarkan tingkat kepentingan.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mt-auto border-t border-white/20 pt-8">
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ ANALISIS TEMUAN ]
          </p>
          <p className="font-sans text-base leading-relaxed mb-8 opacity-80 font-light">
            Kami membagi temuan berdasarkan fungsi bisnis agar tim internal dapat menetapkan prioritas pembenahan.
          </p>
          
          <div className="flex flex-col gap-0 border-t border-white/10 pt-4">
            {categories.map((cat, index) => {
              const count = findingsByCategory(cat).length;
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    const first = findingsByCategory(cat)[0];
                    setExpandedId(first ? first.id : null);
                  }}
                  className={cn(
                    "flex items-center justify-between py-3 border-b border-white/10 text-left text-sm font-medium tracking-tight transition focus:outline-none",
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] opacity-50">[ 0{index + 1} ]</span>
                    {cat}
                  </span>
                  <span className={cn("font-mono text-[10px]", isActive ? "text-white" : "text-white/40")}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full space-y-0 pr-2">
          {categoryFindings.map((finding) => {
            const isExpanded = finding.id === expandedId;
            const isP1 = finding.priority.includes("P1") || finding.severity === "High";

            return (
              <div key={finding.id} className="border-b border-white/10 transition-colors">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : finding.id)}
                  data-cursor-label={isExpanded ? "TUTUP" : "DETAIL"}
                  className="w-full flex items-baseline justify-between py-4 text-left hover:opacity-80 focus:outline-none"
                >
                  <div className="flex items-baseline gap-4 pr-3">
                    <span className="font-mono text-[10px] font-semibold opacity-40 shrink-0">
                      [ {finding.id} ]
                    </span>
                    <span className="text-base md:text-lg font-medium tracking-tight">
                      {finding.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {isP1 && (
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-black px-2.5 py-1 bg-white rounded-none">
                        Prioritas
                      </span>
                    )}
                    <span className="font-mono text-lg opacity-60 font-light">
                      {isExpanded ? "—" : "+"}
                    </span>
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden",
                    isExpanded ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden space-y-4 font-sans text-[12px] leading-relaxed opacity-80 pl-12 pr-3 font-light">
                    {finding.impact && (
                      <div>
                        <span className="font-mono text-[8px] uppercase text-white tracking-widest block mb-1.5 opacity-50">
                          [ Dampak Bisnis ]
                        </span>
                        <p>{finding.impact}</p>
                      </div>
                    )}
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest block mb-1.5 opacity-50">
                        [ Penjelasan ]
                      </span>
                      <p>{finding.clientSafeSummary}</p>
                    </div>
                    <div className="border border-white/20 p-4 mt-3">
                      <span className="font-mono text-[8px] uppercase tracking-widest block mb-1.5 opacity-50">
                        [ Rekomendasi Pembenahan ]
                      </span>
                      <p>{finding.recommendation}</p>
                    </div>
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
