import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const faviconUrl =
  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4e417db41aba4d67eb664_50861696-aac9-4ad9-988c-2bcebfeb%20(1).png';
const googleAnalyticsId = 'G-W4B4Z3JZLC';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maxinor.com'),
  title: {
    default: 'Maxinor — India\'s Operator-Led Venture Studio',
    template: '%s | Maxinor',
  },
  description: "India's first operator-led venture studio. We build, scale, and back startups, SMEs, and corporates through hands-on execution — not just capital.",
  keywords: ['venture studio India', 'operator led venture studio', 'startup studio India', 'venture building', 'SME growth', 'Maxinor'],
  authors: [{ name: 'Maxinor', url: 'https://www.maxinor.com' }],
  creator: 'Maxinor',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.maxinor.com',
    siteName: 'Maxinor',
    title: "Maxinor — India's Operator-Led Venture Studio",
    description: "India's first operator-led venture studio. We build, scale, and back startups, SMEs, and corporates through hands-on execution — not just capital.",
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Maxinor Venture Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maxinor — India's Operator-Led Venture Studio",
    description: "India's first operator-led venture studio. Hands-on execution, not just capital.",
    images: ['/og-default.png'],
  },
  icons: {
    icon: faviconUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-warm-white text-navy antialiased selection:bg-brand selection:text-warm-white flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
