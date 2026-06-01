import Image from 'next/image';
import { Icon } from '@/components/Icon';
import { HeroSearch } from '@/components/home/HeroSearch';
import { deals, destinations, heroImage } from '@/lib/holiday-data';

const destinationOptions = Array.from(new Set([
  ...destinations.map((d) => d.name),
  ...deals.flatMap((deal) => [deal.destination, deal.resort, ...deal.tags]),
]));

export function Hero() {
  return (
    <section className="hero" aria-label="Search for your next holiday">

      {/* Full-bleed photography */}
      <div className="hero-media" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
        />
      </div>

      {/* Copy */}
      <div className="container hero-copy">
        <div className="hero-eyebrow">
          <Icon name="sparkles" aria-hidden="true" />
          Your holiday, your way
        </div>
        <h1>
          Big escapes.<br />
          <span className="hero-h1-accent">Better prices.</span>
        </h1>
        <p className="hero-subtitle">
          Find and book brilliant holiday deals on hotels&nbsp;and
          packages worldwide.
        </p>
        <nav className="hero-pills" aria-label="Popular holiday types">
          <a href="/search?style=All-inclusive">
            <Icon name="sun" aria-hidden="true" />
            All-inclusive
          </a>
          <a href="/search?style=Luxury">
            <Icon name="sparkles" aria-hidden="true" />
            Luxury
          </a>
          <a href="/search?style=Family">
            <Icon name="guests" aria-hidden="true" />
            Family
          </a>
          <a href="/search?style=Beach">
            <Icon name="beach" aria-hidden="true" />
            Beach
          </a>
        </nav>
      </div>

      {/* Search card — overlaps hero bottom */}
      <HeroSearch destinationOptions={destinationOptions} />

    </section>
  );
}
