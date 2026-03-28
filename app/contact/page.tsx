'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const CONTACT_API_PATH = '/api/contact';

const pagePadding = 'relative overflow-hidden bg-warm-white px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:pb-32';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'text-base font-light leading-relaxed text-navy/70 md:text-xl';
const panelClass = 'rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-8 md:p-12';
const inputClass =
  'w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy transition-colors focus:border-brand focus:outline-none';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] disabled:cursor-not-allowed disabled:opacity-70';
const formButtonClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] disabled:cursor-not-allowed disabled:opacity-70';

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  engagementType: string;
  company: string;
  message: string;
  submittedAt: string;
};

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const payload: ContactPayload = {
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        engagementType: String(formData.get('engagementType') ?? ''),
        company: String(formData.get('company') ?? ''),
        message: String(formData.get('message') ?? ''),
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(CONTACT_API_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      let result: { ok?: boolean; message?: string } = {};

      try {
        result = JSON.parse(raw);
      } catch {
        throw new Error('Submission failed. Please try again.');
      }

      if (!result.ok) {
        throw new Error(result.message ?? 'Submission failed. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
    }
  };

  return (
    <div className={pagePadding}>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[340px] -translate-x-1/2 rounded-full bg-brand/5 blur-[80px] md:h-[400px] md:w-[800px] md:blur-[100px]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-14 text-center md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={introTitle}
            >
              Contact <span className="text-brand">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={introBody}
            >
              Whether you are a founder looking to scale your venture, an SME seeking growth, a corporate
              building innovation, or an investor looking for a credible platform, Maxinor is ready to partner
              with you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className={`${panelClass} text-center`}>
                <div className="mb-6 flex justify-center">
                  <CheckCircle2 className="h-14 w-14 text-brand md:h-16 md:w-16" />
                </div>
                <h2 className="mb-3 text-2xl font-display font-medium text-navy md:text-3xl">Thank you!</h2>
                <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-navy/70 md:text-lg">
                  We&apos;ve received your message and will be in touch soon.
                </p>
                <div className="mt-8 flex justify-center">
                  <button onClick={() => setStatus('idle')} className={primaryButtonClass}>
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form className={`${panelClass} space-y-5 md:space-y-6`} onSubmit={handleSubmit}>
                {status === 'error' ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-navy">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-navy">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={inputClass}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-navy">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-engagement" className="text-sm font-medium text-navy">
                      I am a...
                    </label>
                    <select id="contact-engagement" name="engagementType" className={inputClass}>
                      <option value="">Select...</option>
                      <option value="Founder">Founder</option>
                      <option value="Investor">Investor</option>
                      <option value="CXO / Operator">CXO / Operator</option>
                      <option value="Job Seeker">Job Seeker</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-sm font-medium text-navy">
                    My Company / Startup
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className={inputClass}
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-navy">
                    I am looking for...
                  </label>
                  <textarea id="contact-message" name="message" rows={5} className={inputClass} />
                </div>

                <button type="submit" disabled={status === 'submitting'} className={formButtonClass}>
                  {status === 'submitting' ? 'Sending...' : 'Share'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
