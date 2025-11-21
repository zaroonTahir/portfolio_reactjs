import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ServiceDetail from "./components/ServiceDetail";
import PortfolioDetail from "./components/PortfolioDetail";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <Router>
        <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<AllProjects />} />
          <Route path="/portfolio/:projectSlug" element={<PortfolioDetail />} />
        </Routes>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-right {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100%);
            }
          }

          @keyframes slide-left {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          .animate-slide-right {
            animation: slide-right 2s linear infinite;
          }

          .animate-slide-left {
            animation: slide-left 2s linear infinite;
          }

          .animate-progress {
            animation: progress 2s ease-out forwards;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;