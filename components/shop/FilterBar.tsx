"use client";

import { SlidersHorizontal } from "lucide-react";
import type { Finish, SortOption, Undertone } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  finish: Finish | "all";
  undertone: Undertone | "all";
  sort: SortOption;
  onFinishChange: (v: Finish | "all") => void;
  onUndertoneChange: (v: Undertone | "all") => void;
  onSortChange: (v: SortOption) => void;
  resultCount: number;
}

const finishOptions: (Finish | "all")[] = ["all", "matte", "gloss", "satin", "vinyl"];
const undertoneOptions: (Undertone | "all")[] = ["all", "warm", "cool", "neutral"];
const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price ↑" },
  { value: "price-desc", label: "Price ↓" },
  { value: "name", label: "A–Z" },
];

export function FilterBar({
  finish,
  undertone,
  sort,
  onFinishChange,
  onUndertoneChange,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="glass-noir sticky top-20 z-40 mb-10 rounded-2xl border border-bone/8 p-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <div className="flex items-center gap-2 text-ash-dim">
          <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span className="eyebrow">Refine</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {finishOptions.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => onFinishChange(f)}
              className={cn(
                "font-body rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-colors",
                finish === f
                  ? "bg-bone text-noir"
                  : "text-ash hover:text-bone"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="hidden h-5 w-px bg-bone/15 md:block" />

        <div className="flex flex-wrap gap-1.5">
          {undertoneOptions.map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => onUndertoneChange(u)}
              className={cn(
                "font-body rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-colors",
                undertone === u
                  ? "bg-blood text-white"
                  : "text-ash hover:text-bone"
              )}
            >
              {u}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="font-body rounded-full border border-bone/15 bg-noir-card px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-bone outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-noir-card">
                {opt.label}
              </option>
            ))}
          </select>
          <span className="eyebrow whitespace-nowrap text-ash-dim">
            {resultCount} shades
          </span>
        </div>
      </div>
    </div>
  );
}
