import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Websites", "Mobile Apps", "AI", "Marketing", "Branding", "Video"];

  const portfolioItems = [
    {
      title: "E-commerce Revolution",
      category: "Websites",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      slug: "ecommerce-revolution",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Brand Transformation",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      slug: "brand-transformation",
      color: "from-cyan-600 to-blue-500",
    },
    {
      title: "Social Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      slug: "social-campaign",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Digital Strategy",
      category: "AI",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      slug: "digital-strategy",
      color: "from-cyan-500 to-teal-600",
    },
    {
      title: "Mobile App Suite",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      slug: "mobile-app-suite",
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Video Marketing",
      category: "Video",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
      slug: "video-marketing",
      color: "from-red-600 to-orange-500",
    },
    {
      title: "SaaS Platform",
      category: "Websites",
      image: "https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=800&q=80",
      slug: "saas-platform",
      color: "from-green-600 to-teal-500",
    },
    {
      title: "AI Analytics",
      category: "AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      slug: "ai-analytics",
      color: "from-indigo-600 to-blue-500",
    },
    {
      title: "Brand Identity Kit",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      slug: "brand-identity-kit",
      color: "from-pink-600 to-red-500",
    },
  ];

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  const handleViewProject = (slug) => {
    navigate(`/portfolio/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">Projects We've Delivered</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We have delivered 50+ successful projects across multiple industries
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-slate-900/50 border border-slate-800 text-slate-300 hover:border-cyan-500/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
              onClick={() => handleViewProject(item.slug)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-80 group-hover:opacity-60 transition-all duration-500`}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-semibold mb-2 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 opacity-90">{item.title}</h3>
                <button className="flex items-center space-x-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-white hover:text-cyan-300">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Border on Hover */}
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
