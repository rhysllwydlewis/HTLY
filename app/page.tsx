import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/home/Hero';
import { FeaturedDeals, PopularDestinations, PromoBanner, Reviews, TrustStrip, WhyBook } from '@/components/home/HomeSections';
import { brand, brandDisplay } from '@/lib/brand';

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brandDisplay,
    url: brand.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${brand.siteUrl}/search?destination={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: brandDisplay,
    url: brand.siteUrl,
    slogan: brand.tagline,
    areaServed: 'GB',
    sameAs: [brand.siteUrl]
  }
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
        <Reviews />
      </main>
      <FloatingTravelWidget />
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
    </>
  );
}
