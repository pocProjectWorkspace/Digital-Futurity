import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import ProofPointsContent from '@/components/sections/proof-points/ProofPointsContent';

export const metadata: Metadata = {
  title: siteMetadata.proofPoints.title,
  description: siteMetadata.proofPoints.description,
  openGraph: {
    title: siteMetadata.proofPoints.og.title,
    description: siteMetadata.proofPoints.og.description,
  },
};

export default function ProofPointsPage() {
  return <ProofPointsContent />;
}
