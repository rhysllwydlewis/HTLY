import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/home/Hero';
import {
  FeaturedDeals,
  InspirationTeaser,
  NewsletterBanner,
  PopularDestinations,
  PromoBanner,
  Reviews,
  TrustStrip,
  WhyBook,
} from '@/components/home/HomeSections';
import { brandDisplay, brandUrl } from '@/lib/brand';

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brandDisplay,
    url: brandUrl('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${brandUrl('/search')}?destination={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: brandDisplay,
    url: brandUrl('/'),
    slogan: 'Holiday deals made easy',
    areaServed: 'GB',
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedDeals />
        <PopularDestinations />
        <WhyBook />
        <PromoBanner />
        <InspirationTeaser />
        <Reviews />
        <NewsletterBanner />
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </>
  );
}
