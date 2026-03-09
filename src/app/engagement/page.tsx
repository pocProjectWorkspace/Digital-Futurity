import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import EngagementContent from '@/components/sections/engagement/EngagementContent';

export const metadata: Metadata = {
  title: siteMetadata.engagement.title,
  description: siteMetadata.engagement.description,
  openGraph: {
    title: siteMetadata.engagement.og.title,
    description: siteMetadata.engagement.og.description,
  },
};

export default function EngagementPage() {
  return <EngagementContent />;
}
