import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';
import { deals, destinations } from '@/lib/holiday-data';

export const metadata: Metadata = {
  title: `Holidays | ${brandDisplay}`,
  description:
    'Find the best package holidays — beach breaks, family escapes, luxury retreats and all-inclusive deals. Browse and book with HTLY.',
  alternates: { canonical: brandUrl('/holidays') },
};

const holidayStyles = [
  { label: 'All holidays',   href: '/search',                      icon: 'beach'    as const },
  { label: 'All-inclusive',  href: '/search?style=All-inclusive',  icon: 'sun'      as const },
  { label: 'Family',         href: '/search?style=Family',         icon: 'guests'   as const },
  { label: 'Luxury',         href: '/search?style=Luxury',         icon: 'sparkles' as const },
  { label: 'Beach',          href: '/search?style=Beach',          icon: 'beach'    as const },
  { label: 'Budget deals',   href: '/search?style=Budget',         icon: 'tag'      as const },
];

export default function HolidaysPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page search-page">

        {/* ── Hero ── */}
        <section className="search-hero-lite inner-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Package holidays</span>
            <h1>Holidays made easy</h1>
            <p>
              Browse beach breaks, all-inclusive packages and luxury escapes.
              Compare deals, save favourites and find the holiday that fits.
            </p>
            <div className="search-hero-actions">
              <Link href="/search" className="secondary-action">
                <Icon name="search" aria-hidden="true" />
                Search all holidays
              </Link>
              <Link href="/deals" className="secondary-action">
                <Icon name="tag" aria-hidden="true" />
                View all deals
              </Link>
            </div>
          </div>
        </section>

        {/* ── Style pills ── */}
        <div className="container" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <nav className="region-pills" aria-label="Holiday types">
            {holidayStyles.map((style, i) => (
              <Link key={style.label} href={style.href} className={`region-pill${i === 0 ? ' is-active' : ''}`}>
                <Icon name={style.icon} aria-hidden="true" />
                {style.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── All deals ── */}
        <section className="container section" aria-label="Holiday deals">
          <div className="section-head">
            <div>
              <span className="micro-label">Current offers</span>
              <h2>All {deals.length} holiday deals</h2>
            </div>
            <Link href="/search" className="section-head-link">
              Search & filter
              <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
            </Link>
          </div>
          <div className="deals-index-grid">
            {deals.map((deal) => (
              <HolidayDealCard key={deal.slug} deal={deal} />
            ))}
          </div>
        </section>

        {/* ── Destination quick links ── */}
        <section className="container section" style={{ paddingBottom: 52 }}>
          <div className="section-head compact">
            <div>
              <span className="micro-label">By destination</span>
              <h2>Popular holiday destinations</h2>
            </div>
          </div>
          <div className="dest-quick-links">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={`/search?destination=${encodeURIComponent(dest.name)}`}
                className="dest-quick-link"
              >
                <Icon name="pin" aria-hidden="true" />
                <span>
                  <strong>{dest.name}</strong>
                  <small>{dest.price}</small>
                </span>
                <Icon name="chevron" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
