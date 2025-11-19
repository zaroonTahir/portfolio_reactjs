import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Zap,
  BarChart,
  Clock,
  Shield,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    "digital-strategy": {
      icon: <Target className="w-12 h-12" />,
      title: "Digital Strategy",
      subtitle: "Data-Driven Strategies to Dominate Your Market",
      description:
        "Transform your business with our comprehensive digital strategy services. We analyze your market, competitors, and audience to create a roadmap for digital success.",
      heroImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      features: [
        "Market Research & Analysis",
        "Competitor Analysis",
        "Customer Journey Mapping",
        "Digital Transformation Roadmap",
        "KPI Definition & Tracking",
        "Growth Strategy Planning",
      ],
      benefits: [
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Data-Driven Decisions",
          desc: "Make informed decisions based on comprehensive market data and analytics",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Targeted Approach",
          desc: "Reach your ideal customers with precision-targeted strategies",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Scalable Growth",
          desc: "Build strategies that scale with your business growth",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Risk Mitigation",
          desc: "Identify and mitigate potential risks before they impact your business",
        },
      ],
      process: [
        {
          step: "01",
          title: "Discovery",
          desc: "Deep dive into your business, goals, and challenges",
        },
        {
          step: "02",
          title: "Analysis",
          desc: "Comprehensive market and competitor analysis",
        },
        {
          step: "03",
          title: "Strategy",
          desc: "Create customized digital strategy roadmap",
        },
        {
          step: "04",
          title: "Implementation",
          desc: "Execute strategy with measurable milestones",
        },
        {
          step: "05",
          title: "Optimization",
          desc: "Continuous monitoring and improvement",
        },
      ],
      stats: [
        { value: "150+", label: "Strategies Delivered" },
        { value: "89%", label: "Client Success Rate" },
        { value: "3x", label: "Average ROI Increase" },
      ],
    },
    "seo-marketing": {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO & Marketing",
      subtitle: "Boost Visibility and Drive Organic Growth",
      description:
        "Dominate search engine rankings and attract qualified leads with our proven SEO and digital marketing strategies. We combine technical expertise with creative content to deliver results.",
      heroImage:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&q=80",
      features: [
        "Technical SEO Optimization",
        "Keyword Research & Strategy",
        "Content Marketing",
        "Link Building Campaigns",
        "Local SEO Optimization",
        "Performance Analytics & Reporting",
      ],
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Traffic",
          desc: "Drive consistent organic traffic to your website",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Better Rankings",
          desc: "Achieve top positions for your target keywords",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Quality Leads",
          desc: "Attract visitors who are ready to convert",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Long-Term Results",
          desc: "Build sustainable organic growth that lasts",
        },
      ],
      process: [
        {
          step: "01",
          title: "Audit",
          desc: "Comprehensive SEO audit of your current website",
        },
        {
          step: "02",
          title: "Research",
          desc: "Keyword and competitor research",
        },
        {
          step: "03",
          title: "Optimization",
          desc: "On-page and technical SEO implementation",
        },
        {
          step: "04",
          title: "Content",
          desc: "Create SEO-optimized content strategy",
        },
        {
          step: "05",
          title: "Growth",
          desc: "Monitor, analyze, and scale results",
        },
      ],
      stats: [
        { value: "200+", label: "SEO Projects" },
        { value: "5x", label: "Average Traffic Increase" },
        { value: "92%", label: "Client Retention" },
      ],
    },
    "social-media": {
      icon: <Users className="w-12 h-12" />,
      title: "Social Media",
      subtitle: "Build Engaged Communities That Convert",
      description:
        "Create meaningful connections with your audience through strategic social media marketing. We help you build, engage, and convert your social media following into loyal customers.",
      heroImage:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
      features: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Marketing",
        "Analytics & Reporting",
      ],
      benefits: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Engaged Community",
          desc: "Build a loyal following that actively engages with your brand",
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Brand Awareness",
          desc: "Increase visibility and recognition across platforms",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Targeted Reach",
          desc: "Connect with your ideal customers where they spend time",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Sales",
          desc: "Convert social engagement into measurable business results",
        },
      ],
      process: [
        {
          step: "01",
          title: "Strategy",
          desc: "Define goals and target audience",
        },
        {
          step: "02",
          title: "Planning",
          desc: "Create content calendar and campaigns",
        },
        {
          step: "03",
          title: "Creation",
          desc: "Develop engaging content and visuals",
        },
        {
          step: "04",
          title: "Engagement",
          desc: "Manage community and interactions",
        },
        {
          step: "05",
          title: "Optimization",
          desc: "Analyze and improve performance",
        },
      ],
      stats: [
        { value: "300+", label: "Social Campaigns" },
        { value: "10x", label: "Engagement Increase" },
        { value: "95%", label: "Client Satisfaction" },
      ],
    },
    "brand-identity": {
      icon: <Award className="w-12 h-12" />,
      title: "Brand Identity",
      subtitle: "Create Memorable Brands That Stand Out",
      description:
        "Develop a distinctive brand identity that resonates with your audience and sets you apart from competitors. We craft comprehensive brand experiences from strategy to execution.",
      heroImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      features: [
        "Brand Strategy Development",
        "Logo & Visual Identity Design",
        "Brand Guidelines Creation",
        "Brand Messaging & Voice",
        "Marketing Collateral Design",
        "Brand Launch Support",
      ],
      benefits: [
        {
          icon: <Award className="w-6 h-6" />,
          title: "Stand Out",
          desc: "Create a unique identity that differentiates you from competitors",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Customer Loyalty",
          desc: "Build emotional connections that drive customer loyalty",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Brand Trust",
          desc: "Establish credibility and trust in your market",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Business Value",
          desc: "Increase your brand equity and business value",
        },
      ],
      process: [
        {
          step: "01",
          title: "Discovery",
          desc: "Understand your vision, values, and audience",
        },
        {
          step: "02",
          title: "Research",
          desc: "Market and competitor brand analysis",
        },
        {
          step: "03",
          title: "Design",
          desc: "Create visual identity and brand elements",
        },
        {
          step: "04",
          title: "Guidelines",
          desc: "Develop comprehensive brand guidelines",
        },
        {
          step: "05",
          title: "Launch",
          desc: "Roll out your new brand identity",
        },
      ],
      stats: [
        { value: "180+", label: "Brands Created" },
        { value: "100%", label: "Unique Designs" },
        { value: "4.9/5", label: "Client Rating" },
      ],
    },
  };

  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                {service.icon}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-2xl text-cyan-400 mb-6">{service.subtitle}</p>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative animate-float">
              <img
                src={service.heroImage}
                alt={service.title}
                className="rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's Included
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive services designed to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CheckCircle className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Transform your business with measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how our {service.title.toLowerCase()} services can
                help your business grow
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                Schedule a Free Consultation
              </button>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
