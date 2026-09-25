import { JsonLd } from '@/components/json-ld';
import { ThemeProvider } from '@/providers/theme-provider';
import {
  SEO_AUTHOR,
  SEO_BASE_URL,
  SEO_CREATOR,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_LANGUAGE,
  SEO_NAME,
  SEO_OG_LANGUAGE,
  SEO_PUBLISHER,
  SEO_TITLE,
  SEO_TWITTER_CARD,
  SEO_TWITTER_HANDLE,
  SEO_TYPE,
} from '@/utils/constants';
import { websiteJsonLd } from '@/utils/structured-data';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_BASE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SEO_TITLE}`,
  },
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  keywords: SEO_KEYWORDS,
  authors: [{ name: SEO_AUTHOR, url: SEO_BASE_URL }],
  creator: SEO_CREATOR,
  publisher: SEO_PUBLISHER,
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
      { url: '/apple-touch-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-touch-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SEO_BASE_URL,
    siteName: SEO_NAME,
    locale: SEO_OG_LANGUAGE,
    type: SEO_TYPE,
  },
  twitter: {
    card: SEO_TWITTER_CARD,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    site: SEO_TWITTER_HANDLE,
    creator: SEO_TWITTER_HANDLE,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  applicationName: SEO_NAME,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={SEO_LANGUAGE}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={websiteJsonLd} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
