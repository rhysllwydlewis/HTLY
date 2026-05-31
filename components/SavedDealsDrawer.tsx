'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Icon } from '@/components/Icon';
import { getSavedDealSlugs, savedDealsChangedEvent, writeSavedDeals } from '@/components/SaveDealButton';
import { deals, getDealHref } from '@/lib/holiday-data';

export const openSavedDealsEvent = 'htly:open-saved-deals';

type SavedDealsDrawerProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function SavedDealsDrawer({ open, onOpenChange }: SavedDealsDrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const isOpen = open ?? internalOpen;

  const savedDeals = useMemo(() => savedSlugs.map((slug) => deals.find((deal) => deal.slug === slug)).filter((deal): deal is (typeof deals)[number] => Boolean(deal)), [savedSlugs]);
  const compareDeals = savedDeals.filter((deal) => compareSlugs.includes(deal.slug));

  const setOpen = useCallback((nextOpen: boolean) => {
    setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }, [onOpenChange]);

  useEffect(() => {
    function syncSavedDeals() {
      const nextSlugs = getSavedDealSlugs();
      setSavedSlugs(nextSlugs);
      setCompareSlugs((current) => current.filter((slug) => nextSlugs.includes(slug)));
    }

    function openDrawer() {
      syncSavedDeals();
      setOpen(true);
    }

    syncSavedDeals();
    window.addEventListener('storage', syncSavedDeals);
    window.addEventListener(savedDealsChangedEvent, syncSavedDeals);
    window.addEventListener(openSavedDealsEvent, openDrawer);

    return () => {
      window.removeEventListener('storage', syncSavedDeals);
      window.removeEventListener(savedDealsChangedEvent, syncSavedDeals);
      window.removeEventListener(openSavedDealsEvent, openDrawer);
    };
  }, [setOpen]);

  function removeDeal(slug: string) {
    writeSavedDeals(savedSlugs.filter((savedSlug) => savedSlug !== slug));
  }

  function clearDeals() {
    writeSavedDeals([]);
    setCompareSlugs([]);
  }

  function toggleCompare(slug: string) {
    setCompareSlugs((current) => {
      if (current.includes(slug)) return current.filter((savedSlug) => savedSlug !== slug);
      if (current.length >= 3) return current;
      return [...current, slug];
    });
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setOpen]);

  if (!isOpen) return null;

  return (
    <div className="saved-drawer-shell" role="presentation">
      <button className="saved-drawer-backdrop" type="button" aria-label="Close saved deals comparison" onClick={() => setOpen(false)} />
      <aside className="saved-drawer glass-card" role="dialog" aria-modal="true" aria-labelledby="saved-drawer-title">
        <div className="saved-drawer-head">
          <div>
            <span className="micro-label">Saved shortlist</span>
            <h2 id="saved-drawer-title">Compare up to 3 holidays</h2>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close saved deals"><Icon name="close" /></button>
        </div>

        {savedDeals.length === 0 ? (
          <div className="saved-drawer-empty">
            <Icon name="heart" />
            <strong>No saved deals yet</strong>
            <p>Tap the heart on any deal card to build a lightweight comparison tray.</p>
            <Link href="/deals" onClick={() => setOpen(false)}>Browse deals</Link>
          </div>
        ) : (
          <>
            <div className="saved-drawer-list" aria-label="Saved deals">
              {savedDeals.map((deal) => {
                const isCompared = compareSlugs.includes(deal.slug);
                const compareDisabled = !isCompared && compareSlugs.length >= 3;

                return (
                  <article className="saved-mini-card" key={deal.slug}>
                    <div className="saved-mini-image">
                      <Image src={deal.image} alt="" fill sizes="84px" />
                    </div>
                    <div>
                      <strong>{deal.resort}</strong>
                      <span>{deal.destination}</span>
                      <small>{deal.nights} · {deal.board} · from {deal.price}pp</small>
                      <div className="saved-mini-actions">
                        <label className={compareDisabled ? 'is-disabled' : ''}>
                          <input type="checkbox" checked={isCompared} disabled={compareDisabled} onChange={() => toggleCompare(deal.slug)} />
                          Compare
                        </label>
                        <Link href={getDealHref(deal)} onClick={() => setOpen(false)}>View</Link>
                        <button type="button" onClick={() => removeDeal(deal.slug)}>Remove</button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <section className="compare-tray" aria-label="Deal comparison">
              <div className="compare-tray-head">
                <strong>{compareDeals.length}/3 selected</strong>
                <button type="button" onClick={clearDeals}>Remove all</button>
              </div>
              {compareDeals.length > 0 ? (
                <div className="compare-grid">
                  {compareDeals.map((deal) => (
                    <div key={deal.slug}>
                      <span>{deal.resort}</span>
                      <strong>{deal.price}pp</strong>
                      <small>{deal.saving} · {deal.rating}/5 · family {deal.familyScore}/5</small>
                    </div>
                  ))}
                </div>
              ) : <p>Select saved deals to compare price, saving, rating and family fit.</p>}
              <Link className="compare-full-link" href="/deals/compare" onClick={() => setOpen(false)}>Open full compare page</Link>
            </section>
          </>
        )}
      </aside>
    </div>
  );
}
