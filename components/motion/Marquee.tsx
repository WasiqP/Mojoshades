"use client";

interface MarqueeProps {
  text: string;
  className?: string;
}

export function Marquee({ text, className = "" }: MarqueeProps) {
  const items = Array.from({ length: 6 });

  return (
    <div
      className={`overflow-hidden border-y border-bone/10 bg-noir-soft py-5 ${className}`}
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
            {items.map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="font-display px-6 text-lg font-light italic tracking-tight text-bone/80">
                  {text}
                </span>
                <span className="text-blood-bright">&#9670;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
