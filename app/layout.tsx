import type { Metadata, Viewport } from 'next';
import './globals.css';
import { brandDisplay } from '@/lib/brand';

export const metadata: Metadata = {
  title: `${brandDisplay} | Holiday deals made easy`,
  description: 'Find and book brilliant holiday deals on hotels and packages worldwide.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0052cc'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
