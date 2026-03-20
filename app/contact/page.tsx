'use client';

import { motion } from 'motion/react';

export default function ContactPage() {
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
              Whether you&apos;re a founder looking to create Venture Scale via growth or want to Venture Build in a new white space or an investor seeking high-potential ventures, Maxinor Platform is your partner in building & scaling.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-navy/10 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Name</label>
                  <input type="text" className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Email</label>
                  <input type="email" className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Engagement Type</label>
                  <select className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors">
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
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Company / Startup Name</label>
                <input type="text" className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Attachment</label>
                <input type="file" accept=".pdf,.ppt,.pptx" className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">How can we help?</label>
                <textarea rows={4} className="w-full bg-white border border-navy/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-brand transition-colors" placeholder="Tell us about your venture..."></textarea>
              </div>
              <button className="w-full bg-brand text-white font-medium tracking-wide py-4 rounded-xl hover:bg-brand/90 transition-all duration-300 shadow-[0_0_20px_rgba(243,111,33,0.1)] hover:shadow-[0_0_30px_rgba(243,111,33,0.2)]">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle upward aurora glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}
