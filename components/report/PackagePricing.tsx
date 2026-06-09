"use client";

import { pricingTiers } from "@/data/pricing";

export function PackagePricing() {
  const recommended = pricingTiers.find((tier) => tier.recommended);
  const otherTiers = pricingTiers.filter((tier) => !tier.recommended);

  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[38px] lg:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Pilihan investasi terstruktur untuk peluncuran ecommerce.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mt-auto border-t border-white/10 pt-6">
        {/* Left Column */}
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ PAKET INVESTASI ]
          </p>
          <p className="font-sans text-lg leading-relaxed opacity-80 font-light">
            Kami menyarankan paket <strong>Secure Commerce Rebuild</strong> sebagai langkah awal untuk mengamankan isolasi data pesanan dan memulihkan baseline SEO sebelum go-live.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full space-y-6 pr-2">
          {/* Highlighted Recommended Package */}
          {recommended && (
            <div className="border border-white/30 p-6 relative">
              <div className="absolute top-0 right-0 bg-white text-black font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                Rekomendasi Utama
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <h3 className="text-base font-medium tracking-tight">
                  {recommended.name}
                </h3>
                <div className="flex items-baseline gap-4 mt-1">
                  <span className="text-base font-semibold">{recommended.price}</span>
                  <span className="text-xs font-mono opacity-50">[ {recommended.timeline} ]</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm opacity-70 mb-4 leading-relaxed font-light">
                  Paket ini langsung memulihkan celah otorisasi P1, setup tracking funnel lengkap, dan optimasi SEO.
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

          {/* Other pricing tiers table list */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-[9px] font-bold font-mono opacity-40 uppercase tracking-widest block mb-4">
              [ PILIHAN INVESTASI LAINNYA ]
            </span>
            <div className="space-y-0">
              {otherTiers.map((tier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-white/10 last:border-0"
                >
                  <div>
                    <h4 className="text-base font-medium tracking-tight">
                      {tier.name}
                    </h4>
                    <p className="text-xs font-mono opacity-50 mt-1">
                      [ {tier.timeline} — {tier.position} ]
                    </p>
                  </div>
                  <span className="text-base font-semibold shrink-0 pl-4">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
