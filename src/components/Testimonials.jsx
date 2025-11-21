import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const testimonials = [
    {
      name: "Emma W.",
      company: "StyleHive",
      project: "Social Media Marketing",
      rating: 5,
      review:
        "Their team completely transformed our online presence. Leads are flowing in like never before.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Raj P.",
      company: "TechSolutions",
      project: "SEO & Content Marketing",
      rating: 4,
      review:
        "We trusted them with SEO, and now our website ranks on the first page for all major keywords.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Sophia L.",
      company: "Fresh Eats Co.",
      project: "Paid Advertising / PPC",
      rating: 5,
      review:
        "PPC campaigns that actually convert! They know how to target the right audience.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Arjun K.",
      company: "Urban Threads",
      project: "Branding & Creative",
      rating: 5,
      review:
        "Creative, professional, and attentive. They redesigned our brand beautifully.",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Laura M.",
      company: "HealthHub",
      project: "Email Marketing",
      rating: 5,
      review:
        "Our email open rates have improved dramatically thanks to their campaigns.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
      name: "David S.",
      company: "EcoDrive",
      project: "Website Design & Development",
      rating: 4,
      review:
        "The website they built is stunning and user‑friendly. Bounce rates have dropped!",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Priya N.",
      company: "FoodieApp",
      project: "Full‑Service Digital Marketing",
      rating: 5,
      review:
        "They handled everything SEO, social media, ads and the results speak for themselves.",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Mark H.",
      company: "Urban Garden Co.",
      project: "Social Media & Content",
      rating: 5,
      review:
        "Clear communication, timely updates, and creative strategies that actually work.",
      image:
        "https://images.pexels.com/photos/614907/pexels-photo-614907.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Ananya S.",
      company: "Bloom Cosmetics",
      project: "Social Media Marketing",
      rating: 5,
      review:
        "Social media campaigns brought our brand to life. Engagement and growth exceeded expectations.",
      image:
        "https://images.pexels.com/photos/1181694/pexels-photo-1181694.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Jason R.",
      company: "AutoPro Solutions",
      project: "Paid Advertising / PPC",
      rating: 4,
      review:
        "Highly professional team. Optimised our ad spend and increased ROI by 150% in three months!",
      image:
        "https://images.pexels.com/photos/1181700/pexels-photo-1181700.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Neha T.",
      company: "Travelogue Co.",
      project: "Content Marketing",
      rating: 5,
      review:
        "They take time to understand our business. The content is relevant, high‑quality, and effective.",
      image:
        "https://images.pexels.com/photos/1181701/pexels-photo-1181701.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxSlides = Math.ceil(testimonials.length / slidesPerView);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [slidesPerView, testimonials.length]);

  const maxSlides = Math.ceil(testimonials.length / slidesPerView);
  const translatePercentage = 100 / slidesPerView;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxSlides);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * translatePercentage}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="flex-shrink-0 px-3" style={{ width: `${translatePercentage}%` }}>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-500 group hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed italic text-sm sm:text-base">
                      "{t.review}"
                    </p>
                    <div className="flex items-center space-x-4 border-t border-slate-700/50 pt-6">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-700 group-hover:border-cyan-500/50 transition-all"
                      />
                      <div>
                        <h4 className="font-bold text-white text-sm">{t.name}</h4>
                        <p className="text-cyan-400 text-xs font-semibold">
                          {t.project} • {t.company}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute -left-4 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center items-center space-x-2 mt-12">
          {Array.from({ length: maxSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`transition-all duration-300 rounded-full transform hover:scale-125 ${
                currentIndex === dotIndex
                  ? "w-3 h-3 bg-cyan-500 shadow-lg shadow-cyan-500/50"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
