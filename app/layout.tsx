import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { configuredBasePath, withBasePath } from '@/lib/site-path';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Maxinor Venture Studio',
  description: "India's 1st Operator Led Venture Studio",
  icons: {
    icon: withBasePath('/logo.png', configuredBasePath),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-warm-white text-navy antialiased selection:bg-brand selection:text-warm-white flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
