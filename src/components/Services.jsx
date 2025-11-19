import React from "react";
import { useNavigate } from "react-router-dom";
import { Target, TrendingUp, Users, Award, ArrowRight } from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Strategy",
      desc: "Data-driven strategies to dominate your market",
      slug: "digital-strategy",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO & Marketing",
      desc: "Boost visibility and drive organic growth",
      slug: "seo-marketing",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media",
      desc: "Build engaged communities that convert",
      slug: "social-media",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Brand Identity",
      desc: "Create memorable brands that stand out",
      slug: "brand-identity",
    },
  ];

  const handleLearnMore = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business
            growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-4">{service.desc}</p>
                <button
                  onClick={() => handleLearnMore(service.slug)}
                  className="text-cyan-400 flex items-center space-x-2 group-hover:space-x-3 transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
