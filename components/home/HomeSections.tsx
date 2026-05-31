import Image from 'next/image';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SectionHead } from '@/components/SectionHead';
import { benefits, deals, destinations, promoImage, reviews } from '@/lib/holiday-data';

/* ── Trust strip ─────────────────────────────────────────── */
export function TrustStrip() {
  const items = [
    {
      icon: 'atol'    as const,
      title: 'ATOL Protected',
      copy: 'Travel with confidence',
    },
    {
      icon: 'clock'   as const,
      title: 'Free Cancellation',
      copy: 'On selected stays',
    },
    {
      icon: 'lock'    as const,
      title: 'Secure Booking',
      copy: 'Encrypted & safe',
    },
    {
      icon: 'uk'      as const,
      title: 'UK Support',
      copy: 'Here to help 7 days a week',
    },
  ];

  return (
    <section className="trust" aria-label="Booking reassurances">
      <div className="container trust-grid">
        {items.map((item) => (
          <article className="trust-item" key={item.title}>
            <span className="trust-icon" aria-hidden="true">
              <Icon name={item.icon} />
            </span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.copy}</small>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Featured deals ──────────────────────────────────────── */
export function FeaturedDeals() {
  return (
    <section className="section deals-section">
      <div className="container deals-wrap">
        <SectionHead
          title="Featured holiday deals"
          kicker="Fresh offers"
          link="View all deals"
          href="/deals"
        />
        <div className="deal-row">
          {deals.slice(0, 5).map((deal) => (
            <HolidayDealCard deal={deal} key={deal.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Popular destinations ─────────────────────────────────── */
export function PopularDestinations() {
  return (
    <section className="section destinations-section">
      <div className="container">
        <SectionHead
          title="Popular destinations"
          kicker="Where next?"
          link="Explore all destinations"
          href="/destinations"
        />
        <div className="destination-grid">
          {destinations.map((destination) => (
            <a
              className="destination-card"
              href={`/search?destination=${encodeURIComponent(destination.name)}`}
              key={destination.name}
            >
              <Image
                src={destination.image}
                alt={`${destination.name} holiday destination`}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1180px) 33vw, 390px"
              />
              <span>
                <strong>{destination.name}</strong>
                <small>{destination.price}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why book ────────────────────────────────────────────── */
export function WhyBook() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head compact">
          <div>
            <span className="micro-label">Designed around you</span>
            <h2>Why book with HTLY?</h2>
          </div>
        </div>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article className="why-card" key={benefit.title}>
              <span aria-hidden="true">
                <Icon name={benefit.icon} />
              </span>
              <div>
                <strong>{benefit.title}</strong>
                <small>{benefit.copy}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Promo banner ────────────────────────────────────────── */
export function PromoBanner() {
  return (
    <section className="container promo" aria-label="Limited-time holiday offers">
      <Image
        src={promoImage}
        alt="Beachfront all-inclusive holiday view"
        fill
        sizes="1180px"
      />
      <div className="promo-content">
        <span>Limited time offers</span>
        <h2>All-inclusive<br />escapes</h2>
        <p>Luxury stays. Everything included.<br />Sun, sea and total relaxation.</p>
      </div>
      <div className="promo-save glass-card">
        <small>Save up to</small>
        <strong>30%</strong>
        <small>on selected holidays</small>
      </div>
      <a href="/deals">
        Explore offers
        <Icon name="arrowRight" />
      </a>
    </section>
  );
}

/* ── Reviews ─────────────────────────────────────────────── */

/** Five green stars — Trustpilot-style */
function GreenStars({ count = 5 }: { count?: number }) {
  return (
    <div className="review-stars-green" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Icon key={i} name="star" className="is-filled" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section reviews" aria-label="Customer reviews">
      <div className="container">
        <div className="section-head compact">
          <div>
            <span className="micro-label">Traveller feedback</span>
            <h2>Loved by travellers</h2>
          </div>
        </div>
        <div className="review-grid">

          {/* Score block */}
          <div className="score glass-card">
            <strong>Excellent</strong>
            <div className="score-rating-row">
              <GreenStars />
            </div>
            <div className="tp-badge">
              <Icon name="star" className="is-filled" />
              4.7 out of 5
            </div>
            <small style={{ marginTop: '10px', display: 'block' }}>
              Ratings shown as illustrative placeholder content
            </small>
          </div>

          {/* Individual reviews */}
          {reviews.map((review) => (
            <article className="review glass-card" key={review.person}>
              <GreenStars />
              <strong>&ldquo;{review.title}&rdquo;</strong>
              <p>{review.quote}</p>
              <small>— {review.person}</small>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
