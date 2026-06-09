import { cn } from "@/lib/cn";

export function Card({ children, className = "", highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-xl transition duration-300",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[2rem] before:bg-[radial-gradient(circle_at_top_left,rgba(216,181,109,0.12),transparent_32%)] before:opacity-70",
        highlight
          ? "border-gold/55 bg-[linear-gradient(145deg,rgba(216,181,109,0.14),rgba(20,17,13,0.86)_42%,rgba(8,7,5,0.92))] shadow-[0_0_0_1px_rgba(216,181,109,0.18),0_34px_110px_rgba(216,181,109,0.12)]"
          : "border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(20,17,13,0.78)_38%,rgba(8,7,5,0.86))] shadow-[0_28px_90px_rgba(0,0,0,0.38)] hover:border-gold/30",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
