import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SaveDealButton } from '@/components/SaveDealButton';
import { getDealHref, type HolidayDeal } from '@/lib/holiday-data';

function StarRating({ rating }: { rating: number }) {
  const full  = Math.round(rating);
  return (
    <div className="stars" aria-label={`${rating.toFixed(1)} out of 5 rating`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={i < full ? 'is-filled' : ''}
        />
      ))}
      <small>{rating.toFixed(1)}</small>
    </div>
  );
}

export function HolidayDealCard({
  deal,
  href = getDealHref(deal),
  cta  = 'View deal',
}: {
  deal: HolidayDeal;
  href?: string;
  cta?: string;
}) {
  return (
    <article className="deal-card">

      {/* Image + badges */}
      <Link
        className="deal-img"
        href={href}
        aria-label={`View ${deal.resort} holiday deal`}
      >
        <Image
          src={deal.image}
          alt={`${deal.resort} in ${deal.destination}`}
          fill
          sizes="(max-width: 680px) 82vw, (max-width: 1180px) 33vw, 300px"
        />
        {/* Saving badge */}
        <span>{deal.saving}</span>
      </Link>

      {/* Save / heart button */}
      <SaveDealButton slug={deal.slug} resort={deal.resort} />

      {/* Card body */}
      <div className="deal-body">
        <div className="deal-meta-row">
          <small>{deal.destination}</small>
          <b>{deal.badge}</b>
        </div>

        <h3>
          <Link href={href}>{deal.resort}</Link>
        </h3>

        <StarRating rating={deal.rating} />

        {/* Amenities */}
        <ul aria-label="Deal highlights">
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
        <div className="deal-foot">
          <p>
            <small>From</small>
            <strong>
              {deal.price}
              <em> pp</em>
            </strong>
            <span>{deal.total}</span>
          </p>
          <Link href={href}>{cta}</Link>
        </div>
      </div>
    </article>
  );
}