'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { clientBasePath, withBasePath } from '@/lib/site-path';

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  engagementType: string;
  company: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues | 'attachment', string>>;
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  engagementType: '',
  company: '',
  message: '',
};

export default function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const submitUrl = withBasePath('/api/contact', clientBasePath);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;
      setValues((current) => ({ ...current, [field]: nextValue }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      if (status !== 'idle') {
        setStatus('idle');
        setFeedbackMessage('');
      }
    };

  const handleAttachmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0] ?? null;
    setAttachment(nextFile);
    setErrors((current) => ({ ...current, attachment: undefined }));
    if (status !== 'idle') {
      setStatus('idle');
      setFeedbackMessage('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');
    setErrors({});

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('engagementType', values.engagementType);
    formData.append('company', values.company);
    formData.append('message', values.message);

    if (attachment) {
      formData.append('attachment', attachment);
    }

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      let result: {
        ok?: boolean;
        message?: string;
        errors?: ContactFormErrors;
      } = {};

      try {
        result = JSON.parse(responseText);
      } catch {
        result = {};
      }

      if (!response.ok || !result.ok) {
        setStatus('error');
        setFeedbackMessage(
          result.message ?? 'We could not submit your inquiry. Please try again in a moment.',
        );
        setErrors(result.errors ?? {});
        return;
      }

      setStatus('success');
      setFeedbackMessage(result.message ?? 'Your inquiry has been submitted successfully.');
      setValues(initialValues);
      setAttachment(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('We could not submit your inquiry. Please try again in a moment.');
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
              Whether you&apos;re a founder looking to create Venture Scale via growth or want to Venture
              Build in a new white space or an investor seeking high-potential ventures, Maxinor Platform
              is your partner in building &amp; scaling.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-navy/10 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-navy">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={values.name}
                    onChange={handleChange('name')}
                    className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-brand">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-navy">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-brand">{errors.email}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-sm font-medium text-navy">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange('phone')}
                    className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-sm text-brand">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-engagement-type" className="text-sm font-medium text-navy">
                    Engagement Type
                  </label>
                  <select
                    id="contact-engagement-type"
                    value={values.engagementType}
                    onChange={handleChange('engagementType')}
                    className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                  >
                    <option value="">Select Engagement Type</option>
                    <option value="career">Career</option>
                    <option value="investor">Investor</option>
                    <option value="venture-scale">Venture Scale</option>
                    <option value="venture-build">Venture Build</option>
                    <option value="strategic-partnership">Strategic Partnership</option>
                    <option value="mentor">Mentor</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.engagementType && <p className="text-sm text-brand">{errors.engagementType}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-company" className="text-sm font-medium text-navy">
                  Company / Startup Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={values.company}
                  onChange={handleChange('company')}
                  className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                  placeholder="Acme Corp"
                />
                {errors.company && <p className="text-sm text-brand">{errors.company}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-attachment" className="text-sm font-medium text-navy">
                  Attachment
                </label>
                <input
                  id="contact-attachment"
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  onChange={handleAttachmentChange}
                  className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20"
                />
                <p className="text-sm text-navy/60">Optional. Accepted formats: PDF, PPT, PPTX.</p>
                {errors.attachment && <p className="text-sm text-brand">{errors.attachment}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-navy">
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange('message')}
                  className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors"
                  placeholder="Tell us about your venture..."
                />
                {errors.message && <p className="text-sm text-brand">{errors.message}</p>}
              </div>

              {feedbackMessage && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'bg-brand/10 text-navy border border-brand/20'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {feedbackMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-brand text-white font-medium tracking-wide py-4 rounded-xl hover:bg-brand/90 transition-all duration-300 shadow-[0_0_20px_rgba(243,111,33,0.1)] hover:shadow-[0_0_30px_rgba(243,111,33,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}
