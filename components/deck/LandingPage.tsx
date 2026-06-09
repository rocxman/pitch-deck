"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";
import { cn } from "@/lib/cn";

type LandingPageProps = {
  onEnter: () => void;
};

export function LandingPage({ onEnter }: LandingPageProps) {
  const [allowEnter, setAllowEnter] = useState(false);

  useEffect(() => {
    // Allow entry after titles finished initial typing sequences
    const timer = setTimeout(() => {
      setAllowEnter(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-[#151515] font-sans text-white select-none">
      {/* 1. Cyber Grid Background Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.025)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"></div>

      {/* 2. Spotlight Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(21,21,21,0.92)_85%)] pointer-events-none"></div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex h-[86px] w-full items-center justify-between border-b border-white/[0.03] px-8 lg:px-12"
      >
        <div className="flex items-center">
          <img
            src="/logo+text+putih.svg"
            alt="Meanwhile Logo"
            className="h-[28px] md:h-[32px] w-auto select-none"
          />
        </div>
        <div className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 sm:block select-none">
          STRATEGIC CLIENT DELIVERY
        </div>
      </motion.header>

      {/* Center Hero Card */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.01] p-8 md:p-12 text-center backdrop-blur-lg shadow-[0_32px_120px_rgba(0,0,0,0.65)]"
        >
          {/* Subtle frame corner brackets */}
          <div className="absolute left-3 top-3 h-3.5 w-3.5 border-l border-t border-white/20 rounded-tl-sm"></div>
          <div className="absolute right-3 top-3 h-3.5 w-3.5 border-r border-t border-white/20 rounded-tr-sm"></div>
          <div className="absolute left-3 bottom-3 h-3.5 w-3.5 border-l border-b border-white/20 rounded-bl-sm"></div>
          <div className="absolute right-3 bottom-3 h-3.5 w-3.5 border-r border-b border-white/20 rounded-br-sm"></div>

          {/* Secure indicator pulse */}
          <div className="mx-auto flex items-center justify-center gap-2 mb-6 select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3e635]"></span>
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3e635]">
              DIGITAL COMMERCE PRESENTATION
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4">
            <GlitchText
              as="p"
              text="[ STRATEGIC PROPOSAL DECK ]"
              speed={40}
              glitchChance={0.15}
              className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-400 text-center"
            />
          </div>

          {/* Glitch titles (Block level layout with text-center) */}
          <div className="mb-6 space-y-2">
            <GlitchText
              as="h1"
              text="MEANWHILE × YOORA SARAH"
              speed={35}
              glitchChance={0.2}
              delay={300}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white font-sans tracking-tight text-center"
            />
            <GlitchText
              as="h2"
              text="ECOMMERCE AUDIT & ROADMAP"
              speed={30}
              glitchChance={0.25}
              delay={750}
              className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold uppercase text-neutral-500 font-sans tracking-tight text-center"
            />
          </div>

          {/* Copywriting description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-8 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-neutral-400 font-sans"
          >
            A strategic evaluation and frontend blueprint prepared by Meanwhile for Yoora Sarah. Defining the path to transform your digital storefront into a high-performance, conversion-optimized owned commerce channel.
          </motion.p>

          {/* Enter CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={onEnter}
              disabled={!allowEnter}
              data-cursor-label="BUKA"
              className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.08] px-8 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#a3e635] hover:bg-[#a3e635] hover:text-[#151515] hover:shadow-[0_0_35px_rgba(163,230,53,0.3)] focus:outline-none disabled:opacity-50 select-none"
            >
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Mulai Presentasi</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        className="relative z-10 flex w-full flex-col sm:flex-row items-center justify-between border-t border-white/[0.03] px-8 lg:px-12 py-6 text-[9px] font-mono tracking-widest text-neutral-500 gap-3 select-none"
      >
        <div className="uppercase">CONFIDENTIAL // YOORA SARAH INTERNAL REVIEW</div>
        <div className="uppercase hidden md:block">DESIGNED & DEVELOPED BY MEANWHILE AGENCY</div>
        <div className="uppercase">© 2026 MEANWHILE AGENCY</div>
      </motion.footer>
    </div>
  );
}
