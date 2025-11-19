import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Tag,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PortfolioDetail() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "ecommerce-revolution": {
      title: "E-commerce Revolution",
      category: "Web Design",
      client: "TechStore Inc.",
      date: "March 2024",
      duration: "3 Months",
      color: "from-blue-600 to-cyan-500",
      heroImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      overview:
        "A complete digital transformation for a leading e-commerce platform, focusing on user experience, conversion optimization, and mobile responsiveness. We redesigned their entire online presence to boost sales and customer satisfaction.",
      challenge:
        "The client was struggling with high bounce rates, low conversion rates, and an outdated design that didn't resonate with their target audience. Their mobile experience was particularly poor, resulting in lost sales opportunities.",
      solution:
        "We implemented a modern, user-centric design with streamlined checkout process, enhanced product discovery, and mobile-first approach. Our team conducted extensive user research and A/B testing to optimize every touchpoint.",
      results: [
        {
          metric: "245%",
          label: "Increase in Conversions",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "180%",
          label: "Mobile Traffic Growth",
          icon: <Users className="w-5 h-5" />,
        },
        {
          metric: "65%",
          label: "Reduced Bounce Rate",
          icon: <Award className="w-5 h-5" />,
        },
        {
          metric: "4.8/5",
          label: "User Satisfaction",
          icon: <CheckCircle className="w-5 h-5" />,
        },
      ],
      features: [
        "Responsive Design for all devices",
        "Advanced Product Filtering",
        "One-Click Checkout Process",
        "Personalized Recommendations",
        "Real-time Inventory Updates",
        "Integrated Payment Gateway",
        "Customer Review System",
        "Wishlist & Cart Sync",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
      ],
      testimonial: {
        text: "SMJ Solutions completely transformed our online store. The new design is stunning and our sales have never been better. Their team understood our vision perfectly.",
        author: "Sarah Johnson",
        position: "CEO, TechStore Inc.",
      },
    },
    "brand-transformation": {
      title: "Brand Transformation",
      category: "Branding",
      client: "Urban Lifestyle Co.",
      date: "February 2024",
      duration: "4 Months",
      color: "from-cyan-600 to-blue-500",
      heroImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      overview:
        "A comprehensive brand identity redesign for a lifestyle brand looking to appeal to a younger, more sophisticated audience. We created a modern visual identity that reflects their values and resonates with their target market.",
      challenge:
        "The brand was perceived as outdated and struggled to connect with millennials and Gen Z consumers. Their visual identity lacked consistency across platforms and didn't communicate their premium positioning.",
      solution:
        "We developed a complete brand identity system including logo, color palette, typography, and brand guidelines. The new identity balances modern aesthetics with timeless elegance, creating a cohesive brand experience across all touchpoints.",
      results: [
        {
          metric: "320%",
          label: "Social Media Growth",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "150%",
          label: "Brand Recognition",
          icon: <Award className="w-5 h-5" />,
        },
        {
          metric: "89%",
          label: "Customer Approval",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          metric: "2.5x",
          label: "Engagement Rate",
          icon: <Users className="w-5 h-5" />,
        },
      ],
      features: [
        "Complete Logo Redesign",
        "Brand Style Guide",
        "Color Palette System",
        "Typography Standards",
        "Marketing Collateral",
        "Social Media Templates",
        "Packaging Design",
        "Brand Voice Guidelines",
      ],
      technologies: ["Adobe Illustrator", "Figma", "Photoshop", "InDesign"],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
        "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=800&q=80",
      ],
      testimonial: {
        text: "The rebrand exceeded all our expectations. We now have a strong, cohesive identity that truly represents who we are as a company.",
        author: "Michael Chen",
        position: "Brand Director, Urban Lifestyle Co.",
      },
    },
    "social-campaign": {
      title: "Social Campaign",
      category: "Marketing",
      client: "FitLife Wellness",
      date: "January 2024",
      duration: "2 Months",
      color: "from-blue-500 to-indigo-600",
      heroImage:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
      overview:
        "A viral social media campaign that generated massive engagement and brand awareness for a wellness startup. Our integrated approach combined influencer partnerships, user-generated content, and strategic paid advertising.",
      challenge:
        "FitLife was a new entrant in a crowded wellness market with limited brand awareness and a tight marketing budget. They needed to quickly establish credibility and build a community around their products.",
      solution:
        "We designed a multi-platform campaign centered around authentic storytelling and community building. Our strategy included micro-influencer partnerships, a branded hashtag challenge, and engaging video content that resonated with the target audience.",
      results: [
        {
          metric: "5M+",
          label: "Total Reach",
          icon: <Users className="w-5 h-5" />,
        },
        {
          metric: "450%",
          label: "Follower Growth",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "12%",
          label: "Engagement Rate",
          icon: <Award className="w-5 h-5" />,
        },
        {
          metric: "8.5x",
          label: "ROI on Ad Spend",
          icon: <CheckCircle className="w-5 h-5" />,
        },
      ],
      features: [
        "Influencer Partnership Strategy",
        "User-Generated Content Campaign",
        "Instagram & TikTok Ads",
        "Community Management",
        "Content Calendar Planning",
        "Performance Analytics",
        "Hashtag Strategy",
        "Video Content Production",
      ],
      technologies: [
        "Meta Ads",
        "TikTok Ads",
        "Hootsuite",
        "Canva",
        "Adobe Premiere",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      ],
      testimonial: {
        text: "The campaign was a game-changer for us. We went from unknown to having a thriving community in just two months.",
        author: "Emma Rodriguez",
        position: "Marketing Director, FitLife Wellness",
      },
    },
    "digital-strategy": {
      title: "Digital Strategy",
      category: "Consulting",
      client: "GlobalTech Solutions",
      date: "December 2023",
      duration: "6 Months",
      color: "from-cyan-500 to-teal-600",
      heroImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      overview:
        "A comprehensive digital transformation strategy for an enterprise client looking to modernize their operations and improve customer experience. We provided strategic guidance across technology, marketing, and operations.",
      challenge:
        "GlobalTech was struggling with legacy systems, siloed departments, and an inconsistent digital presence. They needed a cohesive strategy to compete in the rapidly evolving tech market.",
      solution:
        "We conducted a thorough digital maturity assessment and developed a phased transformation roadmap. Our strategy addressed technology infrastructure, customer journey optimization, and organizational change management.",
      results: [
        {
          metric: "40%",
          label: "Cost Reduction",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "200%",
          label: "Productivity Increase",
          icon: <Award className="w-5 h-5" />,
        },
        {
          metric: "95%",
          label: "Customer Satisfaction",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          metric: "3x",
          label: "Revenue Growth",
          icon: <Users className="w-5 h-5" />,
        },
      ],
      features: [
        "Digital Maturity Assessment",
        "Technology Roadmap",
        "Process Optimization",
        "Change Management Plan",
        "KPI Framework Development",
        "Vendor Selection Support",
        "Training & Development",
        "Ongoing Strategy Consultation",
      ],
      technologies: ["Salesforce", "Azure", "Power BI", "Tableau", "Jira"],
      gallery: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      ],
      testimonial: {
        text: "SMJ Solutions helped us navigate our digital transformation with confidence. Their strategic insights were invaluable.",
        author: "David Park",
        position: "CTO, GlobalTech Solutions",
      },
    },
  };

  const project = projectsData[projectSlug];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          {/* Project Header */}
          <div className="mb-12 animate-slide-up">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-full text-sm font-semibold`}
              >
                {project.category}
              </span>
              <div className="flex items-center space-x-2 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Users className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {project.overview}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 mb-20 animate-float">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-30`}
            ></div>
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Challenge */}
            <div className="lg:col-span-2 space-y-12">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
                  <span className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400">
                    <Tag className="w-6 h-6" />
                  </span>
                  <span>The Challenge</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
                  <span className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400">
                    <CheckCircle className="w-6 h-6" />
                  </span>
                  <span>Our Solution</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Project Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Client</div>
                    <div className="font-semibold">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Duration</div>
                    <div className="font-semibold">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Date</div>
                    <div className="font-semibold">{project.date}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Category</div>
                    <div className="font-semibold">{project.category}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {result.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {result.metric}
                  </div>
                  <div className="text-slate-400">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${i + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <div className="text-5xl text-cyan-400 mb-6">"</div>
              <p className="text-2xl text-slate-200 mb-8 leading-relaxed italic">
                {project.testimonial.text}
              </p>
              <div>
                <div className="font-bold text-xl text-white">
                  {project.testimonial.author}
                </div>
                <div className="text-cyan-400">
                  {project.testimonial.position}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Like What You See?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Let's create something amazing together
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
