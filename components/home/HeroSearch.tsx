import { Icon } from '@/components/Icon';
import { HolidaySearchForm } from '@/components/search/HolidaySearchForm';
import { deals, destinations, searchTabs } from '@/lib/holiday-data';
import { defaultHolidaySearchState } from '@/lib/search-state';

const destinationOptions = Array.from(new Set([
  ...destinations.map((destination) => destination.name),
  ...deals.flatMap((deal) => [deal.destination, deal.resort, deal.badge, ...deal.tags])
]));

export function HeroSearch() {
  return (
    <div className="container search-shell">
      <div className="search-card glass-card" aria-label="Search holidays">
        <div className="search-card-head">
          <div>
            <span className="micro-label">Start planning</span>
            <strong>Find your perfect holiday</strong>
          </div>
          <span className="deal-alert"><Icon name="bell" />Deal alerts ready</span>
        </div>
        <div className="search-tabs" aria-label="Holiday search type">
          {searchTabs.map((tab, index) => (
            <button key={tab.label} className="search-tab" type="button" aria-pressed={index === 0}>
              <Icon name={tab.icon} />{tab.label}
            </button>
          ))}
        </div>
        <HolidaySearchForm initialState={{ ...defaultHolidaySearchState, checkIn: '2026-06-12', checkOut: '2026-06-19' }} destinationOptions={destinationOptions} />
      </div>
    </div>
  );
}
