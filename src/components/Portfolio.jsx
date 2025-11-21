import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Websites", "Mobile Apps", "AI", "Automation", "Web Apps"];

  const portfolioItems = [
  {
    title: "FixIt App",
    category: "Mobile Apps",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "fixit-app",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Blog Generator",
    category: "AI",
    image: "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ai-blog-generator",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Crypto Tracker",
    category: "Websites",
    image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "crypto-tracker",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Task Manager Pro",
    category: "Web Apps",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "task-manager-pro",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "GHL Funnel Booster",
    category: "Automation",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "ghl-funnel-booster",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "EduLearn LMS",
    category: "Web Apps",
    image: "https://images.pexels.com/photos/414518/pexels-photo-414518.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "edulearn-lms",
    color: "from-indigo-500 to-blue-500",
  },
];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleViewProject = (slug) => {
    navigate(`/portfolio/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleViewAllProjects = () => {
    navigate("/portfolio");
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
          <button 
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center space-x-2 group cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}