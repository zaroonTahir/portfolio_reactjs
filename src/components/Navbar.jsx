import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/about");
    window.scrollTo(0, 0);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#services");
    } else {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#portfolio");
    } else {
      const element = document.getElementById("portfolio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl transform group-hover:scale-110 transition-transform duration-300">
                S
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold">SMJ Solutions</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={handleHomeClick}
              className="relative hover:text-cyan-400 transition-colors duration-300 group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              onClick={handleServicesClick}
              className="relative hover:text-cyan-400 transition-colors duration-300 group py-2"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#portfolio"
              onClick={handlePortfolioClick}
              className="relative hover:text-cyan-400 transition-colors duration-300 group py-2"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/about"
              onClick={handleAboutClick}
              className="relative hover:text-cyan-400 transition-colors duration-300 group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              onClick={handleContactClick}
              className="relative hover:text-cyan-400 transition-colors duration-300 group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button
              onClick={handleContactClick}
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-lg font-medium overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transform hover:scale-110 transition-transform"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 transition-all duration-500 ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="/"
            onClick={handleHomeClick}
            className="block hover:text-cyan-400 transition transform hover:translate-x-2 duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={handleServicesClick}
            className="block hover:text-cyan-400 transition transform hover:translate-x-2 duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={handlePortfolioClick}
            className="block hover:text-cyan-400 transition transform hover:translate-x-2 duration-300"
          >
            Portfolio
          </a>
          <a
            href="/about"
            onClick={(e) => {
              handleAboutClick(e);
              setIsMenuOpen(false);
            }}
            className="block hover:text-cyan-400 transition transform hover:translate-x-2 duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              handleContactClick(e);
              setIsMenuOpen(false);
            }}
            className="block hover:text-cyan-400 transition transform hover:translate-x-2 duration-300"
          >
            Contact
          </a>
          <button
            onClick={(e) => {
              handleContactClick(e);
              setIsMenuOpen(false);
            }}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-lg font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
