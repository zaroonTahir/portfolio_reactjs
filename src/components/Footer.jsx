import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  const handlePageClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Company */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handlePageClick('/')}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl transform group-hover:scale-110 transition-transform">
                  S
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <span className="text-xl font-bold block">SMJ Solutions</span>
                <span className="text-xs text-cyan-400">Digital Innovation</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A next-generation digital transformation firm providing modern software, automation, and digital marketing services to businesses worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
              ].map((social, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all duration-300 flex items-center justify-center group hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/20"
                  title={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold text-lg text-white">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                { name: "Web Development", slug: "web-development" },
                { name: "Mobile Apps", slug: "mobile-development" },
                { name: "AI & Automation", slug: "ai-automation" },
                { name: "Digital Marketing", slug: "digital-marketing" },
                { name: "UI/UX Design", slug: "ui-ux-design" },
                { name: "Media Production", slug: "media-production" },
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleServiceClick(service.slug)}
                    className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left group"
                  >
                    <span className="group-hover:underline">{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold text-lg text-white">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/" },
                { name: "Careers", path: "/about" },
                { name: "Blog", path: "/" },
                { name: "Contact", path: "/contact" },
                { name: "Terms & Conditions", path: "/" },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handlePageClick(link.path)}
                    className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left group"
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold text-lg text-white">Newsletter</h4>
            <p className="text-slate-400 text-sm">
              Subscribe for digital tips and latest industry insights
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <div className="space-y-2 pt-2">
              <p className="text-xs text-slate-500">Global Offices</p>
              <div className="flex flex-wrap gap-2">
                {["Pakistan", "UAE", "Qatar", "UK"].map((office, i) => (
                  <span key={i} className="text-xs bg-slate-800/50 border border-slate-700 rounded-full px-3 py-1 text-slate-400">
                    {office}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <div>
            <p>&copy; 2025 SMJ Solutions Pvt Ltd. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-8">
            <button className="hover:text-cyan-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-cyan-400 transition-colors">Terms of Service</button>
            <button className="hover:text-cyan-400 transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
}