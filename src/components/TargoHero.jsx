import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const TargoHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-rubik text-white selection:bg-brand-red selection:text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 mix-blend-normal"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col px-8 md:px-16 lg:px-[64px]">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between py-8">
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M10 10L30 10L25 20L30 30L10 30L15 20L10 10Z"
                fill="currentColor"
              />
              <path
                d="M15 15L25 15L22.5 20L25 25L15 25L17.5 20L15 15Z"
                fill="black"
              />
            </svg>
            <span className="text-2xl font-bold tracking-tighter uppercase">targo</span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest text-white/80">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <button className="targo-clipped-nav bg-brand-red px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95">
            Contact Us
          </button>
        </nav>

        {/* Main Hero Content */}
        <div className="mt-[10vh] max-w-[800px] flex flex-col items-start gap-8">
          <h1 className="text-[42px] md:text-[64px] leading-[1.1] font-bold uppercase tracking-[-4%] md:tracking-[-4%]">
            Swift and Simple <br />
            <span className="text-white">Transport</span>
          </h1>
          
          <button className="targo-clipped bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-[2px] flex items-center gap-3 group hover:brightness-110 transition-all active:scale-95">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Consultation Widget */}
        <div className="mt-auto mb-16 self-start max-w-[340px] md:max-w-[420px]">
          <div className="liquid-glass relative overflow-hidden p-6 md:p-8 flex flex-col gap-6">
            {/* Diagonal Shine Effect */}
            <div className="absolute inset-0 liquid-glass-shine pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                Book a Free Consultation
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Connect with our logistics experts to optimize your supply chain today.
              </p>
            </div>

            <button className="targo-clipped bg-white text-black px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-[1px] flex items-center justify-center gap-3 hover:bg-white/90 transition-all active:scale-95 relative z-10">
              <Phone className="w-4 h-4" />
              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Aesthetic Border Accents */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-white/5" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
    </div>
  );
};

export default TargoHero;
