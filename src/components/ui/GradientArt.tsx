function hash(seed: number) {
  let h = seed | 0;
  return function next() {
    h = (h << 13) ^ h;
    h = h * 5 + 0x2545f4914f6cdd1d;
    h = h ^ (h >>> 15);
    const v = (h >>> 0) / 4294967295;
    return v;
  };
}

type Blob = { x: number; y: number; r: number; color: string };

function makeBlobs(seed: number, colors: string[], count: number): Blob[] {
  const rand = hash(seed + 1);
  const blobs: Blob[] = [];
  for (let i = 0; i < count; i++) {
    blobs.push({
      x: 10 + rand() * 80,
      y: 10 + rand() * 80,
      r: 30 + rand() * 45,
      color: colors[i % colors.length],
    });
  }
  return blobs;
}

export function GradientArt({
  seed = 1,
  colors,
  variant = "mesh",
  className,
  children,
}: {
  seed?: number;
  colors: string[];
  variant?: "mesh" | "lines" | "grid" | "orb" | "rings";
  className?: string;
  children?: React.ReactNode;
}) {
  const blobs = makeBlobs(seed, colors, variant === "orb" ? 2 : 4);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: colors[colors.length - 1] }}
    >
      <div className="absolute inset-0">
        {blobs.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: `${b.r * 2.2}%`,
              height: `${b.r * 2.2}%`,
              background: b.color,
              filter: "blur(60px)",
              opacity: variant === "orb" ? 0.9 : 0.55,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {variant === "lines" && (
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35] mix-blend-overlay"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${(i + 1) * 7}%`}
              x2="100%"
              y2={`${(i + 1) * 7 - 10}%`}
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg>
      )}

      {variant === "grid" && (
        <svg className="absolute inset-0 h-full w-full opacity-[0.25] mix-blend-overlay">
          <defs>
            <pattern
              id={`grid-${seed}`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
        </svg>
      )}

      {variant === "rings" && (
        <svg
          className="absolute inset-0 h-full w-full opacity-40 mix-blend-overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {[8, 16, 24, 32, 40].map((r) => (
            <circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="white"
              strokeWidth="0.4"
            />
          ))}
        </svg>
      )}

      <div className="grain" />
      {children}
    </div>
  );
}
