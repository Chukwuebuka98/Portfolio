import type { Metadata } from 'next';
import { Geist, Geist_Mono, Mona_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chukwuebuka Emmanuel | Frontend Engineer',
  description: 'Modern Web Apps with React, NextJs TypeScript & AI.',
  metadataBase: new URL('https://chukwuebukaemmanuel.vercel.app'),

  openGraph: {
    title: 'Chukwuebuka Emmanuel | Frontend Engineer',
    description: 'Modern Web Apps with React, NextJs TypeScript & AI.',
    url: 'https://chukwuebukaemmanuel.vercel.app',
    siteName: 'Chukwuebuka Emmanuel Portfolio',
    images: [
      {
        url: 'https://chukwuebukaemmanuel.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Frontend Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Engineer Portfolio | Chukwuebuka Emmanuel',
    description: 'Modern Web Apps with React, TypeScript & AI.',
    images: ['https://chukwuebukaemmanuel.vercel.app/og-image.png'],
  },

  keywords: [
    'Frontend Engineer',
    'Frontend Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'AI Projects',
    'Portfolio',
    'Chukwuebuka Emmanuel',
    'Software Developer',
    'Frontend Developer',
    'Nigerian Developer',
    'Web Development',
    'Web Apps',
    'Modern Web Apps',
    'Naija Software Developer',
    '9ja Web Developer',
  ],
  authors: [{ name: 'Chukwuebuka Emmanuel' }],
  creator: 'Chukwuebuka Emmanuel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monaSans.variable} antialiased pattern scroll-smooth min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
