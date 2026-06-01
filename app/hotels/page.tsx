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
  title: `Hotels & Resorts | ${brandDisplay}`,
  description:
    'Handpicked hotels and resorts worldwide — boutique cliff-side retreats to five-star all-inclusive resorts. Browse, save and compare with HTLY.',
  alternates: { canonical: brandUrl('/hotels') },
};

/* Board basis filter options */
const boardOptions = [
  { label: 'All board types',  href: '/hotels',                      active: true  },
  { label: 'Breakfast',        href: '/search?board=Breakfast',      active: false },
  { label: 'Half board',       href: '/search?board=Half+board',     active: false },
  { label: 'All inclusive',    href: '/search?board=All+inclusive',  active: false },
];

/* Prefer B&B / half-board deals first, then fill with the rest */
const hotelDeals = [
  ...deals.filter((d) => ['Breakfast', 'Half board'].includes(d.board)),
  ...deals.filter((d) => !['Breakfast', 'Half board'].includes(d.board)),
].slice(0, 9);

const trustItems = [
  { icon: 'atol'    as const, text: 'ATOL Protected travel'       },
  { icon: 'lock'    as const, text: 'Secure & encrypted booking'  },
  { icon: 'clock'   as const, text: 'Free cancellation available' },
  { icon: 'headset' as const, text: 'UK support 7 days a week'    },
];

export default function HotelsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page search-page">

        {/* ── Hero ── */}
        <section className="search-hero-lite inner-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Hotels &amp; resorts</span>
            <h1>Find your perfect hotel</h1>
            <p>
              Handpicked hotels and resorts worldwide — from boutique cliff-side retreats
              to five-star all-inclusive resorts. Browse, save and compare with HTLY.
            </p>
            <div className="search-hero-actions">
              <Link href="/search" className="secondary-action">
                <Icon name="search" aria-hidden="true" />
                Search hotels
              </Link>
              <Link href="/search?sort=price-low" className="secondary-action">
                <Icon name="tag" aria-hidden="true" />
                Best value hotels
              </Link>
            </div>
          </div>
        </section>

        {/* ── Board pills ── */}
        <div className="container" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <nav className="region-pills" aria-label="Filter by board type">
            {boardOptions.map((opt) => (
              <Link key={opt.label} href={opt.href} className={`region-pill${opt.active ? ' is-active' : ''}`}>
                {opt.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Hotel deals grid ── */}
        <section className="container section" aria-label="Featured hotels and resorts">
          <div className="section-head">
            <div>
              <span className="micro-label">Handpicked resorts</span>
              <h2>Featured hotels &amp; resorts</h2>
            </div>
            <Link href="/search" className="section-head-link">
              Search all hotels
              <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
            </Link>
          </div>
          <div className="deals-index-grid">
            {hotelDeals.map((deal) => (
              <HolidayDealCard key={deal.slug} deal={deal} />
            ))}
          </div>
        </section>

        {/* ── Trust badges row ── */}
        <section className="container section hotel-trust-row" style={{ paddingBottom: 52 }}>
          {trustItems.map((item) => (
            <div key={item.text} className="hotel-trust-item">
              <Icon name={item.icon} aria-hidden="true" />
              <span>{item.text}</span>
            </div>
          ))}
        </section>

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
