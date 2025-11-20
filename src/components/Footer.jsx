import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-4 group cursor-pointer" onClick={() => handlePageClick('/')}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl transform group-hover:scale-110 transition-transform">
                  S
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold">SMJ Solutions</span>
            </div>
            <p className="text-slate-400">
              Leading digital marketing agency driving growth through innovation.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold mb-4 text-cyan-400">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => handleServiceClick('digital-strategy')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  Digital Strategy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('seo-marketing')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  SEO & Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('social-media')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  Social Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('brand-identity')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  Brand Identity
                </button>
              </li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold mb-4 text-cyan-400">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => handlePageClick('/about')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('/about')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('portfolio')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('/contact')}
                  className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold mb-4 text-cyan-400">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe for marketing tips</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-l-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-r-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 group">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2025 SMJ Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}