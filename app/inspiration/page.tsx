import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';
import { destinations, inspirationArticles } from '@/lib/holiday-data';

export const metadata: Metadata = {
  title: `Travel Inspiration | ${brandDisplay}`,
  description:
    'Holiday guides, destination picks and travel tips. Find inspiration for your next break with HTLY.',
  alternates: { canonical: brandUrl('/inspiration') },
};

const categories = ['All', 'Europe', 'Long haul', 'Travel tips'];

export default function InspirationPage() {
  const [featured, ...rest] = inspirationArticles;

  return (
    <>
      <SiteHeader />
      <main className="inner-page search-page">

        {/* ── Hero ── */}
        <section className="search-hero-lite inner-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Travel inspiration</span>
            <h1>Ideas for your next holiday</h1>
            <p>
              Destination guides, hotel picks and honest travel tips to help you
              plan a holiday you will actually love.
            </p>
          </div>
        </section>

        {/* ── Category pills ── */}
        <div className="container" style={{ paddingTop: 8, paddingBottom: 4 }}>
          <nav className="region-pills" aria-label="Filter by category">
            {categories.map((cat, i) => (
              <span key={cat} className={`region-pill${i === 0 ? ' is-active' : ''}`}>
                {cat}
              </span>
            ))}
          </nav>
        </div>

        {/* ── Featured article ── */}
        {featured ? (
          <section className="container section">
            <a className="article-featured" href={`/inspiration/${featured.slug}`} aria-label={featured.title}>
              <div className="article-featured-img">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 60vw"
                />
              </div>
              <div className="article-featured-body glass-card">
                <span className="article-cat">{featured.category}</span>
                <h2 className="article-featured-title">{featured.title}</h2>
                <p>{featured.teaser}</p>
                <span className="article-read-more">
                  Read article
                  <Icon name="arrowRight" aria-hidden="true" />
                </span>
                <small className="article-meta">
                  <Icon name="clock" aria-hidden="true" />
                  {featured.readTime}
                </small>
              </div>
            </a>
          </section>
        ) : null}

        {/* ── Article grid ── */}
        <section className="container section" aria-label="Travel articles">
          <div className="section-head compact">
            <div>
              <span className="micro-label">Latest guides</span>
              <h2>More travel inspiration</h2>
            </div>
          </div>
          <div className="article-grid">
            {rest.map((article) => (
              <a key={article.slug} className="article-card" href={`/inspiration/${article.slug}`}>
                <div className="article-card-img">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1180px) 50vw, 380px"
                  />
                </div>
                <div className="article-card-body">
                  <span className="article-cat">{article.category}</span>
                  <strong className="article-card-title">{article.title}</strong>
                  <p>{article.teaser}</p>
                  <span className="article-meta">
                    <Icon name="clock" aria-hidden="true" />
                    {article.readTime}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Destination quick links ── */}
        <section className="container section" style={{ paddingBottom: 52 }}>
          <div className="section-head compact">
            <div>
              <span className="micro-label">Explore</span>
              <h2>Popular destinations</h2>
            </div>
            <Link href="/destinations" className="section-head-link">
              See all
              <Icon name="arrowRight" aria-hidden="true" className="section-head-arrow" />
            </Link>
          </div>
          <div className="dest-quick-links">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={`/search?destination=${encodeURIComponent(dest.name)}`}
                className="dest-quick-link"
              >
                <Icon name="pin" aria-hidden="true" />
                <span>
                  <strong>{dest.name}</strong>
                  <small>{dest.tagline}</small>
                </span>
                <Icon name="chevron" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
