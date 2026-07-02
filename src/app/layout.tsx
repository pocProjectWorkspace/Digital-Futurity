import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Digital Futurity | Senior Product & Engineering for Founders',
  description: 'Senior product and engineering team that takes founders from a fragile MVP to a secure, scalable, production-grade product. Big-firm seniority, at startup speed and price.',
  keywords: [
    'MVP to production',
    'productionise MVP',
    'product engineering for startups',
    'startup product development',
    'fractional CTO',
    'senior engineering team',
    'MVP development agency',
    'scale a startup product',
    'cloud architecture',
    'AI features for startups',
    'Misk Launchpad',
  ],
  openGraph: {
    title: 'Digital Futurity',
    description: "You've built something. We make it real, from MVP to production-grade.",
    type: 'website',
    siteName: 'Digital Futurity',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Futurity',
    description: "You've built something. We make it real, from MVP to production-grade.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Digital Futurity',
  description:
    'Senior product and engineering team that takes founders from a fragile MVP to a secure, scalable, production-grade product.',
  url: siteUrl,
  email: 'cpsutharsan@gmail.com',
  telephone: '+971562829428',
  areaServed: ['Middle East', 'Asia', 'Worldwide'],
  knowsAbout: [
    'MVP development',
    'Productionising MVPs',
    'Product engineering',
    'Fractional CTO',
    'Cloud architecture',
    'DevOps and reliability',
    'AI product features',
    'Startup scaling',
  ],
  slogan: 'You built something. We make it real.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
