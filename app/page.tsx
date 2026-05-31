import { brand, brandDisplay } from '@/lib/brand';

const heroImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=88';
const beach = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84';

const deals = [
  ['SAVE £150', 'Maldives', 'Sun Siyam Iru Veli', '7 Nights', 'All Inclusive', 'Flights', '£1,299', 'Total price £2,598', 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=84'],
  ['SAVE £120', 'Rhodes, Greece', 'Lindos Luxury Hotel', '7 Nights', 'Bed & Breakfast', 'Flights', '£599', 'Total price £1,198', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=84'],
  ['SAVE £200', 'Santorini, Greece', 'Canaves Oia Suites', '5 Nights', 'Breakfast', 'Flights', '£799', 'Total price £1,598', 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=84'],
  ['SAVE £100', 'Tenerife, Spain', 'Royal Hideaway Corales', '7 Nights', 'Half Board', 'Flights', '£649', 'Total price £1,298', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=84'],
  ['SAVE £130', 'Dubai, UAE', 'Atlantis The Palm', '5 Nights', 'Bed & Breakfast', 'Flights', '£899', 'Total price £1,798', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=84']
];

const destinations = [
  ['Maldives', 'from £1,299 pp', 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=700&q=80'],
  ['Greece', 'from £699 pp', 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&w=700&q=80'],
  ['Canary Islands', 'from £349 pp', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80'],
  ['Dubai', 'from £449 pp', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80'],
  ['Thailand', 'from £549 pp', 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=700&q=80'],
  ['Mexico', 'from £599 pp', 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=700&q=80']
];

const reviews = [
  ['Brilliant holiday and great price!', 'Easy to book and amazing value. We had the best time in the Maldives.', 'Sarah J.'],
  ['Everything was perfect', 'Great communication and the hotel was stunning. Will definitely book again.', 'James T.'],
  ['Super easy to use', 'Found the ideal holiday in minutes. Prices were better than anywhere else.', 'Laura M.'],
  ['Highly recommend!', 'Excellent service from start to finish and a really easy booking journey.', 'Mark R.']
];

function Logo({ footer = false }: { footer?: boolean }) {
  return <a className="brand" href="/" aria-label={`${brandDisplay} homepage`}><span className="brand-mark"><span className="sun" /><span className="wave w1" /><span className="wave w2" /></span><span className="brand-text"><span className="name">{brand.name}<small>.{brand.suffix}</small></span>{!footer && <span className="tagline">{brand.tagline}</span>}</span></a>;
}

function Icon({ children }: { children: string }) { return <span className="icon" aria-hidden="true">{children}</span>; }

function Header() {
  return <header className="site-header"><div className="container header-inner"><Logo /><nav className="main-nav">{['Holidays','Hotels','Destinations','Deals','Inspiration','Support'].map((n)=><a key={n} href="#">{n}⌄</a>)}</nav><div className="header-actions"><a className="sign-in" href="#">♡ Sign in</a><a className="book-now" href="#">⌕ Search / Book now</a></div></div></header>;
}

function SearchPanel() {
  return <div className="container search-shell"><div className="search-card"><div className="search-tabs">{['▣ Holidays','▦ Hotels','✈ Flight + Hotel','◇ Deals'].map((t,i)=><button key={t} className="search-tab" data-active={i===0}>{t}</button>)}</div><div className="search-fields"><label className="search-field wide"><Icon>⌖</Icon><span><small>Where to?</small><strong>Search destinations</strong></span></label><label className="search-field"><span><small>Check-in</small><strong>12 Jun 2025</strong></span><Icon>▣</Icon></label><label className="search-field"><span><small>Check-out</small><strong>19 Jun 2025</strong></span><Icon>▣</Icon></label><label className="search-field"><Icon>♙</Icon><span><small>Guests & rooms</small><strong>2 Adults, 1 Room</strong></span></label><a className="search-cta" href="#">Search deals</a></div></div></div>;
}

function Hero() { return <section className="hero"><div className="hero-bg" style={{backgroundImage:`url(${heroImage})`}} /><div className="container hero-copy"><span>Your holiday, your way</span><h1>Big escapes.<br/>Better prices.</h1><p>Find and book the best holiday deals on hotels and packages worldwide.</p></div><SearchPanel /></section>; }

function Trust() { return <section className="trust"><div className="container trust-grid">{[['▣','Protected','Travel with confidence'],['◷','Free Cancellation','On selected stays'],['♢','Secure Booking','Encrypted & safe'],['🇬🇧','UK Support','Here to help 7 days a week']].map(([i,t,c])=><div className="trust-item" key={t}><span className="trust-icon">{i}</span><span><strong>{t}</strong><small>{c}</small></span></div>)}</div></section>; }
function SectionHead({title,link}:{title:string;link:string}){return <div className="section-head"><h2>{title}</h2><a href="#">{link} ›</a></div>}
function Deals(){return <section className="section"><div className="container deal-wrap"><SectionHead title="Featured holiday deals" link="View all deals"/><div className="deal-row">{deals.map((d)=><article className="deal-card" key={d[2]}><div className="deal-img" style={{backgroundImage:`url(${d[8]})`}}><span>{d[0]}</span><button>♡</button></div><div className="deal-body"><small>{d[1]}</small><h3>{d[2]} <em>★★★★★</em></h3><ul><li>{d[3]}</li><li>{d[4]}</li><li>{d[5]}</li></ul><b>From</b><div className="deal-foot"><p><strong>{d[6]}</strong><small>{d[7]}</small></p><a href="#">View deal</a></div></div></article>)}</div><button className="float-next">›</button></div></section>}
function Destinations(){return <section className="section"><div className="container"><SectionHead title="Popular destinations" link="Explore all destinations"/><div className="dest-row">{destinations.map((d)=><a key={d[0]} className="dest-card" style={{backgroundImage:`url(${d[2]})`}}><span><strong>{d[0]}</strong><small>{d[1]}</small></span></a>)}</div></div></section>}
function Why(){return <section className="section why"><div className="container"><h2>Why book with {brand.name}?</h2><div className="why-grid">{[['▣','Great holiday deals','We compare thousands of holidays to bring you the best prices.'],['▣','Flexible options','Free cancellation on selected stays and flexible payment options.'],['▣','Secure & protected','Secure booking for complete peace of mind.'],['☏','Here to help','UK-based support 7 days a week, whenever you need us.']].map(([i,t,c])=><article className="why-card" key={t}><span>{i}</span><div><strong>{t}</strong><small>{c}</small></div></article>)}</div></div></section>}
function Promo(){return <section className="section"><div className="container"><div className="promo" style={{backgroundImage:`linear-gradient(90deg,rgba(0,126,202,.95),rgba(0,126,202,.72) 52%,rgba(0,126,202,.05)),url(${beach})`}}><div><span>LIMITED TIME OFFERS</span><h2>All-inclusive escapes</h2><p>Luxury stays. Everything included. Sun, sea and total relaxation.</p></div><div><small>Save up to</small><strong>30%</strong><small>on selected holidays</small></div><a href="#">Explore offers</a></div></div></section>}
function Reviews(){return <section className="section reviews"><div className="container"><h2>Loved by travellers</h2><div className="review-grid"><div className="score"><strong>Excellent</strong><span>★★★★★</span><small>4.7 out of 5 ★ Trustpilot</small></div>{reviews.map((r)=><article className="review" key={r[0]}><span>★★★★★</span><strong>“{r[0]}”</strong><p>{r[1]}</p><small>— {r[2]}</small></article>)}</div></div></section>}
function Footer(){return <footer className="footer"><div className="container footer-grid"><div><Logo footer/><p>Find and book the best holiday deals on hotels and packages worldwide.</p><div className="socials"><span>f</span><span>◎</span><span>♪</span><span>▶</span></div></div><div><h3>Explore</h3><a>Holidays</a><a>Hotels</a><a>Destinations</a><a>Deals</a><a>Inspiration</a></div><div><h3>Help</h3><a>Contact us</a><a>FAQs</a><a>Booking information</a><a>Travel Advice</a><a>Manage my booking</a></div><div><h3>Company</h3><a>About us</a><a>Careers</a><a>Press</a><a>Terms & Conditions</a><a>Privacy Policy</a></div><div className="newsletter"><h3>Get holiday deals to your inbox</h3><p>Subscribe for exclusive offers and travel inspiration.</p><form><input placeholder="Enter your email address"/><button>Subscribe</button></form><small>© 2025 {brandDisplay}. All rights reserved.</small></div><div className="badges"><b>ABTA</b><b>◉</b><b>★ Trustpilot</b></div></div></footer>}
export default function Home(){return <><Header/><main><Hero/><Trust/><Deals/><Destinations/><Why/><Promo/><Reviews/></main><Footer/></>}
