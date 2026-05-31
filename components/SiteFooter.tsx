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
            <a href="https://facebook.com" aria-label="HTLY on Facebook" target="_blank" rel="noopener noreferrer">
              <Icon name="facebook" />
            </a>
            <a href="https://instagram.com" aria-label="HTLY on Instagram" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" />
            </a>
            <a href="https://tiktok.com" aria-label="HTLY on TikTok" target="_blank" rel="noopener noreferrer">
              <Icon name="tiktok" />
            </a>
            <a href="https://youtube.com" aria-label="HTLY on YouTube" target="_blank" rel="noopener noreferrer">
              <Icon name="youtube" />
            </a>
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
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
            />
          </label>
          <button type="submit">
            <Icon name="mail" aria-hidden="true" />
            Subscribe
          </button>
          <small className="footer-copyright">
            © 2026 HTLY.co.uk. All rights reserved.
          </small>
        </form>

        {/* Trust badges */}
        <div className="badges" aria-label="Trust and accreditation badges">
          <b>
            <Icon name="atol" aria-hidden="true" />
            ATOL Protected
          </b>
          <b>
            <Icon name="lock" aria-hidden="true" />
            Secure payments
          </b>
          <b style={{ color: 'var(--green-stars)' }}>
            <Icon name="star" className="is-filled" aria-hidden="true" />
            Verified reviews
          </b>
        </div>

      </div>
    </footer>
  );
}