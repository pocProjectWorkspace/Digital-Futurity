import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import AboutContent from '@/components/sections/about/AboutContent';

export const metadata: Metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  openGraph: {
    title: siteMetadata.about.og.title,
    description: siteMetadata.about.og.description,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
