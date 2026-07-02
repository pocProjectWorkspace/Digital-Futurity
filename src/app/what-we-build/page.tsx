import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import WhatWeBuildContent from '@/components/sections/what-we-build/WhatWeBuildContent';

export const metadata: Metadata = {
  title: siteMetadata.whatWeBuild.title,
  description: siteMetadata.whatWeBuild.description,
  openGraph: {
    title: siteMetadata.whatWeBuild.og.title,
    description: siteMetadata.whatWeBuild.og.description,
  },
};

export default function WhatWeBuildPage() {
  return <WhatWeBuildContent />;
}
