"use client";

import { motion } from "framer-motion";
import type { DeckSlide } from "@/data/slides";

type SlideProgressProps = {
  current: number;
  total: number;
  slides: DeckSlide[];
};

export function SlideProgress({ current, total, slides }: SlideProgressProps) {
  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      aria-label="Slide progress"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-ink/80 px-5 py-3 backdrop-blur-xl">
        <span className="font-mono text-xs text-muted">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 w-1 rounded-full"
              animate={{
                backgroundColor:
                  index === current
                    ? "var(--gold)"
                    : index < current
                      ? "var(--muted)"
                      : "rgba(255, 255, 255, 0.15)",
                scale: index === current ? 1.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-muted">
          {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {total}
      </div>
    </div>
  );
}
