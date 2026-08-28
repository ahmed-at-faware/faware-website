import React from 'react';
import fawareLogo from '../assets/logo/faware_logo.png';

// Commenting out the old imports as requested
/*
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Features from './components/Features'
import Preview from './components/Preview'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
*/

export default function App() {
  return (
    <>
      {/* 
      --- Old Application Content (Commented Out) ---
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Preview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      ----------------------------------------------
      */}

      {/* New Coming Soon Section following the neo-brutalist old design */}
      <div className="flex flex-col min-h-screen items-center justify-center p-6 bg-background text-foreground overflow-hidden font-sans antialiased">

        <div className="w-full max-w-xl p-10 md:p-14 rounded-[2rem] bg-card border-2 border-foreground shadow-[8px_8px_0_0_#0a0a0a] text-center">

          <img
            src={fawareLogo}
            alt="Faware Logo"
            className="w-32 md:w-40 h-auto mx-auto mb-10"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Coming Soon
          </h1>

          <p className="text-lg text-foreground/80 mb-10 leading-relaxed font-medium">
            We're building a new way to elevate your financial awareness and decisions.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full sm:w-auto px-6 py-4 rounded-full bg-background border-2 border-foreground text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground transition-all font-medium shadow-[4px_4px_0_0_#0a0a0a]"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 w-full sm:w-auto rounded-full border-2 border-foreground bg-primary text-primary-foreground font-bold hover:shadow-[4px_4px_0_0_#0a0a0a] hover:-translate-y-1 transition-all whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>

          <div className="mt-10 text-sm font-semibold text-foreground/60 uppercase tracking-wider">
            Be the first to know when we launch
          </div>
        </div>

      </div>
    </>
  );
}
