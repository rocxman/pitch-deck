import Link from "next/link";
import { cn } from "@/lib/cn";

export function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-[-0.01em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-ink",
        variant === "primary"
          ? "bg-[linear-gradient(135deg,#f2ddb0,#d8b56d)] text-ink shadow-[0_18px_55px_rgba(216,181,109,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(216,181,109,0.36)]"
          : "border border-white/12 bg-white/[0.04] text-ivory backdrop-blur hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10 hover:text-champagne",
      )}
    >
      {children}
      <span className="ml-2 transition group-hover:translate-x-1">→</span>
    </Link>
  );
}
