import Hero from '@/components/sections/home/Hero';
import TrustStrip from '@/components/sections/home/TrustStrip';
import ProductionizationProblem from '@/components/sections/home/ProductionizationProblem';
import WhyUs from '@/components/sections/home/WhyUs';
import DeliveryLifecycle from '@/components/sections/home/DeliveryLifecycle';
import WhatWeBuildStrip from '@/components/sections/home/WhatWeBuildStrip';
import HomeCTA from '@/components/sections/home/HomeCTA';
import GlowDivider from '@/components/ui/GlowDivider';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductionizationProblem />
      <GlowDivider />
      <WhyUs />
      <GlowDivider />
      <DeliveryLifecycle />
      <GlowDivider />
      <WhatWeBuildStrip />
      <GlowDivider />
      <HomeCTA />
    </>
  );
}
