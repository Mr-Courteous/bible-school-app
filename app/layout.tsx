import type { Metadata } from 'next';
import './globals.css';

export const metadataBase = new URL('https://www.christ-patternbiblecollege.com');

export const metadata: Metadata = {
  title: { default: 'Christ Pattern Bible College', template: '%s | Christ Pattern Bible College' },
  description:
    'Christ Pattern Bible College — official site for applications, programs, and resources for theological education.',
  authors: [{ name: 'Christ Pattern Bible College', url: 'https://www.christ-patternbiblecollege.com' }],
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Christ Pattern Bible College',
    description:
      'Apply to theology programs, access resources, and manage applications at Christ Pattern Bible College.',
    siteName: 'Christ Pattern Bible College',
    images: ['/set/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christ Pattern Bible College',
    description:
      'Apply to theology programs, access resources, and manage applications at Christ Pattern Bible College.',
    images: ['/set/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  );
}

