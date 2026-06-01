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
      <svg
        className="liquid-glass-filters"
        aria-hidden="true"
        focusable="false"
        width="0"
        height="0"
      >
        <defs>
          <filter
            id="htly-liquid-refraction"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.028"
              numOctaves="2"
              seed="11"
              result="liquidNoise"
            />
            <feGaussianBlur in="liquidNoise" stdDeviation="2.4" result="softMap" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softMap"
              scale="16"
              xChannelSelector="R"
              yChannelSelector="G"
              result="refracted"
            />
            <feSpecularLighting
              in="softMap"
              surfaceScale="8"
              specularConstant="0.55"
              specularExponent="22"
              lightingColor="#ffffff"
              result="liquidShine"
            >
              <fePointLight x="-120" y="-80" z="180" />
            </feSpecularLighting>
            <feComposite
              in="liquidShine"
              in2="refracted"
              operator="arithmetic"
              k1="0"
              k2="0.35"
              k3="0.65"
              k4="0"
              result="litGlass"
            />
            <feColorMatrix
              in="litGlass"
              type="matrix"
              values="1.03 0 0 0 0  0 1.01 0 0 0  0 0 1.08 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

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
