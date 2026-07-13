import type { ReactNode } from "react";

export function BrowserFrame({
  children,
  url,
  className,
}: {
  children: ReactNode;
  url: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#f5f5f7] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex max-w-[260px] flex-1 items-center justify-center rounded-md bg-black/[0.04] px-3 py-1 text-[11px] text-black/45">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7]">
        {children}
      </div>
    </div>
  );
}
