import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const testimonials = [
    {
      name: "Sarah Thompson",
      company: "THOMPSON & CO.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      review:
        "SMJ Solutions transformed our online presence! Their web development expertise and creative design elevated our brand, attracting more customers than ever before.",
    },
    {
      name: "Michael Chen",
      company: "BRIGHT ELECTRONICS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      review:
        "Choosing SMJ Solutions for digital marketing was a game-changer. Our SEO ranking skyrocketed, leading to increased visibility and a significant boost in sales.",
    },
    {
      name: "Ryan Miller",
      company: "FRESH BITES CATERING",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      review:
        "Data analysis by SMJ Solutions provided invaluable insights. Their expertise helped us make informed decisions, leading to remarkable business growth.",
    },
    {
      name: "Emily Rodriguez",
      company: "URBAN STYLE BOUTIQUE",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80",
      review:
        "The team at SMJ Solutions exceeded our expectations. Their social media strategy brought our brand to life and connected us with our target audience perfectly.",
    },
    {
      name: "David Park",
      company: "TECH INNOVATIONS LLC",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
      review:
        "Outstanding results! SMJ Solutions helped us launch our startup with a comprehensive digital strategy that positioned us ahead of competitors from day one.",
    },
    {
      name: "Jessica Williams",
      company: "GREEN EARTH SOLUTIONS",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
      review:
        "Working with SMJ Solutions was a game-changer for our sustainability brand. Their creative campaigns resonated with our values and amplified our message beautifully.",
    },
  ];

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const maxSlides = Math.ceil(testimonials.length / slidesPerView);
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % maxSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [slidesPerView, testimonials.length]);

  const maxSlides = Math.ceil(testimonials.length / slidesPerView);
  const translatePercentage = 100 / slidesPerView;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">
            TESTIMONIAL
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Client Feedback & Reviews
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentTestimonial * translatePercentage
                }%)`,
              }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${translatePercentage}%` }}
                >
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group hover:border-cyan-500/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-slate-700 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:scale-110"
                        />
                        <div className="absolute -inset-2 rounded-full bg-cyan-500/10 scale-0 group-hover:scale-100 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-400 text-center mb-6 sm:mb-8 leading-relaxed text-sm transition-colors duration-300 group-hover:text-slate-300 min-h-[100px] sm:min-h-[120px]">
                      {testimonial.review}
                    </p>

                    {/* Name and Company */}
                    <div className="text-center border-t border-slate-700/50 pt-4 transition-colors duration-300 group-hover:border-cyan-500/30">
                      <h4 className="font-bold text-white mb-1 transition-colors duration-300 group-hover:text-cyan-400 text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-cyan-400 text-xs font-semibold italic opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8 sm:mt-12">
            {Array.from({ length: maxSlides }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentTestimonial(dotIndex)}
                className={`transition-all duration-300 rounded-full transform hover:scale-125 ${
                  currentTestimonial === dotIndex
                    ? "w-3 h-3 bg-cyan-500 shadow-lg shadow-cyan-500/50"
                    : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>

          {/* Decorative animated lines */}
          <div className="absolute -left-20 top-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent to-cyan-500/20 animate-pulse hidden lg:block"></div>
          <div
            className="absolute -right-20 top-1/2 w-40 h-0.5 bg-gradient-to-l from-transparent to-cyan-500/20 animate-pulse hidden lg:block"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
