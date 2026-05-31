import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SaveDealButton } from '@/components/SaveDealButton';
import { getDealHref, type HolidayDeal } from '@/lib/holiday-data';

export function HolidayDealCard({ deal, href = getDealHref(deal), cta = 'View deal' }: { deal: HolidayDeal; href?: string; cta?: string }) {
  const roundedRating = Math.round(deal.rating);

  return (
    <article className="deal-card">
      <Link className="deal-img" href={href} aria-label={`View ${deal.resort} holiday deal`}>
        <Image src={deal.image} alt={`${deal.resort} in ${deal.destination}`} fill sizes="(max-width: 680px) 82vw, (max-width: 1180px) 33vw, 380px" />
        <span>{deal.saving}</span>
      </Link>
      <SaveDealButton slug={deal.slug} resort={deal.resort} />
      <div className="deal-body">
        <div className="deal-meta-row"><small>{deal.destination}</small><b>{deal.badge}</b></div>
        <h3><Link href={href}>{deal.resort}</Link></h3>
        <div className="stars" aria-label={`${deal.rating} out of 5 rating`}>
          {Array.from({ length: 5 }, (_, index) => <Icon key={index} name="star" className={index < roundedRating ? 'is-filled' : ''} />)}
          <small>{deal.rating.toFixed(1)}</small>
        </div>
        <ul>
          <li><Icon name="clock" />{deal.nights}</li>
          <li><Icon name="card" />{deal.board}</li>
          <li><Icon name="plane" />{deal.travel}</li>
        </ul>
        <div className="deal-foot">
          <p><small>From</small><strong>{deal.price}<em> pp</em></strong><span>{deal.total}</span></p>
          <Link href={href}>{cta}</Link>
        </div>
      </div>
    </article>
  );
}
