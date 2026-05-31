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
        <path d="M2 8v13M22 8v13M2 14h20" />
        <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2" />
        <path d="M7 14v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
      </>
    ),

    plane: (
      <>
        <path d="M20.5 12 12 18l.5-5L5 10l7-2.5L11 4l9.5 8Z" />
        <path d="M4 19.5h7" />
      </>
    ),

    flightHotel: (
      <>
        <path d="M2 14.5 8 11l-.5 3.5 4-1.5L13 16" strokeWidth="1.6" />
        <path d="M2 18h8" strokeWidth="1.6" />
        <rect x="15" y="11" width="8" height="10" rx="1" strokeWidth="1.6" />
        <path d="M15 15.5h8" strokeWidth="1.6" />
        <path d="M17.5 11V9a1 1 0 0 1 1-1H20" strokeWidth="1.5" />
      </>
    ),

    sun: (
      <>
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2.5v2M12 19.5v2M4.22 4.72l1.42 1.42M18.36 18.36l1.42 1.42M2.5 12h2M19.5 12h2M4.22 19.28l1.42-1.42M18.36 5.64l1.42-1.42" />
      </>
    ),

    /* ── Search & navigation ───────────────────────── */
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20.5 20.5-4-4" />
      </>
    ),

    pin: (
      <>
        <path d="M12 21.5S5 15.8 5 10a7 7 0 1 1 14 0c0 5.8-7 11.5-7 11.5Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    tag: (
      <>
        <path d="M21.41 11.58 12.41 2.58A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84Z" />
        <circle cx="7.5" cy="7.5" r=".75" fill="currentColor" stroke="none" />
      </>
    ),

    chevron: (
      <path d="m9 18 6-6-6-6" />
    ),

    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),

    sliders: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="14" cy="18" r="2" />
      </>
    ),

    menu: (
      <>
        <path d="M3 6h18M3 12h14M3 18h18" />
      </>
    ),

    close: (
      <path d="M6 6l12 12M18 6 6 18" />
    ),

    check: (
      <path d="m20 6-11 11-5-5" strokeWidth="2" />
    ),

    compare: (
      <>
        <path d="M10 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5" />
        <path d="M14 3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5" />
        <path d="M12 3v18" strokeDasharray="3 2" />
      </>
    ),

    /* ── Users & account ───────────────────────────── */
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
      </>
    ),

    guests: (
      <>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M2 20c0-3.5 3.58-6 8-6" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M22 20c0-2.8-2.24-5-5-5M14.5 20c-.14-1.76-1-4-4.5-4.8" />
      </>
    ),

    /* ── Calendar & time ───────────────────────────── */
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="17" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),

    /* ── Trust & security ──────────────────────────── */
    shield: (
      <>
        <path d="M12 22S4 17.2 4 11V5l8-3 8 3v6c0 6.2-8 11-8 11Z" />
        <path d="m9 12 2 2 4-4.5" />
      </>
    ),

    atol: (
      <>
        <path d="M12 3 4 7v6.5C4 18.5 7.5 22.2 12 23c4.5-.8 8-4.5 8-9.5V7L12 3Z" />
        <path d="M9.5 14h5M12 8.5V14" strokeWidth="1.6" />
      </>
    ),

    lock: (
      <>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),

    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M7 15h4M15 15h2" />
      </>
    ),

    uk: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <path d="M5.3 5.3 18.7 18.7M18.7 5.3 5.3 18.7" strokeWidth="1.2" />
      </>
    ),

    /* ── Communication ─────────────────────────────── */
    headset: (
      <>
        <path d="M5 15V10a7 7 0 0 1 14 0v5" />
        <path d="M3.5 15h3v4.5h-3a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1ZM20.5 15h-3v4.5h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1Z" />
        <path d="M20 19.5V21a3 3 0 0 1-3 3h-2" />
      </>
    ),

    bell: (
      <>
        <path d="M18 9A6 6 0 0 0 6 9c0 7-3 7.5-3 7.5h18S21 16 21 9Z" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),

    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </>
    ),

    /* ── Ratings & interactions ────────────────────── */
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.5l8.84-9.11a5.5 5.5 0 0 0 0-7.78Z" />
    ),

    star: (
      <path d="m12 2 2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2Z" />
    ),

    sparkles: (
      <>
        <path d="m12 3 1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
        <path d="m5 16 .8 2.2 2.2.8-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16Z" />
        <path d="m19 16 .8 2.2 2.2.8-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
      </>
    ),

    /* ── Social (fill-based) ───────────────────────── */
    facebook: (
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
      </>
    ),

    tiktok: (
      <path d="M9 12a4 4 0 1 0 4 4V4a6.5 6.5 0 0 0 6.5 4.5" />
    ),

    youtube: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
        <path d="M10 15.5V8.5l6.5 3.5-6.5 3.5Z" fill="currentColor" stroke="none" />
      </>
    ),
  };

  return (
    <svg
      className={`svg-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...ariaProps}
    >
      {paths[name]}
    </svg>
  );
}