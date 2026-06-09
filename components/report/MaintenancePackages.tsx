"use client";

import { maintenancePackages } from "@/data/pricing";
import { terms } from "@/data/terms";

export function MaintenancePackages() {
  const recommended = maintenancePackages.find((pkg) => pkg.recommended);
  const otherTiers = maintenancePackages.filter((pkg) => !pkg.recommended);

  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[38px] lg:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Dukungan operasional pasca go-live dan jaminan kualitas.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mt-auto border-t border-white/10 pt-6">
        {/* Left Column */}
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ MAINTENANCE & SLA ]
          </p>
          <p className="font-sans text-lg leading-relaxed opacity-80 font-light">
            Kami merekomendasikan opsi <strong>Growth Care</strong> untuk memantau performa, menjaga stabilitas keamanan, dan menganalisis funnel konversi bulanan.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full space-y-6 pr-2">
          {/* Recommended Care Package */}
          {recommended && (
            <div className="border border-white/30 p-6 relative">
              <div className="absolute top-0 right-0 bg-white text-black font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                Rekomendasi Support
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <h3 className="text-base font-medium tracking-tight">
                  {recommended.name}
                </h3>
                <div className="flex items-baseline gap-4 mt-1">
                  <span className="text-base font-semibold">{recommended.price}</span>
                  <span className="text-xs font-mono opacity-50">[ Bulanan ]</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm opacity-70 mb-4 leading-relaxed font-light">
                  Paket ini menjamin keandalan sistem pasca launch dan memberikan optimasi performa berkala.
                </p>
                <div className="flex flex-wrap gap-2">
                  {recommended.includes.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono opacity-80 border border-white/20 px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other maintenance tiers */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-[9px] font-bold font-mono opacity-40 uppercase tracking-widest block mb-4">
              [ PILIHAN DUKUNGAN LAINNYA ]
            </span>
            <div className="space-y-0">
              {otherTiers.map((pkg, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-white/10 last:border-0"
                >
                  <div>
                    <h4 className="text-base font-medium tracking-tight">
                      {pkg.name}
                    </h4>
                    <p className="text-xs font-mono opacity-50 mt-1">
                      [ {pkg.includes.join(" / ")} ]
                    </p>
                  </div>
                  <span className="text-lg font-semibold shrink-0 pl-4">
                    {pkg.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SLA and Warranties */}
          <div className="border-t border-white/10 pt-8 mt-8 space-y-6">
            <span className="text-[10px] font-bold font-mono opacity-40 uppercase tracking-widest block mb-6">
              [ KETENTUAN SLA & KERJA SAMA ]
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-white/10 p-6">
                <h4 className="text-sm font-mono uppercase tracking-widest opacity-60">
                  [ Garansi Pekerjaan ]
                </h4>
                <p className="text-base opacity-80 mt-4 leading-relaxed font-light">
                  {terms.warranty.duration} gratis meliputi perbaikan bug/keamanan untuk item yang masuk scope.
                </p>
              </div>

              <div className="border border-white/10 p-6">
                <h4 className="text-sm font-mono uppercase tracking-widest opacity-60">
                  [ Term Pembayaran ]
                </h4>
                <p className="text-base opacity-80 mt-4 leading-relaxed font-light">
                  DP 50% awal pengerjaan, 50% setelah UAT disetujui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
