// src/app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main style={{ marginTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
