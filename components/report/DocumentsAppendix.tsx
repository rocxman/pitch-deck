"use client";

import { documents } from "@/data/documents";

export function DocumentsAppendix() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[38px] lg:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Dokumen teknis dan data pendukung keputusan.
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mt-auto border-t border-white/10 pt-6">
        {/* Left Column */}
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-60 font-semibold">
            [ LAMPIRAN DOKUMEN ]
          </p>
          <p className="font-sans text-lg leading-relaxed opacity-80 font-light">
            Kami menyertakan lampiran detail untuk kebutuhan audit internal yang terotorisasi, menjaga visual presentasi utama tetap aman dan ringkas.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full space-y-6 pr-2">
          <div className="w-full space-y-0">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="py-4 border-b border-white/10 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-base font-medium tracking-tight">
                    {doc.title}
                  </h3>
                  <a
                    href={`/docs/${doc.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="BUKA"
                    className="text-[10px] font-mono font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity shrink-0 pl-3 border border-white/20 px-3 py-1.5"
                  >
                    Buka Dokumen
                  </a>
                </div>
                <p className="text-sm opacity-70 leading-relaxed font-light max-w-xl">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>

          {/* Safety Notice block */}
          <div className="border border-white/30 p-6 mt-6">
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white block mb-3 opacity-60">
              [ CATATAN KEAMANAN ]
            </span>
            <p className="text-sm opacity-80 leading-relaxed font-light">
              Ringkasan antarmuka ini tidak menampilkan langkah exploit, payload, order ID asli, atau data sensitif. Detail teknis hanya digunakan dalam konteks review yang terotorisasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
