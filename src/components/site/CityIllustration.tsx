export function CityIllustration() {
  return (
    <div className="border-y border-border bg-surface py-10 overflow-hidden">
      <svg
        viewBox="0 0 1440 220"
        className="w-full h-auto text-foreground/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      >
        {/* ground */}
        <line x1="0" y1="200" x2="1440" y2="200" />
        {/* skyline */}
        <path d="M0 200 L0 160 L40 160 L40 140 L80 140 L80 170 L110 170 L110 120 L130 120 L130 100 L150 100 L150 130 L180 130 L180 90 L210 90 L210 70 L230 70 L230 110 L260 110 L260 145 L290 145 L290 85 L320 85 L320 60 L350 60 L350 100 L380 100 L380 130 L420 130 L420 90 L450 90 L450 50 L480 50 L480 40 L500 40 L500 95 L530 95 L530 120 L560 120 L560 70 L600 70 L600 30 L640 30 L640 80 L680 80 L680 110 L720 110 L720 50 L760 50 L760 80 L800 80 L800 130 L840 130 L840 95 L880 95 L880 60 L920 60 L920 100 L960 100 L960 140 L1000 140 L1000 80 L1040 80 L1040 50 L1080 50 L1080 90 L1120 90 L1120 130 L1160 130 L1160 100 L1200 100 L1200 70 L1240 70 L1240 110 L1280 110 L1280 150 L1320 150 L1320 120 L1360 120 L1360 160 L1400 160 L1400 140 L1440 140 L1440 200 Z" />
        {/* dome */}
        <path d="M600 70 a40 40 0 0 1 80 0" />
        {/* spire */}
        <line x1="500" y1="40" x2="500" y2="10" />
        <circle cx="500" cy="8" r="2" />
        {/* windows pattern (sparse) */}
        {Array.from({ length: 80 }).map((_, i) => (
          <rect
            key={i}
            x={20 + i * 17}
            y={180 - (i % 5) * 8}
            width="3"
            height="6"
            fill="currentColor"
            opacity="0.4"
            stroke="none"
          />
        ))}
        {/* sun */}
        <circle cx="1180" cy="60" r="28" stroke="var(--gold)" opacity="0.8" />
      </svg>
    </div>
  );
}
