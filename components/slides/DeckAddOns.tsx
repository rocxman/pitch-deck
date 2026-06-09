import { addOns } from "@/data/pricing";

export function DeckAddOns() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ OPTIONAL MODULES ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Add-ons can be phased after core ecommerce is safe and measurable.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {addOns.map((item) => (
          <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <h3 className="mb-2 text-lg font-medium leading-tight text-white">{item.name}</h3>
            <p className="mb-3 font-mono text-[11px] text-white/55">{item.range}</p>
            <p className="text-sm leading-6 text-white/50">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
