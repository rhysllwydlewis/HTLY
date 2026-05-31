'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import { Icon } from '@/components/Icon';
import { getSavedDealSlugs, savedDealsChangedEvent, writeSavedDeals } from '@/components/SaveDealButton';
import { deals, getDealHref } from '@/lib/holiday-data';

export function SavedDealsCompareClient() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);

  const savedDeals = useMemo(() => savedSlugs.map((slug) => deals.find((deal) => deal.slug === slug)).filter((deal): deal is (typeof deals)[number] => Boolean(deal)), [savedSlugs]);
  const compareDeals = savedDeals.filter((deal) => compareSlugs.includes(deal.slug)).slice(0, 3);

  useEffect(() => {
    function syncSavedDeals() {
      const nextSlugs = getSavedDealSlugs();
      setSavedSlugs(nextSlugs);
      setCompareSlugs((current) => {
        const retained = current.filter((slug) => nextSlugs.includes(slug)).slice(0, 3);
        return retained.length > 0 ? retained : nextSlugs.slice(0, 3);
      });
    }

    syncSavedDeals();
    window.addEventListener('storage', syncSavedDeals);
    window.addEventListener(savedDealsChangedEvent, syncSavedDeals);

    return () => {
      window.removeEventListener('storage', syncSavedDeals);
      window.removeEventListener(savedDealsChangedEvent, syncSavedDeals);
    };
  }, []);

  function toggleCompare(slug: string) {
    setCompareSlugs((current) => {
      if (current.includes(slug)) return current.filter((savedSlug) => savedSlug !== slug);
      if (current.length >= 3) return current;
      return [...current, slug];
    });
  }

  function removeDeal(slug: string) {
    const nextSaved = savedSlugs.filter((savedSlug) => savedSlug !== slug);
    writeSavedDeals(nextSaved);
    setSavedSlugs(nextSaved);
    setCompareSlugs((current) => current.filter((savedSlug) => savedSlug !== slug));
  }

  function clearSavedDeals() {
    writeSavedDeals([]);
    setSavedSlugs([]);
    setCompareSlugs([]);
  }

  if (savedDeals.length === 0) {
    return (
      <section className="container compare-empty glass-card" aria-labelledby="compare-empty-title">
        <Icon name="heart" />
        <span className="micro-label">No saved deals</span>
        <h2 id="compare-empty-title">Start a shortlist to compare holidays</h2>
        <p>Save deals from the search results or deal pages, then come back to compare price, board, saving and family fit side by side.</p>
        <Link className="placeholder-link" href="/deals">Browse deals</Link>
      </section>
    );
  }

  return (
    <section className="container compare-page-layout" aria-label="Saved deal comparison workspace">
      <aside className="compare-saved-list glass-card" aria-label="Saved deals shortlist">
        <div className="compare-panel-head">
          <div>
            <span className="micro-label">Shortlist</span>
            <h2>{savedDeals.length} saved {savedDeals.length === 1 ? 'deal' : 'deals'}</h2>
          </div>
          <button type="button" onClick={clearSavedDeals}>Remove all</button>
        </div>
        <div className="compare-select-list">
          {savedDeals.map((deal) => {
            const isCompared = compareSlugs.includes(deal.slug);
            const isDisabled = !isCompared && compareSlugs.length >= 3;

            return (
              <article className={isCompared ? 'is-selected' : ''} key={deal.slug}>
                <Image src={deal.image} alt="" width={86} height={70} />
                <div>
                  <strong>{deal.resort}</strong>
                  <span>{deal.destination}</span>
                  <label className={isDisabled ? 'is-disabled' : ''}>
                    <input type="checkbox" checked={isCompared} disabled={isDisabled} onChange={() => toggleCompare(deal.slug)} />
                    Compare
                  </label>
                </div>
                <button type="button" onClick={() => removeDeal(deal.slug)} aria-label={`Remove ${deal.resort} from saved deals`}><Icon name="close" /></button>
              </article>
            );
          })}
        </div>
      </aside>

      <div className="compare-table glass-card">
        <div className="compare-panel-head">
          <div>
            <span className="micro-label">Compare</span>
            <h2>{compareDeals.length}/3 selected</h2>
          </div>
          <Link href="/search">Find more matches</Link>
        </div>
        {compareDeals.length > 0 ? (
          <div className="compare-columns" style={{ '--compare-count': compareDeals.length } as CSSProperties}>
            {compareDeals.map((deal) => (
              <article key={deal.slug}>
                <div className="compare-column-image">
                  <Image src={deal.image} alt={`${deal.resort} in ${deal.destination}`} fill sizes="(max-width: 900px) 82vw, 260px" />
                </div>
                <h3>{deal.resort}</h3>
                <p><Icon name="pin" />{deal.destination}</p>
                <dl>
                  <div><dt>From</dt><dd>{deal.price}pp</dd></div>
                  <div><dt>Saving</dt><dd>{deal.saving}</dd></div>
                  <div><dt>Board</dt><dd>{deal.board}</dd></div>
                  <div><dt>Rating</dt><dd>{deal.rating}/5</dd></div>
                  <div><dt>Family fit</dt><dd>{deal.familyScore}/5</dd></div>
                </dl>
                <Link href={getDealHref(deal)}>View deal</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="compare-empty-inline">
            <Icon name="sliders" />
            <strong>Choose up to 3 saved deals</strong>
            <p>Use the shortlist checkboxes to build a focused side-by-side comparison.</p>
          </div>
        )}
      </div>
    </section>
  );
}
