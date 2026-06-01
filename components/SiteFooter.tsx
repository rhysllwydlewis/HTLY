import { HtlyLogo } from '@/components/HtlyLogo';
import { Icon } from '@/components/Icon';

const explore = [
  { label: 'Holidays',     href: '/holidays'     },
  { label: 'Hotels',       href: '/hotels'       },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Deals',        href: '/deals'        },
  { label: 'Inspiration',  href: '/inspiration'  },
];

const help = [
  { label: 'Contact us',         href: '/help'    },
  { label: 'FAQs',               href: '/help'    },
  { label: 'Booking information', href: '/help'   },
  { label: 'Travel advice',      href: '/help'    },
  { label: 'Manage my booking',  href: '/account' },
];

const company = [
  { label: 'About us',           href: '/help'     },
  { label: 'Careers',            href: '/help'     },
  { label: 'Press',              href: '/help'     },
  { label: 'Terms & Conditions', href: '/terms'    },
  { label: 'Privacy Policy',     href: '/privacy'  },
];

const socials = [
  { icon: 'facebook'  as const, label: 'HTLY on Facebook',  href: 'https://facebook.com'  },
  { icon: 'instagram' as const, label: 'HTLY on Instagram', href: 'https://instagram.com' },
  { icon: 'tiktok'    as const, label: 'HTLY on TikTok',    href: 'https://tiktok.com'    },
  { icon: 'youtube'   as const, label: 'HTLY on YouTube',   href: 'https://youtube.com'   },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <HtlyLogo footer />
            <p>Holiday deals made easy. Compare escapes, save your favourites and book with confidence.</p>
            <div className="footer-socials">
              {socials.map(({ icon, label, href }) => (
                <a key={icon} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="footer-social">
                  <Icon name={icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="footer-heading">Explore</h3>
            {explore.map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>

          {/* Help */}
          <div>
            <h3 className="footer-heading">Help</h3>
            {help.map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-heading">Company</h3>
            {company.map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3 className="footer-heading">Get holiday deals to your inbox</h3>
            <p className="footer-newsletter-sub">Subscribe for exclusive offers and travel inspiration.</p>
            <form action="/search" noValidate className="footer-email-form">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Your email address"
                autoComplete="email"
              />
              <button type="submit">
                <Icon name="mail" aria-hidden="true" />
                Subscribe
              </button>
            </form>
            <p className="footer-privacy-note">
              <Icon name="lock" aria-hidden="true" />
              No spam. Unsubscribe any time.
            </p>
          </div>

        </div>
      </div>

      {/* Trust + copyright row */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">

          {/* Trust badges */}
          <div className="footer-badges">
            <div className="fbadge fbadge--abta">
              <span className="fbadge-plate">
                <svg width="36" height="14" viewBox="0 0 36 14" aria-hidden="true">
                  <text x="0" y="12" fontFamily="Arial,sans-serif" fontWeight="900"
                    fontSize="13" fill="white" letterSpacing="-0.5">ABTA</text>
                </svg>
              </span>
              <div>
                <strong>ABTA</strong>
                <small>No. Y1256</small>
              </div>
            </div>

            <div className="fbadge fbadge--atol">
              <Icon name="atol" aria-hidden="true" />
              <div>
                <strong>ATOL</strong>
                <small>Protected</small>
              </div>
            </div>

            <div className="fbadge fbadge--tp">
              <span className="fbadge-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"
                    fill="#00b67a" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.5l3 6.1 6.7 1-4.9 4.8 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.8 6.7-1 3-6.1Z" />
                  </svg>
                ))}
              </span>
              <div>
                <strong>Trustpilot</strong>
                <small>4.7 / 5 Excellent</small>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copy">
            <span>© 2026 HTLY.co.uk. All rights reserved.</span>
            <span>
              <a href="/terms">Terms</a>
              <span aria-hidden="true"> · </span>
              <a href="/privacy">Privacy</a>
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}
