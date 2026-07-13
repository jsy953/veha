import Image from "next/image";

export function TreatedImage({
  src,
  alt,
  tint,
  className,
  grayscale = true,
  priority = false,
}: {
  src: string;
  alt: string;
  tint: string;
  className?: string;
  grayscale?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${grayscale ? "grayscale" : ""} contrast-[1.08]`}
        sizes="(max-width: 1024px) 90vw, 45vw"
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-color"
        style={{ background: tint }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
}
