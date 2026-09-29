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

  // Lock body scroll when mobile drawer is open to prevent background scroll interference
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
    { label: '07 CREDENTIALS', href: '#certifications', desc: 'Verified Accreditations' },
    { label: '08 MANIFESTO', href: '#why-build-with-me', desc: 'Engineering Values' },
    { label: '09 CONTACT', href: '#contact', desc: 'Get in Touch' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-ivory/95 backdrop-blur-md border-b border-espresso-200/70 py-3 shadow-sm' 
            : 'bg-ivory/85 backdrop-blur-sm border-b border-espresso-200/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4 sm:gap-6">

            {/* Left Group: Mobile Menu Button (< md) OR Time Widget + Nav Links (>= md) */}
            <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
              {/* Mobile Menu Toggle Button (< 768px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 border border-espresso-300/80 bg-cream/60 active:bg-espresso-950 active:text-ivory text-espresso-950 transition-colors text-[11px] uppercase tracking-[0.2em] font-medium touch-manipulation"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                <span>{mobileMenuOpen ? 'CLOSE' : 'INDEX'}</span>
              </button>

              {/* Live Location / Time (Desktop XL only) */}
              <div className="hidden xl:flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-espresso-600 font-medium pr-6 border-r border-espresso-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>PUNE, IN &nbsp;•&nbsp; {currentTime || '14:30'} IST</span>
              </div>

              {/* Desktop Navigation Links (>= 768px) */}
              <nav className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[10px] lg:text-[11px] tracking-[0.15em] lg:tracking-[0.2em] uppercase font-medium text-espresso-800 hover:text-espresso-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-espresso-900 hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
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
      </header>

      {/* Full-Screen Mobile Navigation Drawer (Rendered OUTSIDE <header> to avoid backdrop-filter trapping) */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[100] bg-ivory flex flex-col animate-fade-in"
          style={{ height: '100dvh' }}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-espresso-200/80 bg-cream/40 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-espresso-800 bg-espresso-950 text-ivory text-[11px] uppercase tracking-[0.2em] font-medium transition-colors touch-manipulation"
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-espresso-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>{currentTime || '14:30'} IST</span>
            </div>

            <div className="font-serif text-lg tracking-[0.14em] font-light text-espresso-950">
              {portfolioData.personal.name}
            </div>
          </div>

          {/* Scrollable Navigation Options Body */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-espresso-200/80 pb-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-espresso-500 font-semibold">
                  DIRECTORY INDEX
                </span>
                <span className="text-[10px] font-mono text-espresso-400">
                  9 SECTIONS
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {allDrawerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="p-3.5 bg-cream/40 border border-espresso-200/80 hover:border-espresso-800 active:bg-cream transition-colors flex items-center justify-between group touch-manipulation"
                  >
                    <div>
                      <span className="font-serif text-xl tracking-[0.05em] text-espresso-950 group-hover:text-espresso-700 transition-colors block">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-espresso-600 font-sans tracking-wide block mt-0.5">
                        {link.desc}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-espresso-400 group-hover:text-espresso-950 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Colophon in Mobile Drawer */}
            <div className="border-t border-espresso-200/80 pt-5 mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-espresso-800 font-medium">
                {portfolioData.personal.name} &nbsp;•&nbsp; {portfolioData.personal.title}
              </p>
              <p className="text-xs text-espresso-500 mt-0.5 font-serif italic">
                {portfolioData.personal.heroHeadline}
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-espresso-400 mt-2">
                VU PUNE MCA '27 &nbsp;•&nbsp; MIT-WPU BCA '25
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
