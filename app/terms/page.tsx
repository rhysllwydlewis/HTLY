import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${brandDisplay}`,
  description: 'HTLY website and booking terms and conditions.',
  alternates: { canonical: brandUrl('/terms') },
};

const sections = [
  {
    heading: 'About this website',
    body: 'HTLY.co.uk is operated by HTLY Limited. This website is currently in preview mode and all pricing, availability and deal information shown is illustrative. No live bookings are being processed at this time.',
  },
  {
    heading: 'Preview content',
    body: 'All holiday prices, savings, ratings and availability shown on this site are example content created for demonstration purposes. They do not represent real offers, confirmed pricing or guaranteed availability from any travel supplier.',
  },
  {
    heading: 'ATOL protection',
    body: 'When HTLY processes live bookings, all package holidays that include flights will be ATOL protected in accordance with UK Civil Aviation Authority requirements. Full ATOL certificate details will be displayed before any payment is taken.',
  },
  {
    heading: 'Intellectual property',
    body: 'All content, design, trademarks and software on this website are the property of HTLY Limited or used under licence. You may not copy, reproduce or redistribute any content without written permission.',
  },
  {
    heading: 'Limitation of liability',
    body: 'HTLY Limited accepts no liability for any loss or damage arising from use of this preview website. Information is provided in good faith but without warranty of accuracy, completeness or fitness for purpose.',
  },
  {
    heading: 'Changes to these terms',
    body: 'We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.',
  },
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <section className="container legal-shell">
          <div className="legal-header">
            <span className="micro-label">Legal</span>
            <h1>Terms &amp; Conditions</h1>
            <p className="legal-updated">Last updated: June 2026</p>
          </div>
          <div className="legal-body glass-card">
            {sections.map((section) => (
              <div key={section.heading} className="legal-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
            <div className="legal-footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/help">Help &amp; Support</Link>
              <Link href="/">Back to homepage</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
