import { reportMeta } from "@/data/reportMeta";

export function ExecutiveDashboard() {
  const kpis = [
    { label: "Temuan Keamanan Terkonfirmasi", value: "5 Isu" },
    { label: "Temuan Risiko Tinggi (P1)", value: "2 Isu" },
    { label: "Rekomendasi Paket Utama", value: reportMeta.recommendedPackage },
    { label: "Estimasi Investasi", value: reportMeta.recommendedPrice },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-sans text-3xl md:text-[42px] leading-[1.1] tracking-tight font-medium max-w-3xl">
        Ringkasan Eksekutif
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mt-auto border-t border-white/20 pt-8">
        <div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60 font-semibold mb-4">
            [ KONDISI SAAT INI ]
          </p>
        </div>
        
        <div>
          <p className="font-sans text-xl md:text-2xl leading-[1.4] mb-12 font-light">
            Yoora Sarah sudah memiliki fondasi ecommerce. Sekarang waktunya mengamankan dan menyiapkan untuk pertumbuhan. {reportMeta.verdict}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="flex flex-col border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] opacity-50 uppercase tracking-widest mb-2">[ 0{index + 1} ] {kpi.label}</span>
                <span className="text-base md:text-lg font-medium">{kpi.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
