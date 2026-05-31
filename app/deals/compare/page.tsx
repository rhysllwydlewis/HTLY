import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { Icon } from '@/components/Icon';
import { SavedDealsCompareClient } from '@/components/SavedDealsCompareClient';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Compare saved holiday deals | ${brandDisplay}`,
  description: 'Compare saved HTLY holiday deals side by side using your local shortlist.',
  alternates: {
    canonical: brandUrl('/deals/compare')
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function CompareDealsPage() {
  return (
    <>
      <SiteHeader />
      <main className="search-page compare-page">
        <section className="search-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Saved comparison</span>
            <h1>Compare your shortlisted holidays</h1>
            <p>Use this lightweight client-side workspace to review up to three saved HTLY deals before live booking, rooms and payments are connected.</p>
            <div className="search-hero-actions">
              <Link href="/deals" className="secondary-action"><Icon name="heart" />Browse deals</Link>
              <Link href="/search" className="secondary-action"><Icon name="search" />Search holidays</Link>
            </div>
          </div>
        </section>
        <SavedDealsCompareClient />
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
