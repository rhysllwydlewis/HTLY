import { HtlyLogo } from '@/components/HtlyLogo';
import { Icon } from '@/components/Icon';
import { navigation } from '@/lib/holiday-data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <HtlyLogo />
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="sign-in" href="/account" aria-label="Sign in to your HTLY account"><Icon name="user" />Sign in</a>
          <a className="book-now" href="/search"><Icon name="search" />Search / Book now</a>
          <details className="mobile-nav">
            <summary aria-label="Open menu"><Icon name="menu" /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
              <a href="/account">Sign in</a>
              <a href="/search">Search / Book now</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
