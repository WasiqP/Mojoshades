"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-bone/10 border-y border-bone/10", className)}>
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="eyebrow flex w-full items-center justify-between py-4 text-left text-bone/90"
          >
            {item.title}
            <Plus
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                openIndex === i && "rotate-45"
              )}
              strokeWidth={1.5}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300",
              openIndex === i
                ? "grid-rows-[1fr] pb-5 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="font-body text-sm leading-relaxed text-ash">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
