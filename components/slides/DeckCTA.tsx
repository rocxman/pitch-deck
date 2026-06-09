import { reportMeta } from "@/data/reportMeta";

export function DeckCTA() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <div className="mb-16">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ NEXT STEPS ]
        </p>
        <h2 className="mb-8 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Let&apos;s build this together.
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
          Ready to secure, measure, and grow your ecommerce channel? Contact us to
          discuss scope, timeline, and get started.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="mailto:hello@meanwhile.agency"
          className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Email Us
        </a>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/30 bg-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          WhatsApp
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/20 pt-8 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
            [ CLIENT ]
          </p>
          <p className="text-xl font-medium text-white">{reportMeta.client}</p>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
            [ PREPARED BY ]
          </p>
          <p className="text-xl font-medium text-white">{reportMeta.agency}</p>
        </div>
      </div>
    </div>
  );
}
