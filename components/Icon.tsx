import type { ReactNode } from 'react';

export type IconName = 'beach' | 'hotel' | 'plane' | 'tag' | 'user' | 'search' | 'pin' | 'calendar' | 'guests' | 'clock' | 'shield' | 'uk' | 'headset' | 'heart' | 'star' | 'card' | 'lock' | 'menu' | 'sparkles' | 'bell' | 'close' | 'check' | 'sliders' | 'chevron';

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    beach: <><path d="M4 19c2.8-1.4 5.2-1.4 8 0s5.2 1.4 8 0" /><path d="M12 11a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" /><path d="M12 4v3M5.6 7.6l2.1 2.1M18.4 7.6l-2.1 2.1" /></>,
    hotel: <><path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" /><path d="M17 9h1a2 2 0 0 1 2 2v10M8 7h1M12 7h1M8 11h1M12 11h1M8 15h1M12 15h1" /></>,
    plane: <><path d="M3 11.5 21 3l-8.5 18-2-7.5L3 11.5Z" /><path d="m11 13 4-4" /></>,
    tag: <><path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z" /><path d="M8 8h.01" /></>,
    user: <><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    pin: <><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><path d="M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /></>,
    guests: <><path d="M16 21a5 5 0 0 0-10 0" /><circle cx="11" cy="8" r="4" /><path d="M22 21a4 4 0 0 0-5-3.9M16.5 4.4a3.5 3.5 0 0 1 0 6.2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
    uk: <><path d="M4 5h16v14H4Z" /><path d="m4 5 16 14M20 5 4 19M12 5v14M4 12h16" /></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" /><path d="M14 20h-3" /></>,
    heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" /></>,
    star: <><path d="m12 2 3.1 6.4 6.9 1-5 4.9 1.2 6.9L12 17.9l-6.2 3.3L7 14.3 2 9.4l6.9-1L12 2Z" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    sparkles: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></>,
    bell: <><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
    close: <><path d="M6 6l12 12M18 6 6 18" /></>,
    check: <><path d="m20 6-11 11-5-5" /></>,
    sliders: <><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4" /><circle cx="16" cy="6" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="14" cy="18" r="2" /></>,
    chevron: <><path d="m9 18 6-6-6-6" /></>
  };

  return (
    <svg className={`svg-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
