"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { DeckSlide } from "@/data/slides";
import { cn } from "@/lib/cn";

type DeckMenuOverlayProps = {
  slides: DeckSlide[];
  activeIndex: number;
  onGoTo: (index: number) => void;
  onClose: () => void;
};

export function DeckMenuOverlay({ slides, activeIndex, onGoTo, onClose }: DeckMenuOverlayProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/75 px-4 py-10 backdrop-blur-md sm:py-14"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deck-menu-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.24 }}
      onClick={onClose}
    >
      <motion.div
        className="flex max-h-[88vh] w-full max-w-2xl flex-col rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-5 shadow-[0_32px_100px_rgba(0,0,0,0.85)]"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.96 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex shrink-0 items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a3e635]">Navigasi Deck</p>
            <h2 id="deck-menu-title" className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
              Yoora Sarah Deck · {slides.length} slide
            </h2>
          </div>
          <button
            onClick={onClose}
            className="group grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#a3e635]/20"
            aria-label="Close navigation menu"
          >
            <span className="relative h-4 w-4">
              <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={slide.id}
                  onClick={() => onGoTo(index)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50",
                    isActive
                      ? "bg-[#a3e635] text-[#151515] font-semibold"
                      : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                  )}
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : Math.min(0.25, 0.012 * index) }}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className={cn("shrink-0 font-mono text-[10px]", isActive ? "text-[#151515]/60" : "text-neutral-500")}>
                      {slide.number}
                    </span>
                    <span className="truncate text-sm tracking-[-0.03em]">{slide.menuLabel}</span>
                  </span>
                  {isActive && <span className="ml-2 shrink-0 text-[#151515]">●</span>}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 shrink-0 border-t border-white/10 pt-4">
          <button
            onClick={() => onGoTo(slides.length - 1)}
            className="w-full rounded-xl border border-[#a3e635]/30 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[#a3e635] hover:bg-[#a3e635]/10 focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50"
          >
            Hubungi Kami
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
