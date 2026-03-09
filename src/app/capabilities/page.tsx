import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import CapabilitiesContent from '@/components/sections/capabilities/CapabilitiesContent';

export const metadata: Metadata = {
  title: siteMetadata.capabilities.title,
  description: siteMetadata.capabilities.description,
  openGraph: {
    title: siteMetadata.capabilities.og.title,
    description: siteMetadata.capabilities.og.description,
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
