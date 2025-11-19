import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  Rocket,
  Globe,
  Clock,
  ThumbsUp,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">
            ABOUT US
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            We Create Digital
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experiences That Matter
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A passionate team of digital innovators dedicated to transforming
            businesses through cutting-edge technology and creative excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 250, label: "Projects Completed", suffix: "+" },
            { value: 98, label: "Client Satisfaction", suffix: "%" },
            { value: 50, label: "Team Members", suffix: "+" },
            { value: 15, label: "Years Experience", suffix: "+" },
          ].map((stat, i) => (
            <StatItem key={i} stat={stat} delay={i * 0.2} />
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up space-y-4 text-slate-300 text-lg leading-relaxed">
            <span className="text-cyan-400 font-semibold tracking-wider text-sm">
              OUR STORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building the Future of Digital Innovation
            </h2>
            <p>
              Founded in 2010, SMJ Solutions began with a simple mission: to help
              businesses thrive in the digital age. What started as a small team
              of passionate developers and designers has grown into a
              full-service digital agency.
            </p>
            <p>
              Over the years, we've had the privilege of working with hundreds of
              clients across various industries, from startups to Fortune 500
              companies. Each project has taught us valuable lessons and
              strengthened our commitment to excellence.
            </p>
            <p>
              Today, we're proud to be at the forefront of digital innovation,
              combining cutting-edge technology with creative thinking to deliver
              solutions that drive real business results.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Our Story"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <InfoCard icon={<Target className="w-8 h-8" />} title="Our Mission" desc="To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value. We strive to be more than just a service provider – we're your partner in success." />
          <InfoCard icon={<Rocket className="w-8 h-8" />} title="Our Vision" desc="To be the world's most trusted digital transformation partner, known for our innovation, integrity, and impact. We envision a future where every business, regardless of size, can harness the power of digital technology." />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">CORE VALUES</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What We Stand For</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Our values guide everything we do and shape how we work with our clients</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Heart className="w-6 h-6" />, title: "Client-Centric", desc: "Your success is our success. We put your needs first and go above and beyond to exceed expectations." },
            { icon: <Zap className="w-6 h-6" />, title: "Innovation", desc: "We embrace new technologies and creative approaches to solve complex challenges." },
            { icon: <Shield className="w-6 h-6" />, title: "Integrity", desc: "Transparency, honesty, and ethical practices are the foundation of our relationships." },
            { icon: <Users className="w-6 h-6" />, title: "Collaboration", desc: "We believe in the power of teamwork, both internally and with our clients." },
            { icon: <TrendingUp className="w-6 h-6" />, title: "Excellence", desc: "We're committed to delivering the highest quality in everything we create." },
            { icon: <Globe className="w-6 h-6" />, title: "Diversity", desc: "We celebrate different perspectives and believe diversity drives better solutions." },
          ].map((value, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{value.title}</h3>
              <p className="text-slate-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section with Social Icons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">OUR TEAM</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Meet the Experts</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Talented individuals united by a passion for digital excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Sarah Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", linkedin: "#", instagram: "#" },
            { name: "Michael Chen", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", linkedin: "#", instagram: "#" },
            { name: "Emily Rodriguez", role: "Creative Director", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80", linkedin: "#", instagram: "#" },
            { name: "David Park", role: "Lead Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80", linkedin: "#", instagram: "#" },
          ].map((member, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Social Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.79v2.16h.07c.67-1.27 2.31-2.61 4.75-2.61 5.08 0 6.02 3.35 6.02 7.71V24h-5v-6.88c0-1.64-.03-3.76-2.29-3.76-2.29 0-2.64 1.79-2.64 3.64V24h-5V8z"/></svg>
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-pink-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.98.24 2.44.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.355 1.27.41 2.44.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.98-.41 2.44-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.27.355-2.44.41-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.98-.24-2.44-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.355-1.27-.41-2.44C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.98.41-2.44.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.27-.355 2.44-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.825.308 4.032.58 3.192.86 2.488 1.24 1.88 1.85.284 3.444 0 5.88 0 12s.284 8.556 1.88 10.15c.608.608 1.312.988 2.152 1.27.793.272 1.738.452 3.02.51C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.282-.058 2.227-.238 3.02-.51.84-.282 1.544-.662 2.152-1.27C23.716 20.556 24 18.12 24 12s-.284-8.556-1.88-10.15c-.608-.608-1.312-.988-2.152-1.27-.793-.272-1.738-.452-3.02-.51C15.668.012 15.264 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.9a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/></svg>
                </a>
              </div>

              <h3 className="text-xl font-bold mb-1 mt-4">{member.name}</h3>
              <p className="text-cyan-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's create something amazing and take your business to the next level
              </p>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* -----------------------------
   Animated Counter Component
--------------------------------*/
function StatItem({ stat, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1200;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-bold text-cyan-400">
        {count}
        {stat.suffix}
      </span>
      <p className="text-slate-400 mt-2">{stat.label}</p>
    </div>
  );
}

/* -----------------------------
   Info Card Component
--------------------------------*/
function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}
