import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';
import { deals } from '@/lib/holiday-data';

export const metadata: Metadata = {
  title: `Holiday Deals | ${brandDisplay}`,
  description: `Browse ${deals.length} handpicked holiday deals — all-inclusive escapes, luxury resorts and family favourites. Find your perfect deal with HTLY.`,
  alternates: { canonical: brandUrl('/deals') },
};

const dealFilters = [
  { label: 'All deals',      href: '/deals',                      icon: 'tag'      as const, active: true  },
  { label: 'All-inclusive',  href: '/search?style=All-inclusive', icon: 'sun'      as const, active: false },
  { label: 'Family',         href: '/search?style=Family',        icon: 'guests'   as const, active: false },
  { label: 'Luxury',         href: '/search?style=Luxury',        icon: 'sparkles' as const, active: false },
  { label: 'Biggest saving', href: '/search?sort=saving',         icon: 'tag'      as const, active: false },
  { label: 'Budget picks',   href: '/search?style=Budget',        icon: 'shield'   as const, active: false },
];

/* Sort by saving desc for the deals index page */
const sortedDeals = [...deals].sort((a, b) => b.savingAmount - a.savingAmount);

export default function DealsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page search-page deals-index-page">

        {/* ── Hero ── */}
        <section className="search-hero-lite inner-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Holiday deals</span>
            <h1>
              {deals.length} handpicked<br />holiday deals
            </h1>
            <p>
              All-inclusive packages, luxury resorts and family favourites — all with genuine savings
              and clear per-person pricing.
            </p>
            <div className="search-hero-actions">
              <Link href="/search" className="secondary-action">
                <Icon name="search" aria-hidden="true" />
                Search &amp; filter
              </Link>
              <Link href="/search?sort=saving" className="secondary-action">
                <Icon name="tag" aria-hidden="true" />
                Biggest savings first
              </Link>
            </div>
          </div>
        </section>

        {/* ── Filter pills ── */}
        <div className="container" style={{ paddingTop: 8, paddingBottom: 4 }}>
          <nav className="region-pills" aria-label="Filter deals">
            {dealFilters.map((filter) => (
              <Link key={filter.label} href={filter.href} className={`region-pill${filter.active ? ' is-active' : ''}`}>
                <Icon name={filter.icon} aria-hidden="true" />
                {filter.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Count bar ── */}
        <div className="container">
          <div className="deals-count-bar">
            <span>
              Showing <strong>{deals.length} deals</strong> &mdash; sorted by saving
            </span>
            <Link href="/search" className="secondary-action" style={{ minHeight: 36, fontSize: 13 }}>
              <Icon name="sliders" aria-hidden="true" />
              Advanced filters
            </Link>
          </div>
        </div>

        {/* ── All deals ── */}
        <section className="container deals-index-grid section" aria-label="All holiday deals">
          {sortedDeals.map((deal) => (
            <HolidayDealCard key={deal.slug} deal={deal} />
          ))}
        </section>

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
