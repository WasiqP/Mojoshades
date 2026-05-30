import { cn } from "@/lib/utils";

interface ShadeSwatchProps {
  hex: string;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
  onClick?: () => void;
  label?: string;
}

export function ShadeSwatch({
  hex,
  size = "md",
  selected = false,
  onClick,
  label,
}: ShadeSwatchProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-7 w-7",
    lg: "h-9 w-9",
  };

  const inner = (
    <span
      className={cn(
        "inline-block rounded-full transition-all duration-200",
        sizes[size],
        selected
          ? "ring-2 ring-bone ring-offset-2 ring-offset-noir scale-105"
          : "ring-1 ring-bone/25 hover:ring-bone/60"
      )}
      style={{ backgroundColor: hex }}
    />
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label ?? `Select shade ${hex}`}
        className="rounded-full p-0.5"
      >
        {inner}
      </button>
    );
  }

  return inner;
}
