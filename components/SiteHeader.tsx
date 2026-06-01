'use client';

import { useState, useEffect } from 'react';
import { HtlyLogo } from '@/components/HtlyLogo';
import { Icon } from '@/components/Icon';
import { navigation } from '@/lib/holiday-data';

// Items that have sub-menus (show chevron)
const dropdownItems = new Set(['Holidays', 'Destinations', 'Deals', 'Inspiration', 'Support']);

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">

        <HtlyLogo />

        {/* Desktop nav */}
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
              {dropdownItems.has(item.label) && (
                <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a className="sign-in" href="/account">
            <Icon name="user" aria-hidden="true" />
            Sign in
          </a>
          <a className="book-now" href="/search">
            <Icon name="search" aria-hidden="true" />
            Search / Book now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-inner">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-menu-actions">
              <a href="/account" className="mobile-sign-in">
                <Icon name="user" aria-hidden="true" />
                Sign in
              </a>
              <a href="/search" className="mobile-book">
                <Icon name="search" aria-hidden="true" />
                Search / Book now
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
