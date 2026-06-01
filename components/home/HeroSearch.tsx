'use client';

import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { HolidaySearchForm } from '@/components/search/HolidaySearchForm';
import { searchTabs } from '@/lib/holiday-data';
import { defaultHolidaySearchState } from '@/lib/search-state';

type HeroSearchProps = {
  destinationOptions: string[];
};

export function HeroSearch({ destinationOptions }: HeroSearchProps) {
  const [activeTab, setActiveTab] = useState(0);
  const currentTabStyle = searchTabs[activeTab]?.style ?? '';

  return (
    <div className="container search-shell">
      <div className="search-card glass-card" aria-label="Search holidays">

        {/* Header */}
        <div className="search-card-head">
          <div>
            <span className="micro-label">Start planning</span>
            <strong>Find your perfect holiday</strong>
          </div>
          <span className="deal-alert">
            <Icon name="bell" aria-hidden="true" />
            Deal alerts ready
          </span>
        </div>

        {/* Tab switcher */}
        <div
          className="search-tabs"
          role="tablist"
          aria-label="Choose holiday search type"
        >
          {searchTabs.map((tab, index) => (
            <button
              key={tab.label}
              id={`search-tab-${index}`}
              className="search-tab"
              type="button"
              role="tab"
              aria-selected={index === activeTab}
              aria-pressed={index === activeTab}
              aria-controls="search-panel"
              onClick={() => setActiveTab(index)}
            >
              <Icon name={tab.icon} aria-hidden="true" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form — re-mounts on tab change so initialState is fresh */}
        <div
          id="search-panel"
          role="tabpanel"
          aria-labelledby={`search-tab-${activeTab}`}
        >
          <HolidaySearchForm
            key={activeTab}
            initialState={{
              ...defaultHolidaySearchState,
              checkIn: '2026-06-12',
              checkOut: '2026-06-19',
              style: currentTabStyle,
            }}
            destinationOptions={destinationOptions}
          />
        </div>
      </div>
    </div>
  );
}
