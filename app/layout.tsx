import type { Metadata, Viewport } from 'next';
import './globals.css';
import './polish.css';
import { brandDisplay, brandOrigin, brandUrl } from '@/lib/brand';

export const metadata: Metadata = {
  metadataBase: new URL(brandOrigin()),
  title: `${brandDisplay} | Holiday deals made easy`,
  description: 'Find and book brilliant holiday deals on hotels and packages worldwide.',
  openGraph: {
    title: `${brandDisplay} | Holiday deals made easy`,
    description: 'Big escapes. Better prices.',
    url: brandUrl('/'),
    siteName: brandDisplay,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brandDisplay} | Holiday deals made easy`,
    description: 'Big escapes. Better prices.'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0052cc'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
