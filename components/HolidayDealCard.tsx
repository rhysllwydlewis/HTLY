import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SaveDealButton } from '@/components/SaveDealButton';
import { getDealHref, type HolidayDeal } from '@/lib/holiday-data';

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <div className="dc-stars" aria-label={`${rating.toFixed(1)} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"
          fill={i < filled ? '#F5A623' : 'none'}
          stroke={i < filled ? '#F5A623' : '#CBD5E0'}
          strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.5l3 6.1 6.7 1-4.9 4.8 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.8 6.7-1 3-6.1Z" />
        </svg>
      ))}
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}

export function HolidayDealCard({
  deal,
  href = getDealHref(deal),
  cta = 'View deal',
}: {
  deal: HolidayDeal;
  href?: string;
  cta?: string;
}) {
  return (
    <article className="dc">

      {/* ── Image ── */}
      <Link className="dc-img" href={href} tabIndex={-1} aria-hidden="true">
        <Image
          src={deal.image}
          alt={`${deal.resort} in ${deal.destination}`}
          fill
          sizes="(max-width: 680px) 90vw, (max-width: 1200px) 44vw, 320px"
          style={{ objectFit: 'cover' }}
        />
        {/* Saving badge */}
        <div className="dc-saving">{deal.saving}</div>
        {/* Dark gradient at bottom for legibility */}
        <div className="dc-img-overlay" aria-hidden="true" />
      </Link>

      {/* Save button */}
      <SaveDealButton slug={deal.slug} resort={deal.resort} />

      {/* ── Content ── */}
      <div className="dc-body">

        {/* Location + badge row */}
        <div className="dc-top">
          <span className="dc-location">
            <Icon name="pin" aria-hidden="true" />
            {deal.destination}
          </span>
          <span className="dc-badge">{deal.badge}</span>
        </div>

        {/* Hotel name */}
        <h3 className="dc-name">
          <Link href={href}>{deal.resort}</Link>
        </h3>

        {/* Stars */}
        <Stars rating={deal.rating} />

        {/* Amenities */}
        <ul className="dc-amenities" aria-label="Included">
          <li>
            <Icon name="clock" aria-hidden="true" />
            {deal.nights}
          </li>
          <li>
            <Icon name="bed" aria-hidden="true" />
            {deal.board}
          </li>
          <li>
            <Icon name="plane" aria-hidden="true" />
            {deal.travel}
          </li>
        </ul>

        {/* Price + CTA */}
        <div className="dc-foot">
          <div className="dc-price">
            <span className="dc-price-from">From</span>
            <strong className="dc-price-amount">{deal.price}</strong>
            <span className="dc-price-pp">pp</span>
          </div>
          <Link href={href} className="dc-cta">{cta}</Link>
        </div>

      </div>
    </article>
  );
}
