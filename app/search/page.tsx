import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { HolidaySearchForm } from '@/components/search/HolidaySearchForm';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';
import { deals, destinations } from '@/lib/holiday-data';
import { formatGuestRoomLabel, parseHolidaySearchParams } from '@/lib/search-state';

export const metadata: Metadata = {
  title: `Search holidays | ${brandDisplay}`,
  description: 'Search and filter holiday deals — beach, family, luxury and all-inclusive packages. Find your perfect break with HTLY.',
  alternates: { canonical: brandUrl('/search') },
  robots: { index: true, follow: true },
};

type SearchPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

type SearchSummary = ReturnType<typeof parseHolidaySearchParams>;

function normalise(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function parseBudget(value: string) {
  const amount = Number(value.replace(/[^0-9]/g, ''));
  return Number.isFinite(amount) && amount > 0 ? amount : undefined;
}

function dealSearchText(deal: (typeof deals)[number]) {
  return normalise(`${deal.destination} ${deal.resort} ${deal.tags.join(' ')} ${deal.board} ${deal.badge}`);
}

function matchesDestination(deal: (typeof deals)[number], destination: string) {
  if (!destination) return true;
  const query = normalise(destination);
  const terms = query.split(' ').filter(Boolean);
  return terms.every((term) => dealSearchText(deal).includes(term));
}

function matchesStyle(deal: (typeof deals)[number], style: string) {
  if (!style || style === 'Any') return true;
  const query = normalise(style);
  return deal.tags.some((tag) => normalise(tag) === query) || normalise(deal.badge).includes(query);
}

function matchesBoard(deal: (typeof deals)[number], board: string) {
  if (!board || board === 'Any') return true;
  return normalise(deal.board).includes(normalise(board));
}

function getScore(deal: (typeof deals)[number], summary: SearchSummary) {
  return (
    (summary.style && matchesStyle(deal, summary.style) ? 40 : 0) +
    (summary.destination && matchesDestination(deal, summary.destination) ? 35 : 0) +
    (summary.board && matchesBoard(deal, summary.board) ? 20 : 0) +
    deal.savingAmount / 10 +
    deal.rating * 4 +
    (normalise(summary.style) === 'family' ? deal.familyScore * 8 : 0)
  );
}

function getResults(summary: SearchSummary) {
  const maxBudget = parseBudget(summary.maxBudget);
  const filtered = deals.filter((d) =>
    matchesDestination(d, summary.destination) &&
    matchesStyle(d, summary.style) &&
    matchesBoard(d, summary.board) &&
    (!maxBudget || d.priceFrom <= maxBudget)
  );
  const list = filtered.length > 0
    ? filtered
    : deals.filter((d) => !maxBudget || d.priceFrom <= Math.max(maxBudget, 700)).slice(0, 6);

  return [...list].sort((a, b) => {
    if (summary.sort === 'price-low') return a.priceFrom - b.priceFrom;
    if (summary.sort === 'saving') return b.savingAmount - a.savingAmount;
    if (summary.sort === 'family') return b.familyScore - a.familyScore || a.priceFrom - b.priceFrom;
    return getScore(b, summary) - getScore(a, summary) || a.priceFrom - b.priceFrom;
  });
}

const sortLabels: Record<string, string> = {
  recommended: 'Recommended',
  'price-low': 'Price: low to high',
  saving: 'Biggest saving',
  family: 'Family favourites',
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const summary = parseHolidaySearchParams(searchParams);

  const destinationOptions = Array.from(new Set([
    ...destinations.map((d) => d.name),
    ...deals.flatMap((d) => [d.destination, d.resort, d.badge, ...d.tags]),
  ]));

  const hasQuery = Boolean(
    summary.destination || summary.checkIn || summary.checkOut ||
    summary.month || summary.style || summary.maxBudget ||
    (summary.board && summary.board !== 'Any')
  );

  const filteredCount = deals.filter((d) =>
    matchesDestination(d, summary.destination) &&
    matchesStyle(d, summary.style) &&
    matchesBoard(d, summary.board) &&
    (!parseBudget(summary.maxBudget) || d.priceFrom <= (parseBudget(summary.maxBudget) ?? Infinity))
  ).length;

  const hasExactMatches = !hasQuery || filteredCount > 0;
  const results = hasQuery ? getResults(summary) : [];

  /* Chips shown above results */
  const chips = [
    summary.destination,
    summary.checkIn ? `${summary.checkIn}${summary.checkOut ? ` – ${summary.checkOut}` : ''}` : '',
    hasQuery ? formatGuestRoomLabel(summary) : '',
    summary.month,
    summary.maxBudget ? `Budget ${summary.maxBudget}` : '',
    summary.style,
    summary.board && summary.board !== 'Any' ? summary.board : '',
  ].filter((c): c is string => Boolean(c));

  const headline = hasQuery
    ? summary.destination
      ? `${results.length} deals for ${summary.destination}`
      : summary.style
        ? `${results.length} ${summary.style.toLowerCase()} holidays`
        : `${results.length} holidays found`
    : 'Search holidays';

  const subtext = hasQuery
    ? hasExactMatches
      ? `Sorted by ${sortLabels[summary.sort] ?? 'recommendation'}. Showing preview results — live availability connects in a future update.`
      : `No exact match yet — showing ${results.length} close-fit HTLY favourites by price, saving and holiday style.`
    : 'Use the filters below to search for your ideal holiday by destination, dates, guests and style.';

  return (
    <>
      <SiteHeader />
      <main className="search-page" id="search-results">

        {/* ── Hero ── */}
        <section className="search-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Holiday search</span>
            <h1>{headline}</h1>
            <p>{subtext}</p>
            {chips.length > 0 && (
              <div className="filter-chips" aria-label="Active search filters">
                {chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            )}
            {hasQuery && (
              <div className="search-hero-actions">
                <Link href="/search#filters" className="secondary-action">
                  <Icon name="sliders" aria-hidden="true" />
                  Edit search
                </Link>
                <Link href="/search" className="secondary-action is-clear">
                  <Icon name="close" aria-hidden="true" />
                  Clear search
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── Layout: filter rail + results ── */}
        <section
          className="container search-results-layout"
          aria-label="Holiday search results"
          id="filters"
        >
          {/* Filter sidebar */}
          <aside className="filter-rail glass-card" aria-label="Refine results">
            <div className="filter-form">
              <div className="filter-title">
                <Icon name="sliders" aria-hidden="true" />
                <strong>Refine results</strong>
              </div>
              <HolidaySearchForm
                initialState={summary}
                destinationOptions={destinationOptions}
                variant="filters"
                showFilters
              />
              <Link href="/search" className="filter-reset">
                <Icon name="close" aria-hidden="true" />
                Clear all filters
              </Link>
              <p className="filter-note">
                Filters work against {deals.length} preview deals. Live availability and real-time pricing will connect in a future release.
              </p>
            </div>
          </aside>

          {/* Results column */}
          <div className="results-column">

            {/* Toolbar */}
            <div className="results-toolbar glass-card">
              <div>
                <strong>
                  {hasQuery ? `${results.length} result${results.length !== 1 ? 's' : ''}` : 'No search yet'}
                </strong>
                <small>
                  {hasQuery
                    ? hasExactMatches ? 'Matching your search' : 'Close-fit alternatives'
                    : 'Add a destination or filter to see results'}
                </small>
              </div>
              {hasQuery ? (
                <Link href="/search#filters">Edit filters</Link>
              ) : (
                <Link href="/">Back to homepage</Link>
              )}
            </div>

            {/* No query state */}
            {!hasQuery && (
              <div className="empty-results glass-card">
                <Icon name="search" aria-hidden="true" />
                <h2>Tell us where you&rsquo;d like to go</h2>
                <p>
                  Use the filters to search by destination, travel style, dates or budget.
                  Or pick a popular destination to see matching deals right away.
                </p>
                <div className="empty-destinations" aria-label="Popular destinations">
                  {destinations.slice(0, 6).map((dest) => (
                    <Link
                      key={dest.name}
                      href={`/search?destination=${encodeURIComponent(dest.name)}`}
                    >
                      {dest.name}
                      <Icon name="chevron" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <Link href="/" className="placeholder-link">Back to homepage</Link>
              </div>
            )}

            {/* Fuzzy match notice */}
            {hasQuery && !hasExactMatches && (
              <div className="empty-results compact glass-card">
                <Icon name="sparkles" aria-hidden="true" />
                <h2>We found close-fit alternatives</h2>
                <p>
                  Your exact search is not in the preview yet. These are the most relevant
                  deals by destination, saving and holiday style.
                </p>
              </div>
            )}

            {/* Results grid */}
            {hasQuery && (
              <div className="result-list">
                {results.map((deal) => (
                  <HolidayDealCard key={deal.slug} deal={deal} cta="View deal" />
                ))}
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
