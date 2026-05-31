'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { getSavedDealSlugs, savedDealsChangedEvent } from '@/components/SaveDealButton';

const intents = ['Beach', 'Family', 'Luxury', 'All-inclusive', 'Budget', 'City break'];
const defaultStyle = 'Beach';
const plannerStorageKey = 'htly-travel-widget-plan';

type PlannerState = {
  style: string;
  destination: string;
  budget: string;
  month: string;
};

export function FloatingTravelWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [style, setStyle] = useState(defaultStyle);
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [month, setMonth] = useState('');
  const [savedCount, setSavedCount] = useState(0);
  const hasDestination = destination.trim().length > 0;
  const isProductFlow = pathname?.startsWith('/search') || pathname?.startsWith('/deals');

  useEffect(() => {
    function syncSavedCount() {
      setSavedCount(getSavedDealSlugs().length);
    }

    setIsMounted(true);
    syncSavedCount();
    window.addEventListener('storage', syncSavedCount);
    window.addEventListener(savedDealsChangedEvent, syncSavedCount);

    try {
      setIsOpen(window.localStorage.getItem('htly-travel-widget') !== 'closed');

      const savedPlan = window.localStorage.getItem(plannerStorageKey);
      if (savedPlan) {
        const parsedPlan = JSON.parse(savedPlan) as Partial<PlannerState>;
        if (typeof parsedPlan.style === 'string' && intents.includes(parsedPlan.style)) setStyle(parsedPlan.style);
        if (typeof parsedPlan.destination === 'string') setDestination(parsedPlan.destination);
        if (typeof parsedPlan.budget === 'string') setBudget(parsedPlan.budget);
        if (typeof parsedPlan.month === 'string') setMonth(parsedPlan.month);
      }
    } catch {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener('storage', syncSavedCount);
      window.removeEventListener(savedDealsChangedEvent, syncSavedCount);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    try {
      const plannerState: PlannerState = { style, destination, budget, month };
      window.localStorage.setItem(plannerStorageKey, JSON.stringify(plannerState));
    } catch {
      // Storage can be unavailable in private or restricted browsing modes.
    }
  }, [budget, destination, isMounted, month, style]);

  const searchHref = useMemo(() => {
    const params = new URLSearchParams();
    if (destination.trim()) params.set('destination', destination.trim());
    if (budget.trim()) params.set('budget', budget.trim());
    if (month.trim()) params.set('month', month.trim());
    if (style) params.set('style', style);
    const query = params.toString();
    return query ? `/search?${query}` : '/search';
  }, [budget, destination, month, style]);

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

  function resetPlanner() {
    setStyle(defaultStyle);
    setDestination('');
    setBudget('');
    setMonth('');

    try {
      window.localStorage.removeItem(plannerStorageKey);
    } catch {
      // Storage can be unavailable in private or restricted browsing modes.
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <aside className={`travel-widget ${isOpen ? 'is-open' : 'is-closed'} ${isProductFlow ? 'is-product-flow' : ''}`} aria-label="Holiday assistant widget">
      {isOpen ? (
        <div className="travel-widget-panel glass-card" role="dialog" aria-modal="false" aria-labelledby="travel-widget-title">
          <div className="widget-header">
            <span id="travel-widget-title"><Icon name="sparkles" />Plan a smarter trip</span>
            <button type="button" onClick={closeWidget} aria-label="Close holiday assistant"><Icon name="close" /></button>
          </div>
          <div className="widget-body">
            <p>Shortlist a holiday style, budget and travel month. We will send you into search with the right context.</p>
            <div className="widget-intents" aria-label="Quick holiday intents">
              {intents.map((intent) => (
                <button key={intent} type="button" className={style === intent ? 'is-selected' : ''} aria-pressed={style === intent} onClick={() => setStyle(intent)}>
                  {intent}
                </button>
              ))}
            </div>
            <div className="widget-form" aria-label="Mini travel planner">
              <label>
                <span>Destination</span>
                <input value={destination} onChange={(event) => setDestination(event.target.value)} name="destination" placeholder="e.g. Greece" aria-describedby="widget-destination-help" />
              </label>
              <label><span>Budget</span><input value={budget} onChange={(event) => setBudget(event.target.value)} name="budget" placeholder="e.g. £750 pp" /></label>
              <label><span>Month</span><input value={month} onChange={(event) => setMonth(event.target.value)} name="month" placeholder="e.g. August" /></label>
            </div>
            <p id="widget-destination-help" className={`widget-helper ${hasDestination ? 'is-valid' : ''}`}>
              {hasDestination ? `Great — we will keep ${destination.trim()} in your search.` : 'Add a destination for tighter matches, or continue with your selected holiday style.'}
            </p>
            <a className="widget-saved-row" href="/deals" aria-label={`${savedCount} saved deals. Open deal comparison.`}>
              <Icon name="heart" />
              <span>{savedCount > 0 ? `${savedCount} saved ${savedCount === 1 ? 'deal' : 'deals'} ready to compare` : 'Save deals here as you browse'}</span>
            </a>
            <div className="widget-actions">
              <a href={searchHref}><Icon name="search" />Find matches</a>
              <button type="button" onClick={resetPlanner}><Icon name="close" />Reset</button>
            </div>
          </div>
        </div>
      ) : (
        <button className="travel-widget-button" type="button" onClick={openWidget} aria-label="Open holiday assistant">
          <Icon name="sparkles" /><span>Plan trip</span>
          {savedCount > 0 ? <strong>{savedCount}</strong> : null}
        </button>
      )}
    </aside>
  );
}
