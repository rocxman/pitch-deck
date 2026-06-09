import { terms } from "@/data/terms";

export function DeckTerms() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ COMMERCIAL TERMS ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Clear warranty, payment stages, handover, and third-party cost boundaries.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/40">Warranty</p>
          <h3 className="mb-4 text-xl font-medium text-white">{terms.warranty.duration}</h3>
          <p className="text-sm leading-6 text-white/50">Bug fixes caused by delivered implementation are covered after handover.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/40">Payment</p>
          <p className="mb-2 text-sm leading-6 text-white/65">Assessment: {terms.payment.assessment}</p>
          <p className="text-sm leading-6 text-white/50">Implementation: {terms.payment.implementation}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/40">Source Code</p>
          <p className="text-sm leading-6 text-white/55">{terms.sourceCodeHandover}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/40">Change Request</p>
          <p className="text-sm leading-6 text-white/55">{terms.changeRequestPolicy}</p>
        </div>
      </div>
    </div>
  );
}
