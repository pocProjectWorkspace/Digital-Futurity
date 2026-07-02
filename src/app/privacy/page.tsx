import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Digital Futurity',
  description: 'How Digital Futurity collects, uses, and protects the information you share with us.',
};

const EFFECTIVE_DATE = '2 July 2026';

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-silver/70 text-sm mb-12">Effective {EFFECTIVE_DATE}</p>

        <div className="space-y-10 text-silver leading-relaxed">
          <div>
            <p>
              This policy explains how Digital Futurity (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
              the information you share when you contact us through this website. We keep it simple:
              we only collect what you choose to send us, we use it only to respond, and we don&apos;t
              sell it.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">What we collect</h2>
            <p>
              When you submit our contact form, we collect the details you provide: your name, and
              optionally your organisation, email address, phone number, and the message you send.
              We do not require you to create an account, and we don&apos;t collect more than you
              choose to give us.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">How we use it</h2>
            <p>
              We use your information solely to respond to your enquiry and to follow up about a
              potential engagement. We do not use it for advertising, and we do not sell or rent it
              to anyone.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">Who we share it with</h2>
            <p>
              To deliver your message to us, the form uses a third-party email provider
              (Resend, resend.com), which processes the submission on our behalf. Aside from
              service providers strictly necessary to operate the site and respond to you, we do
              not share your information with third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">How long we keep it</h2>
            <p>
              We retain enquiry details only as long as needed to respond and to maintain a record
              of our correspondence. You can ask us to delete your information at any time.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">Cookies &amp; analytics</h2>
            <p>
              This site does not use tracking or advertising cookies. If we add privacy-respecting
              analytics in future, we will update this policy first.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of the information you&apos;ve
              shared with us. To do so, email us at the address below and we&apos;ll action it
              promptly.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Questions about this policy, or requests about your data, can be sent to{' '}
              <a href="mailto:digitalfuturity@outlook.com" className="text-cyan hover:underline">
                digitalfuturity@outlook.com
              </a>
              .
            </p>
          </div>

          <div className="border-t border-border pt-8 text-silver/60 text-sm">
            <p>
              This is a general privacy notice provided for transparency. If your use of Digital
              Futurity&apos;s services is subject to a specific data-processing or confidentiality
              agreement, the terms of that agreement take precedence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
