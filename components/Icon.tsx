import type { ReactNode } from 'react';

export type IconName =
  | 'beach' | 'hotel' | 'plane' | 'flightHotel' | 'bed' | 'sun'
  | 'tag' | 'user' | 'search' | 'pin' | 'calendar' | 'guests'
  | 'clock' | 'shield' | 'atol' | 'uk' | 'headset'
  | 'heart' | 'star' | 'card' | 'lock' | 'menu'
  | 'sparkles' | 'bell' | 'close' | 'check' | 'sliders'
  | 'chevron' | 'mail' | 'compare' | 'arrowRight'
  | 'facebook' | 'instagram' | 'tiktok' | 'youtube';

interface IconProps {
  name: IconName;
  className?: string;
  /** Provide for meaningful (non-decorative) icons */
  label?: string;
}

export function Icon({ name, className = '', label }: IconProps) {
  const ariaProps = label
    ? { role: 'img' as const, 'aria-label': label }
    : { 'aria-hidden': true as const };

  const paths: Record<IconName, ReactNode> = {

    /* ── Travel & destinations ─────────────────────── */
    beach: (
      <>
        <circle cx="12" cy="7" r="2.5" />
        <path d="M12 9.5V14" />
        <path d="M7.76 9 10 11.24M16.24 9 14 11.24" />
        <path d="M7 19c2.6-1.4 5.4-1.4 8 0s5.4 1.4 8 0" />
        <path d="M5 14a7 7 0 0 1 14 0H5Z" />
      </>
    ),

    hotel: (
      <>
        <path d="M2 21V8a2 2 0 0 1 2-2h7" />
        <path d="M22 21V11a2 2 0 0 0-2-2h-7" />
        <path d="M2 21h20" />
        <rect x="7" y="11" width="3" height="3" rx=".5" strokeWidth="1.5" />
        <path d="M7 17h3v4H7Z" strokeWidth="1.5" />
        <rect x="14" y="11" width="3" height="3" rx=".5" strokeWidth="1.5" />
        <path d="M14 17h3v4h-3Z" strokeWidth="1.5" />
      </>
    ),

    bed: (
      <>
        <path d="M3 20V9" />
        <path d="M21 20v-5a3 3 0 0 0-3-3H9v8" />
        <path d="M3 15h18" />
        <path d="M6.5 12A2.5 2.5 0 1 0 6.5 7a2.5 2.5 0 0 0 0 5Z" />
      </>
    ),

    plane: (
      <>
        <path d="M3 11.5 21 3l-8.5 18-2.2-7.3L3 11.5Z" />
        <path d="M10.3 13.7 21 3" />
      </>
    ),

    flightHotel: (
      <>
        <path d="M3 11.5 12 7l-4 9-1.3-4.2L3 11.5Z" />
        <path d="M13 21V10a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v11" />
        <path d="M11 21h12" />
        <path d="M16 12h.01M19 12h.01M16 16h.01M19 16h.01" />
      </>
    ),

    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),

    pin: (
      <>
        <path d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </>
    ),

    guests: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M15.5 16.2A4.5 4.5 0 0 1 21 20" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),

    uk: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="M3 5l18 14M21 5 3 19" />
        <path d="M12 5v14M3 12h18" />
      </>
    ),

    atol: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M7 15l2.2-6h1.6L13 15" />
        <path d="M8.1 12.4h3.8" />
        <path d="M15 9v6h4" />
      </>
    ),

    /* ── Actions / UI ───────────────────────────────── */
    tag: (
      <>
        <path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z" />
        <circle cx="8" cy="8" r="1" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),

    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.6-3.6" />
      </>
    ),

    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M9 12l2 2 4-5" />
      </>
    ),

    headset: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" />
        <path d="M20 13v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
        <path d="M14 20h-3" />
      </>
    ),

    heart: (
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    ),

    star: (
      <path d="M12 2.5l3 6.1 6.7 1-4.9 4.8 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.8 6.7-1 3-6.1Z" />
    ),

    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </>
    ),

    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),

    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    check: <path d="M20 6 9 17l-5-5" />,
    chevron: <path d="M9 18l6-6-6-6" />,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    compare: (
      <>
        <path d="M8 5v14M16 5v14" />
        <path d="M4 8h8M12 16h8" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="14" cy="18" r="2" />
      </>
    ),
    sparkles: (
      <>
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
        <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),

    /* ── Social icons (fill based) ─────────────────── */
    facebook: <path d="M14 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.84-4.92 5.2v3.1H5v3.7h3.13V24h3.85v-6.95h3.02l.48-3.7h-3.5v-2.73c0-1.07.29-2.12 2.02-2.12Z" />,
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    tiktok: <path d="M16.5 3c.4 2.3 1.7 3.7 4 4v3.2a7.7 7.7 0 0 1-4-1.2v6.4c0 3.4-2.2 5.6-5.5 5.6A5.2 5.2 0 1 1 11 10.6c.4 0 .8.04 1.2.13v3.45a2.3 2.3 0 1 0 1.4 2.12V3h2.9Z" />,
    youtube: <path d="M21.6 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C15.7 3.6 12 3.6 12 3.6h0s-3.7 0-6.7.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S2.2 9.1 2.2 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 6.4.3 6.4.3s3.7 0 6.7-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM10.1 15.4V8.6l6.1 3.4-6.1 3.4Z" />,
  };

  const isFillIcon = ['facebook', 'tiktok', 'youtube'].includes(name);

  return (
    <svg
      className={`svg-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill={isFillIcon ? 'currentColor' : 'none'}
      stroke={isFillIcon ? 'none' : 'currentColor'}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...ariaProps}
    >
      {paths[name]}
    </svg>
  );
}