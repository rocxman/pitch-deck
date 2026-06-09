import type { AgencyDeckCard, AgencyDeckSlide as AgencyDeckSlideData } from "@/data/agencyDeck";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function toneClass(tone?: AgencyDeckCard["tone"]) {
  switch (tone) {
    case "risk":
      return "border-red-500/25 bg-red-500/[0.03] text-red-200 hover:border-red-500/40 hover:bg-red-500/[0.05]";
    case "warning":
      return "border-amber-500/25 bg-amber-500/[0.03] text-amber-200 hover:border-amber-500/40 hover:bg-amber-500/[0.05]";
    case "success":
      return "border-[#a3e635]/25 bg-[#a3e635]/[0.03] text-[#a3e635] hover:border-[#a3e635]/40 hover:bg-[#a3e635]/[0.05]";
    default:
      return "border-white/[0.06] bg-white/[0.02] text-neutral-300 hover:border-[#a3e635]/20 hover:bg-white/[0.04]";
  }
}

function formatCell(cell: string) {
  const trimmed = cell.trim();
  
  if (trimmed === "Yes") {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/25 shadow-[0_0_8px_rgba(163,230,53,0.15)] select-none">
        Yes
      </span>
    );
  }
  
  if (trimmed === "Included") {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/25 select-none">
        Included
      </span>
    );
  }

  if (trimmed.startsWith("No")) {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/[0.04] text-neutral-500 border border-white/[0.06] select-none">
        {trimmed}
      </span>
    );
  }
  
  if (trimmed === "P1" || trimmed === "High / P1") {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/25 select-none">
        {trimmed}
      </span>
    );
  }
  
  if (trimmed === "P2" || trimmed === "Medium / P1" || trimmed === "Medium / P2") {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/25 select-none">
        {trimmed}
      </span>
    );
  }

  if (trimmed === "Rp120.000.000") {
    return (
      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#a3e635] text-[#151515] shadow-[0_0_12px_rgba(163,230,53,0.3)] select-none">
        Rp120.000.000
      </span>
    );
  }
  
  if (trimmed.includes("Rp120.000.000")) {
    return (
      <span className="font-bold text-[#a3e635]">
        {trimmed}
      </span>
    );
  }

  // Highlight sequence numbers
  if (/^\d{2}$/.test(trimmed)) {
    return (
      <span className="font-mono font-bold text-neutral-500">
        {trimmed}
      </span>
    );
  }

  return cell;
}

function Card({ card, compact = false }: { card: AgencyDeckCard; compact?: boolean }) {
  // Parse score inside parenthesis like "Keamanan (35/100)"
  const scoreMatch = card.title.match(/\((\d+)\/100\)/);
  const score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;
  const displayTitle = score ? card.title.replace(/\s*\(\d+\/100\)\s*/, "") : card.title;

  return (
    <motion.div
      variants={itemVariants}
      className={cn("rounded-xl border transition-all duration-300", toneClass(card.tone), compact ? "p-3.5" : "p-4.5")}
    >
      {card.eyebrow && (
        <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
          {card.eyebrow}
        </p>
      )}
      
      <div className="flex items-center justify-between gap-4 mb-2">
        <h3 className={cn("font-bold tracking-tight text-white leading-snug", compact ? "text-[15px]" : "text-[17px]")}>
          {displayTitle}
        </h3>
        {score !== null && (
          <span className={cn(
            "font-mono text-[11px] font-extrabold px-2 py-0.5 rounded-md border select-none",
            card.tone === "risk" ? "bg-red-500/10 border-red-500/20 text-red-400" :
            card.tone === "warning" ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
            "bg-[#a3e635]/10 border-[#a3e635]/20 text-[#a3e635]"
          )}>
            {score}/100
          </span>
        )}
      </div>

      {score !== null && (
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-3.5">
          <motion.div 
            className={cn(
              "h-full rounded-full",
              card.tone === "risk" ? "bg-red-500" :
              card.tone === "warning" ? "bg-amber-500" :
              "bg-[#a3e635]"
            )}
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          />
        </div>
      )}

      {card.body && <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">{card.body}</p>}
      {card.items && (
        <ul className="mt-2.5 space-y-1.5">
          {card.items.map((item) => (
            <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-neutral-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3e635]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function SourceRefs({ refs }: { refs?: string[] }) {
  if (!refs?.length) return null;
  return (
    <div className="mt-4 border-t border-white/[0.06] pt-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
        Source: <span className="text-neutral-400">{refs.join(" · ")}</span>
      </p>
    </div>
  );
}

export function AgencyDeckSlide({ slide }: { slide: AgencyDeckSlideData }) {
  const cards = slide.cards ?? [];
  const isCover = slide.id === "cover";

  // Dedicated, highly-polished presentation cover slide layout
  if (isCover) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex h-full w-full flex-col justify-between p-2 text-white"
      >
        {/* Top spacer */}
        <div></div>

        {/* Center content */}
        <div className="my-auto space-y-6 text-center">
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[#a3e635] font-semibold select-none"
          >
            {slide.eyebrow}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-5xl font-sans text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            Deep Analytics Findings<br className="hidden md:inline" />
            <span className="text-[#a3e635]"> &amp; UI/UX Frontend</span><br className="hidden md:inline" />
            <span className="text-white/60 font-semibold"> E-Commerce Rebuild.</span>
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="mx-auto h-[3px] w-12 bg-[#a3e635] mt-8 rounded-full shadow-[0_0_12px_rgba(163,230,53,0.5)]"
          />
        </div>

        {/* Bottom meta details */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-6 border-t border-white/[0.08] pt-6 text-left md:grid-cols-3"
        >
          <div>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-neutral-500 select-none">
              [ CLIENT ]
            </p>
            <p className="text-sm font-semibold text-neutral-200">
              Yoora Sarah
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-neutral-500 select-none">
              [ AGENCY ]
            </p>
            <p className="text-sm font-semibold text-neutral-200">
              Meanwhile Agency
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-neutral-500 select-none">
              [ DATE ]
            </p>
            <p className="text-sm font-semibold text-neutral-200">
              Juni 2026
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (slide.layout === "thankYou") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex h-full w-full flex-col justify-between overflow-hidden p-2 text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="max-w-5xl text-5xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-[5.5rem] text-white"
        >
          {slide.title}
        </motion.h1>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm uppercase tracking-[0.08em] text-[#a3e635] font-bold"
          >
            Contact us
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="space-y-7 text-xl leading-[1.35] text-neutral-300 md:text-2xl"
          >
            <div>
              <p className="text-white font-semibold">Meanwhile</p>
              <p>West Java</p>
              <p>Indonesia</p>
            </div>
            <div>
              <p className="text-[#a3e635] font-semibold">+62 812 2008 7023</p>
              <p>ismeanwhile@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex h-full w-full flex-col justify-between gap-5 overflow-hidden text-white"
    >
      <div>
        {slide.eyebrow && (
          <motion.p
            variants={itemVariants}
            className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a3e635] font-bold"
          >
            {slide.eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={itemVariants}
          className={cn(
            "max-w-5xl font-sans font-extrabold tracking-tight text-white leading-[1.1]",
            slide.layout === "hero"
              ? "text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem]"
              : "text-xl sm:text-2xl md:text-[1.8rem] xl:text-[2.2rem]"
          )}
        >
          {slide.title}
        </motion.h1>
        {slide.subtitle && (
          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-4xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-400"
          >
            {slide.subtitle}
          </motion.p>
        )}
      </div>

      {slide.layout === "hero" && cards.length > 0 && !isCover && (
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-5 md:grid-cols-3"
        >
          {cards.map((card) => <Card key={card.title} card={card} compact />)}
        </motion.div>
      )}

      {slide.layout === "twoColumn" && (
        <motion.div
          variants={containerVariants}
          className="grid min-h-0 grid-cols-1 gap-4 md:grid-cols-2"
        >
          {slide.left && <Card card={slide.left} />}
          {slide.right && <Card card={slide.right} />}
        </motion.div>
      )}

      {(slide.layout === "cards" || !slide.layout) && (
        <motion.div
          variants={containerVariants}
          className={cn(
            "grid min-h-0 grid-cols-1 gap-4 overflow-y-auto pr-1",
            cards.length <= 3 ? "md:grid-cols-3" : cards.length <= 5 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"
          )}
          data-deck-scroll-dark
        >
          {cards.map((card) => <Card key={card.title} card={card} compact={cards.length > 3} />)}
        </motion.div>
      )}

      {slide.layout === "timeline" && (
        <div className="relative min-h-0 flex-1 py-4 overflow-y-auto md:overflow-visible" data-deck-scroll-dark>
          {/* Timeline connecting line */}
          <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-white/10 md:left-4 md:right-4 md:top-[38px] md:bottom-auto md:h-0.5 md:w-auto" />
          
          <motion.div
            variants={containerVariants}
            className="grid h-full grid-cols-1 gap-5 md:grid-cols-4 relative z-10"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="group relative flex flex-col pl-12 md:pl-0 md:pt-14"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0d0d0d] transition-all duration-300 group-hover:border-[#a3e635] group-hover:shadow-[0_0_12px_rgba(163,230,53,0.3)] md:left-0 md:top-0">
                  <span className="font-mono text-[11px] font-bold text-neutral-400 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Content */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#a3e635]/20 hover:bg-white/[0.04] h-full">
                  <h3 className="font-bold text-sm text-white tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  {card.body && (
                    <p className="mt-2 text-[12px] leading-relaxed text-neutral-400">
                      {card.body}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {slide.layout === "checklist" && slide.bullets && (
        <motion.div
          variants={containerVariants}
          className="grid min-h-0 grid-cols-1 gap-3 md:grid-cols-2 overflow-y-auto pr-1"
          data-deck-scroll-dark
        >
          {slide.bullets.map((bullet, index) => (
            <motion.div
              key={bullet}
              variants={itemVariants}
              className="grid grid-cols-[46px_1fr] gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#a3e635]/20 hover:bg-white/[0.04]"
            >
              <span className="font-mono text-xs text-[#a3e635] font-bold">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-neutral-300">{bullet}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {slide.layout === "documentIndex" && (
        <motion.div
          variants={containerVariants}
          className="grid min-h-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 overflow-y-auto pr-1"
          data-deck-scroll-dark
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4.5 transition-all duration-300 hover:border-[#a3e635]/20 hover:bg-white/[0.04] flex flex-col justify-between h-full"
            >
              <div>
                <div className="mb-3 flex items-center gap-2 text-[#a3e635]">
                  <svg className="h-4 w-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-neutral-500">
                    Kategori
                  </span>
                </div>
                <h3 className="font-bold text-white text-[15px] tracking-tight mb-3">
                  {card.title}
                </h3>
                {card.items && (
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li key={item} className="group/item flex items-center gap-2 text-[11.5px] text-neutral-400 hover:text-white transition-colors duration-200">
                        <svg className="h-3 w-3 shrink-0 text-neutral-600 group-hover/item:text-[#a3e635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {slide.layout === "table" && slide.table && (
        <motion.div
          variants={itemVariants}
          className="min-h-0 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-md"
        >
          <div className="overflow-x-auto max-h-[420px]" data-deck-scroll-dark>
            <table className="w-full border-collapse text-left text-[13px] lg:text-[14px]">
              <thead className="sticky top-0 bg-[#0A0A0A] text-white z-10">
                <tr>
                  {slide.table.headers.map((header) => (
                    <th key={header} className="border-b border-white/[0.08] px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#a3e635] font-bold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {slide.table.rows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    variants={itemVariants}
                    className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors duration-150"
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 leading-[1.45] text-neutral-300">
                        {formatCell(cell)}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      )}

      {!isCover && (
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          {slide.footnote && (
            <div className="flex items-start gap-2.5 rounded-lg border border-[#a3e635]/10 bg-[#a3e635]/[0.02] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-neutral-400/90 italic">
              <svg className="h-3.5 w-3.5 shrink-0 text-[#a3e635] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{slide.footnote}</span>
            </div>
          )}
          <SourceRefs refs={slide.sourceRefs} />
        </motion.div>
      )}
    </motion.div>
  );
}

