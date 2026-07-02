import { navLinks } from '@/lib/constants';

const capabilityLinks = [
  'Launch',
  'Productionise',
  'Grow',
  'Scale & Secure',
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                DIGITAL FUTURITY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Digital product & engineering for the future
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-silver text-sm hover:text-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {capabilityLinks.map((cap) => (
                <li key={cap}>
                  <a
                    href="/services"
                    className="text-silver text-sm hover:text-cyan transition-colors duration-200"
                  >
                    {cap}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:digitalfuturity@outlook.com"
                  className="text-silver text-sm hover:text-cyan transition-colors duration-200"
                >
                  digitalfuturity@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver/60 text-sm">
            &copy; 2026 Digital Futurity. All rights reserved.
          </p>
          <a href="/privacy" className="text-silver/60 text-sm hover:text-cyan transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
