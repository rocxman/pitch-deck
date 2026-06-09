import { findings, type FindingCategory } from "@/data/findings";

type DeckFindingCategoryProps = {
  category: FindingCategory;
  headline: string;
};

export function DeckFindingCategory({ category, headline }: DeckFindingCategoryProps) {
  const items = findings.filter((finding) => finding.category === category);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ {category} ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          {headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((finding) => (
          <div key={finding.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                {finding.id}
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/60">
                {finding.priority}{finding.severity ? ` · ${finding.severity}` : ""}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium leading-snug text-white">
              {finding.title}
            </h3>
            <p className="mb-3 text-sm font-medium leading-5 text-white/70">
              {finding.impact}
            </p>
            <p className="text-sm leading-6 text-white/50">
              {finding.clientSafeSummary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
