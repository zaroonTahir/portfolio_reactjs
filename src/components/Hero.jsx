import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Play, Star, Rocket, Code } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  // Auto pause YouTube when scrolling away
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && isVideoOpen) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          setIsVideoOpen(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoOpen]);

  const handleStartProject = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div
          className="absolute top-60 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="inline-block animate-fade-in">
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm backdrop-blur-sm flex items-center space-x-2 w-fit">
                <span className="w-4 h-4 text-cyan-400 animate-pulse">⚡</span>
                <span>#1 Digital Marketing Agency</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
              Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Digital Presence
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 animate-slide-up" style={{ animationDelay: "200ms" }}>
              We craft data-driven digital strategies that elevate brands and
              drive measurable results in the modern marketplace.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              {/* Start Project Button */}
              <button
                onClick={handleStartProject}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2 cursor-pointer">
                  <span>Start Your Project</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Watch Video Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group border border-cyan-500/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-2 cursor-pointer"
              >
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>

            {/* CLIENT IMAGES + STARS */}
            <div className="flex flex-wrap items-center space-x-4 pt-4 animate-slide-up" style={{ animationDelay: "600ms" }}>
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-400 mt-1">Trusted by 250+ clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — VIDEO SECTION */}
          <div className="relative animate-float mt-8 md:mt-0" ref={videoRef}>
            <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <div className="aspect-video rounded-xl overflow-hidden relative border border-cyan-500/30 bg-black">
                {/* Video preview before click */}
                {!isVideoOpen && (
                  <div
                    onClick={() => setIsVideoOpen(true)}
                    className="w-full h-full cursor-pointer relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                      className="w-full h-full object-cover opacity-70 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-600/40"></div>
                    <Play className="w-16 h-16 text-white absolute inset-0 m-auto drop-shadow-xl transition-transform hover:scale-110" />
                  </div>
                )}

                {/* YouTube iframe after click */}
                {isVideoOpen && (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video"
                  ></iframe>
                )}
              </div>

              {/* ROI Section */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm sm:text-base">Campaign ROI</span>
                  <span className="text-cyan-400 font-semibold text-sm sm:text-base">+245%</span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Floating icons */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6" />
            </div>

            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Fade Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
