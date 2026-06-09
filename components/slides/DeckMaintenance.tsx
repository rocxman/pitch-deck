import { maintenancePackages } from "@/data/pricing";

export function DeckMaintenance() {
  const recommended = maintenancePackages.find((pkg) => pkg.recommended);
  const others = maintenancePackages.filter((pkg) => !pkg.recommended);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ MAINTENANCE & SLA ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Post-launch: stabilize, monitor, and optimize monthly.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[recommended, ...others].filter(Boolean).map((pkg) => (
          <div
            key={pkg!.name}
            className={`flex flex-col justify-between rounded-2xl border p-6 ${
              pkg!.recommended
                ? "border-white/25 bg-white/[0.07]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            {pkg!.recommended && (
              <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/50">
                [ RECOMMENDED ]
              </p>
            )}
            <div>
              <h3 className="mb-3 text-xl font-medium text-white">{pkg!.name}</h3>
              <p className="mb-4 text-2xl font-semibold text-white">{pkg!.price}</p>
              <ul className="space-y-1.5">
                {pkg!.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/55">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
