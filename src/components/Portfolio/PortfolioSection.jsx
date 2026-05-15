import { useState } from "react";
import {
  FaChartLine,
  FaClock,
  FaExpandAlt,
  FaImage,
  FaPlus,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Youtube SEO");
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedImg, setSelectedImg] = useState(null);

  const tabs = [
    { id: "Youtube SEO", icon: <FaYoutube /> },
    { id: "Monetization", icon: <FaChartLine /> },
    { id: "Thumbnail", icon: <FaImage /> },
    { id: "Watch Hours", icon: <FaClock /> },
  ];

  // Dummy Data
  const portfolioData = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    category: tabs[i % 4].id,
    image: `https://picsum.photos/seed/${i + 50}/600/400`,
    title: `Project ${i + 1}`,
  }));

  const filteredItems = portfolioData.filter(
    (item) => item.category === activeTab,
  );

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <section className="py-[100px] bg-white relative">
      <div className="container">
        <SectionTitle
          title="My Proven Results & Case Studies"
          subtitle="Recent Portfolio"
        />

        {/* --- Unique Responsive Tabs --- */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex flex-wrap justify-center gap-3 bg-[#1C4B42] p-2 rounded-[20px] lg:rounded-full shadow-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setVisibleItems(6);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 ${
                  activeTab === tab.id
                    ? "bg-[#92C200] text-[#1C4B42] shadow-lg scale-105"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.id}
              </button>
            ))}
          </div>
        </div>

        {/* --- Portfolio Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredItems.slice(0, visibleItems).map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] bg-[#f8fafc] cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4B42]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-[#92C200] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <FaExpandAlt className="text-[#1C4B42]" />
                  </div>
                  <p className="text-[#92C200] font-bold text-xs uppercase tracking-widest">
                    {item.category}
                  </p>
                  <h4 className="text-white text-xl font-black mt-1">
                    View Project Details
                  </h4>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaPlus className="text-white text-xs" />
              </div>
            </div>
          ))}
        </div>

        {/* --- Load More Button --- */}
        {visibleItems < filteredItems.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 border-2 border-[#1C4B42] text-[#1C4B42] font-black uppercase tracking-widest rounded-full hover:bg-[#1C4B42] hover:text-white transition-all duration-300 active:scale-95"
            >
              See More Projects
            </button>
          </div>
        )}
      </div>

      {/* --- Zoom Modal (Click to Zoom Effect) --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#1C4B42]/95 backdrop-blur-sm p-5 md:p-10"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-[#92C200] hover:text-white transition-colors">
            <FaTimes size={40} />
          </button>

          <img
            src={selectedImg}
            alt="Zoomed"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
