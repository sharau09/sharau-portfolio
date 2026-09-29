import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import SelectedWork from './components/SelectedWork';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import WhyBuildWithMe from './components/WhyBuildWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal-900 font-sans selection:bg-espresso-200 selection:text-espresso-950">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Magazine Layout Flow */}
      <main>
        {/* Cover / Hero */}
        <Hero />

        {/* 01 — About */}
        <About />

        {/* 02 — What I Do */}
        <WhatIDo />

        {/* 03 — Selected Work */}
        <SelectedWork />

        {/* 04 — Skills */}
        <Skills />

        {/* 05 — Experience */}
        <Experience />

        {/* 06 — Education */}
        <Education />

        {/* 07 — Certifications */}
        <Certifications />

        {/* 08 — Why Build With Me */}
        <WhyBuildWithMe />

        {/* 09 — Contact */}
        <Contact onNotify={showToast} />
      </main>

      {/* 10 — Footer */}
      <Footer />

      {/* Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}
    </div>
  );
}
