import type { Metadata } from 'next';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brand, brandDisplay } from '@/lib/brand';
import { deals, destinations } from '@/lib/holiday-data';

export const metadata: Metadata = {
  title: `Search holidays | ${brandDisplay}`,
  description: 'Preview HTLY holiday search results, filters and reusable deal cards for hotels and package breaks.',
  alternates: {
    canonical: `${brand.siteUrl}/search`
  }
};

type SearchPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

function readParam(params: SearchPageProps['searchParams'], key: string) {
  const value = params?.[key];
  return Array.isArray(value) ? value[0] ?? '' : value ?? '';
}

function buildSummary(params: SearchPageProps['searchParams']) {
  const destination = readParam(params, 'destination').trim();
  const checkIn = readParam(params, 'check-in').trim();
  const checkOut = readParam(params, 'check-out').trim();
  const guests = readParam(params, 'guests').trim();
  const month = readParam(params, 'month').trim();
  const budget = readParam(params, 'budget').trim();
  const style = readParam(params, 'style').trim();

  return { destination, checkIn, checkOut, guests, month, budget, style };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const summary = buildSummary(searchParams);
  const hasQuery = Boolean(summary.destination || summary.month || summary.budget || summary.style);
  const destinationQuery = summary.destination.toLowerCase();
  const styleQuery = summary.style.toLowerCase();
  const matchingDeals = hasQuery
    ? deals.filter((deal) => {
      const destinationMatches = destinationQuery
        ? `${deal.destination} ${deal.resort}`.toLowerCase().includes(destinationQuery)
        : true;
      const styleMatches = styleQuery
        ? deal.tags.some((tag) => tag.toLowerCase() === styleQuery)
        : true;

      return destinationMatches && styleMatches;
    })
    : deals;
  const hasExactMatches = !hasQuery || matchingDeals.length > 0;
  const results = hasExactMatches ? matchingDeals : deals;
  const resultLabel = hasQuery
    ? hasExactMatches ? `${results.length} preview matches` : `${results.length} curated alternatives`
    : 'No search yet';
  const resultHelp = hasQuery
    ? hasExactMatches ? 'Reusable HTLY deal cards with product-flow controls.' : 'No exact preview match yet, so we are showing close-fit HTLY favourites while live inventory is pending.'
    : 'Add a destination to unlock tailored result previews.';
  const chips = [summary.destination, summary.checkIn && `${summary.checkIn}${summary.checkOut ? ` – ${summary.checkOut}` : ''}`, summary.guests, summary.month, summary.budget && `Budget ${summary.budget}`, summary.style].filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main className="search-page">
        <section className="search-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Search preview</span>
            <h1>{hasQuery ? `Holiday ideas for ${summary.destination || summary.style || summary.month}` : 'Start a holiday search'}</h1>
            <p>{hasQuery ? 'We have shaped this preview around your search details. Live pricing and availability will connect here in a future booking integration.' : 'Choose a destination or travel style from the homepage, widget or popular destinations to preview matching HTLY results.'}</p>
            {chips.length > 0 ? (
              <div className="filter-chips" aria-label="Your search details">
                {chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            ) : null}
          </div>
        </section>

        <section className="container search-results-layout" aria-label="Holiday search results preview">
          <aside className="filter-rail glass-card" aria-label="Filter results">
            <div className="filter-title"><Icon name="sliders" /><strong>Refine results</strong></div>
            <label><span>Holiday type</span><select defaultValue={summary.style || 'Any'}><option>Any</option><option>Beach</option><option>Family</option><option>Luxury</option><option>All-inclusive</option><option>Budget</option><option>City break</option></select></label>
            <label><span>Board basis</span><select defaultValue="Any"><option>Any</option><option>All inclusive</option><option>Breakfast</option><option>Self catering</option></select></label>
            <label><span>Max budget</span><input name="budget" defaultValue={summary.budget} placeholder="£1,000 pp" /></label>
            <div className="filter-note">Filters are UI-ready placeholders until live availability is connected.</div>
          </aside>

          <div className="results-column">
            <div className="results-toolbar glass-card">
              <div><strong>{resultLabel}</strong><small>{resultHelp}</small></div>
              <label><span className="sr-only">Sort results</span><select defaultValue="recommended"><option value="recommended">Sort: Recommended</option><option value="price-low">Price: low to high</option><option value="saving">Biggest saving</option><option value="family">Family favourites</option></select></label>
            </div>

            {!hasQuery ? (
              <div className="empty-results glass-card">
                <Icon name="search" />
                <h2>Tell us where you would like to go</h2>
                <p>Search from the homepage, open the assistant, or pick one of these popular destination shortcuts.</p>
                <div className="empty-destinations">
                  {destinations.slice(0, 4).map((destination) => <a key={destination.name} href={`/search?destination=${encodeURIComponent(destination.name)}`}>{destination.name}<Icon name="chevron" /></a>)}
                </div>
                <a className="placeholder-link" href="/">Back to homepage</a>
              </div>
            ) : (
              <div className="result-list">
                {results.map((deal) => <HolidayDealCard key={deal.resort} deal={deal} href={`/deals?destination=${encodeURIComponent(deal.destination)}`} cta="Preview deal" />)}
              </div>
            )}
          </div>
        </section>
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
