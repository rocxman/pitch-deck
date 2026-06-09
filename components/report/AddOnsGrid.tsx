"use client";

import { addOns } from "@/data/pricing";

export function AddOnsGrid() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[38px] lg:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Ruang upgrade fitur growth tanpa mengganggu jalannya paket inti.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mt-auto border-t border-white/10 pt-6">
        {/* Left Column */}
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ MODUL OPSIONAL ]
          </p>
          <p className="font-sans text-lg leading-relaxed opacity-80 font-light">
            Modul tambahan ini ditawarkan secara terpisah setelah scope utama disetujui, agar investasi tetap efisien dan fokus pada remedi keamanan.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full space-y-0 pr-2">
          {addOns.map((addOn, index) => (
            <div key={index} className="py-4 border-b border-white/10 last:border-0">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-base font-medium tracking-tight">
                  {addOn.name}
                </h3>
                <span className="text-xs font-mono opacity-50 shrink-0 pl-4 text-right">
                  [ {addOn.range} ]
                </span>
              </div>
              <p className="text-sm opacity-70 leading-relaxed font-sans max-w-lg font-light">
                {addOn.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
