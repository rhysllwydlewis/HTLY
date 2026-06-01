import { HtlyLogo } from '@/components/HtlyLogo';
import { Icon } from '@/components/Icon';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand column */}
        <div className="footer-brand">
          <HtlyLogo footer />
          <p>
            Holiday deals made easy. Compare sunny escapes, save
            favourites and plan your next hotel or package break
            with confidence.
          </p>
          <nav className="socials" aria-label="Social links">
            {([
              ['facebook', 'HTLY on Facebook',  'https://facebook.com'],
              ['instagram','HTLY on Instagram', 'https://instagram.com'],
              ['tiktok',   'HTLY on TikTok',    'https://tiktok.com'],
              ['youtube',  'HTLY on YouTube',   'https://youtube.com'],
            ] as const).map(([name, label, href]) => (
              <a key={name} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon name={name} />
              </a>
            ))}
          </nav>
        </div>

        {/* Explore */}
        <div>
          <h3>Explore</h3>
          <a href="/holidays">Holidays</a>
          <a href="/hotels">Hotels</a>
          <a href="/destinations">Destinations</a>
          <a href="/deals">Deals</a>
          <a href="/inspiration">Inspiration</a>
        </div>

        {/* Help */}
        <div>
          <h3>Help</h3>
          <a href="/help">Contact us</a>
          <a href="/help">FAQs</a>
          <a href="/help">Booking information</a>
          <a href="/help">Travel advice</a>
          <a href="/account">Manage my booking</a>
        </div>

        {/* Company */}
        <div>
          <h3>Company</h3>
          <a href="/help">About us</a>
          <a href="/help">Careers</a>
          <a href="/help">Press</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* Newsletter */}
        <form className="newsletter" action="/search" noValidate>
          <h3>Get holiday deals to your inbox</h3>
          <p>Subscribe for exclusive offers and travel inspiration.</p>
          <label>
            <span className="sr-only">Email address</span>
            <input type="email" name="email" placeholder="Enter your email address" autoComplete="email" />
          </label>
          <button type="submit">
            <Icon name="mail" aria-hidden="true" />
            Subscribe
          </button>
          <small style={{ display: 'block', marginTop: 10, color: '#8a9ab5', fontSize: 11 }}>
            No spam. Unsubscribe any time.
          </small>
        </form>

        {/* Trust badges — ABTA + ATOL + Trustpilot */}
        <div className="badges" aria-label="Trust and accreditation badges">

          {/* ABTA badge */}
          <div className="trust-badge trust-badge--abta" aria-label="ABTA member, No. Y1256">
            <span className="trust-badge-logo">
              <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <text x="0" y="13" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="14" fill="white" letterSpacing="-0.5">ABTA</text>
              </svg>
            </span>
            <span>
              <strong>ABTA</strong>
              <small>No. Y1256</small>
            </span>
          </div>

          {/* ATOL badge */}
          <div className="trust-badge trust-badge--atol" aria-label="ATOL Protected">
            <Icon name="atol" aria-hidden="true" />
            <span>
              <strong>ATOL</strong>
              <small>Protected</small>
            </span>
          </div>

          {/* Trustpilot-style badge */}
          <div className="trust-badge trust-badge--tp" aria-label="Excellent rating on Trustpilot, 4.7 out of 5">
            <span className="tp-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2.5l3 6.1 6.7 1-4.9 4.8 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.8 6.7-1 3-6.1Z" />
                </svg>
              ))}
            </span>
            <span>
              <strong>Trustpilot</strong>
              <small>4.7 / 5 Excellent</small>
            </span>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copyright-row">
          <small>© 2026 HTLY.co.uk. All rights reserved.</small>
          <small>
            <a href="/terms">Terms</a>
            <span aria-hidden="true"> · </span>
            <a href="/privacy">Privacy</a>
          </small>
        </div>

      </div>
    </footer>
  );
}
