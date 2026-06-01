import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingTravelWidget } from '@/components/FloatingTravelWidget';
import { Icon } from '@/components/Icon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { brandDisplay, brandUrl } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Help & Support | ${brandDisplay}`,
  description: 'Get help with your HTLY booking, find answers in our FAQ, or contact our UK support team.',
  alternates: { canonical: brandUrl('/help') },
};

const faqs = [
  {
    q: 'Is HTLY ATOL protected?',
    a: 'All package holidays sold through HTLY that include flights are ATOL protected, giving you financial protection if your travel company fails.',
  },
  {
    q: 'Can I cancel or amend my booking?',
    a: 'Cancellation and amendment terms depend on the specific hotel and airline policies. Many of our deals include free cancellation on selected room types — this is shown clearly on each deal page.',
  },
  {
    q: 'How do I get a price match?',
    a: 'If you find the same deal cheaper elsewhere within 24 hours of booking, contact our support team with the details and we will do our best to match it.',
  },
  {
    q: 'What is a low deposit booking?',
    a: 'Low deposit bookings let you secure your holiday with a smaller payment upfront. The balance is due closer to your departure date. The specific deposit amount is shown on each deal.',
  },
  {
    q: 'How do I save deals to compare?',
    a: 'Click the heart icon on any deal card to save it. Open the comparison drawer via the floating button bottom-right to compare your saved deals side by side.',
  },
  {
    q: 'When will live booking be available?',
    a: 'HTLY is currently in preview mode. Live availability and booking will be integrated in an upcoming release. All pricing shown is illustrative.',
  },
];

const contactOptions = [
  { icon: 'headset' as const, title: 'Phone support',  desc: 'Mon–Sat 8am–8pm, Sun 9am–5pm',   cta: 'Call us',          href: 'tel:+441234567890' },
  { icon: 'mail'    as const, title: 'Email support',   desc: 'We reply within 2 working hours', cta: 'Send an email',    href: 'mailto:support@htly.co.uk' },
  { icon: 'search'  as const, title: 'Live chat',       desc: 'Instant help from our team',      cta: 'Start chat',       href: '#chat' },
];

export default function HelpPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page search-page help-page">

        {/* ── Hero ── */}
        <section className="search-hero-lite inner-hero-lite">
          <div className="container search-results-head">
            <span className="micro-label">Help centre</span>
            <h1>How can we help?</h1>
            <p>
              Find answers, manage your booking or get in touch with our UK-based support team.
            </p>
          </div>
        </section>

        {/* ── Contact options ── */}
        <section className="container section help-contact-grid" aria-label="Contact options">
          {contactOptions.map((option) => (
            <a key={option.title} href={option.href} className="help-contact-card glass-card">
              <span className="help-contact-icon">
                <Icon name={option.icon} aria-hidden="true" />
              </span>
              <div>
                <strong>{option.title}</strong>
                <small>{option.desc}</small>
              </div>
              <span className="help-contact-cta">
                {option.cta}
                <Icon name="arrowRight" aria-hidden="true" />
              </span>
            </a>
          ))}
        </section>

        {/* ── FAQ section ── */}
        <section className="container section" aria-label="Frequently asked questions" style={{ paddingBottom: 8 }}>
          <div className="section-head compact">
            <div>
              <span className="micro-label">Common questions</span>
              <h2>Frequently asked questions</h2>
            </div>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card glass-card">
                <Icon name="check" aria-hidden="true" />
                <div>
                  <strong>{faq.q}</strong>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Trust strip ── */}
        <section className="container section help-trust-row" style={{ paddingBottom: 52 }}>
          {[
            { icon: 'atol'    as const, title: 'ATOL Protected',    sub: 'All package holidays with flights' },
            { icon: 'shield'  as const, title: 'Secure payments',   sub: 'Encrypted checkout & safe data'  },
            { icon: 'clock'   as const, title: 'Flexible booking',  sub: 'Free cancellation on selected stays' },
            { icon: 'headset' as const, title: 'UK-based support',  sub: '7 days a week, 8am–8pm'          },
          ].map((item) => (
            <div key={item.title} className="hotel-trust-item">
              <Icon name={item.icon} aria-hidden="true" />
              <span>
                <strong style={{ display: 'block', fontSize: 13 }}>{item.title}</strong>
                <small style={{ display: 'block', fontSize: 11.5, color: 'var(--muted)' }}>{item.sub}</small>
              </span>
            </div>
          ))}
        </section>

        {/* ── Back links ── */}
        <div className="container" style={{ paddingBottom: 52, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/" className="secondary-action"><Icon name="beach" aria-hidden="true" />Back to homepage</Link>
          <Link href="/deals" className="secondary-action"><Icon name="tag" aria-hidden="true" />Browse deals</Link>
        </div>

      </main>
      <FloatingTravelWidget />
      <SiteFooter />
    </>
  );
}
