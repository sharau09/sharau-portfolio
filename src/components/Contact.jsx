import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { submitContactInquiry, isFirebaseConfigured } from '../services/firebase';

export default function Contact({ onNotify }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.socials.email);
    setCopiedEmail(true);
    if (onNotify) onNotify(`Email address ${personal.socials.email} copied to clipboard.`);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before transmission.');
      return;
    }

    // Basic email pattern verification
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitContactInquiry(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      const notice = res.mode === 'firestore'
        ? 'Your inquiry has been stored directly in Cloud Firestore.'
        : 'Your message has been archived successfully and Sharau has been notified.';

      if (onNotify) onNotify(notice);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg('An unexpected error occurred. Please reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-ivory border-t border-espresso-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-200/80 pb-6 mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-2">
              09 — INQUIRY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-espresso-950 tracking-tight">
              Let's Create Something Intelligent.
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-700/80 max-w-xs md:text-right">
            <span>DIRECT CORRESPONDENCE</span>
            <p className="font-serif italic tracking-normal text-xs text-espresso-600 mt-1">
              "Available for forward-thinking AI roles & collaborative research."
            </p>
          </div>
        </div>

        {/* Form and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Socials */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
                Initiate Dialogue
              </h3>
              <p className="text-sm sm:text-base text-espresso-800 font-light leading-relaxed">
                Whether you're developing high-throughput ML pipelines, orchestrating multi-agent systems, or exploring foundational AI research, I welcome thoughtful technical inquiries.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 bg-cream/70 border border-espresso-200/90 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block">
                DIRECT ELECTRONIC MAIL
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personal.socials.email}`}
                  className="font-serif text-base sm:text-lg lg:text-xl text-espresso-950 hover:text-espresso-700 transition-colors break-all sm:break-normal"
                >
                  {personal.socials.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 border border-espresso-300 hover:bg-espresso-100 transition-colors text-espresso-800 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-espresso-600 font-light">
                Typically responding within 24 business hours.
              </p>
            </div>

            {/* Social Links List */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-4">
                DIGITAL INDEX & NETWORKS
              </span>

              <div className="space-y-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-ivory border border-espresso-200 hover:border-espresso-800 hover:shadow-editorial transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-espresso-800 shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] font-medium text-espresso-950 block">
                        GITHUB
                      </span>
                      <span className="text-[11px] text-espresso-500 font-light">
                        Repositories & Open Source Notebooks
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-espresso-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-ivory border border-espresso-200 hover:border-espresso-800 hover:shadow-editorial transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-espresso-800 shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] font-medium text-espresso-950 block">
                        LINKEDIN
                      </span>
                      <span className="text-[11px] text-espresso-500 font-light">
                        Professional Network & Endorsements
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-espresso-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </a>

                <a
                  href={`mailto:${personal.socials.email}`}
                  className="flex items-center justify-between p-4 bg-ivory border border-espresso-200 hover:border-espresso-800 hover:shadow-editorial transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-espresso-800 shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] font-medium text-espresso-950 block">
                        EMAIL DISPATCH
                      </span>
                      <span className="text-[11px] text-espresso-500 font-light">
                        Direct Inquiries & Project Briefs
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-espresso-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </a>
              </div>
            </div>

            {/* Cloud & Backend Readiness Indicator */}
            <div className="pt-2 text-[10px] uppercase tracking-[0.2em] text-espresso-500 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isFirebaseConfigured ? 'bg-emerald-600' : 'bg-amber-600'}`}></span>
              <span>
                {isFirebaseConfigured 
                  ? 'FIREBASE FIRESTORE SYNC: ACTIVE' 
                  : 'DUAL-MODE SECURE LOCAL ARCHIVE READY'}
              </span>
            </div>

          </div>

          {/* Right Column: High-Fashion Editorial Contact Form */}
          <div className="lg:col-span-7 bg-cream/30 border border-espresso-200/90 p-6 sm:p-10 lg:p-12 shadow-editorial">
            
            <div className="border-b border-espresso-200/80 pb-6 mb-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-500 font-semibold block mb-1">
                TRANSMISSION FORM // 2026
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
                Dispatch an Editorial Inquiry
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 bg-ivory border border-espresso-300 text-center space-y-4 animate-fade-in">
                <Sparkles className="w-8 h-8 text-bronze-dark mx-auto" />
                <h4 className="font-serif text-2xl text-espresso-950">
                  Message Transmitted Successfully
                </h4>
                <p className="text-sm text-espresso-700 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been formally recorded, and I will review your correspondence shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-espresso-950 text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-espresso-800 transition-colors"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-[11px] uppercase tracking-[0.22em] text-espresso-800 font-medium mb-2"
                  >
                    Your Name <span className="text-espresso-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Eleanor Vance"
                    required
                    className="w-full bg-ivory border border-espresso-200/90 px-4 py-3.5 text-base sm:text-sm text-espresso-950 placeholder:text-espresso-400 focus:outline-none focus:border-espresso-900 transition-colors font-light"
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[11px] uppercase tracking-[0.22em] text-espresso-800 font-medium mb-2"
                  >
                    Your Email <span className="text-espresso-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. eleanor@vance-ai.org"
                    required
                    className="w-full bg-ivory border border-espresso-200/90 px-4 py-3.5 text-base sm:text-sm text-espresso-950 placeholder:text-espresso-400 focus:outline-none focus:border-espresso-900 transition-colors font-light"
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-[11px] uppercase tracking-[0.22em] text-espresso-800 font-medium mb-2"
                  >
                    Message & Project Scope <span className="text-espresso-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your initiative, engineering requirements, or research scope..."
                    required
                    className="w-full bg-ivory border border-espresso-200/90 px-4 py-3.5 text-base sm:text-sm text-espresso-950 placeholder:text-espresso-400 focus:outline-none focus:border-espresso-900 transition-colors font-light resize-none"
                  />
                </div>

                {/* Error Banner if any */}
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-espresso-950 text-ivory text-xs uppercase tracking-[0.25em] font-medium hover:bg-espresso-800 disabled:bg-espresso-700 transition-all duration-300 shadow-editorial"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING CORRESPONDENCE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-espresso-500 font-light">
                    SECURE ENCRYPTION · PROMPT DELIBERATION · CONFIDENTIAL
                  </span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
