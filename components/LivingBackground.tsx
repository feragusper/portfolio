// Site-wide animated "blueprint" backdrop: drifting engineering grid, breathing
// glow orbs, floating crosshairs and a monospace coordinate ruler. Pure CSS/SVG
// (no client hooks) so it renders on the server and stays cheap. All motion is
// disabled under prefers-reduced-motion — see globals.css.

const CROSSHAIRS = [
  { top: "14%", left: "8%", size: 14, delay: 0 },
  { top: "22%", left: "82%", size: 10, delay: 1.2 },
  { top: "38%", left: "28%", size: 12, delay: 2.4 },
  { top: "46%", left: "68%", size: 16, delay: 0.6 },
  { top: "58%", left: "12%", size: 10, delay: 3.1 },
  { top: "64%", left: "88%", size: 14, delay: 1.8 },
  { top: "72%", left: "40%", size: 12, delay: 2.0 },
  { top: "82%", left: "74%", size: 10, delay: 0.9 },
  { top: "30%", left: "52%", size: 12, delay: 3.6 },
  { top: "88%", left: "22%", size: 14, delay: 1.4 },
  { top: "8%", left: "46%", size: 10, delay: 2.8 },
  { top: "52%", left: "94%", size: 12, delay: 0.4 },
];

// Monospace coordinate marks for the left ruler (feels like a blueprint margin).
const RULER = ["0010", "0320", "0640", "0960", "1280", "1600", "1920"];

function Crosshair({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function LivingBackground() {
  return (
    <div aria-hidden className="living-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Drifting engineering grid */}
      <div className="living-bg__grid absolute inset-0" />

      {/* Breathing glow orbs */}
      <div className="living-bg__orb living-bg__orb--1 absolute" />
      <div className="living-bg__orb living-bg__orb--2 absolute" />

      {/* Floating crosshairs */}
      {CROSSHAIRS.map((c, i) => (
        <span
          key={i}
          className="living-bg__cross absolute text-[var(--accent)]"
          style={{ top: c.top, left: c.left, animationDelay: `${c.delay}s` }}
        >
          <Crosshair size={c.size} />
        </span>
      ))}

      {/* Left coordinate ruler */}
      <div className="living-bg__ruler absolute left-2 top-0 bottom-0 hidden flex-col justify-between py-24 sm:flex">
        {RULER.map((n) => (
          <div key={n} className="flex items-center gap-2">
            <span className="living-bg__tick block h-px w-3 bg-[var(--accent)]" />
            <span className="font-mono text-[10px] tracking-widest text-[var(--muted)]">{n}</span>
          </div>
        ))}
      </div>

      {/* Soft top/bottom fade so the grid never fights the content edges */}
      <div className="living-bg__vignette absolute inset-0" />
    </div>
  );
}
