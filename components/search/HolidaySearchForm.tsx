import { Icon } from '@/components/Icon';
import { DestinationSearchCombobox } from '@/components/search/DestinationSearchCombobox';
import { GuestRoomPicker } from '@/components/search/GuestRoomPicker';
import { TravelDateRangePicker } from '@/components/search/TravelDateRangePicker';
import { type HolidaySearchState } from '@/lib/search-state';

type HolidaySearchFormProps = {
  initialState: HolidaySearchState;
  destinationOptions: string[];
  variant?: 'hero' | 'filters' | 'widget';
  showFilters?: boolean;
};

export function HolidaySearchForm({ initialState, destinationOptions, variant = 'hero', showFilters = false }: HolidaySearchFormProps) {
  const isHero = variant === 'hero';
  const isCompact = variant !== 'hero';

  return (
    <form className={`holiday-search-form is-${variant}`} action="/search" aria-label={isHero ? 'Search holidays' : 'Refine holiday search'}>
      <DestinationSearchCombobox defaultValue={initialState.destination} options={destinationOptions} compact={isCompact} />
      <TravelDateRangePicker defaultCheckIn={initialState.checkIn} defaultCheckOut={initialState.checkOut} compact={isCompact} />
      <GuestRoomPicker adults={initialState.adults} childCount={initialState.children} rooms={initialState.rooms} compact={isCompact} />
      {showFilters ? (
        <div className="advanced-filter-grid">
          <label><span>Holiday type</span><select name="style" defaultValue={initialState.style || 'Any'}><option>Any</option><option>Beach</option><option>Family</option><option>Luxury</option><option>All-inclusive</option><option>Budget</option><option>City break</option></select></label>
          <label><span>Board basis</span><select name="board" defaultValue={initialState.board || 'Any'}><option>Any</option><option>All inclusive</option><option>Breakfast</option><option>Half board</option><option>Self catering</option></select></label>
          <label><span>Max budget</span><input name="maxBudget" defaultValue={initialState.maxBudget} placeholder="£1,000 pp" /></label>
          <label><span>Sort by</span><select name="sort" defaultValue={initialState.sort}><option value="recommended">Recommended</option><option value="price-low">Price: low to high</option><option value="saving">Biggest saving</option><option value="family">Family favourites</option></select></label>
        </div>
      ) : null}
      {initialState.month ? <input type="hidden" name="month" value={initialState.month} /> : null}
      {initialState.budget && !initialState.maxBudget ? <input type="hidden" name="budget" value={initialState.budget} /> : null}
      {initialState.style && !showFilters ? <input type="hidden" name="style" value={initialState.style} /> : null}
      <button className={isHero ? 'search-cta' : 'filter-submit'} type="submit"><Icon name="search" />{isHero ? 'Search deals' : 'Update results'}</button>
    </form>
  );
}
