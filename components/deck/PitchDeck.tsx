"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { DeckSlide } from "@/data/slides";
import { DeckChrome } from "./DeckChrome";
import { DeckSlideFrame } from "./DeckSlideFrame";
import { DeckMenuOverlay } from "./DeckMenuOverlay";
import { DeckCursor } from "./DeckCursor";
import { cn } from "@/lib/cn";

type PitchDeckProps = {
  slides: DeckSlide[];
};

export function PitchDeck({ slides }: PitchDeckProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const hash = window.location.hash.slice(1);
    const index = slides.findIndex((slide) => slide.id === hash);
    return index >= 0 ? index : 0;
  });
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isGridView, setIsGridView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const wheelLockRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
      if (nextIndex === activeIndex) return;
      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveIndex(nextIndex);
      setIsGridView(false);
    },
    [activeIndex, slides.length]
  );

  useEffect(() => {
    const slide = slides[activeIndex];
    if (slide) window.history.replaceState(null, "", `#${slide.id}`);
  }, [activeIndex, slides]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const index = slides.findIndex((slide) => slide.id === hash);
      if (index >= 0 && index !== activeIndex) goTo(index);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeIndex, goTo, slides]);

  useEffect(() => {
    document.body.style.overflow = isGridView ? "auto" : "hidden";
    document.body.style.height = isGridView ? "auto" : "100vh";
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isGridView]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("contenteditable") === "true";

      if (event.key === "Escape") {
        if (menuOpen) setMenuOpen(false);
        if (isGridView) setIsGridView(false);
        return;
      }

      if (isInteractive) return;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          event.preventDefault();
          goTo(activeIndex + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          goTo(activeIndex - 1);
          break;
        case "Home":
          event.preventDefault();
          goTo(0);
          break;
        case "End":
          event.preventDefault();
          goTo(slides.length - 1);
          break;
        case "m":
        case "M":
          event.preventDefault();
          setMenuOpen((prev) => !prev);
          break;
        case "g":
        case "G":
          event.preventDefault();
          setIsGridView((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goTo, isGridView, menuOpen, slides.length]);

  // Wheel navigation
  useEffect(() => {
    if (isGridView) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      if (event.deltaY > 0) goTo(activeIndex + 1);
      if (event.deltaY < 0) goTo(activeIndex - 1);

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, goTo, isGridView]);

  // Touch/swipe navigation
  useEffect(() => {
    if (isGridView) return;

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStartRef.current) return;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      touchStartRef.current = null;

      // Require minimum swipe distance of 50px
      if (Math.abs(deltaY) < 50 && Math.abs(deltaX) < 50) return;

      // Determine dominant axis
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        // Vertical swipe
        if (deltaY < -50) goTo(activeIndex + 1); // swipe up = next
        if (deltaY > 50) goTo(activeIndex - 1);   // swipe down = prev
      } else {
        // Horizontal swipe
        if (deltaX < -50) goTo(activeIndex + 1); // swipe left = next
        if (deltaX > 50) goTo(activeIndex - 1);   // swipe right = prev
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, goTo, isGridView]);

  const activeSlide = slides[activeIndex];
  const progressPercent = ((activeIndex + 1) / slides.length) * 100;

  return (
    <div className="fixed inset-0 overflow-hidden bg-black deck-interactive select-none">
      <DeckCursor />
      <DeckChrome
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
        isGridView={isGridView}
        onGridToggle={() => setIsGridView((prev) => !prev)}
      />

      {/* Top progress bar */}
      {!isGridView && (
        <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/[0.04]">
          <motion.div
            className="h-full bg-[#a3e635] shadow-[0_0_8px_rgba(163,230,53,0.5)]"
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      )}

      {isGridView ? (
        <div className="h-full overflow-y-auto bg-black px-6 py-28 md:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <h1 className="font-sans text-2xl font-bold tracking-tight text-white">Ringkasan Slide</h1>
              <p className="font-mono text-xs text-neutral-400">{slides.length} Slide Total</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {slides.map((slide, index) => (
                <DeckSlideFrame
                  key={slide.id}
                  slide={slide}
                  index={index}
                  activeIndex={activeIndex}
                  direction={direction}
                  isGridView
                  onSelect={() => goTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
          <AnimatePresence custom={direction}>
            <DeckSlideFrame
              key={activeSlide.id}
              slide={activeSlide}
              index={activeIndex}
              activeIndex={activeIndex}
              direction={direction}
              isGridView={false}
              onSelect={() => {}}
            />
          </AnimatePresence>
        </div>
      )}

      {/* Right side dot navigation */}
      <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
        <div className="flex flex-col items-end gap-3.5">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goTo(idx)}
              data-cursor-label={`SLIDE ${slide.number}`}
              className={cn(
                "h-[1.5px] rounded-full transition-all duration-300 focus:outline-none",
                idx === activeIndex
                  ? "w-6 bg-[#a3e635] shadow-[0_0_8px_rgba(163,230,53,0.6)]"
                  : "w-3 bg-white/25 hover:w-5 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom-left slide counter */}
      {!isGridView && (
        <div className="fixed bottom-8 left-8 z-40 flex items-center gap-3 select-none">
          <span className="font-mono text-[13px] font-bold text-white tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-6 bg-white/20" />
          <span className="font-mono text-[13px] text-neutral-500 tabular-nums">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* Bottom-right keyboard hint */}
      {!isGridView && (
        <div className="fixed bottom-8 right-8 z-40 hidden items-center gap-2 select-none md:flex">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-[9px] text-neutral-500">↑</span>
          <span className="flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-[9px] text-neutral-500">↓</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 ml-1">or scroll</span>
        </div>
      )}

      <AnimatePresence>
        {menuOpen && (
          <DeckMenuOverlay
            slides={slides}
            activeIndex={activeIndex}
            onGoTo={(index) => {
              goTo(index);
              setMenuOpen(false);
            }}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

