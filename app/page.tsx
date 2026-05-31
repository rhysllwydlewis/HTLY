import Image from 'next/image';
import type { ReactNode } from 'react';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { brand, brandDisplay } from '@/lib/brand';

const heroImage = 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=88';
const promoImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86';

const navigation = [
  { label: 'Holidays', href: '/holidays' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Deals', href: '/deals' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'Support', href: '/help' }
];

const searchTabs = [
  { label: 'Holidays', icon: 'beach' },
  { label: 'Hotels', icon: 'hotel' },
  { label: 'Flight + Hotel', icon: 'plane' },
  { label: 'Deals', icon: 'tag' }
] as const;

const deals = [
  {
    saving: 'SAVE £150',
    badge: 'All inclusive',
    destination: 'Maldives',
    resort: 'Sun Siyam Iru Veli',
    nights: '7 nights',
    board: 'All inclusive',
    travel: 'Flights included',
    price: '£1,299',
    total: 'Low deposit available',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=84'
  },
  {
    saving: 'SAVE £120',
    badge: 'Family favourite',
    destination: 'Rhodes, Greece',
    resort: 'Lindos Grand Resort & Spa',
    nights: '7 nights',
    board: 'Breakfast',
    travel: 'Direct flights',
    price: '£599',
    total: 'Total price £1,198',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=84'
  },
  {
    saving: 'SAVE £200',
    badge: 'Luxury escape',
    destination: 'Santorini, Greece',
    resort: 'Canaves Oia Suites',
    nights: '5 nights',
    board: 'Breakfast',
    travel: 'Flights included',
    price: '£799',
    total: 'Limited-time offer',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=84'
  }
];

const destinations = [
  { name: 'Maldives', price: 'from £1,299 pp', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=82' },
  { name: 'Greece', price: 'from £599 pp', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=82' },
  { name: 'Canary Islands', price: 'from £349 pp', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=82' },
  { name: 'Dubai', price: 'from £499 pp', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=82' },
  { name: 'Thailand', price: 'from £549 pp', image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=900&q=82' },
  { name: 'Mexico', price: 'from £549 pp', image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=900&q=82' }
];

const benefits = [
  { icon: 'tag', title: 'Handpicked deals', copy: 'Curated hotel and package offers chosen for value, location and holiday feel.' },
  { icon: 'calendar', title: 'Flexible choices', copy: 'Search stays, packages and flexible date ideas from one polished booking flow.' },
  { icon: 'shield', title: 'Trust built in', copy: 'Clear protection messaging, secure journeys and honest deal information.' },
  { icon: 'headset', title: 'UK support', copy: 'Friendly help for questions, saved deals and future booking support.' }
] as const;

const reviews = [
  ['Brilliant holiday and great price!', 'Easy to compare resorts, save favourites and spot the deal that fitted our dates.', 'Sarah J.'],
  ['Everything felt simple', 'The search panel made it quick to plan a beach escape without endless tabs open.', 'James T.'],
  ['Proper holiday inspiration', 'Loved the destination cards and clear prices. It felt premium but still affordable.', 'Laura M.']
] as const;

type IconName = 'beach' | 'hotel' | 'plane' | 'tag' | 'user' | 'search' | 'pin' | 'calendar' | 'guests' | 'clock' | 'shield' | 'uk' | 'headset' | 'heart' | 'star' | 'card' | 'lock' | 'menu' | 'sparkles' | 'bell' | 'close' | 'check';

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    beach: <><path d="M4 19c2.8-1.4 5.2-1.4 8 0s5.2 1.4 8 0" /><path d="M12 11a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" /><path d="M12 4v3M5.6 7.6l2.1 2.1M18.4 7.6l-2.1 2.1" /></>,
    hotel: <><path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" /><path d="M17 9h1a2 2 0 0 1 2 2v10M8 7h1M12 7h1M8 11h1M12 11h1M8 15h1M12 15h1" /></>,
    plane: <><path d="M3 11.5 21 3l-8.5 18-2-7.5L3 11.5Z" /><path d="m11 13 4-4" /></>,
    tag: <><path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z" /><path d="M8 8h.01" /></>,
    user: <><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    pin: <><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><path d="M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /></>,
    guests: <><path d="M16 21a5 5 0 0 0-10 0" /><circle cx="11" cy="8" r="4" /><path d="M22 21a4 4 0 0 0-5-3.9M16.5 4.4a3.5 3.5 0 0 1 0 6.2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
    uk: <><path d="M4 5h16v14H4Z" /><path d="m4 5 16 14M20 5 4 19M12 5v14M4 12h16" /></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" /><path d="M14 20h-3" /></>,
    heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" /></>,
    star: <><path d="m12 2 3.1 6.4 6.9 1-5 4.9 1.2 6.9L12 17.9l-6.2 3.3L7 14.3 2 9.4l6.9-1L12 2Z" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    sparkles: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></>,
    bell: <><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
    close: <><path d="M6 6l12 12M18 6 6 18" /></>,
    check: <><path d="m20 6-11 11-5-5" /></>
  };

  return (
    <svg className={`svg-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function HtlyLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a className="brand" href="/" aria-label={`${brandDisplay} homepage`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="sun" />
        <span className="ray ray-one" />
        <span className="ray ray-two" />
        <span className="ray ray-three" />
        <span className="wave wave-one" />
        <span className="wave wave-two" />
      </span>
      <span className="brand-text">
        <span className="name">{brand.name}<small>.{brand.suffix}</small></span>
        {!footer && <span className="tagline">{brand.tagline}</span>}
      </span>
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <HtlyLogo />
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="sign-in" href="/account" aria-label="Sign in to your HTLY account"><Icon name="user" />Sign in</a>
          <a className="book-now" href="/search"><Icon name="search" />Search / Book now</a>
          <details className="mobile-nav">
            <summary aria-label="Open menu"><Icon name="menu" /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
              <a href="/account">Sign in</a>
              <a href="/search">Search / Book now</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function HeroSearch() {
  return (
    <div className="container search-shell">
      <form className="search-card glass-card" action="/search" aria-label="Search holidays">
        <div className="search-card-head">
          <div>
            <span className="micro-label">Start planning</span>
            <strong>Find your perfect holiday</strong>
          </div>
          <span className="deal-alert"><Icon name="bell" />Deal alerts ready</span>
        </div>
        <div className="search-tabs" aria-label="Holiday search type">
          {searchTabs.map((tab, index) => (
            <button key={tab.label} className="search-tab" type="button" aria-pressed={index === 0}>
              <Icon name={tab.icon} />{tab.label}
            </button>
          ))}
        </div>
        <div className="search-fields">
          <label className="search-field search-field-destination">
            <Icon name="pin" className="field-icon" />
            <span className="field-copy">
              <span className="field-label">Where to?</span>
              <input name="destination" placeholder="Search destinations or hotels" aria-label="Destination" />
            </span>
          </label>
          <label className="search-field">
            <span className="field-copy">
              <span className="field-label">Check-in</span>
              <input name="check-in" type="text" defaultValue="12 Jun 2026" aria-label="Check-in date" />
            </span>
            <Icon name="calendar" className="field-icon" />
          </label>
          <label className="search-field">
            <span className="field-copy">
              <span className="field-label">Check-out</span>
              <input name="check-out" type="text" defaultValue="19 Jun 2026" aria-label="Check-out date" />
            </span>
            <Icon name="calendar" className="field-icon" />
          </label>
          <label className="search-field">
            <Icon name="guests" className="field-icon" />
            <span className="field-copy">
              <span className="field-label">Guests & rooms</span>
              <input name="guests" type="text" defaultValue="2 Adults, 1 Room" aria-label="Guests and rooms" />
            </span>
          </label>
          <button className="search-cta" type="submit"><Icon name="search" />Search deals</button>
        </div>
      </form>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Holiday deals hero">
      <div className="hero-media">
        <Image src={heroImage} alt="Sunny tropical water villas and turquoise sea" fill priority sizes="100vw" />
      </div>
      <div className="container hero-copy">
        <span>Your holiday, your way</span>
        <h1>Big escapes.<br />Better prices.</h1>
        <p>Find and book the best holiday deals on hotels and packages worldwide.</p>
        <div className="hero-actions" aria-label="Popular holiday badges">
          <a href="/deals"><Icon name="tag" />Low deposit deals</a>
          <a href="/destinations"><Icon name="sparkles" />Handpicked resorts</a>
        </div>
      </div>
      <HeroSearch />
    </section>
  );
}

function TrustStrip() {
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

function SectionHead({ title, kicker, link, href }: { title: string; kicker: string; link: string; href: string }) {
  return (
    <div className="section-head">
      <div>
        <span className="micro-label">{kicker}</span>
        <h2>{title}</h2>
      </div>
      <a href={href}>{link} <span aria-hidden="true">›</span></a>
    </div>
  );
}

function HolidayDealCard({ deal }: { deal: (typeof deals)[number] }) {
  return (
    <article className="deal-card">
      <div className="deal-img">
        <Image src={deal.image} alt={`${deal.resort} in ${deal.destination}`} fill sizes="(max-width: 680px) 82vw, (max-width: 1180px) 33vw, 380px" />
        <span>{deal.saving}</span>
        <button type="button" aria-label={`Save ${deal.resort}`}><Icon name="heart" /></button>
      </div>
      <div className="deal-body">
        <div className="deal-meta-row"><small>{deal.destination}</small><b>{deal.badge}</b></div>
        <h3>{deal.resort}</h3>
        <div className="stars" aria-label="5 star rating"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></div>
        <ul>
          <li><Icon name="clock" />{deal.nights}</li>
          <li><Icon name="card" />{deal.board}</li>
          <li><Icon name="plane" />{deal.travel}</li>
        </ul>
        <div className="deal-foot">
          <p><small>From</small><strong>{deal.price}<em> pp</em></strong><span>{deal.total}</span></p>
          <a href="/deals">View deal</a>
        </div>
      </div>
    </article>
  );
}

function FeaturedDeals() {
  return (
    <section className="section deals-section">
      <div className="container deals-wrap">
        <SectionHead title="Featured holiday deals" kicker="Fresh offers" link="View all deals" href="/deals" />
        <div className="deal-row">
          {deals.map((deal) => <HolidayDealCard deal={deal} key={deal.resort} />)}
        </div>
      </div>
    </section>
  );
}

function PopularDestinations() {
  return (
    <section className="section destinations-section">
      <div className="container">
        <SectionHead title="Popular destinations" kicker="Where next?" link="Explore all destinations" href="/destinations" />
        <div className="destination-grid">
          {destinations.map((destination) => (
            <a className="destination-card" href="/destinations" key={destination.name}>
              <Image src={destination.image} alt={`${destination.name} holiday destination`} fill sizes="(max-width: 680px) 100vw, (max-width: 1180px) 33vw, 390px" />
              <span><strong>{destination.name}</strong><small>{destination.price}</small></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBook() {
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

function PromoBanner() {
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

function Reviews() {
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
          {reviews.map(([title, quote, person]) => (
            <article className="review glass-card" key={person}>
              <span aria-label="5 out of 5 stars">★★★★★</span>
              <strong>“{title}”</strong>
              <p>{quote}</p>
              <small>— {person}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <HtlyLogo footer />
          <p>Holiday deals made easy. Compare sunny escapes, save favourites and plan your next hotel or package break with confidence.</p>
          <div className="socials" aria-label="Social links"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="TikTok">♪</a><a href="#" aria-label="YouTube">▶</a></div>
        </div>
        <div><h3>Explore</h3><a href="/holidays">Holidays</a><a href="/hotels">Hotels</a><a href="/destinations">Destinations</a><a href="/deals">Deals</a><a href="/inspiration">Inspiration</a></div>
        <div><h3>Help</h3><a href="/help">Contact us</a><a href="/help">FAQs</a><a href="/help">Booking information</a><a href="/help">Travel advice</a><a href="/search">Manage my booking</a></div>
        <div><h3>Company</h3><a href="/help">About us</a><a href="/help">Careers</a><a href="/help">Press</a><a href="/terms">Terms & Conditions</a><a href="/privacy">Privacy Policy</a></div>
        <form className="newsletter glass-card" action="/search">
          <h3>Get holiday deals to your inbox</h3>
          <p>Subscribe for exclusive offers, travel inspiration and future price alerts.</p>
          <label><span className="sr-only">Email address</span><input type="email" name="email" placeholder="Enter your email address" /></label>
          <button type="submit">Subscribe</button>
          <small>© 2026 HTLY.co.uk. All rights reserved.</small>
        </form>
        <div className="badges" aria-label="Trust and payment badges"><b>ATOL placeholder</b><b>Secure payments</b><b><Icon name="check" />Verified-style reviews</b></div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedDeals />
        <PopularDestinations />
        <WhyBook />
        <PromoBanner />
        <Reviews />
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
