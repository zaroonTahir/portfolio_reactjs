import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/smj-logo.jpg"

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
    setIsMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/about");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#services");
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("services");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#portfolio");
      setTimeout(() => {
        const element = document.getElementById("portfolio");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("portfolio");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", onClick: handleHomeClick },
    { label: "Services", onClick: handleServicesClick },
    { label: "Portfolio", onClick: handlePortfolioClick },
    { label: "About", onClick: handleAboutClick },
    { label: "Contact", onClick: handleContactClick },
  ];

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
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
            className="flex items-center space-x-2 group hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="SMJ Solutions Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold">SMJ Solutions</span>
              <span className="text-xs text-cyan-400">Digital Innovation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="relative text-slate-300 hover:text-cyan-400 transition-colors duration-300 group py-2 px-4 rounded-lg hover:bg-slate-800/30 text-sm lg:text-base"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="hidden sm:block relative bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-lg font-semibold text-white overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden transform hover:scale-110 transition-transform text-slate-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.onClick}
              className="w-full text-left px-4 py-3 hover:bg-slate-800/50 hover:text-cyan-400 text-slate-300 transition-all rounded-lg transform hover:translate-x-2 duration-300"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={handleContactClick}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white mt-4 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
