'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, CheckCircle2, ChevronDown, Paperclip, X } from 'lucide-react';

const ACCEPTED_FILE_TYPES = '.pdf,.ppt,.pptx,.doc,.docx';
const MAX_FILE_SIZE_MB = 10;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  engagementType: string;
  company: string;
  message: string;
  submittedAt: string;
  fileName?: string;
  fileMimeType?: string;
  fileBase64?: string;
};

type ContactSubmissionResult = {
  ok?: boolean;
  message?: string;
  uploadError?: string | null;
};

const engagementOptions = [
  { label: 'Founder / Startup', value: 'Founder' },
  { label: 'Investor', value: 'Investor' },
  { label: 'CXO / Operator', value: 'CXO / Operator' },
  { label: 'Job Seeker', value: 'Job Seeker' },
  { label: 'Other', value: 'Other' },
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function RequiredMark() {
  return <span className="ml-0.5 text-red-600" aria-hidden="true">*</span>;
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const labelClass = 'text-navy/72';
  const optionalClass = 'text-navy/40';
  const inputClass =
    'contact-control h-10 w-full rounded-sm border border-navy/18 bg-transparent px-3.5 text-sm text-navy outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-current placeholder:opacity-35 hover:border-navy/35 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15 disabled:cursor-not-allowed disabled:opacity-50';

  const clearError = () => {
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setAttachedFile(null);
      setErrorMessage(`File is too large. Please choose a file under ${MAX_FILE_SIZE_MB}MB.`);
      setStatus('error');
      event.target.value = '';
      return;
    }
    setAttachedFile(file);
    clearError();
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus('submitting');
    setErrorMessage('');

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

      if (attachedFile) {
        payload.fileBase64 = await fileToBase64(attachedFile);
        payload.fileName = attachedFile.name;
        payload.fileMimeType = attachedFile.type || 'application/octet-stream';
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ContactSubmissionResult;

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? 'Submission failed. Please try again.');
      }
      if (result.uploadError) console.warn('Drive upload error:', result.uploadError);

      setStatus('success');
      setAttachedFile(null);
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
    }
  };

  const surfaceClass =
    'border-y border-navy/10 bg-white/45 py-6 sm:px-6 lg:px-7 lg:py-5 xl:px-9 xl:py-7';

  if (status === 'success') {
    return (
      <motion.div
        initial={false}
        className={`${surfaceClass} flex min-h-[340px] items-center justify-center text-center`}
        role="status"
      >
        <div>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Message received</p>
          <h2 className="mt-2 font-display text-3xl font-medium text-navy">We&apos;ll be in touch.</h2>
          <p className="mt-3 text-sm text-navy/55">Your note is now with the Maxinor team.</p>
          <button type="button" onClick={() => setStatus('idle')} className="mt-7 text-sm font-semibold text-brand hover:underline">
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  const fieldLabel = 'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 group-focus-within:text-brand';

  return (
    <motion.div
      initial={false}
      className={surfaceClass}
    >
      <form onSubmit={handleSubmit} onChange={clearError} aria-label="Contact Maxinor" noValidate>
        <div className="mb-4 flex items-end justify-between gap-4 border-b border-current/10 pb-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">Start a conversation</p>
            <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-navy sm:text-2xl">
              Tell us where you&apos;re headed.
            </h2>
          </div>
          <p className="hidden text-right text-[10px] leading-relaxed text-navy/40 sm:block">
            Required fields<br />are marked <span className="text-red-500">*</span>
          </p>
        </div>

        {status === 'error' && (
          <div className="mb-3 border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-700" role="alert" aria-live="assertive">
            {errorMessage}
          </div>
        )}

        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
          <div className="group">
            <label htmlFor="contact-name" className={`${fieldLabel} ${labelClass}`}>Name <RequiredMark /></label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={inputClass} required aria-required="true" disabled={status === 'submitting'} />
          </div>
          <div className="group">
            <label htmlFor="contact-email" className={`${fieldLabel} ${labelClass}`}>Email <RequiredMark /></label>
            <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" className={inputClass} required aria-required="true" disabled={status === 'submitting'} />
          </div>
          <div className="group">
            <label htmlFor="contact-phone" className={`${fieldLabel} ${labelClass}`}>Phone number <RequiredMark /></label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" className={inputClass} required aria-required="true" disabled={status === 'submitting'} />
          </div>
          <div className="group">
            <label htmlFor="contact-engagement" className={`${fieldLabel} ${labelClass}`}>I am a... <RequiredMark /></label>
            <div className="relative">
              <select id="contact-engagement" name="engagementType" defaultValue="" className={`${inputClass} appearance-none pr-10`} required aria-required="true" disabled={status === 'submitting'}>
                <option value="" disabled>Select one</option>
                {engagementOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/45" aria-hidden="true" />
            </div>
          </div>
          <div className="group">
            <label htmlFor="contact-company" className={`${fieldLabel} ${labelClass}`}>My company / venture <span className={`normal-case tracking-normal ${optionalClass}`}>(Optional)</span></label>
            <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Company or venture name" className={inputClass} disabled={status === 'submitting'} />
          </div>
          <div className="group">
            <span id="attachment-label" className={`${fieldLabel} ${labelClass}`}>Attachment <span className={`normal-case tracking-normal ${optionalClass}`}>(Optional)</span></span>
            <span id="attachment-help" className="sr-only">Accepted formats: PDF, PPT, PPTX, DOC, or DOCX. Maximum size 10MB.</span>
            <input ref={fileInputRef} id="contact-attachment" name="attachment" type="file" accept={ACCEPTED_FILE_TYPES} className="sr-only" onChange={handleFileChange} disabled={status === 'submitting'} aria-labelledby="attachment-label attachment-help" />
            {attachedFile ? (
              <div className={`${inputClass} flex items-center gap-2`}>
                <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">{attachedFile.name}</span>
                <button type="button" onClick={removeFile} className="rounded-sm p-1 opacity-50 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-brand" aria-label={`Remove ${attachedFile.name}`}>
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <label htmlFor="contact-attachment" className={`${inputClass} flex cursor-pointer items-center gap-2 hover:border-brand hover:text-brand`}>
                <Paperclip className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Attach file</span>
                <span className="ml-auto text-[9px] opacity-45 sm:text-[10px]">PDF, PPT or DOC · 10MB</span>
              </label>
            )}
          </div>
          <div className="group sm:col-span-2">
            <label htmlFor="contact-message" className={`${fieldLabel} ${labelClass}`}>I am looking for... <RequiredMark /></label>
            <textarea id="contact-message" name="message" rows={2} placeholder="A sentence or two about the outcome you need." className={`${inputClass} h-[62px] resize-none py-2.5 leading-relaxed`} required aria-required="true" disabled={status === 'submitting'} />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group/button mt-4 inline-flex h-12 w-full items-center justify-between rounded-sm bg-navy px-5 text-sm font-semibold uppercase tracking-[0.14em] text-warm-white shadow-[0_10px_25px_rgba(11,31,59,0.12)] transition-[background-color,color,transform,box-shadow] duration-200 hover:bg-brand hover:shadow-[0_12px_30px_rgba(243,111,33,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{status === 'submitting' ? 'Sending message...' : 'Send message'}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
        </button>
      </form>
    </motion.div>
  );
}
