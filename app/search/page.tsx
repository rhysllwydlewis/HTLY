import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { HolidaySearchForm } from '@/components/search/HolidaySearchForm';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandUrl, brandDisplay } from '@/lib/brand';
import { deals, destinations } from '@/lib/holiday-data';
import { formatGuestRoomLabel, parseHolidaySearchParams } from '@/lib/search-state';

export const metadata: Metadata = {
  title: `Search holidays | ${brandDisplay}`,
  description: 'Preview HTLY holiday search results, working filters and reusable deal cards for hotels and package breaks.',
  alternates: {
    canonical: brandUrl('/search')
  },
  robots: {
    index: true,
    follow: true
  }
};

type SearchPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

type SearchSummary = ReturnType<typeof buildSummary>;

function buildSummary(params: SearchPageProps['searchParams']) {
  return parseHolidaySearchParams(params);
}

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
  const searchable = dealSearchText(deal);
  return terms.every((term) => searchable.includes(term));
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

function getRecommendationScore(deal: (typeof deals)[number], summary: SearchSummary) {
  const styleBonus = summary.style && matchesStyle(deal, summary.style) ? 40 : 0;
  const destinationBonus = summary.destination && matchesDestination(deal, summary.destination) ? 35 : 0;
  const boardBonus = summary.board && matchesBoard(deal, summary.board) ? 20 : 0;
  const savingBonus = deal.savingAmount / 10;
  const ratingBonus = deal.rating * 4;
  const familyBonus = normalise(summary.style) === 'family' ? deal.familyScore * 8 : 0;
  return styleBonus + destinationBonus + boardBonus + savingBonus + ratingBonus + familyBonus;
}

function getResults(summary: SearchSummary) {
  const maxBudget = parseBudget(summary.maxBudget);
  const filtered = deals.filter((deal) => (
    matchesDestination(deal, summary.destination)
    && matchesStyle(deal, summary.style)
    && matchesBoard(deal, summary.board)
    && (!maxBudget || deal.priceFrom <= maxBudget)
  ));
  const fallback = deals.filter((deal) => (!maxBudget || deal.priceFrom <= Math.max(maxBudget, 700))).slice(0, 6);
  const results = filtered.length > 0 ? filtered : fallback;

  return [...results].sort((a, b) => {
    if (summary.sort === 'price-low') return a.priceFrom - b.priceFrom;
    if (summary.sort === 'saving') return b.savingAmount - a.savingAmount;
    if (summary.sort === 'family') return b.familyScore - a.familyScore || a.priceFrom - b.priceFrom;
    return getRecommendationScore(b, summary) - getRecommendationScore(a, summary) || a.priceFrom - b.priceFrom;
  });
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const summary = buildSummary(searchParams);
  const destinationOptions = Array.from(new Set([
    ...destinations.map((destination) => destination.name),
    ...deals.flatMap((deal) => [deal.destination, deal.resort, deal.badge, ...deal.tags])
  ]));
  const hasQuery = Boolean(summary.destination || summary.checkIn || summary.checkOut || summary.month || summary.budget || summary.style || (summary.board && summary.board !== 'Any') || summary.maxBudget);
  const filteredMatches = deals.filter((deal) => (
    matchesDestination(deal, summary.destination)
    && matchesStyle(deal, summary.style)
    && matchesBoard(deal, summary.board)
    && (!parseBudget(summary.maxBudget) || deal.priceFrom <= (parseBudget(summary.maxBudget) ?? Infinity))
  ));
  const hasExactMatches = !hasQuery || filteredMatches.length > 0;
  const results = hasQuery ? getResults(summary) : [];
  const resultLabel = hasQuery
    ? hasExactMatches ? `${results.length} preview matches` : `${results.length} curated alternatives`
    : 'No search yet';
  const resultHelp = hasQuery
    ? hasExactMatches ? 'Sorted and filtered from HTLY sample deals while live inventory is pending.' : 'No exact preview match yet, so we are showing close-fit HTLY favourites within your broad criteria.'
    : 'Add a destination or use a shortcut to unlock tailored result previews.';
  const chips = [summary.destination, summary.checkIn ? `${summary.checkIn}${summary.checkOut ? ` – ${summary.checkOut}` : ''}` : '', hasQuery ? formatGuestRoomLabel(summary) : '', summary.month, summary.maxBudget ? `Budget ${summary.maxBudget}` : '', summary.style, summary.board && summary.board !== 'Any' ? summary.board : ''].filter((chip): chip is string => Boolean(chip));

  return (
    <>
      <SiteHeader />
      <main className="search-page" id="search-results">
        <section className="search-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Search preview</span>
            <h1>{hasQuery ? `Holiday ideas for ${summary.destination || summary.style || summary.month || 'your next trip'}` : 'Start a holiday search'}</h1>
            <p>{hasQuery ? 'We have shaped this preview around your search details. Live pricing and availability will connect here in a future booking integration.' : 'Choose a destination or travel style from the homepage, widget or popular destinations to preview matching HTLY results.'}</p>
            {chips.length > 0 ? (
              <div className="filter-chips" aria-label="Your search details">
                {chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            ) : null}
            <div className="search-hero-actions">
              <Link href="/search#filters" className="secondary-action"><Icon name="sliders" />Edit search</Link>
              <Link href="/search" className="secondary-action is-clear"><Icon name="close" />Clear search</Link>
            </div>
          </div>
        </section>

        <section className="container search-results-layout" aria-label="Holiday search results preview">
          <aside className="filter-rail glass-card" aria-label="Filter results" id="filters">
            <div className="filter-form">
              <div className="filter-title"><Icon name="sliders" /><strong>Refine results</strong></div>
              <HolidaySearchForm initialState={summary} destinationOptions={destinationOptions} variant="filters" showFilters />
              <Link href="/search" className="filter-reset">Clear search</Link>
              <div className="filter-note">These filters are functional against HTLY sample deals. Live availability, real rooms and booking rules will connect later.</div>
            </div>
          </aside>

          <div className="results-column">
            <div className="results-toolbar glass-card">
              <div><strong>{resultLabel}</strong><small>{resultHelp}</small></div>
              {hasQuery ? <Link href="/search#filters">Edit filters</Link> : <Link href="/">Search from homepage</Link>}
            </div>

            {!hasQuery ? (
              <div className="empty-results glass-card">
                <Icon name="search" />
                <h2>Tell us where you would like to go</h2>
                <p>Search from the homepage, open the assistant, or pick one of these popular destination shortcuts. We will show real-feeling static deals while HTLY availability is being connected.</p>
                <div className="empty-destinations">
                  {destinations.slice(0, 6).map((destination) => <Link key={destination.name} href={`/search?destination=${encodeURIComponent(destination.name)}`}>{destination.name}<Icon name="chevron" /></Link>)}
                </div>
                <Link className="placeholder-link" href="/">Back to homepage</Link>
              </div>
            ) : (
              <>
                {!hasExactMatches ? (
                  <div className="empty-results compact glass-card">
                    <Icon name="sparkles" />
                    <h2>We found close-fit alternatives</h2>
                    <p>Your exact combination is not in the static preview yet, so these are the most relevant HTLY deals by price, saving and holiday style.</p>
                  </div>
                ) : null}
                <div className="result-list">
                  {results.map((deal) => <HolidayDealCard key={deal.slug} deal={deal} cta="View deal" />)}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
