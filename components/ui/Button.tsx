"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "chrome" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "btn-shine bg-blood text-white hover:bg-blood-bright shadow-[0_8px_30px_-8px_rgba(200,16,46,0.35)]",
    chrome:
      "btn-shine bg-bone text-white hover:bg-bone/90",
    outline:
      "border border-bone/20 bg-transparent text-bone hover:border-bone hover:bg-bone/5",
    ghost: "bg-transparent text-bone hover:text-blood-bright",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4 text-xs",
  };

  return (
    <button
      className={cn(
        "font-body inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.22em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
