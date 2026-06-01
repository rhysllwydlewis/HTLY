import { brand, brandDisplay } from '@/lib/brand';

export function HtlyLogo({ footer = false }: { footer?: boolean }) {
  const size = footer ? 40 : 48;
  return (
    <a className={`brand ${footer ? 'brand--footer' : ''}`} href="/" aria-label={`${brandDisplay} homepage`}>
      {/* SVG brand mark — replaces CSS span stack */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-mark-svg"
        aria-hidden="true"
      >
        {/* Rounded-square background */}
        <rect width="48" height="48" rx="13" fill="url(#bm-bg)" />

        {/* Subtle inner highlight at top */}
        <rect x="0" y="0" width="48" height="22" rx="13" fill="url(#bm-shine)" opacity="0.18" />

        {/* Moon / star dot top-left */}
        <circle cx="10" cy="10" r="3.2" fill="white" opacity="0.92" />

        {/* Sun semicircle rising from waves */}
        <path d="M17 32 A9 9 0 0 1 35 32Z" fill="#FDBA1E" />

        {/* Sun rays */}
        <line x1="26" y1="20" x2="26" y2="16" stroke="#FDBA1E" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="33.6" y1="22.4" x2="36.4" y2="19.6" stroke="#FDBA1E" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="18.4" y1="22.4" x2="15.6" y2="19.6" stroke="#FDBA1E" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="36" y1="30" x2="40" y2="30" stroke="#FDBA1E" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="30" x2="12" y2="30" stroke="#FDBA1E" strokeWidth="2" strokeLinecap="round" />

        {/* Wave 1 */}
        <path
          d="M8 37 Q13 34 18 37 Q23 40 28 37 Q33 34 38 37 Q41 38.5 43 37"
          stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.95"
        />
        {/* Wave 2 */}
        <path
          d="M8 41.5 Q13 38.5 18 41.5 Q23 44.5 28 41.5 Q33 38.5 38 41.5 Q40 42.5 42 41.5"
          stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"
        />

        <defs>
          <linearGradient id="bm-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0068D4" />
            <stop offset="100%" stopColor="#0047AA" />
          </linearGradient>
          <linearGradient id="bm-shine" x1="0" y1="0" x2="0" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <span className="brand-text">
        <span className="name">{brand.name}<small>.{brand.suffix}</small></span>
        {!footer && <span className="tagline">{brand.tagline}</span>}
      </span>
    </a>
  );
}
