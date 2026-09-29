import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(new Date());
        setCurrentTime(timeString);
      } catch {
        setCurrentTime('14:30');
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 10000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: '01 PROFILE', href: '#profile' },
    { label: '02 FOCUS', href: '#what-i-do' },
    { label: '03 WORK', href: '#work' },
    { label: '04 SKILLS', href: '#skills' },
    { label: '05 CAREER', href: '#experience' },
    { label: '06 CONTACT', href: '#contact' },
  ];

  const allDrawerLinks = [
    { label: '01 PROFILE', href: '#profile', desc: 'Background & Philosophy' },
    { label: '02 FOCUS', href: '#what-i-do', desc: 'ML, GenAI & Automation' },
    { label: '03 WORK', href: '#work', desc: '7 AI/ML Projects' },
    { label: '04 SKILLS', href: '#skills', desc: 'Technical Toolkit' },
    { label: '05 CAREER', href: '#experience', desc: 'Cognifyz ML Internship' },
    { label: '06 EDUCATION', href: '#education', desc: 'VU Pune & MIT-WPU' },
    { label: '07 CERTIFICATIONS', href: '#certifications', desc: 'Verified Credentials' },
    { label: '08 MANIFESTO', href: '#why-build-with-me', desc: 'Engineering Values' },
    { label: '09 CONTACT', href: '#contact', desc: 'Get in Touch' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-ivory/95 backdrop-blur-md border-b border-espresso-200/70 py-3 shadow-sm' 
          : 'bg-ivory/85 backdrop-blur-sm border-b border-espresso-200/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6">

          {/* Left Group: Mobile Menu Button (< lg) OR Time Widget + Nav Links (>= lg) */}
          <div className="flex items-center gap-6 xl:gap-8">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center gap-2 px-3 py-1.5 border border-espresso-300/80 bg-cream/40 text-espresso-950 hover:bg-espresso-950 hover:text-ivory transition-all duration-300 text-[11px] uppercase tracking-[0.2em] font-medium"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
              <span>{mobileMenuOpen ? 'CLOSE' : 'INDEX'}</span>
            </button>

            {/* Live Location / Time (Desktop XL only to ensure ample spacing across all viewports) */}
            <div className="hidden xl:flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-espresso-600 font-medium pr-6 border-r border-espresso-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>PUNE, IN &nbsp;•&nbsp; {currentTime || '14:30'} IST</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.2em] uppercase font-medium text-espresso-800 hover:text-espresso-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-espresso-900 hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Group: Brand Identity exclusively anchored in the top-right corner */}
          <div className="flex items-center shrink-0">
            <a 
              href="#" 
              className="group flex items-baseline gap-1.5 sm:gap-2.5 whitespace-nowrap text-right"
              title="SHARAU — AI/ML Engineer"
            >
              <span className="font-serif text-lg sm:text-2xl lg:text-[26px] tracking-[0.14em] sm:tracking-[0.16em] font-light text-espresso-950 group-hover:text-espresso-700 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-espresso-300 font-light text-xs sm:text-base select-none">|</span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] text-espresso-700 font-medium uppercase">
                AI / ML<span className="hidden xs:inline sm:inline"> ENGINEER</span>
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-ivory/98 backdrop-blur-xl z-40 border-t border-espresso-200/80 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto animate-fade-in">
          <div className="flex flex-col space-y-4 pt-2">
            <div className="flex items-center justify-between border-b border-espresso-200/80 pb-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-espresso-500 font-semibold">
                EDITORIAL DIRECTORY
              </span>
              <span className="text-[10px] font-mono text-espresso-400">
                PUNE, IN &nbsp;•&nbsp; {currentTime || '14:30'} IST
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {allDrawerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3.5 bg-cream/40 border border-espresso-200/60 hover:border-espresso-800 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="font-serif text-lg tracking-[0.06em] text-espresso-950 group-hover:text-espresso-700 transition-colors block">
                      {link.label}
                    </span>
                    <span className="text-[10px] text-espresso-500 font-sans tracking-wide block mt-0.5">
                      {link.desc}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-espresso-400 group-hover:text-espresso-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-espresso-200/80 pt-6 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-espresso-800 font-medium">
                  {portfolioData.personal.name} &nbsp;•&nbsp; {portfolioData.personal.title}
                </p>
                <p className="text-xs text-espresso-500 mt-0.5 font-serif italic">
                  {portfolioData.personal.heroHeadline}
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-espresso-400">
                VU PUNE MCA '27 &nbsp;•&nbsp; MIT-WPU BCA '25
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
