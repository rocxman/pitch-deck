"use client";

import { reportMeta } from "@/data/reportMeta";

export function FinalCta() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[38px] lg:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Mari bangun e-commerce yang aman dan terpercaya.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mt-auto border-t border-white/10 pt-6">
        {/* Left Column */}
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ LANGKAH BERIKUTNYA ]
          </p>
          <p className="font-sans text-lg leading-relaxed opacity-80 font-light">
            Mulai perbaikan dengan <strong>{reportMeta.recommendedPackage}</strong> ({reportMeta.recommendedPrice}) untuk mengamankan data dan memulihkan SEO sebelum melangkah lebih jauh.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full space-y-12">
          {/* Address Details */}
          <div className="space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">[ ALAMAT KANTOR ]</p>
            <p className="text-xl leading-relaxed font-light">
              Meanwhile Digital Commerce Advisory<br />
              Equity Tower, 29th Floor<br />
              Sudirman Central Business District<br />
              Jakarta 12190, Indonesia
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">[ HUBUNGI KAMI ]</p>
            <div className="flex flex-col gap-6">
              <a
                href="tel:+622150887777"
                data-cursor-label="TELEPON"
                className="text-xl font-medium hover:opacity-70 transition-opacity w-fit"
              >
                +62 21 5088 7777
              </a>
              <a
                href="mailto:hello@meanwhile.agency"
                data-cursor-label="EMAIL"
                className="text-xl font-medium hover:opacity-70 transition-opacity w-fit"
              >
                hello@meanwhile.agency
              </a>
              <a
                href="https://meanwhile.agency"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="KUNJUNGI"
                className="text-xl font-medium hover:opacity-70 transition-opacity w-fit"
              >
                www.meanwhile.agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
