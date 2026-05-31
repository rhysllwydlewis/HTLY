'use client';

import { useEffect, useState } from 'react';

type IconName = 'sparkles' | 'search' | 'heart' | 'close';

function Icon({ name }: { name: IconName }) {
  const paths = {
    sparkles: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" /></>,
    close: <><path d="M6 6l12 12M18 6 6 18" /></>
  } satisfies Record<IconName, JSX.Element>;

  return (
    <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function FloatingTravelWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    try {
      setIsOpen(window.localStorage.getItem('htly-travel-widget') !== 'closed');
    } catch {
      setIsOpen(true);
    }
  }, []);

  function rememberWidgetState(value: 'open' | 'closed') {
    try {
      window.localStorage.setItem('htly-travel-widget', value);
    } catch {
      // Storage can be unavailable in private or restricted browsing modes.
    }
  }

  function closeWidget() {
    setIsOpen(false);
    rememberWidgetState('closed');
  }

  function openWidget() {
    setIsOpen(true);
    rememberWidgetState('open');
  }

  if (!isMounted) {
    return null;
  }

  return (
    <aside className={`travel-widget ${isOpen ? 'is-open' : 'is-closed'}`} aria-label="Holiday assistant widget">
      {isOpen ? (
        <div className="travel-widget-panel glass-card" role="dialog" aria-label="Need help choosing a holiday">
          <div className="widget-header">
            <span><Icon name="sparkles" />Need help choosing?</span>
            <button type="button" onClick={closeWidget} aria-label="Close holiday assistant"><Icon name="close" /></button>
          </div>
          <div className="widget-body">
            <p>Tell us your dates, budget and holiday style. We will help shortlist resorts, saved deals and flexible options.</p>
            <div className="widget-actions">
              <a href="/search"><Icon name="search" />Find deals</a>
              <a href="/deals"><Icon name="heart" />Compare saved</a>
            </div>
          </div>
        </div>
      ) : (
        <button className="travel-widget-button" type="button" onClick={openWidget} aria-label="Open holiday assistant">
          <Icon name="sparkles" />Need help choosing?
        </button>
      )}
    </aside>
  );
}
