import { findings } from "@/data/findings";

type DeckFindingsProps = {
  category: "security" | "growth";
};

export function DeckFindings({ category }: DeckFindingsProps) {
  const isSecurity = category === "security";
  const items = isSecurity
    ? findings.filter((f) => f.category === "Keamanan").slice(0, 5)
    : findings.filter((f) => ["SEO", "UX/Konversi", "Analytics", "Performance"].includes(f.category)).slice(0, 6);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="mb-8">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ {isSecurity ? "SECURITY" : "GROWTH READINESS"} ]
        </p>
        <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
          {isSecurity
            ? "Customer data isolation needs immediate hardening."
            : "SEO, UX, analytics, and performance need growth-ready foundations."}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((finding) => (
          <div
            key={finding.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                {finding.id}
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/60">
                {finding.priority}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium leading-snug text-white">
              {finding.title}
            </h3>
            <p className="text-sm leading-6 text-white/55">
              {finding.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
