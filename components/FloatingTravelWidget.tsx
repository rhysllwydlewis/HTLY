'use client';

import { useEffect, useMemo, useState } from 'react';
import { Icon } from '@/components/Icon';

const intents = ['Beach', 'Family', 'Luxury', 'All-inclusive', 'Budget', 'City break'];
const plannerStorageKey = 'htly-travel-widget-plan';

type PlannerState = {
  style: string;
  destination: string;
  budget: string;
  month: string;
};

export function FloatingTravelWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [style, setStyle] = useState('Beach');
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [month, setMonth] = useState('');

  useEffect(() => {
    setIsMounted(true);

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

  if (!isMounted) {
    return null;
  }

  return (
    <aside className={`travel-widget ${isOpen ? 'is-open' : 'is-closed'}`} aria-label="Holiday assistant widget">
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
              <label><span>Destination</span><input value={destination} onChange={(event) => setDestination(event.target.value)} name="destination" placeholder="e.g. Greece" /></label>
              <label><span>Budget</span><input value={budget} onChange={(event) => setBudget(event.target.value)} name="budget" placeholder="e.g. £750 pp" /></label>
              <label><span>Month</span><input value={month} onChange={(event) => setMonth(event.target.value)} name="month" placeholder="e.g. August" /></label>
            </div>
            <div className="widget-actions">
              <a href={searchHref}><Icon name="search" />Find matches</a>
              <a href="/deals"><Icon name="heart" />Compare saved</a>
            </div>
          </div>
        </div>
      ) : (
        <button className="travel-widget-button" type="button" onClick={openWidget} aria-label="Open holiday assistant">
          <Icon name="sparkles" />Plan my holiday
        </button>
      )}
    </aside>
  );
}
