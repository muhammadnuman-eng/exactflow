import './globals.css';
import { Header } from './home/navigation/Header';
import Footer from './home/footer/Footer'; // <-- NEW: Footer import kiya
import { Montserrat, Geist, Space_Grotesk } from 'next/font/google';
import { cn } from "@/lib/utils";
import type { Viewport } from 'next';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent for Ecommerce Automation',
  description: 'ExactFlow is a platform for managing your business operations.',
}

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("bg-[#F8F9FE]", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* 1. suppressHydrationWarning add kiya takay Grammarly browser extension ki warning khatam ho sake */}
      <body suppressHydrationWarning className={`${montserrat.variable} ${spaceGrotesk.variable} bg-[#F8F9FE]`}>
        <Header />
        <main className="">
          {children}
        </main>
        {/* 2. Footer component ko main ke bahar yahan add kiya */}
        <Footer /> 
      </body>
    </html>
  );
}