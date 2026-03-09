import Hero from '@/components/sections/home/Hero';
import TrustStrip from '@/components/sections/home/TrustStrip';
import WhyUs from '@/components/sections/home/WhyUs';
import DeliveryLifecycle from '@/components/sections/home/DeliveryLifecycle';
import CapabilitiesSnapshot from '@/components/sections/home/CapabilitiesSnapshot';
import BestFitEngagements from '@/components/sections/home/BestFitEngagements';
import IndustriesStrip from '@/components/sections/home/IndustriesStrip';
import HomeCTA from '@/components/sections/home/HomeCTA';
import GlowDivider from '@/components/ui/GlowDivider';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyUs />
      <GlowDivider />
      <DeliveryLifecycle />
      <GlowDivider />
      <CapabilitiesSnapshot />
      <BestFitEngagements />
      <GlowDivider />
      <IndustriesStrip />
      <GlowDivider />
      <HomeCTA />
    </>
  );
}
