import { Icon } from '@/components/Icon';
import { searchTabs } from '@/lib/holiday-data';

export function HeroSearch() {
  return (
    <div className="container search-shell">
      <form className="search-card glass-card" action="/search" aria-label="Search holidays">
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
        <div className="search-fields">
          <label className="search-field search-field-destination">
            <Icon name="pin" className="field-icon" />
            <span className="field-copy">
              <span className="field-label">Where to?</span>
              <input name="destination" placeholder="Search destinations or hotels" aria-label="Destination" />
            </span>
          </label>
          <label className="search-field">
            <span className="field-copy">
              <span className="field-label">Check-in</span>
              <input name="check-in" type="text" defaultValue="12 Jun 2026" aria-label="Check-in date" />
            </span>
            <Icon name="calendar" className="field-icon" />
          </label>
          <label className="search-field">
            <span className="field-copy">
              <span className="field-label">Check-out</span>
              <input name="check-out" type="text" defaultValue="19 Jun 2026" aria-label="Check-out date" />
            </span>
            <Icon name="calendar" className="field-icon" />
          </label>
          <label className="search-field">
            <Icon name="guests" className="field-icon" />
            <span className="field-copy">
              <span className="field-label">Guests & rooms</span>
              <input name="guests" type="text" defaultValue="2 Adults, 1 Room" aria-label="Guests and rooms" />
            </span>
          </label>
          <button className="search-cta" type="submit"><Icon name="search" />Search deals</button>
        </div>
      </form>
    </div>
  );
}
