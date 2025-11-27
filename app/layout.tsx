import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'International Tax & Accounting Services | Complete International Tax & Accounting Advisory',
  description: 'Professional U.S. tax and accounting services for non-resident individuals, U.S. expats, and foreign business owners. Specializing in 1040-NR filing, ITIN services, company formation, and international compliance. IRS-registered with 10+ years of experience serving clients in 40+ countries.',
  keywords: ['international tax', 'non-resident tax', 'expat tax', 'ITIN services', 'company formation', 'FBAR filing', 'FEIE', '1040-NR', 'foreign business', 'international accounting'],
  authors: [{ name: 'Complete International Tax & Accounting Advisory' }],
  openGraph: {
    title: 'International Tax & Accounting Services',
    description: 'Professional U.S. tax and accounting services for non-resident individuals, U.S. expats, and foreign business owners.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-light-gray-bg text-navy`}>{children}</body>
    </html>
  );
}
