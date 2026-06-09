import { cn } from "@/lib/cn";

export function Badge({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "red" | "amber" | "blue" | "green" | "muted" }) {
  const tones = {
    gold: "border-gold/35 bg-gold/[0.08] text-champagne",
    red: "border-critical/35 bg-critical/[0.08] text-red-200",
    amber: "border-warning/35 bg-warning/[0.08] text-amber-200",
    blue: "border-info/35 bg-info/[0.08] text-blue-200",
    green: "border-success/35 bg-success/[0.08] text-green-200",
    muted: "border-white/10 bg-white/[0.04] text-muted",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full border px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]", tones[tone])}>
      {children}
    </span>
  );
}
