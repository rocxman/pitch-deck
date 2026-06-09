import { pricingTiers } from "@/data/pricing";

export function DeckPricing() {
  const recommended = pricingTiers.find((tier) => tier.recommended);
  const others = pricingTiers.filter((tier) => !tier.recommended).slice(0, 4);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ INVESTMENT ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Recommended path: secure rebuild before growth scaling.
        </h2>
      </div>

      {recommended && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/25 bg-white/[0.07] p-7">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              [ RECOMMENDED ]
            </p>
            <h3 className="mb-4 text-3xl font-medium tracking-tight text-white">
              {recommended.name}
            </h3>
            <p className="mb-4 text-5xl font-semibold tracking-tight text-white">
              {recommended.price}
            </p>
            <p className="text-white/55">Timeline: {recommended.timeline}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {others.map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-white/40">
                  {tier.position}
                </p>
                <h4 className="mb-2 text-base font-medium leading-tight text-white">
                  {tier.name}
                </h4>
                <p className="text-sm text-white/55">{tier.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
