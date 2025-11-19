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
  CheckCircle,
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
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
              businesses through cutting-edge technology and creative
              excellence.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto animate-float">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Our Team"
              className="rounded-2xl shadow-2xl shadow-cyan-500/20 w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 250, label: "Projects Completed", suffix: "+" },
              { value: 98, label: "Client Satisfaction", suffix: "%" },
              { value: 50, label: "Team Members", suffix: "+" },
              { value: 15, label: "Years Experience", suffix: "+" },
            ].map((stat, i) => (
              <StatItem key={i} stat={stat} delay={i * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="text-cyan-400 font-semibold tracking-wider text-sm">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Building the Future of Digital Innovation
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Founded in 2010, SMJ Solutions began with a simple mission: to
                  help businesses thrive in the digital age. What started as a
                  small team of passionate developers and designers has grown
                  into a full-service digital agency.
                </p>
                <p>
                  Over the years, we've had the privilege of working with
                  hundreds of clients across various industries, from startups
                  to Fortune 500 companies. Each project has taught us valuable
                  lessons and strengthened our commitment to excellence.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital
                  innovation, combining cutting-edge technology with creative
                  thinking to deliver solutions that drive real business
                  results.
                </p>
              </div>
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
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, enhance customer experiences, and create lasting
                value. We strive to be more than just a service provider – we're
                your partner in success.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the world's most trusted digital transformation partner,
                known for our innovation, integrity, and impact. We envision a
                future where every business, regardless of size, can harness the
                power of digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider text-sm">
              CORE VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our values guide everything we do and shape how we work with our
              clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Client-Centric",
                desc: "Your success is our success. We put your needs first and go above and beyond to exceed expectations.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Innovation",
                desc: "We embrace new technologies and creative approaches to solve complex challenges.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Integrity",
                desc: "Transparency, honesty, and ethical practices are the foundation of our relationships.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collaboration",
                desc: "We believe in the power of teamwork, both internally and with our clients.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Excellence",
                desc: "We're committed to delivering the highest quality in everything we create.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Diversity",
                desc: "We celebrate different perspectives and believe diversity drives better solutions.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider text-sm">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We combine expertise, creativity, and technology to deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award-Winning",
                desc: "Recognized for excellence in digital innovation",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                desc: "Skilled professionals with years of experience",
              },
              {
                icon: <ThumbsUp className="w-8 h-8" />,
                title: "Proven Results",
                desc: "Track record of successful projects",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "On-Time Delivery",
                desc: "We respect deadlines and deliver on schedule",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider text-sm">
              OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Talented individuals united by a passion for digital excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              },
              {
                name: "Emily Rodriguez",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
              },
              {
                name: "David Park",
                role: "Lead Developer",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
              },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
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
                Let's create something amazing and take your business to the
                next level
              </p>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                Get In Touch
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
    <motion.div
      ref={ref}
      className="text-center group cursor-default"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
}
