import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { HolidayDealCard } from '@/components/HolidayDealCard';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';
import { deals, destinations, inspirationArticles } from '@/lib/holiday-data';

type ArticlePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return inspirationArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = inspirationArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: `Article not found | ${brandDisplay}` };
  return {
    title: article.title,
    description: article.teaser,
    alternates: { canonical: brandUrl(`/inspiration/${article.slug}`) },
    openGraph: {
      title: article.title,
      description: article.teaser,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
      type: 'article',
    },
  };
}

/* Derive related deals based on article category */
function getRelatedDeals(category: string) {
  const map: Record<string, string[]> = {
    'Long haul':   ['Beach', 'Luxury', 'All-inclusive'],
    'Europe':      ['Beach', 'City break', 'Budget'],
    'Travel tips': ['All-inclusive', 'Family', 'Budget'],
  };
  const preferred = map[category] ?? [];
  const scored = deals.map((d) => ({
    deal: d,
    score: d.tags.filter((t) => preferred.includes(t)).length,
  }));
  return scored.sort((a, b) => b.score - a.score).slice(0, 3).map((x) => x.deal);
}

/* Fake article body paragraphs — placeholder until CMS connected */
const articleBody: Record<string, string[]> = {
  'best-maldives-resorts-2026': [
    'The Maldives sits at the top of bucket lists for a reason: 26 coral atolls, 1,200 islands and some of the clearest water on earth. Choosing the right resort, though, can feel overwhelming when every property promises paradise. We have worked through the options so you do not have to.',
    'For all-inclusive value, North Male Atoll properties like Sun Siyam Iru Veli deliver full dine-around packages without the seaplane premium. You arrive by speedboat, the reef is on your doorstep and the food is genuinely good — all included in a single price.',
    'Couples chasing seclusion should look to South Ari Atoll. The transfer is longer but the reward is quieter beaches, better diving and fewer boats on the reef. Properties here tend to price rooms against the experience rather than the address.',
    'Budget-conscious travellers are best served by the guesthouses on inhabited islands like Maafushi and Thoddoo. You sacrifice the private-island feel but gain authentic Maldivian food, local guides and snorkelling that rivals anything the luxury resorts charge extra for.',
    'Whichever island you choose, the best time to visit is November to April — dry season, calm seas and long sunny days. May to October brings slightly lower prices and greener vegetation but also the chance of an afternoon shower.',
  ],
  'greece-island-hopping-guide': [
    'Greece has more than 200 inhabited islands but first-time visitors usually face the same question: Santorini and Mykonos, or something less crowded? The honest answer depends on what you want from the trip.',
    'Santorini is genuinely as photogenic as it looks. Oia at sunset, the caldera views, the cave hotels — it is all real. The trade-off is crowds from June to August and prices that reflect the demand. Come in May or September and you get the same scenery with a fraction of the foot traffic.',
    'Mykonos has built its reputation on nightlife and beaches. Little Venice at dusk, the windmills, the cosmopolitan beach clubs — it works brilliantly for a long weekend but can feel exhausting for more than four or five days.',
    'For a slower pace, the Ionian islands — Kefalonia, Zakynthos, Lefkada — offer dramatic scenery, excellent food and far fewer tourists. Direct flights operate from most UK airports throughout summer. Rhodes combines history, beach and food in a way few islands match and makes a particularly strong family pick.',
    'Island hopping works best on a two-week trip: three or four nights per island gives you enough time to stop rushing without paying for nights you do not really need.',
  ],
  'all-inclusive-vs-self-catering': [
    'The all-inclusive marketing promise is simple: pay one price, stop thinking about money, relax. The reality is more nuanced. All-inclusive holidays suit some travellers perfectly and represent poor value for others — the key is knowing which category you fall into.',
    'If you drink regularly, eat three restaurant meals a day and use the hotel spa, all-inclusive almost always comes out cheaper than paying as you go. The maths is straightforward: a family of four consuming average amounts of food and drink at a Canary Islands resort will typically spend £80 to £120 per day just on extras — more than the all-inclusive premium in most cases.',
    'Self-catering makes more economic sense when you cook some meals at home, eat at local restaurants rather than hotel restaurants, and drink moderately. Add a destination with genuinely cheap local food — Turkey, Greece, parts of Spain — and the gap between the two widths considerably in self-catering\'s favour.',
    'The hidden cost of self-catering is decision fatigue. After a long travel day, deciding where to eat, finding a supermarket and working out tipping norms adds up to real cognitive overhead. For a one-week break where you want to genuinely switch off, all-inclusive removes the friction that many travellers underestimate.',
    'Our recommendation: for beach holidays under ten nights where relaxation is the goal, all-inclusive usually wins on value and ease. For city breaks, cultural trips and anywhere with an outstanding local food scene, self-catering delivers a better experience at a lower cost.',
  ],
  'tenerife-canary-islands-guide': [
    'Tenerife is the UK\'s most popular winter sun destination for a reason that has nothing to do with marketing: it is the most reliable warm-weather escape within four hours of any British airport. Average highs of 22 degrees in January, no jet lag, no visa requirements, flights from regional airports across the UK.',
    'The south — Costa Adeje, Los Cristianos, Playa de Las Americas — is what most visitors imagine: resort hotels, blue-flag beaches, a long promenade lined with restaurants. It delivers exactly what it promises and does so with enough polish that even confirmed sceptics tend to enjoy it.',
    'The north is a different island. Santa Cruz, La Laguna (a UNESCO World Heritage city), the Anaga Rural Park — dramatic green ravines, black sand beaches, some of the best local restaurants on the island. Hire a car for a day and it transforms a standard beach holiday into something more interesting.',
    'Mount Teide, Spain\'s highest peak and one of the world\'s most visited volcanoes, sits in the middle of the island. The cable car offers views across to Gran Canaria, La Palma and the African coast on a clear day. Book the summit permit in advance — numbers are strictly limited.',
    'For food, Tenerife has moved well beyond the hotel buffet. The strip around San Cristobal de La Laguna has genuine Canarian restaurants, and the fish restaurants around Los Abrigos and the south remain excellent value for fresh catch, papas arrugadas and mojo.',
  ],
};

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = inspirationArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const body = articleBody[article.slug] ?? [article.teaser];
  const relatedDeals = getRelatedDeals(article.category);
  const relatedArticles = inspirationArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="article-page">

        {/* ── Article hero ── */}
        <section className="article-hero">
          <div className="article-hero-img">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
            <div className="article-hero-overlay" />
          </div>
          <div className="container article-hero-content">
            <nav className="article-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" aria-hidden="true" />
              <Link href="/inspiration">Inspiration</Link>
              <Icon name="chevron" aria-hidden="true" />
              <span>{article.category}</span>
            </nav>
            <span className="article-cat">{article.category}</span>
            <h1 className="article-hero-h1">{article.title}</h1>
            <div className="article-hero-meta">
              <span className="article-meta">
                <Icon name="clock" aria-hidden="true" />
                {article.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* ── Article body + sidebar ── */}
        <div className="container article-layout">
          <article className="article-body glass-card" aria-label="Article content">
            <p className="article-lead">{article.teaser}</p>
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Deal CTA inside article */}
            <div className="article-cta-block">
              <Icon name="tag" aria-hidden="true" />
              <div>
                <strong>Ready to book?</strong>
                <p>Browse our handpicked deals for {article.category === 'Europe' ? 'European' : 'worldwide'} holidays, with genuine savings and flexible options.</p>
                <Link href="/deals" className="article-cta-btn">
                  View holiday deals
                  <Icon name="arrowRight" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="article-sidebar-card glass-card">
              <strong>Search holidays</strong>
              <p>Find a deal matching this destination and your dates.</p>
              <Link href="/search" className="article-sidebar-link primary">
                <Icon name="search" aria-hidden="true" />
                Search all holidays
              </Link>
              <Link href="/deals" className="article-sidebar-link secondary">
                <Icon name="tag" aria-hidden="true" />
                Browse deals
              </Link>
            </div>

            <div className="article-sidebar-card glass-card">
              <strong>More inspiration</strong>
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/inspiration/${a.slug}`} className="article-sidebar-article">
                  <span className="article-cat">{a.category}</span>
                  <span>{a.title}</span>
                </Link>
              ))}
            </div>

            <div className="article-sidebar-card article-sidebar-dest glass-card">
              <strong>Popular destinations</strong>
              {destinations.slice(0, 4).map((dest) => (
                <Link
                  key={dest.name}
                  href={`/search?destination=${encodeURIComponent(dest.name)}`}
                  className="article-dest-row"
                >
                  <Icon name="pin" aria-hidden="true" />
                  <span>
                    <strong>{dest.name}</strong>
                    <small>{dest.price}</small>
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* ── Related deals ── */}
        <section className="container section article-deals-section" style={{ paddingBottom: 52 }}>
          <div className="section-head compact">
            <div>
              <span className="micro-label">Holiday ideas</span>
              <h2>Deals related to this article</h2>
            </div>
            <Link href="/deals" className="section-head-link">
              View all deals
              <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
            </Link>
          </div>
          <div className="deal-row">
            {relatedDeals.map((deal) => (
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
