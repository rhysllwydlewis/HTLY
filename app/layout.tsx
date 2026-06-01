import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './polish.css';
import { brandDisplay, brandOrigin, brandUrl } from '@/lib/brand';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(brandOrigin()),
  title: {
    default: `${brandDisplay} | Holiday deals made easy`,
    template: `%s | ${brandDisplay}`,
  },
  description: 'Find and book brilliant holiday deals on hotels and packages worldwide. Big escapes, better prices.',
  keywords: ['holiday deals', 'package holidays', 'hotel deals', 'all inclusive', 'beach holidays', 'UK holidays'],
  authors: [{ name: 'HTLY' }],
  openGraph: {
    title: `${brandDisplay} | Holiday deals made easy`,
    description: 'Big escapes. Better prices.',
    url: brandUrl('/'),
    siteName: brandDisplay,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brandDisplay} | Holiday deals made easy`,
    description: 'Big escapes. Better prices.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0052cc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
