'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5YKcdTq8qwvSITIHlKf6PpFHQqbPk4XZEmhIf2RE-0_IvnuoKvHc5B79L2Cy1MFhm/exec';

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

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        redirect: 'follow',
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
    <div className="pt-32 pb-32 px-6 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6 text-navy"
            >
              Contact <span className="text-brand">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-navy/70 font-light"
            >
              Whether you are a founder looking to scale your venture, a SMEs seeking to unlock growth, corporates who want to drive innovation, investors who are seeking a credible investment platform, Maxinor is your partner.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="bg-white p-12 rounded-[2rem] border border-navy/10 shadow-sm text-center">
                <div className="text-5xl mb-6">🎉</div>
                <h2 className="text-2xl font-display font-medium text-navy mb-3">Thank you!</h2>
                <p className="text-navy/70 font-light">We&apos;ve received your message and will be in touch soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-8 py-3 bg-brand text-warm-white rounded-full font-medium hover:bg-brand/90 transition-all"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-navy/10 shadow-sm"
                onSubmit={handleSubmit}
              >
                {status === 'error' ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-navy">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-navy">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-navy">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-engagement" className="text-sm font-medium text-navy">I am a...</label>
                    <select
                      id="contact-engagement"
                      name="engagementType"
                      className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                    >
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
                  <label htmlFor="contact-company" className="text-sm font-medium text-navy">My Company / Startup</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-navy">I am looking for..</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand text-warm-white font-semibold tracking-wide py-4 rounded-full hover:bg-brand/90 transition-all duration-300 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Share'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}
