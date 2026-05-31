'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';

export const savedDealsStorageKey = 'htly-saved-deals';
export const savedDealsChangedEvent = 'htly:saved-deals-changed';

export function getSavedDealSlugs() {
  try {
    const stored = window.localStorage.getItem(savedDealsStorageKey);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((slug): slug is string => typeof slug === 'string') : [];
  } catch {
    return [];
  }
}

export function writeSavedDeals(slugs: string[]) {
  try {
    window.localStorage.setItem(savedDealsStorageKey, JSON.stringify(slugs));
    window.dispatchEvent(new CustomEvent(savedDealsChangedEvent, { detail: { slugs } }));
  } catch {
    // Storage can be unavailable in private or restricted browsing modes.
  }
}

export function SaveDealButton({ slug, resort, variant = 'icon' }: { slug: string; resort: string; variant?: 'icon' | 'wide' }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    function syncSavedState() {
      setIsSaved(getSavedDealSlugs().includes(slug));
    }

    setIsMounted(true);
    syncSavedState();
    window.addEventListener('storage', syncSavedState);
    window.addEventListener(savedDealsChangedEvent, syncSavedState);

    return () => {
      window.removeEventListener('storage', syncSavedState);
      window.removeEventListener(savedDealsChangedEvent, syncSavedState);
    };
  }, [slug]);

  function toggleSaved() {
    const savedDeals = getSavedDealSlugs();
    const nextDeals = savedDeals.includes(slug) ? savedDeals.filter((savedSlug) => savedSlug !== slug) : [...savedDeals, slug];
    writeSavedDeals(nextDeals);
    setIsSaved(nextDeals.includes(slug));
  }

  const label = isSaved ? `Remove ${resort} from saved deals` : `Save ${resort}`;

  return (
    <button className={`save-deal-button ${variant === 'wide' ? 'is-wide' : 'is-icon'} ${isSaved ? 'is-saved' : ''}`} type="button" onClick={toggleSaved} aria-label={label} aria-pressed={isMounted ? isSaved : undefined}>
      <Icon name="heart" />
      {variant === 'wide' ? <span>{isSaved ? 'Saved' : 'Save deal'}</span> : null}
    </button>
  );
}
