import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandUrl, brandDisplay } from '@/lib/brand';
import { deals } from '@/lib/holiday-data';

export const metadata: Metadata = {
  title: `Holiday deals | ${brandDisplay}`,
  description: 'Browse HTLY sample holiday deals with polished cards and direct routes to detailed offer pages.',
  alternates: {
    canonical: brandUrl('/deals')
  }
};

export default function DealsPage() {
  return (
    <>
      <SiteHeader />
      <main className="search-page deals-index-page">
        <section className="search-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Holiday deal index</span>
            <h1>Featured HTLY deals with real detail pages</h1>
            <p>Browse static sample offers across beach, family, luxury and all-inclusive holidays. Each card now opens a dedicated deal journey.</p>
            <div className="search-hero-actions">
              <Link href="/search" className="secondary-action"><Icon name="search" />Search holidays</Link>
              <Link href="/search?style=All-inclusive" className="secondary-action"><Icon name="tag" />All-inclusive ideas</Link>
            </div>
          </div>
        </section>
        <section className="container deals-index-grid" aria-label="All holiday deals">
          {deals.map((deal) => <HolidayDealCard key={deal.slug} deal={deal} />)}
        </section>
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
