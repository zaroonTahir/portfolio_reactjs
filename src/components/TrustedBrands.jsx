import React from "react";

export default function TrustedBrands() {
  const brands = [
    { name: "logoipsum", icon: "▪️▪️⚫" },
    { name: "logoipsum", icon: "📷" },
    { name: "logoipsum", icon: "⚡" },
    { name: "logoipsum", icon: "🛡️" },
    { name: "logoipsum", icon: "🔷" },
    { name: "logoipsum", icon: "🌾" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join over 300,000+ businesses to
            <br />
            create unique brand designs.
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20 overflow-hidden">

          {/* TOP ROW → moves RIGHT and pauses on hover */}
          <div className="overflow-hidden relative mb-10 marquee-group">
            <div className="marquee-right">
              {brands.concat(brands).map((b, i) => (
                <div key={i} className="flex flex-col items-center mx-10 text-slate-300 hover:text-white transition">
                  <span className="text-4xl">{b.icon}</span>
                  <span className="mt-2 text-sm font-semibold">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW → moves LEFT and pauses on hover */}
          <div className="overflow-hidden relative marquee-group">
            <div className="marquee-left">
              {brands.concat(brands).map((b, i) => (
                <div key={i} className="flex flex-col items-center mx-10 text-slate-300 hover:text-white transition">
                  <span className="text-4xl">{b.icon}</span>
                  <span className="mt-2 text-sm font-semibold">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CSS for marquee and hover-pause */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-left {
          display: flex;
          animation: marqueeLeft 18s linear infinite;
        }

        .marquee-right {
          display: flex;
          animation: marqueeRight 18s linear infinite;
        }

        /* Pause animation on hover */
        .marquee-group:hover .marquee-left,
        .marquee-group:hover .marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
