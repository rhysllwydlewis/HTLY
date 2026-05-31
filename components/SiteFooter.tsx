import { HtlyLogo } from '@/components/HtlyLogo';
import { Icon } from '@/components/Icon';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <HtlyLogo footer />
          <p>Holiday deals made easy. Compare sunny escapes, save favourites and plan your next hotel or package break with confidence.</p>
          <div className="socials" aria-label="Social links"><a href="/help" aria-label="Facebook">f</a><a href="/help" aria-label="Instagram">◎</a><a href="/help" aria-label="TikTok">♪</a><a href="/help" aria-label="YouTube">▶</a></div>
        </div>
        <div><h3>Explore</h3><a href="/holidays">Holidays</a><a href="/hotels">Hotels</a><a href="/destinations">Destinations</a><a href="/deals">Deals</a><a href="/inspiration">Inspiration</a></div>
        <div><h3>Help</h3><a href="/help">Contact us</a><a href="/help">FAQs</a><a href="/help">Booking information</a><a href="/help">Travel advice</a><a href="/account">Manage my booking</a></div>
        <div><h3>Company</h3><a href="/help">About us</a><a href="/help">Careers</a><a href="/help">Press</a><a href="/terms">Terms & Conditions</a><a href="/privacy">Privacy Policy</a></div>
        <form className="newsletter glass-card" action="/search">
          <h3>Get holiday deals to your inbox</h3>
          <p>Subscribe for exclusive offers, travel inspiration and future price alerts.</p>
          <label><span className="sr-only">Email address</span><input type="email" name="email" placeholder="Enter your email address" /></label>
          <button type="submit">Subscribe</button>
          <small>© 2026 HTLY.co.uk. All rights reserved.</small>
        </form>
        <div className="badges" aria-label="Trust and payment badges"><b>ATOL placeholder</b><b>Secure payments</b><b><Icon name="check" />Verified-style reviews</b></div>
      </div>
    </footer>
  );
}
