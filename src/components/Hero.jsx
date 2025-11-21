import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const handleGetConsultation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
      <div className="absolute top-10 left-10 w-52 h-52 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Empowering Businesses with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Digital Innovation & Automation
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mx-auto md:mx-0">
              We build modern software, powerful AI automation systems, and high-performance digital strategies that drive measurable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button
                onClick={handleGetConsultation}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-medium sm:font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/40"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get a Free Consultation</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group border border-cyan-500/30 px-6 py-3 rounded-lg font-medium sm:font-semibold hover:bg-cyan-500/10 transition backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800 max-w-xl mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">300+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-slate-400">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">7+</div>
                <div className="text-sm text-slate-400">Years in Business</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 w-full max-w-md h-80 sm:h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Digital Innovation"
                className="w-full h-full object-cover rounded-xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-full max-w-md h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
