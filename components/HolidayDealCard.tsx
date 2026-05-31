import Image from 'next/image';
import { Icon } from '@/components/Icon';
import type { HolidayDeal } from '@/lib/holiday-data';

export function HolidayDealCard({ deal, href = '/deals', cta = 'View deal' }: { deal: HolidayDeal; href?: string; cta?: string }) {
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
          <a href={href}>{cta}</a>
        </div>
      </div>
    </article>
  );
}
