import Image from 'next/image';
import type { ReactNode } from 'react';
import { brand, brandDisplay } from '@/lib/brand';

const heroImage = 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=88';
const promoImage = 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=84';

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
    destination: 'Maldives',
    resort: 'Sun Siyam Iru Veli',
    nights: '7 Nights',
    board: 'All Inclusive',
    travel: 'Flights',
    price: '£1,299',
    total: 'Total price £2,598',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=84'
  },
  {
    saving: 'SAVE £120',
    destination: 'Rhodes, Greece',
    resort: 'Lindos Luxury Hotel',
    nights: '7 Nights',
    board: 'Bed & Breakfast',
    travel: 'Flights',
    price: '£599',
    total: 'Total price £1,198',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=84'
  },
  {
    saving: 'SAVE £200',
    destination: 'Santorini, Greece',
    resort: 'Canaves Oia Suites',
    nights: '5 Nights',
    board: 'Breakfast',
    travel: 'Flights',
    price: '£799',
    total: 'Total price £1,598',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=84'
  },
  {
    saving: 'SAVE £100',
    destination: 'Tenerife, Spain',
    resort: 'Royal Hideaway Corales',
    nights: '7 Nights',
    board: 'Half Board',
    travel: 'Flights',
    price: '£649',
    total: 'Total price £1,298',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=84'
  },
  {
    saving: 'SAVE £130',
    destination: 'Dubai, UAE',
    resort: 'Atlantis The Palm',
    nights: '5 Nights',
    board: 'Bed & Breakfast',
    travel: 'Flights',
    price: '£899',
    total: 'Total price £1,798',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=84'
  }
];

const destinations = [
  { name: 'Maldives', price: 'from £1,299 pp', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=82' },
  { name: 'Greece', price: 'from £699 pp', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=82' },
  { name: 'Canary Islands', price: 'from £349 pp', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=82' },
  { name: 'Dubai', price: 'from £499 pp', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=82' },
  { name: 'Thailand', price: 'from £549 pp', image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&q=82' },
  { name: 'Mexico', price: 'from £549 pp', image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=82' }
];

const benefits = [
  { icon: 'tag', title: 'Great holiday deals', copy: 'We compare thousands of holidays to bring you the best prices.' },
  { icon: 'calendar', title: 'Flexible options', copy: 'Free cancellation on selected stays and flexible payment choices.' },
  { icon: 'shield', title: 'Secure & protected', copy: 'Clear protection messaging and secure booking for peace of mind.' },
  { icon: 'headset', title: 'Here to help', copy: 'UK-based support 7 days a week, whenever you need us.' }
] as const;

const reviews = [
  ['Brilliant holiday and great price!', 'Easy to book and amazing value. We had the best time in the Maldives.', 'Sarah J.'],
  ['Everything was perfect', 'Great communication and the hotel was stunning. Will definitely book again.', 'James T.'],
  ['Super easy to use', 'Found the ideal holiday in minutes. Prices were better than anywhere else.', 'Laura M.'],
  ['Highly recommend!', 'Excellent service from start to finish. A proper holiday booking site you can trust.', 'Mark R.']
] as const;

type IconName = 'beach' | 'hotel' | 'plane' | 'tag' | 'user' | 'search' | 'pin' | 'calendar' | 'guests' | 'clock' | 'shield' | 'uk' | 'headset' | 'heart' | 'star' | 'card' | 'lock' | 'menu';

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
    uk: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 1ZM20 13v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 1ZM16 19c0 1.2-1.4 2-4 2" /></>,
    heart: <path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z" />,
    star: <path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.1l-5.8 3.1 1.1-6.6-4.8-4.7 6.6-.9L12 2Z" />,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>
  };

  return (
    <svg className={`svg-icon ${className}`} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Logo({ footer = false }: { footer?: boolean }) {
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
        <span className="name">
          {brand.name}<small>.{brand.suffix}</small>
        </span>
        {!footer && <span className="tagline">{brand.tagline}</span>}
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="sign-in" href="/help" aria-label="Sign in to your HTLY account"><Icon name="user" />Sign in</a>
          <a className="book-now" href="/search"><Icon name="search" />Search / Book now</a>
          <details className="mobile-nav">
            <summary aria-label="Open menu"><Icon name="menu" /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
              <a href="/search">Search / Book now</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function SearchPanel() {
  return (
    <div className="container search-shell">
      <form className="search-card" action="/search" aria-label="Search holidays">
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
              <input name="destination" placeholder="Search destinations" aria-label="Destination" />
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
          <button className="search-cta" type="submit">Search deals</button>
        </div>
      </form>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Holiday deals hero">
      <div className="hero-media">
        <Image src={heroImage} alt="Sunny resort infinity pool overlooking the sea" fill priority sizes="100vw" />
      </div>
      <div className="container hero-copy">
        <span>Your holiday, your way</span>
        <h1>Big escapes.<br />Better prices.</h1>
        <p>Find and book the best holiday deals on hotels and packages worldwide.</p>
      </div>
      <SearchPanel />
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: 'shield', title: 'ATOL Protected', copy: 'Travel with confidence' },
    { icon: 'clock', title: 'Free Cancellation', copy: 'On selected stays' },
    { icon: 'lock', title: 'Secure Booking', copy: 'Encrypted & safe' },
    { icon: 'uk', title: 'UK Support', copy: 'Here to help 7 days a week' }
  ] as const;

  return (
    <section className="trust" aria-label="Booking reassurances">
      <div className="container trust-grid">
        {items.map((item) => (
          <article className="trust-item" key={item.title}>
            <span className="trust-icon"><Icon name={item.icon} /></span>
            <span><strong>{item.title}</strong><small>{item.copy}</small></span>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ title, link, href }: { title: string; link: string; href: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <a href={href}>{link} <span aria-hidden="true">›</span></a>
    </div>
  );
}

function FeaturedDeals() {
  return (
    <section className="section deals-section">
      <div className="container deals-wrap">
        <SectionHead title="Featured holiday deals" link="View all deals" href="/deals" />
        <div className="deal-row">
          {deals.map((deal) => (
            <article className="deal-card" key={deal.resort}>
              <div className="deal-img">
                <Image src={deal.image} alt={`${deal.resort} in ${deal.destination}`} fill sizes="(max-width: 680px) 82vw, (max-width: 1180px) 33vw, 220px" />
                <span>{deal.saving}</span>
                <button type="button" aria-label={`Save ${deal.resort}`}><Icon name="heart" /></button>
              </div>
              <div className="deal-body">
                <small>{deal.destination}</small>
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
          ))}
        </div>
        <button className="float-next" type="button" aria-label="Next featured deals">›</button>
      </div>
    </section>
  );
}

function PopularDestinations() {
  return (
    <section className="section destinations-section">
      <div className="container">
        <SectionHead title="Popular destinations" link="Explore all destinations" href="/destinations" />
        <div className="destination-grid">
          {destinations.map((destination) => (
            <a className="destination-card" href="/destinations" key={destination.name}>
              <Image src={destination.image} alt={`${destination.name} holiday destination`} fill sizes="(max-width: 680px) 100vw, (max-width: 1180px) 33vw, 180px" />
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
        <h2>Why book with HTLY?</h2>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article className="why-card" key={benefit.title}>
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
      <div className="promo-save"><small>Save up to</small><strong>30%</strong><small>on selected holidays</small></div>
      <a href="/deals">Explore offers</a>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <h2>Loved by travellers</h2>
        <div className="review-grid">
          <div className="score">
            <strong>Excellent</strong>
            <span aria-label="5 out of 5 stars">★★★★★</span>
            <small>4.7 out of 5 · Trustpilot-style reviews</small>
          </div>
          {reviews.map(([title, quote, person]) => (
            <article className="review" key={person}>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo footer />
          <p>Find and book the best holiday deals on hotels and packages worldwide. Your holiday, your way.</p>
          <div className="socials" aria-label="Social links"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="TikTok">♪</a><a href="#" aria-label="YouTube">▶</a></div>
        </div>
        <div><h3>Explore</h3><a href="/holidays">Holidays</a><a href="/hotels">Hotels</a><a href="/destinations">Destinations</a><a href="/deals">Deals</a><a href="/inspiration">Inspiration</a></div>
        <div><h3>Help</h3><a href="/help">Contact us</a><a href="/help">FAQs</a><a href="/help">Booking information</a><a href="/help">Travel advice</a><a href="/help">Manage my booking</a></div>
        <div><h3>Company</h3><a href="/help">About us</a><a href="/help">Careers</a><a href="/help">Press</a><a href="/help">Terms & Conditions</a><a href="/help">Privacy Policy</a></div>
        <form className="newsletter" action="/search">
          <h3>Get holiday deals to your inbox</h3>
          <p>Subscribe for exclusive offers and travel inspiration.</p>
          <label><span className="sr-only">Email address</span><input type="email" name="email" placeholder="Enter your email address" /></label>
          <button type="submit">Subscribe</button>
          <small>© 2026 HTLY.co.uk. All rights reserved.</small>
        </form>
        <div className="badges" aria-label="Trust and payment badges"><b>ABTA</b><b>ATOL</b><b>Trustpilot ★★★★★</b></div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedDeals />
        <PopularDestinations />
        <WhyBook />
        <PromoBanner />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
