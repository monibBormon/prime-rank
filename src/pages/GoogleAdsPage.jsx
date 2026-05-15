import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowUp,
  FaBullseye,
  FaChartLine,
  FaChartPie,
  FaCheck,
  FaGoogle,
  FaLightbulb,
} from "react-icons/fa";
import Layout from "../components/Shared/Layout";

// Unique Google Ads data layers
const adPillars = [
  {
    id: "intent",
    title: "High-Intent Targeting",
    tagline: "Stop paying for empty clicks.",
    desc: "Architecting hyper-focused Search campaigns designed around transactional buyer keywords. We eliminate waste by engineering precise negative keyword lists and match-type silos.",
    icon: FaBullseye,
    metrics: [
      { label: "Avg. Conversion Rate", value: "6.8%" },
      { label: "Cost Per Acquisition", value: "-34%" },
    ],
    checks: [
      "Exact & Phrase Match Silos",
      "Alpha-Beta Campaign Setup",
      "Aggressive Negative Auditing",
    ],
  },
  {
    id: "creative",
    title: "High-CTR Copy & Assets",
    tagline: "Win the auction before it starts.",
    desc: "Drafting compelling Responsive Search Ads (RSAs) paired with comprehensive asset extensions (sitelinks, callouts, and structured snippets) to maximize real estate and Quality Score.",
    icon: FaLightbulb,
    metrics: [
      { label: "Click-Through Rate", value: "8.2%" },
      { label: "Quality Score Avg.", value: "9/10" },
    ],
    checks: [
      "Dynamic Keyword Injection",
      "Ad Strength Optimization",
      "Multi-Asset Extension Polish",
    ],
  },
  {
    id: "funnel",
    title: "ROI & Conversion Mechanics",
    tagline: "Traffic is useless without tracking.",
    desc: "Deploying bulletproof Google Tag Manager conversion points, setting up dynamic value tracking, and designing landing page structures tailored solely to turn ad clicks into revenue.",
    icon: FaChartPie,
    metrics: [
      { label: "Return on Ad Spend", value: "4.2x" },
      { label: "Bounce Rate Reduction", value: "-28%" },
    ],
    checks: [
      "GTM Enhanced Conversions",
      "Data Layer Integration",
      "Post-Click Landing Page Loops",
    ],
  },
];

const GoogleAdsPage = () => {
  const [activeTab, setActiveTab] = useState("intent");
  const activeData = adPillars.find((p) => p.id === activeTab);

  return (
    <Layout>
      <section className="py-[100px] bg-[#f7ffe6] text-[#1C4B42] overflow-hidden relative">
        {/* Soft Ambient Glows consistent with the theme */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#92C200]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1C4B42]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C4B42] text-[#92C200] text-xs font-bold uppercase tracking-widest border border-[#1C4B42]/10">
              Paid Acquisition Engine
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1C4B42]">
              Engineered For Profitable{" "}
              <span className="text-[#92C200] bg-[#92C200]/10 px-2 rounded-lg">
                Scale & ROAS
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Google Ads isn't about bidding higher; it's about bidding smarter.
              I design, optimize, and scale campaigns that turn targeted
              searches into immediate, predictable revenue.
            </p>
          </div>

          {/* Content Matrix Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Pillar Navigation Controls (4 Columns) */}
            <div className="lg:col-span-4 space-y-3">
              {adPillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === pillar.id;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? "bg-white border-[#1C4B42] shadow-xl shadow-[#1C4B42]/5"
                        : "bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <div
                        className={`p-3 rounded-xl border transition-colors ${
                          isSelected
                            ? "bg-[#1C4B42] text-[#92C200] border-[#1C4B42]"
                            : "bg-gray-50 text-gray-400 border-gray-100 group-hover:text-[#1C4B42]"
                        }`}
                      >
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <h3
                          className={`font-bold transition-colors ${isSelected ? "text-[#1C4B42]" : "text-gray-500 group-hover:text-gray-800"}`}
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5 font-mono">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Active Left Border Indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeIndicatorGoogleWhite"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#1C4B42]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Dynamic Performance Cockpit Dashboard (8 Columns) */}
            <div className="lg:col-span-8 bg-white border border-gray-200 shadow-xl shadow-gray-200/50 rounded-[32px] p-6 md:p-10 min-h-[480px] relative flex flex-col justify-between">
              {/* Top Row: Simulated Live Campaign Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xs text-gray-400">
                    <FaGoogle />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-mono text-gray-400">
                      Ad Account Architecture Evaluation
                    </div>
                    <div className="text-sm font-bold text-[#1C4B42] font-mono">
                      LIVE_CAMPAIGN_HEALTH // OPTIMIZED
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  {activeData.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-center"
                    >
                      <div className="text-[10px] text-gray-400 font-mono block">
                        {m.label}
                      </div>
                      <div className="text-sm font-black text-[#1C4B42] font-mono mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Row: Content Display with AnimatePresence */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {activeData.desc}
                    </p>

                    {/* Checklist Elements */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs uppercase tracking-widest font-mono text-[#1C4B42] font-bold">
                        Optimization Vector Check:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeData.checks.map((check, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50/50 p-3 rounded-xl border border-gray-100"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#92C200]/20 text-[#1C4B42] flex items-center justify-center text-[9px] flex-shrink-0">
                              <FaCheck />
                            </div>
                            <span className="truncate font-medium">
                              {check}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Row: Interface Data Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-400 font-mono gap-4">
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-[#92C200]" />
                  <span>
                    Conversion values and attribution models verified.
                  </span>
                </div>
                <button className="text-[#1C4B42] hover:text-[#92C200] font-bold transition-colors flex items-center gap-1.5 group">
                  Request Account Audit{" "}
                  <FaArrowUp className="rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoogleAdsPage;
