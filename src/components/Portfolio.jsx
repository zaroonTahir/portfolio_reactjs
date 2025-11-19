import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      title: "E-commerce Revolution",
      category: "Web Design",
      color: "from-blue-600 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      slug: "ecommerce-revolution",
    },
    {
      title: "Brand Transformation",
      category: "Branding",
      color: "from-cyan-600 to-blue-500",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      slug: "brand-transformation",
    },
    {
      title: "Social Campaign",
      category: "Marketing",
      color: "from-blue-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      slug: "social-campaign",
    },
    {
      title: "Digital Strategy",
      category: "Consulting",
      color: "from-cyan-500 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      slug: "digital-strategy",
    },
  ];

  const handleViewProject = (slug) => {
    navigate(`/portfolio/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-semibold tracking-wider">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our Latest Work
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our portfolio of successful campaigns and transformative
            projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
              style={{ animationDelay: `${i * 150}ms` }}
              onClick={() => handleViewProject(item.slug)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-80 group-hover:opacity-60 transition-all duration-500`}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                <span className="text-sm font-semibold mb-2 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 transform group-hover:translate-x-0 -translate-x-4 transition-transform duration-500">
                  {item.title}
                </h3>
                <button className="flex items-center space-x-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 cursor-pointer">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
