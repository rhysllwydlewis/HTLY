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
import { brandDisplay, brandUrl } from '@/lib/brand';
import { deals, getDealBySlug, getDealHref, getRelatedDeals } from '@/lib/holiday-data';

type DealPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export function generateMetadata({ params }: DealPageProps): Metadata {
  const deal = getDealBySlug(params.slug);
  if (!deal) return { title: `Deal not found | ${brandDisplay}` };

  const title = `${deal.resort}, ${deal.destination} from ${deal.price}pp | ${brandDisplay}`;
  const description = `${deal.nights} ${deal.board.toLowerCase()} holiday to ${deal.destination} — ${deal.saving.toLowerCase()}, ${deal.travel.toLowerCase()}, ${deal.deposit.toLowerCase()}.`;

  return {
    title,
    description,
    alternates: { canonical: brandUrl(getDealHref(deal)) },
    openGraph: {
      title,
      description,
      url: brandUrl(getDealHref(deal)),
      siteName: brandDisplay,
      images: [{ url: deal.image, width: 1200, height: 800, alt: `${deal.resort} in ${deal.destination}` }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: [deal.image] },
  };
}

function StarDisplay({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="stars" aria-label={`${rating.toFixed(1)} out of 5 rating`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={i < full ? 'is-filled' : ''} aria-hidden="true" />
      ))}
      <small>{rating.toFixed(1)}</small>
    </div>
  );
}

const facts = (deal: ReturnType<typeof getDealBySlug> & object): { icon: IconName; label: string; value: string }[] => [
  { icon: 'clock',  label: 'Duration',    value: deal.nights    },
  { icon: 'bed',    label: 'Board basis', value: deal.board     },
  { icon: 'plane',  label: 'Travel',      value: deal.travel    },
  { icon: 'star',   label: 'Rating',      value: `${deal.rating.toFixed(1)} / 5` },
  { icon: 'shield', label: 'Protection',  value: 'ATOL guidance' },
];

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
    brand: { '@type': 'Brand', name: brandDisplay },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: deal.rating,
      reviewCount: Math.max(25, Math.round(deal.rating * 70)),
    },
    offers: {
      '@type': 'Offer',
      url: brandUrl(getDealHref(deal)),
      priceCurrency: 'GBP',
      price: deal.priceFrom,
      availability: 'https://schema.org/InStock',
      category: 'Package holiday',
    },
  };

  return (
    <>
      <SiteHeader />
      <main className="deal-detail-page">

        {/* ── Hero ── */}
        <section className="deal-detail-hero">
          <Image
            src={deal.image}
            alt={`${deal.resort} resort in ${deal.destination}`}
            fill
            priority
            sizes="100vw"
          />
          <div className="deal-hero-overlay" />
          <div className="container deal-hero-content">
            <div className="deal-hero-copy glass-card">
              <span className="micro-label" style={{ color: 'var(--yellow-2)' }}>{deal.badge}</span>
              <h1>{deal.resort}</h1>
              <p>
                <Icon name="pin" aria-hidden="true" />
                {deal.destination}
              </p>
              <div className="deal-hero-tags">
                <span className="saving-badge">{deal.saving}</span>
                {deal.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>

            <aside className="price-panel glass-card" aria-label="Deal price and booking">
              <span>From</span>
              <strong>{deal.price}<em> pp</em></strong>
              <StarDisplay rating={deal.rating} />
              <p style={{ marginTop: 4, marginBottom: 4, fontSize: 13, color: 'var(--muted)', fontWeight: 800 }}>
                {deal.total}
              </p>
              <Link
                href={`/search?destination=${encodeURIComponent(deal.destination)}&style=${encodeURIComponent(deal.tags[0] ?? '')}`}
                className="primary-cta"
              >
                <Icon name="search" aria-hidden="true" />
                Check availability
              </Link>
              <SaveDealButton slug={deal.slug} resort={deal.resort} variant="wide" />
              <small style={{ fontSize: 11.5, lineHeight: 1.4 }}>{deal.deposit}</small>
            </aside>
          </div>
        </section>

        {/* ── Fact bar ── */}
        <section className="container detail-facts" aria-label="Holiday quick facts">
          {facts(deal).map(({ icon, label, value }) => (
            <div className="fact-card glass-card" key={label}>
              <Icon name={icon} aria-hidden="true" />
              <span>
                <small className="fact-label">{label}</small>
                {value}
              </span>
            </div>
          ))}
        </section>

        {/* ── Body + sidebar ── */}
        <section className="container detail-layout">
          <article className="detail-main glass-card">
            <span className="micro-label">Holiday overview</span>
            <h2>{deal.resort}, {deal.destination}</h2>
            <p>{deal.overview}</p>

            <div className="detail-gallery">
              {deal.gallery.map((img, i) => (
                <div key={img} className="gallery-tile">
                  <Image
                    src={img}
                    alt={`${deal.resort} gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 780px) 100vw, 360px"
                  />
                </div>
              ))}
            </div>

            <div className="detail-section-grid">
              <section>
                <h3>Holiday highlights</h3>
                <ul className="check-list">
                  {deal.highlights.map((item) => (
                    <li key={item}><Icon name="check" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Hotel features</h3>
                <ul className="check-list">
                  {deal.hotelFeatures.map((item) => (
                    <li key={item}><Icon name="check" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>What&rsquo;s included</h3>
                <ul className="check-list">
                  {deal.included.map((item) => (
                    <li key={item}><Icon name="check" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Location</h3>
                <p>{deal.locationSummary}</p>
              </section>
            </div>
          </article>

          <aside className="detail-side">
            <div className="trust-panel glass-card">
              <Icon name="atol" aria-hidden="true" />
              <h2>Booking confidence</h2>
              <p>{deal.reviewSummary}</p>
              <p>{deal.cancellation}</p>
              <small>{deal.termsNote}</small>
            </div>

            <div className="trust-panel glass-card accent">
              <Icon name="headset" aria-hidden="true" />
              <h2>Need help choosing?</h2>
              <p>Our UK-based team is ready to help you pick the right deal and answer any questions before you book.</p>
              <Link href="/help">Talk to support</Link>
            </div>

            <div className="trust-panel glass-card">
              <Icon name="heart" aria-hidden="true" />
              <h2>Save this deal</h2>
              <p>Add to your saved deals and compare with other holidays before you commit.</p>
              <SaveDealButton slug={deal.slug} resort={deal.resort} variant="wide" />
            </div>
          </aside>
        </section>

        {/* ── Related deals ── */}
        {relatedDeals.length > 0 && (
          <section className="container related-deals section">
            <div className="section-head compact">
              <div>
                <span className="micro-label">Keep comparing</span>
                <h2>Related deals</h2>
              </div>
              <Link href="/search" className="section-head-link">
                View all deals
                <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
              </Link>
            </div>
            <div className="deal-row related-deal-row">
              {relatedDeals.map((relatedDeal) => (
                <HolidayDealCard key={relatedDeal.slug} deal={relatedDeal} />
              ))}
            </div>
          </section>
        )}

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
