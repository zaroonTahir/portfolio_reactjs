import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: "💬",
      title: "Free Consultations",
      desc: "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
      button: "CHAT NOW",
    },
    {
      icon: "📱",
      title: "Discover the product",
      desc: "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
      button: "LEARN MORE",
    },
    {
      icon: "📊",
      title: "Wireframe & Production",
      desc: "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
      button: "LEARN MORE",
    },
    {
      icon: "🖥️",
      title: "Prototype Application",
      desc: "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
      button: "REPORT",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Unlock Astonishing Results with Just 3<br />
            Simple Steps!
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-1 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center group bg-slate-900/20 backdrop-blur-sm border-r border-slate-800/50 last:border-r-0 py-8 px-6 hover:bg-slate-800/30 transition-colors duration-300"
            >
              {/* Icon circle */}
              <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <span className="relative z-10 text-3xl">{step.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {step.desc}
              </p>

              {/* Button */}
              <button className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                <span className="relative z-10">{step.button}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
