import { Badge } from "@/components/ui/Badge";

export function SectionHeader({
  number,
  label,
  title,
  description,
  align = "left",
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-4xl text-center" : "mb-12 max-w-4xl"}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Badge>
          <span className="mr-2 text-gold/70">{number}</span>
          {label}
        </Badge>
      </div>
      <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-ivory sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
