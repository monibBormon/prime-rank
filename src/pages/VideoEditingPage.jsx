import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaFilm,
  FaMagic,
  FaSlidersH,
  FaVideo,
  FaVideoSlash,
  FaVolumeUp,
} from "react-icons/fa";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

// Dummy Service Data
const services = [
  {
    id: "yt",
    title: "High-Retention YouTube Edits",
    description:
      "Keep retention graphs high. Optimized pacing, dynamic zoom-ins, visual hooks, and sound design that holds eyes from second 1.",
    icon: FaVideo,
    features: [
      "A-roll color grading",
      "Pattern interrupts every 4s",
      "Custom lower thirds",
    ],
    timelineColor: "bg-red-500",
  },
  {
    id: "shorts",
    title: "Viral Shorts & Reels",
    description:
      "Built for the micro-attention span. Aggressive pacing, animated captions, sound effects, and loop transitions that double views.",
    icon: FaSlidersH,
    features: [
      "Alex Hormozi style captions",
      "Sound fx layering",
      "Auto-loop optimization",
    ],
    timelineColor: "bg-amber-500",
  },
  {
    id: "corp",
    title: "Cinematic Brand Videos",
    description:
      "Transform raw corporate footage or interviews into high-end brand stories with professional grade curves, pacing, and clean audio.",
    icon: FaFilm,
    features: [
      "Advanced color correction",
      "Multi-cam syncing",
      "Premium stock curation",
    ],
    timelineColor: "bg-blue-500",
  },
];

const VideoEditingPage = () => {
  const [activeTab, setActiveTab] = useState("yt");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const selectedService = services.find((s) => s.id === activeTab);

  return (
    <>
      <PageSEO
        title="Video Editing"
        description="Professional video editing services including YouTube optimization, shorts editing, reels creation, and cinematic brand videos for maximum engagement."
        keywords="video editing, YouTube editing, video production, content creation, shorts editing, reels"
        url="/video-editing"
      />
      <Layout>
        <div className="bg-[#f8ffea] text-[#1C4B42] min-h-screen font-sans overflow-x-hidden relative">
          {/* Soft Ambient Vector Glows for Clean Look */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#92C200]/5 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1C4B42]/5 blur-[150px] rounded-full pointer-events-none" />

          {/* 2. THE SERVICES INTERACTIVE TIMELINE */}
          <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#92C200] bg-[#92C200]/10 px-3 py-1 inline-block rounded-full">
                What I Do
              </h2>
              <p className="text-3xl md:text-4xl font-extrabold text-[#1C4B42]">
                Tailored Editing Architecture
              </p>
              <p className="text-gray-600">
                Different content requires completely different editing
                psychologies. Pick your format to see how your videos get
                constructed.
              </p>
            </div>

            {/* Tab Selection Row */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all ${
                      isSelected
                        ? "bg-[#1C4B42] text-[#92C200] shadow-xl shadow-[#1C4B42]/10"
                        : "bg-white text-gray-500 hover:text-[#1C4B42] border border-gray-200"
                    }`}
                  >
                    <Icon />
                    {service.title.split(" ")[0]} Style
                  </button>
                );
              })}
            </div>

            {/* Tab Window Dynamic Display */}
            <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[32px] p-8 md:p-12 min-h-[380px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="w-12 h-12 bg-[#1C4B42] rounded-2xl flex items-center justify-center text-[#92C200] text-xl shadow-md">
                    {(() => {
                      const Icon = selectedService.icon;
                      return <Icon />;
                    })()}
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#1C4B42]">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedService.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {selectedService.features.map((feat, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700 font-medium"
                      >
                        <FaCheckCircle className="text-[#1C4B42] flex-shrink-0 text-base" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Interactive Feature Deep Dive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Pacing & Retention",
                    desc: "Rigorous cutting to match speech cadence perfectly.",
                    icon: FaClock,
                  },
                  {
                    label: "Sound Architecture",
                    desc: "Multi-layered dynamic sfx, ambient noise, audio sweeping.",
                    icon: FaVolumeUp,
                  },
                  {
                    label: "Color Grading",
                    desc: "Color correction matched to the mood of the narrative.",
                    icon: FaMagic,
                  },
                  {
                    label: "Motion Asset Polish",
                    desc: "Popups, graphics, and typography transitions.",
                    icon: FaVideoSlash,
                  },
                ].map((box, idx) => {
                  const BoxIcon = box.icon;
                  const isHovered = hoveredFeature === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredFeature(idx)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[150px] cursor-help ${
                        isHovered
                          ? "bg-[#1C4B42] border-[#1C4B42] translate-y-[-4px] shadow-lg shadow-[#1C4B42]/10"
                          : "bg-gray-50/50 border-gray-200/80"
                      }`}
                    >
                      <BoxIcon
                        className={`text-xl transition-colors ${isHovered ? "text-[#92C200]" : "text-gray-400"}`}
                      />
                      <div>
                        <h4
                          className={`font-bold text-sm mb-1 transition-colors ${isHovered ? "text-white" : "text-[#1C4B42]"}`}
                        >
                          {box.label}
                        </h4>
                        <p
                          className={`text-xs line-clamp-2 transition-colors ${isHovered ? "text-gray-300" : "text-gray-500"}`}
                        >
                          {box.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. "THE BLUEPRINT": HOW WE CO-WORK */}
          <section className="py-24 bg-gray-50/50 border-y border-gray-200/60 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#92C200] bg-[#92C200]/10 px-3 py-1 inline-block rounded-full">
                  The Engine
                </h2>
                <p className="text-3xl md:text-4xl font-extrabold text-[#1C4B42]">
                  4-Step Post-Production Pipeline
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {[
                  {
                    step: "01",
                    name: "Footage Drop",
                    info: "Upload raw footage + your rough notes or brief to a shared private cloud drive.",
                  },
                  {
                    step: "02",
                    name: "The First Assembly",
                    info: "I handle the structural timeline cut, rough pacing, and matching audio markers.",
                  },
                  {
                    step: "03",
                    name: "VFX & Sound Inject",
                    info: "The injection of animations, kinetic text, high fidelity sound effects, and color grading curves.",
                  },
                  {
                    step: "04",
                    name: "Frame-by-Frame Polish",
                    info: "Use an intuitive frame-accurate feedback tool to log any tweaks before final render delivery.",
                  },
                ].map((pipeline, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white border border-gray-200/80 p-8 rounded-2xl relative flex flex-col justify-between group hover:border-[#1C4B42] hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                  >
                    <div className="text-4xl font-black font-mono text-gray-200 group-hover:text-[#92C200]/30 transition-colors duration-300 mb-6">
                      {pipeline.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#1C4B42] mb-2">
                        {pipeline.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {pipeline.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default VideoEditingPage;
