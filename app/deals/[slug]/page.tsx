import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon, type IconName } from '@/components/Icon';
import { SaveDealButton } from '@/components/SaveDealButton';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandUrl, brandDisplay } from '@/lib/brand';
import { deals, getDealBySlug, getDealHref, getRelatedDeals } from '@/lib/holiday-data';

type DealPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export function generateMetadata({ params }: DealPageProps): Metadata {
  const deal = getDealBySlug(params.slug);

  if (!deal) {
    return {
      title: `Deal not found | ${brandDisplay}`
    };
  }

  const title = `${deal.resort}, ${deal.destination} from ${deal.price}pp | ${brandDisplay}`;
  const description = `${deal.nights} ${deal.board.toLowerCase()} holiday to ${deal.destination} with ${deal.saving.toLowerCase()}, ${deal.travel.toLowerCase()} and ${deal.deposit.toLowerCase()}`;

  return {
    title,
    description,
    alternates: {
      canonical: brandUrl(getDealHref(deal))
    },
    openGraph: {
      title,
      description,
      url: brandUrl(getDealHref(deal)),
      siteName: brandDisplay,
      images: [{ url: deal.image, width: 1200, height: 800, alt: `${deal.resort} in ${deal.destination}` }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [deal.image]
    }
  };
}

export default function DealDetailPage({ params }: DealPageProps) {
  const deal = getDealBySlug(params.slug);

  if (!deal) notFound();

  const relatedDeals = getRelatedDeals(deal);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${deal.resort} holiday to ${deal.destination}`,
    image: [deal.image, ...deal.gallery],
    description: deal.overview,
    brand: {
      '@type': 'Brand',
      name: brandDisplay
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: deal.rating,
      reviewCount: Math.max(25, Math.round(deal.rating * 70))
    },
    offers: {
      '@type': 'Offer',
      url: brandUrl(getDealHref(deal)),
      priceCurrency: 'GBP',
      price: deal.priceFrom,
      availability: 'https://schema.org/InStock',
      category: 'Package holiday'
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="deal-detail-page">
        <section className="deal-detail-hero">
          <Image src={deal.image} alt={`${deal.resort} resort view in ${deal.destination}`} fill priority sizes="100vw" />
          <div className="deal-hero-overlay" />
          <div className="container deal-hero-content">
            <div className="deal-hero-copy glass-card">
              <span className="micro-label">{deal.badge}</span>
              <h1>{deal.resort}</h1>
              <p><Icon name="pin" />{deal.destination}</p>
              <div className="deal-hero-tags">
                <span className="saving-badge">{deal.saving}</span>
                {deal.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <aside className="price-panel glass-card" aria-label="Deal price and actions">
              <span>From</span>
              <strong>{deal.price}<em> pp</em></strong>
              <p>{deal.total}</p>
              <Link href={`/search?destination=${encodeURIComponent(deal.destination)}&style=${encodeURIComponent(deal.tags[0] ?? '')}`} className="primary-cta"><Icon name="search" />Check availability</Link>
              <SaveDealButton slug={deal.slug} resort={deal.resort} variant="wide" />
              <small>{deal.deposit}</small>
            </aside>
          </div>
        </section>

        <section className="container detail-facts" aria-label="Holiday facts">
          {([
            { icon: 'clock', text: deal.nights },
            { icon: 'card', text: deal.board },
            { icon: 'plane', text: deal.travel },
            { icon: 'star', text: `${deal.rating.toFixed(1)} rating` },
            { icon: 'shield', text: 'Flexible terms preview' }
          ] satisfies { icon: IconName; text: string }[]).map(({ icon, text }) => (
            <div className="fact-card glass-card" key={text}>
              <Icon name={icon} />
              <span>{text}</span>
            </div>
          ))}
        </section>

        <section className="container detail-layout">
          <article className="detail-main glass-card">
            <span className="micro-label">Holiday overview</span>
            <h2>Why this deal feels HTLY-ready</h2>
            <p>{deal.overview}</p>

            <div className="detail-gallery">
              {deal.gallery.map((image, index) => (
                <div key={image} className="gallery-tile">
                  <Image src={image} alt={`${deal.resort} gallery image ${index + 1}`} fill sizes="(max-width: 780px) 100vw, 360px" />
                </div>
              ))}
            </div>

            <div className="detail-section-grid">
              <section>
                <h3>Highlights</h3>
                <ul className="check-list">{deal.highlights.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
              </section>
              <section>
                <h3>Hotel features</h3>
                <ul className="check-list">{deal.hotelFeatures.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
              </section>
              <section>
                <h3>Included</h3>
                <ul className="check-list">{deal.included.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
              </section>
              <section>
                <h3>Location</h3>
                <p>{deal.locationSummary}</p>
              </section>
            </div>
          </article>

          <aside className="detail-side">
            <div className="trust-panel glass-card">
              <Icon name="shield" />
              <h2>Trust and protection</h2>
              <p>{deal.reviewSummary}</p>
              <p>{deal.cancellation}</p>
              <small>{deal.termsNote}</small>
            </div>
            <div className="trust-panel glass-card accent">
              <Icon name="headset" />
              <h2>Need help choosing?</h2>
              <p>HTLY keeps the journey static for now, but the page structure is ready for saved deals, support and live booking hand-off.</p>
              <Link href="/help">Talk to support</Link>
            </div>
          </aside>
        </section>

        <section className="container related-deals section">
          <div className="section-head compact"><div><span className="micro-label">Keep comparing</span><h2>Related deals</h2></div><Link href="/search">View all search results</Link></div>
          <div className="deal-row">
            {relatedDeals.map((relatedDeal) => <HolidayDealCard key={relatedDeal.slug} deal={relatedDeal} />)}
          </div>
        </section>
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
