"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { DeckSlide } from "@/data/slides";

type DeckSlideFrameProps = {
  slide: DeckSlide;
  index: number;
  activeIndex: number;
  direction: 1 | -1;
  isGridView: boolean;
  onSelect: () => void;
};

const variants = {
  enter: (direction: 1 | -1) => ({
    y: direction > 0 ? "100%" : "-10%",
    scale: direction > 0 ? 1 : 0.85,
    opacity: direction > 0 ? 1 : 0,
    zIndex: direction > 0 ? 20 : 10,
  }),
  center: {
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 15,
  },
  exit: (direction: 1 | -1) => ({
    y: direction > 0 ? "-10%" : "100%",
    scale: direction > 0 ? 0.85 : 1,
    opacity: direction > 0 ? 0 : 1,
    zIndex: direction > 0 ? 10 : 20,
  }),
};

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function DeckSlideFrame({
  slide,
  index,
  activeIndex,
  direction,
  isGridView,
  onSelect,
}: DeckSlideFrameProps) {
  const isActive = index === activeIndex;
  const reduceMotion = useReducedMotion();

  if (isGridView) {
    return (
      <motion.section
        layout
        id={slide.id}
        aria-labelledby={`${slide.id}-title`}
        onClick={onSelect}
        data-cursor-label={`BUKA ${slide.number}`}
        className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0A] p-5 shadow-sm transition hover:border-[#a3e635]/40 hover:bg-white/[0.02]"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                {slide.eyebrow}
              </p>
              <h3 id={`${slide.id}-title`} className="mt-2 line-clamp-2 text-base font-semibold leading-tight tracking-tight text-white">
                {slide.title}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-neutral-400">{slide.number}</span>
          </div>
          <div className="border-t border-white/[0.06] pt-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
              {slide.menuLabel}
            </span>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      key={slide.id}
      id={slide.id}
      aria-labelledby={`${slide.id}-title`}
      custom={direction}
      variants={reduceMotion ? reducedVariants : variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={
        reduceMotion
          ? { duration: 0.05, ease: "easeOut" }
          : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
      }
      className="absolute inset-0 flex items-center justify-center bg-black px-5 py-20 md:px-8"
    >
      <div className="relative h-[min(calc(100vh-140px),780px)] w-full max-w-[1360px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0A0A0A] p-5 shadow-[0_32px_96px_rgba(0,0,0,0.85)] md:p-6 lg:p-7">
        <h2 id={`${slide.id}-title`} className="sr-only">{slide.title}</h2>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative z-10 h-full overflow-hidden">
          {isActive && slide.component}
        </div>
      </div>
    </motion.section>
  );
}
