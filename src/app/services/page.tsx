import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import ServicesContent from '@/components/sections/services/ServicesContent';

export const metadata: Metadata = {
  title: siteMetadata.services.title,
  description: siteMetadata.services.description,
  openGraph: {
    title: siteMetadata.services.og.title,
    description: siteMetadata.services.og.description,
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
