import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/constants';
import ContactContent from '@/components/sections/contact/ContactContent';

export const metadata: Metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  openGraph: {
    title: siteMetadata.contact.og.title,
    description: siteMetadata.contact.og.description,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
