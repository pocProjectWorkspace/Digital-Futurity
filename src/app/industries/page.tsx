import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import IndustriesContent from '@/components/sections/industries/IndustriesContent';

export const metadata: Metadata = {
  title: siteMetadata.industries.title,
  description: siteMetadata.industries.description,
  openGraph: {
    title: siteMetadata.industries.og.title,
    description: siteMetadata.industries.og.description,
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
