import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blood" | "gilt" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-bone/10 text-bone/80",
    blood: "bg-blood/20 text-blood-bright",
    gilt: "border border-gilt/40 text-gilt",
    outline: "border border-bone/20 text-bone/60",
  };

  return (
    <span
      className={cn(
        "font-body inline-block rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
