import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Icon } from '@/components/Icon';
import { deals } from '@/lib/holiday-data';

export default function NotFound() {
  const suggestions = deals.slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="not-found-page">
        <section className="container not-found-shell">
          <div className="not-found-copy">
            <span className="not-found-code">404</span>
            <h1>This page has checked out</h1>
            <p>
              The page you were looking for has moved, expired or never quite existed.
              Let&rsquo;s get you back to finding a brilliant holiday.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="not-found-home">
                <Icon name="beach" aria-hidden="true" />
                Back to homepage
              </Link>
              <Link href="/deals" className="not-found-deals">
                <Icon name="tag" aria-hidden="true" />
                Browse deals
              </Link>
              <Link href="/search" className="not-found-search">
                <Icon name="search" aria-hidden="true" />
                Search holidays
              </Link>
            </div>
          </div>

          <div className="not-found-deals-col">
            <p className="not-found-sub">Popular right now</p>
            {suggestions.map((deal) => (
              <Link key={deal.slug} href={`/deals/${deal.slug}`} className="not-found-deal-row">
                <span className="not-found-deal-info">
                  <strong>{deal.resort}</strong>
                  <small>{deal.destination} &middot; {deal.price} pp</small>
                </span>
                <span className="not-found-deal-badge">{deal.saving}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
