import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustedBrands from "./TrustedBrands";
import Stats from "./Stats";
import Services from "./Services";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

// CTA Component inline to avoid import issues
function CTA() {
  const handleScheduleClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 overflow-hidden group">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/50 animate-slide-right"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-white/50 animate-slide-left"></div>
          </div>
          <div className="relative z-10 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help you achieve your digital marketing
              goals
            </p>
            <button
              onClick={handleScheduleClick}
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-cyan-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            right: `${mousePosition.x * 0.015}px`,
            bottom: `${mousePosition.y * 0.015}px`,
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <TrustedBrands />
      <Stats />
      <Services />
      <Experience />
      <Portfolio />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
