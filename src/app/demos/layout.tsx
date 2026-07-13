import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Link
        href="/"
        data-cursor="Retour"
        className="group fixed bottom-4 left-4 z-[60] flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-xs font-medium text-black shadow-[0_2px_20px_rgba(0,0,0,0.15)] backdrop-blur transition hover:bg-white sm:bottom-6 sm:left-6"
      >
        <ArrowLeft
          size={13}
          strokeWidth={2.25}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Portfolio
      </Link>
      {children}
    </div>
  );
}
