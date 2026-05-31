import Image from 'next/image';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SectionHead } from '@/components/SectionHead';
import { benefits, deals, destinations, promoImage, reviews } from '@/lib/holiday-data';

export function TrustStrip() {
  const items = [
    { icon: 'shield', title: 'Protection guidance', copy: 'ATOL-style details to confirm before booking' },
    { icon: 'calendar', title: 'Free Cancellation', copy: 'On selected stays' },
    { icon: 'lock', title: 'Secure Booking', copy: 'Encrypted & safe' },
    { icon: 'uk', title: 'UK Support', copy: 'Here to help 7 days a week' }
  ] as const;

  return (
    <section className="trust" aria-label="Booking reassurances">
      <div className="container trust-grid">
        {items.map((item) => (
          <article className="trust-item glass-card" key={item.title}>
            <span className="trust-icon"><Icon name={item.icon} /></span>
            <span><strong>{item.title}</strong><small>{item.copy}</small></span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FeaturedDeals() {
  return (
    <section className="section deals-section">
      <div className="container deals-wrap">
        <SectionHead title="Featured holiday deals" kicker="Fresh offers" link="View all deals" href="/deals" />
        <div className="deal-row">
          {deals.slice(0, 3).map((deal) => <HolidayDealCard deal={deal} key={deal.slug} />)}
        </div>
      </div>
    </section>
  );
}

export function PopularDestinations() {
  return (
    <section className="section destinations-section">
      <div className="container">
        <SectionHead title="Popular destinations" kicker="Where next?" link="Explore all destinations" href="/destinations" />
        <div className="destination-grid">
          {destinations.map((destination) => (
            <a className="destination-card" href={`/search?destination=${encodeURIComponent(destination.name)}`} key={destination.name}>
              <Image src={destination.image} alt={`${destination.name} holiday destination`} fill sizes="(max-width: 680px) 100vw, (max-width: 1180px) 33vw, 390px" />
              <span><strong>{destination.name}</strong><small>{destination.price}</small></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyBook() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head compact"><div><span className="micro-label">Designed around you</span><h2>Why book with HTLY?</h2></div></div>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article className="why-card glass-card" key={benefit.title}>
              <span><Icon name={benefit.icon} /></span>
              <div><strong>{benefit.title}</strong><small>{benefit.copy}</small></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="container promo">
      <Image src={promoImage} alt="Beachfront all-inclusive holiday view" fill sizes="1180px" />
      <div className="promo-content">
        <span>LIMITED TIME OFFERS</span>
        <h2>All-inclusive escapes</h2>
        <p>Luxury stays. Everything included. Sun, sea and total relaxation.</p>
      </div>
      <div className="promo-save glass-card"><small>Save up to</small><strong>30%</strong><small>on selected holidays</small></div>
      <a href="/deals">Explore offers</a>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <div className="section-head compact"><div><span className="micro-label">Traveller feedback</span><h2>Loved by travellers</h2></div></div>
        <div className="review-grid">
          <div className="score glass-card">
            <strong>Excellent</strong>
            <span aria-label="5 out of 5 stars">★★★★★</span>
            <small>Example Trustpilot-style layout · ratings shown as placeholder content</small>
          </div>
          {reviews.map((review) => (
            <article className="review glass-card" key={review.person}>
              <span aria-label="5 out of 5 stars">★★★★★</span>
              <strong>“{review.title}”</strong>
              <p>{review.quote}</p>
              <small>— {review.person}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
