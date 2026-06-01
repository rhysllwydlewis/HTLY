import Image from 'next/image';
import { Icon } from '@/components/Icon';
import { HeroSearch } from '@/components/home/HeroSearch';
import { deals, destinations, heroImage } from '@/lib/holiday-data';

const destinationOptions = Array.from(
  new Set([
    ...destinations.map((d) => d.name),
    ...deals.flatMap((deal) => [deal.destination, deal.resort, ...deal.tags]),
  ])
);

export function Hero() {
  return (
    <section className="hero" aria-label="Holiday deals hero">
      <div className="hero-media">
        <Image
          src={heroImage}
          alt="Sunny tropical water villas and turquoise sea"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="container hero-copy">
        <span>Your holiday, your way</span>
        <h1>
          Big escapes.<br />
          Better prices.
        </h1>
        <p>Find and book the best holiday deals on hotels and packages worldwide.</p>
        <div className="hero-actions" aria-label="Popular holiday shortcuts">
          <a href="/deals">
            <Icon name="tag" aria-hidden="true" />
            Low deposit deals
          </a>
          <a href="/destinations">
            <Icon name="sparkles" aria-hidden="true" />
            Handpicked resorts
          </a>
          <a href="/search?style=All-inclusive">
            <Icon name="sun" aria-hidden="true" />
            All-inclusive
          </a>
        </div>
      </div>
      <HeroSearch destinationOptions={destinationOptions} />
    </section>
  );
}
