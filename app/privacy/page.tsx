import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Privacy Policy | ${brandDisplay}`,
  description: 'How HTLY collects, uses and protects your personal data.',
  alternates: { canonical: brandUrl('/privacy') },
};

const sections = [
  {
    heading: 'What data we collect',
    body: 'When you use HTLY.co.uk we may collect information you provide directly (such as an email address for deal alerts) and anonymous usage data to improve the site. No payment card data is processed on this preview website.',
  },
  {
    heading: 'How we use your data',
    body: 'Any data collected is used solely to provide and improve the HTLY service. We do not sell personal data to third parties. Email addresses collected for deal alerts are used only to send relevant holiday offers.',
  },
  {
    heading: 'Cookies',
    body: 'We use essential cookies to remember your saved deals and search preferences. These are stored in your browser\'s local storage and are not shared with third parties. We do not use advertising trackers on this preview site.',
  },
  {
    heading: 'Your rights',
    body: 'You have the right to access, correct or delete any personal data we hold about you. To exercise these rights, contact us at privacy@htly.co.uk. We will respond within 30 days.',
  },
  {
    heading: 'Data security',
    body: 'We take reasonable technical and organisational measures to protect your data against unauthorised access, loss or disclosure. All data transmission is encrypted via HTTPS.',
  },
  {
    heading: 'Contact',
    body: 'For privacy enquiries, email privacy@htly.co.uk or write to HTLY Limited, Data Protection, London, United Kingdom.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page legal-page">
        <section className="container legal-shell">
          <div className="legal-header">
            <span className="micro-label">Legal</span>
            <h1>Privacy Policy</h1>
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
              <Link href="/terms">Terms &amp; Conditions</Link>
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
