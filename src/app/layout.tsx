import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import MotionProvider from './components/MotionProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kiklamino Limited — Performance-powered affiliate marketing',
  description:
    'Kiklamino Limited is a performance-powered affiliate agency specializing in CPA/CPS partnerships that deliver purchase-ready traffic and measurable ROI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
