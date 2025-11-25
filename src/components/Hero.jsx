import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import hero from "../assets/hero.jpg";

export default function Hero() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles = [];
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        hue: Math.random() * 60 + 180,
      });
    }

    const animate = () => {
      time += 0.016;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.5, "#1e293b");
      gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `hsla(${p.hue}, 100%, 50%, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const handleGetConsultation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-950/20"></div>

      {/* Parallax ambient glows */}
      <div
        className="absolute top-1/3 -left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${scrollY * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
        style={{
          transform: `translate(-${mousePosition.x * 0.015}px, -${scrollY * 0.3}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button
                onClick={handleGetConsultation}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Get a Free Consultation</span>
                  <ChevronRight className="w-5 h-5" />
                </span>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group border border-cyan-500/50 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500/10"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-700/50 max-w-xl mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">300+</div>
                <div className="text-sm text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-slate-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">7+</div>
                <div className="text-sm text-slate-300">Years in Business</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <img
                src={hero}
                alt="Digital Innovation"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
