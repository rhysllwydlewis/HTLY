import Image from 'next/image';
import Link from 'next/link';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SectionHead } from '@/components/SectionHead';
import { benefits, deals, destinations, inspirationArticles, promoImage, reviews } from '@/lib/holiday-data';

/* ── Trust strip ──────────────────────────────────────────── */
export function TrustStrip() {
  const items = [
    { icon: 'atol'    as const, title: 'ATOL Protected',    copy: 'Financial protection on every flight package' },
    { icon: 'clock'   as const, title: 'Free Cancellation', copy: 'On thousands of selected stays'               },
    { icon: 'lock'    as const, title: 'Secure Booking',    copy: 'Your data & payments are always encrypted'    },
    { icon: 'uk'      as const, title: 'UK Support',        copy: '7 days a week, 8am–8pm'                      },
  ];
  return (
    <section className="trust-strip" aria-label="Why book with HTLY">
      <div className="container trust-strip-grid">
        {items.map(({ icon, title, copy }) => (
          <div className="trust-strip-item" key={title}>
            <span className="trust-strip-icon"><Icon name={icon} aria-hidden="true" /></span>
            <div>
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Featured deals ───────────────────────────────────────── */
export function FeaturedDeals() {
  return (
    <section className="section" aria-labelledby="featured-deals-heading">
      <div className="container">
        <SectionHead
          title="Featured holiday deals"
          kicker="Fresh offers"
          link="View all deals"
          href="/deals"
        />
        <div className="deal-grid deal-grid--featured">
          {deals.slice(0, 5).map((deal) => (
            <HolidayDealCard key={deal.slug} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Popular destinations ─────────────────────────────────── */
export function PopularDestinations() {
  return (
    <section className="section" aria-labelledby="destinations-heading">
      <div className="container">
        <SectionHead
          title="Popular destinations"
          kicker="Where next?"
          link="Explore all"
          href="/destinations"
        />
        <div className="dest-mosaic">
          {destinations.map((dest, i) => (
            <a
              key={dest.name}
              href={`/search?destination=${encodeURIComponent(dest.name)}`}
              className={`dest-tile${i < 2 ? ' dest-tile--featured' : ''}`}
              aria-label={`Holidays in ${dest.name} — ${dest.price}`}
            >
              <Image
                src={dest.image}
                alt={`${dest.name} holiday`}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1200px) 50vw, 400px"
                style={{ objectFit: 'cover' }}
              />
              <div className="dest-tile-body">
                <span className="dest-tile-name">{dest.name}</span>
                <span className="dest-tile-price">{dest.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why book ─────────────────────────────────────────────── */
export function WhyBook() {
  return (
    <section className="section why-section" aria-labelledby="why-book-heading">
      <div className="container">
        <div className="section-head compact">
          <div>
            <span className="micro-label">Designed around you</span>
            <h2 id="why-book-heading">Why book with HTLY?</h2>
          </div>
        </div>
        <div className="why-grid">
          {benefits.map(({ icon, title, copy }) => (
            <div className="why-card" key={title}>
              <div className="why-icon"><Icon name={icon} aria-hidden="true" /></div>
              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Promo banner ─────────────────────────────────────────── */
export function PromoBanner() {
  return (
    <section className="promo-section" aria-label="Limited-time offer">
      <div className="container">
        <div className="promo-card">
          <Image
            src={promoImage}
            alt="Luxury beachfront resort"
            fill
            quality={90}
            sizes="1200px"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="promo-overlay" aria-hidden="true" />
          <div className="promo-body">
            <span className="promo-eyebrow">Limited time offers</span>
            <h2 className="promo-title">All-inclusive<br />escapes</h2>
            <p className="promo-sub">Luxury stays. Everything included. Sun, sea and total relaxation.</p>
            <a href="/deals" className="promo-cta">
              Explore offers
              <Icon name="arrowRight" aria-hidden="true" />
            </a>
          </div>
          <div className="promo-save-badge">
            <span>Save up to</span>
            <strong>30%</strong>
            <span>on selected holidays</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inspiration teaser ───────────────────────────────────── */
export function InspirationTeaser() {
  return (
    <section className="section" aria-labelledby="inspiration-heading">
      <div className="container">
        <SectionHead
          title="Travel inspiration"
          kicker="Plan smarter"
          link="All guides"
          href="/inspiration"
        />
        <div className="inspo-grid">
          {inspirationArticles.slice(0, 3).map((article) => (
            <Link key={article.slug} href={`/inspiration/${article.slug}`} className="inspo-card">
              <div className="inspo-img">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 680px) 100vw, 380px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="inspo-body">
                <span className="inspo-cat">{article.category}</span>
                <strong className="inspo-title">{article.title}</strong>
                <span className="inspo-read">
                  <Icon name="clock" aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reviews ──────────────────────────────────────────────── */
function GreenStar() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"
      fill="#00b67a" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5l3 6.1 6.7 1-4.9 4.8 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.8 6.7-1 3-6.1Z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="section reviews-section" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="section-head compact">
          <div>
            <span className="micro-label">Traveller feedback</span>
            <h2 id="reviews-heading">Loved by travellers</h2>
          </div>
        </div>
        <div className="reviews-grid">

          {/* Trustpilot score */}
          <div className="review-score">
            <strong className="review-score-label">Excellent</strong>
            <div className="review-score-stars" aria-label="4.7 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => <GreenStar key={i} />)}
            </div>
            <span className="review-score-rating">
              <strong>4.7</strong> out of 5
            </span>
            <span className="review-tp-label">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="#00b67a"><path d="M12 2.5l3 6.1 6.7 1-4.9 4.8 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.8 6.7-1 3-6.1Z" /></svg>
              Trustpilot
            </span>
          </div>

          {/* Review cards */}
          {reviews.map((r) => (
            <div className="review-card" key={r.person}>
              <div className="review-stars" aria-label="5 stars">
                {Array.from({ length: 5 }, (_, i) => <GreenStar key={i} />)}
              </div>
              <strong className="review-title">&ldquo;{r.title}&rdquo;</strong>
              <p className="review-quote">{r.quote}</p>
              <span className="review-author">— {r.person}{r.location ? `, ${r.location}` : ''}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

/* ── Newsletter banner ────────────────────────────────────── */
export function NewsletterBanner() {
  return (
    <section className="nl-banner" aria-label="Sign up for deal alerts">
      <div className="container">
        <div className="nl-inner">
          <div className="nl-copy">
            <span className="nl-eyebrow">Deal alerts</span>
            <h2 className="nl-title">Get deals before everyone else</h2>
            <p className="nl-sub">
              Join thousands of travellers who get exclusive offers and travel inspiration straight to their inbox.
            </p>
          </div>
          <form className="nl-form" action="/search" noValidate aria-label="Subscribe">
            <div className="nl-fields">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input
                id="nl-email"
                type="email"
                name="email"
                placeholder="Your email address"
                autoComplete="email"
              />
              <button type="submit">
                <Icon name="mail" aria-hidden="true" />
                Subscribe
              </button>
            </div>
            <p className="nl-privacy">
              <Icon name="lock" aria-hidden="true" />
              No spam. Unsubscribe anytime. We never share your email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
