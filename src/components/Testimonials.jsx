import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const testimonials = [
    {
      name: "Sarah Thompson",
      company: "E-Commerce Innovations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      role: "CEO",
      rating: 5,
      review:
        "SMJ Solutions transformed our online presence completely. Their web development expertise and strategic approach helped us increase conversions by 245%. Highly recommended!",
    },
    {
      name: "Michael Chen",
      company: "Tech Startup Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      role: "Founder",
      rating: 5,
      review:
        "Working with SMJ Solutions was a game-changer for our startup. Their AI automation solutions streamlined our operations and saved us thousands monthly.",
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80",
      role: "Marketing Director",
      rating: 5,
      review:
        "The digital marketing strategies from SMJ Solutions boosted our client acquisitions significantly. Their data-driven approach is unmatched in the industry.",
    },
    {
      name: "David Park",
      company: "Global Tech Solutions",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
      role: "CTO",
      rating: 5,
      review:
        "Excellent service from start to finish. The team at SMJ Solutions delivered our mobile app on time and with exceptional quality. True professionals!",
    },
    {
      name: "Jessica Williams",
      company: "Creative Agency Plus",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
      role: "Creative Lead",
      rating: 5,
      review:
        "Their UI/UX design expertise brought our brand vision to life beautifully. The attention to detail and user experience is remarkable.",
    },
    {
      name: "James Wilson",
      company: "E-Learning Platform",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      role: "Product Manager",
      rating: 5,
      review:
        "SMJ Solutions helped us build a scalable platform that handles thousands of users. Their technical expertise and support have been invaluable.",
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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * translatePercentage}%)`,
              }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${translatePercentage}%` }}
                >
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-500 group hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full"></div>

                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-5 h-5 fill-cyan-400 text-cyan-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-300 mb-6 leading-relaxed italic text-sm sm:text-base">
                      "{testimonial.review}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4 border-t border-slate-700/50 pt-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-700 group-hover:border-cyan-500/50 transition-all"
                      />
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-cyan-400 text-xs font-semibold">
                          {testimonial.role} • {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
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

        {/* Dots Navigation */}
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

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-slate-800">
          {[
            { number: "250+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}