import type { Metadata } from 'next';
import './globals.css';

// Fonts will be loaded via CDN in production
// Using system fonts as fallback

export const metadata: Metadata = {
  title: 'Shopify Editions Winter 2026',
  description: 'Discover the latest innovations from Shopify. AI-powered commerce, next-gen checkout, B2B solutions, and platform enhancements.',
  keywords: ['Shopify', 'E-commerce', 'AI', 'B2B', 'Checkout', 'Platform'],
  authors: [{ name: 'Shopify' }],
  openGraph: {
    title: 'Shopify Editions Winter 2026',
    description: 'Discover the latest innovations from Shopify',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Editions Winter 2026',
    description: 'Discover the latest innovations from Shopify',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700;800&family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
