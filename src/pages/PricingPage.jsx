import { motion } from "framer-motion";
import {
  Award,
  Check,
  Clock,
  Image,
  MonitorPlay,
  Rocket,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

const packages = [
  {
    category: "YouTube SEO",
    items: [
      {
        title: "Basic Package",
        price: "$100",
        features: [
          "5 Videos Optimization",
          "Titles, Tags, Descriptions",
          "Playlist & Homepage Arrangement",
          "Keywords & Hashtags Research",
          "Meta Tag Optimization",
          "Organic Promotion",
        ],
        icon: Zap,
      },
      {
        title: "Standard Package",
        price: "$200",
        popular: true,
        features: [
          "10 Videos Optimization",
          "Titles, Tags, Descriptions",
          "Playlist & Homepage Arrangement",
          "Keywords & Hashtags Research",
          "Meta Tag Optimization",
          "Organic Promotion",
        ],
        icon: Star,
      },
      {
        title: "Premium Package",
        price: "$400",
        features: [
          "20 Videos Optimization",
          "Titles, Tags, Descriptions",
          "Playlist & Homepage Arrangement",
          "Keywords & Hashtags Research",
          "Meta Tag Optimization",
          "Detailed Reporting",
          "Organic Promotion",
        ],
        icon: Award,
      },
    ],
  },
  {
    category: "Growth & Monetization",
    items: [
      {
        title: "Subscribers Growth",
        price: "$350",
        features: [
          "1000 Organic Subscribers",
          "Professional Channel Setup",
          "Channel SEO Optimization",
          "5 Videos SEO Optimization",
          "Playlist & Homepage Arrangement",
          "Keywords Research",
        ],
        icon: TrendingUp,
      },
      {
        title: "Full Channel Monetization",
        price: "$700",
        features: [
          "1,000 Real Subscribers",
          "4,000 Watch Time Hours",
          "Full Channel SEO",
          "10 Videos SEO Optimization",
          "10 Videos Organic Promotion",
          "Keywords Research",
        ],
        icon: MonitorPlay,
      },
      {
        title: "Full Channel Branding & Growth",
        price: "$300",
        features: [
          "Branding & Optimization",
          "Custom Logo & Banner Design",
          "Professional Channel Setup",
          "Channel SEO Optimization",
          "5 Videos SEO optimization",
          "Playlist & Homepage Arrangement",
          "Keywords Research",
        ],
        icon: Rocket,
      },
    ],
  },
  {
    category: "Watch Time Packages",
    items: [
      {
        title: "1000 Hours",
        price: "$170",
        features: ["1000 Watch Time Hours", "Organic Growth", "Safe & Secure"],
        icon: Clock,
      },
      {
        title: "2000 Hours",
        price: "$300",
        features: ["2000 Watch Time Hours", "Organic Growth", "Safe & Secure"],
        icon: Clock,
      },
      {
        title: "4000 Hours",
        price: "$500",
        features: ["4000 Watch Time Hours", "Organic Growth", "Safe & Secure"],
        icon: Clock,
      },
    ],
  },
  {
    category: "Design & Branding",
    items: [
      {
        title: "Thumbnails (5)",
        price: "$75",
        features: [
          "5 Eye-catching Thumbnails",
          "High CTR Design",
          "Custom Branding",
        ],
        icon: Image,
      },
      {
        title: "Thumbnails (10)",
        price: "$150",
        features: [
          "10 Eye-catching Thumbnails",
          "High CTR Design",
          "Custom Branding",
        ],
        icon: Image,
      },
      {
        title: "Thumbnails (20)",
        price: "$300",
        features: [
          "20 Eye-catching Thumbnails",
          "High CTR Design",
          "Custom Branding",
        ],
        icon: Image,
      },
    ],
  },
];

const ServiceCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`relative group bg-[#fbfff5] rounded-3xl p-4 md:p-8 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-[#1C4B42]/10 transition-all duration-300 border ${
        item.popular
          ? "border-[#1C4B42] ring-1 ring-[#1C4B42]"
          : "border-gray-200/80"
      } overflow-hidden flex flex-col h-full`}
    >
      {/* Background Micro Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#92C200]/10 rounded-full blur-3xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {item.popular && (
        <div className="absolute top-3 right-3 bg-[#1C4B42] text-[#92C200] text-[9px] md:text-xs font-black tracking-widest px-3 py-1 rounded-full shadow-sm z-10">
          POPULAR
        </div>
      )}

      {/* Styled Brand Icon Box */}
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1C4B42] flex items-center justify-center text-[#92C200] shadow-md mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <h3 className="text-base md:text-xl font-extrabold text-[#1C4B42] mb-1 md:mb-2 leading-tight">
        {item.title}
      </h3>

      <div className="flex items-baseline gap-1 mb-4 md:mb-6">
        <span className="text-2xl md:text-4xl font-black text-[#1C4B42] font-mono">
          {item.price}
        </span>
        <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">
          / package
        </span>
      </div>

      <ul className="space-y-3 mb-6 md:mb-8 flex-grow">
        {item.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm leading-snug"
          >
            <div className="w-4 h-4 rounded-full bg-[#92C200]/20 text-[#1C4B42] flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="text-gray-600 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Premium CTA Button matching your branding loop */}
      <Link
        to="/contact"
        className={`block text-center w-full py-3 rounded-xl font-extrabold text-sm transition-all active:scale-95 mt-auto cursor-pointer ${
          item.popular
            ? "bg-[#1C4B42] text-[#92C200] shadow-md hover:bg-white hover:text-[#1C4B42] border border-[#1C4B42]"
            : "bg-gray-50 text-[#1C4B42] border border-gray-200 hover:bg-[#1C4B42] hover:text-white hover:border-[#1C4B42]"
        }`}
      >
        Choose Plan
      </Link>
    </motion.div>
  );
};

const PricingPage = () => {
  return (
    <>
      <PageSEO
        title="Pricing & Packages"
        description="Transparent pricing for YouTube SEO, video editing, website SEO, and Google Ads packages. Choose the right plan for your business growth."
        keywords="pricing, packages, YouTube SEO packages, digital marketing plans, affordable services"
        url="/pricing"
      />
      <Layout>
        <div
          className="bg-[#f8ffe9] text-[#1C4B42] py-12 md:py-24 min-h-screen relative overflow-hidden"
          id="pricing"
        >
          {/* Soft Ambient Brand Background Blobs */}
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#92C200]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1C4B42]/5 blur-[160px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Main Top Header Block */}
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C4B42] text-[#92C200] text-xs font-bold uppercase tracking-widest border border-[#1C4B42]/10">
                Pricing Matrices
              </div>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black tracking-tight text-[#1C4B42]"
              >
                Premium Architecture Packages
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Elevate your ecosystem with professional target SEO, asset
                design, and visibility growth blueprints tailored for results.
              </motion.p>
            </div>

            {/* Pricing Sections Array */}
            <div className="space-y-16 md:space-y-28">
              {packages.map((section, sectionIdx) => (
                <div key={sectionIdx} className="space-y-6 md:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-7 w-1 bg-[#1C4B42] rounded-full" />
                    <h3 className="text-xl md:text-2xl font-black text-[#1C4B42] tracking-tight">
                      {section.category}
                    </h3>
                  </motion.div>

                  {/* Fixed Grid Wrapper Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {section.items.map((item, idx) => (
                      <ServiceCard key={idx} item={item} index={idx} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PricingPage;
