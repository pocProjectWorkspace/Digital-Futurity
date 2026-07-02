'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Clock, Lock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  message: string;
  company_website: string; // honeypot: hidden from users
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setSubmitError(body?.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError('Network error. Please try again or email us directly.');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s build the <span className="text-cyan">real thing.</span>
          </>
        }
        subheading="Whether you're shaping a new product, productionising a shaky MVP, or you need senior delivery muscle, tell us where you are and we'll tell you the fastest way forward."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact details */}
            <AnimatedReveal>
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-cyan shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:digitalfuturity@outlook.com" className="text-silver hover:text-cyan transition-colors">
                      digitalfuturity@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cyan shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Response Time</h4>
                    <p className="text-silver">We typically respond within 1 business day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 text-cyan shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Confidential</h4>
                    <p className="text-silver">What you share stays between us, always.</p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            {/* Form */}
            <AnimatedReveal delay={0.1}>
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="glass rounded-2xl p-8 md:p-10 text-center">
                    <h3 className="font-heading text-2xl font-bold text-white mb-4">Thank you.</h3>
                    <p className="text-silver text-lg">
                      We&apos;ll be in touch within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 md:p-10 space-y-6">
                    {/* Honeypot: hidden from humans, catches bots */}
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      {...register('company_website')}
                      className="hidden"
                    />
                    <div>
                      <label htmlFor="name" className="block text-sm text-white mb-2">Name *</label>
                      <input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-sm text-white mb-2">Organisation</label>
                      <input
                        id="organisation"
                        {...register('organisation')}
                        className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-white mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' }
                        })}
                        className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-white mb-2">Phone</label>
                      <input
                        id="phone"
                        {...register('phone')}
                        className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="Your phone number (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-white mb-2">What are you building? *</label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register('message', { required: 'Please tell us how we can help' })}
                        className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder:text-silver/50 focus:outline-none focus:border-cyan/50 transition-colors resize-none"
                        placeholder="Tell us about your product, where you're stuck, or what you need built..."
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-sm" role="alert">{submitError}</p>
                    )}

                    <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
