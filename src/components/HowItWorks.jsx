import React from "react";
import { ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      desc: "We understand your vision, goals, and specific business challenges to lay a strong foundation.",
      icon: "📋",
    },
    {
      number: "02",
      title: "Planning",
      desc: "Create a detailed roadmap outlining the solution architecture and project timeline.",
      icon: "🗺️",
    },
    {
      number: "03",
      title: "Design",
      desc: "Design user-friendly interfaces and scalable system architecture for optimal performance.",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Development",
      desc: "Build robust, secure systems using cutting-edge technologies and best practices.",
      icon: "⚙️",
    },
    {
      number: "05",
      title: "QA & Testing",
      desc: "Rigorous testing of functionality, performance, and user experience to ensure quality.",
      icon: "✓",
    },
    {
      number: "06",
      title: "Launch & Support",
      desc: "Smooth deployment and ongoing support to ensure your success beyond launch.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            Our Process & Methodology
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A proven 6-step approach to deliver exceptional digital solutions
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Step Number Badge */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Arrow Indicator */}
                <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {i < steps.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparent Communication",
              desc: "Regular updates and clear communication throughout every phase of your project.",
            },
            {
              title: "Quality Assurance",
              desc: "Rigorous testing and quality checks at every stage to ensure perfection.",
            },
            {
              title: "On-Time Delivery",
              desc: "We respect your timeline and deliver projects on schedule, every time.",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                ✓
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {benefit.title}
              </h4>
              <p className="text-slate-400 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>Start Your Project Today</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}