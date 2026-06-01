import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';
import { deals, destinations } from '@/lib/holiday-data';

export const metadata: Metadata = {
  title: `Destinations | ${brandDisplay}`,
  description:
    'Explore popular holiday destinations — Maldives, Santorini, Dubai, Tenerife and more. Find deals and inspiration for every destination.',
  alternates: { canonical: brandUrl('/destinations') },
};

const regions = ['All', 'Europe', 'Middle East', 'Indian Ocean', 'Asia', 'Caribbean & Americas'];

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="dest-page inner-page">

        {/* ── Hero ── */}
        <section className="inner-hero">
          <div className="inner-hero-bg">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2200&q=82"
              alt="Travel destinations around the world"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            />
            <div className="inner-hero-overlay" />
          </div>
          <div className="container inner-hero-content">
            <span className="micro-label" style={{ color: 'rgba(255,255,255,.82)' }}>
              Explore the world
            </span>
            <h1 className="inner-hero-h1">
              Where do you<br />want to go?
            </h1>
            <p className="inner-hero-sub">
              From quick European escapes to long-haul adventures — browse our most popular holiday destinations.
            </p>
          </div>
        </section>

        {/* ── Region pills ── */}
        <div className="container" style={{ paddingTop: 28, paddingBottom: 4 }}>
          <nav className="region-pills" aria-label="Filter by region">
            {regions.map((region, i) => (
              <Link
                key={region}
                href={i === 0 ? '/destinations' : `/search?destination=${encodeURIComponent(region)}`}
                className={`region-pill${i === 0 ? ' is-active' : ''}`}
              >
                {region}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Full destination grid ── */}
        <section className="container section dest-grid-section" aria-label="All destinations">
          <div className="dest-full-grid">
            {destinations.map((destination, index) => (
              <a
                key={destination.name}
                className={`dest-full-card${index < 2 ? ' is-featured' : ''}`}
                href={`/search?destination=${encodeURIComponent(destination.name)}`}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} holiday destination`}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1180px) 50vw, 600px"
                />
                <div className="dest-full-card-body">
                  <span className="dest-region-label">{destination.region}</span>
                  <strong>{destination.name}</strong>
                  <span className="dest-tagline">{destination.tagline}</span>
                  <span className="dest-price">{destination.price}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Promo pair ── */}
        <section className="container section dest-promo-row">
          <div className="dest-promo-card glass-card">
            <span className="dest-promo-icon"><Icon name="search" aria-hidden="true" /></span>
            <div>
              <strong>Can&rsquo;t see your destination?</strong>
              <p>Use our holiday search to find deals for thousands of resorts and destinations worldwide.</p>
              <Link href="/search" className="dest-promo-link">
                Search all destinations
                <Icon name="arrowRight" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="dest-promo-card glass-card">
            <span className="dest-promo-icon"><Icon name="sparkles" aria-hidden="true" /></span>
            <div>
              <strong>Not sure where to go?</strong>
              <p>Browse travel guides, resort picks and inspiration to help you find your perfect trip.</p>
              <Link href="/inspiration" className="dest-promo-link">
                Read travel inspiration
                <Icon name="arrowRight" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Featured deals ── */}
        <section className="container section" style={{ paddingBottom: 52 }}>
          <div className="section-head">
            <div>
              <span className="micro-label">Top picks</span>
              <h2>Featured destination deals</h2>
            </div>
            <Link href="/deals" className="section-head-link">
              View all deals
              <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
            </Link>
          </div>
          <div className="deal-row">
            {deals.slice(0, 3).map((deal) => (
              <HolidayDealCard key={deal.slug} deal={deal} />
            ))}
          </div>
        </section>

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
