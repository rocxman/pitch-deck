import React from "react";

const items = [
  { number: "01", label: "Ringkasan Eksekutif", href: "#dashboard" },
  { number: "02", label: "Kondisi & Kesiapan", href: "#scorecard" },
  { number: "03", label: "Temuan Utama", href: "#findings" },
  { number: "04", label: "Roadmap Strategis", href: "#roadmap" },
  { number: "05", label: "Paket Investasi", href: "#pricing" },
  { number: "06", label: "Modul Opsional", href: "#addons" },
  { number: "07", label: "Maintenance & SLA", href: "#maintenance" },
  { number: "08", label: "Lampiran Dokumen", href: "#documents" },
  { number: "09", label: "Langkah Berikutnya", href: "#cta" },
];

export function TableOfContents() {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Daftar Isi Laporan
      </h3>
      
      <div className="mt-auto border-t border-white/20 pt-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 w-full">
          {items.map((item) => (
            <li key={item.href} className="group border-b border-white/10 last:border-0 pb-4 mb-3">
              <a href={item.href} data-cursor-label="LIHAT" className="flex items-baseline gap-4 transition-opacity hover:opacity-70">
                <span className="font-mono text-xs md:text-sm font-semibold opacity-50 min-w-[2.5rem]">
                  [ {item.number} ]
                </span>
                <span className="font-sans text-xl md:text-[26px] font-medium tracking-tight">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
