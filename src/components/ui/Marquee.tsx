import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div
        className="inline-flex animate-marquee will-change-transform"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >

        <div className="inline-flex shrink-0 items-center">{children}</div>
        <div className="inline-flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
