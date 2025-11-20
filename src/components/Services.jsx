import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Palette, 
  Video,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      desc: "Custom web and mobile solutions engineered for performance and scalability.",
      slug: "web-development",
      features: ["React & Next.js", "Node.js & Laravel", "Full Stack Solutions"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      desc: "Android, iOS, and cross-platform mobile solutions using the latest technologies.",
      slug: "mobile-development",
      features: ["Flutter", "React Native", "Cross-Platform"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Automation",
      desc: "Automated workflows, AI-powered systems, and digital transformation tools.",
      slug: "ai-automation",
      features: ["AI Chatbots", "Workflow Automation", "Process Automation"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing & SEO",
      desc: "SEO, social media, paid ads, and creative branding to elevate your digital presence.",
      slug: "digital-marketing",
      features: ["SEO", "Social Media", "Paid Ads"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "User-centered, modern, and intuitive designs that convert.",
      slug: "ui-ux-design",
      features: ["Wireframes", "Prototypes", "User Flow"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Media & Video Production",
      desc: "AI videos, marketing content, and brand storytelling solutions.",
      slug: "media-production",
      features: ["AI Videos", "Animations", "Reels"]
    }
  ];

  const handleLearnMore = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            End-to-End Digital Transformation Services
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From software development to digital marketing, we provide comprehensive solutions for your business
          </p>
        </div>

        {/* 6 Service Cards in Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center space-x-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleLearnMore(service.slug)}
                className="text-cyan-400 flex items-center space-x-2 group-hover:space-x-3 transition-all font-semibold cursor-pointer hover:text-cyan-300"
              >
                <span>Learn More </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Featured Services Detailed Section */}
        <div className="space-y-12">
          {/* Service 1: Web Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                alt="Web Development"
                className="rounded-2xl shadow-xl shadow-cyan-500/20"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Software & App Development</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                We build secure, scalable, and high-performance web applications tailored to your business needs using cutting-edge technologies like React, Next.js, Node.js, and more.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Web Applications</h4>
                    <p className="text-slate-400 text-sm">Custom solutions built with modern frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Mobile Apps</h4>
                    <p className="text-slate-400 text-sm">iOS, Android, and cross-platform development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Enterprise Solutions</h4>
                    <p className="text-slate-400 text-sm">ERP, CRM, and SaaS applications</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                View Full Services →
              </button>
            </div>
          </div>

          {/* Service 2: AI Automation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold">AI Automation</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Automate repetitive tasks and streamline your business workflows with intelligent AI systems and automation solutions designed for scale.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Business Process Automation</h4>
                    <p className="text-slate-400 text-sm">Streamline and automate workflows</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">AI Chatbots</h4>
                    <p className="text-slate-400 text-sm">Intelligent bots for customer service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Data Automation</h4>
                    <p className="text-slate-400 text-sm">Automated data processing and integration</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                View Full Services →
              </button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                alt="AI Automation"
                className="rounded-2xl shadow-xl shadow-cyan-500/20"
              />
            </div>
          </div>

          {/* Service 3: Digital Marketing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                alt="Digital Marketing"
                className="rounded-2xl shadow-xl shadow-cyan-500/20"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Digital Marketing & SEO</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Achieve higher rankings, drive organic growth, and build your brand with our comprehensive SEO and digital marketing strategies.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">SEO Optimization</h4>
                    <p className="text-slate-400 text-sm">On-page, technical, and local SEO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Social Media Management</h4>
                    <p className="text-slate-400 text-sm">Content creation and community engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Paid Advertisement</h4>
                    <p className="text-slate-400 text-sm">Google Ads and Meta advertising campaigns</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                View Full Services →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}