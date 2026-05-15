import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaVideo } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle";
import { meetingData } from "../../data/meeting";


const ClientMeetings = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % meetingData.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + meetingData.length) % meetingData.length);

  // Autoplay Logic
  useEffect(() => {
    const timer = setInterval(next, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Helper function to calculate the layout role of each slide
  const getSlidePosition = (slideIndex) => {
    if (slideIndex === index) return "center";
    if (slideIndex === (index - 1 + meetingData.length) % meetingData.length)
      return "left";
    if (slideIndex === (index + 1) % meetingData.length) return "right";
    return "hidden";
  };

  // Framer Motion Variants for the 3D-like stacking effect
  const cardVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 5,
      opacity: 1,
      filter: "blur(0px)",
    },
    left: {
      x: "-70%",
      scale: 0.85,
      zIndex: 3,
      opacity: 0.4,
      filter: "blur(4px)",
    },
    right: {
      x: "70%",
      scale: 0.85,
      zIndex: 3,
      opacity: 0.4,
      filter: "blur(4px)",
    },
    hidden: {
      x: "0%",
      scale: 0.7,
      zIndex: 1,
      opacity: 0,
    },
  };

  return (
    <section className="py-[100px] bg-[#fcfdfa] overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Global Client Consultations"
          subtitle="Meetings & Strategy"
        />

        {/* Carousel Wrapper */}
        <div className="relative mt-20 max-w-4xl mx-auto h-[350px] md:h-[520px] flex items-center justify-center">
          {/* Slides Container */}
          <div className="relative w-full h-[300px] md:h-[460px] flex items-center justify-center">
            {meetingData.map((meeting, i) => {
              const position = getSlidePosition(i);
              if (position === "hidden") return null;

              return (
                <motion.div
                  key={meeting.id}
                  variants={cardVariants}
                  animate={position}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => {
                    if (position === "left") prev();
                    if (position === "right") next();
                  }}
                  className={`absolute w-[85%] md:w-[75%] h-full rounded-[40px] shadow-2xl border-4 md:border-8 border-white overflow-hidden cursor-pointer select-none`}
                >
                  {/* Slide Image */}
                  <img
                    src={meeting.img}
                    alt={meeting.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Active Slide Info Overlay */}
                  <AnimatePresence>
                    {position === "center" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 inset-x-0 p-6 md:p-10 bg-gradient-to-t from-[#1C4B42]/90 via-[#1C4B42]/50 to-transparent"
                      >
                        <div className="flex items-center gap-3 text-[#92C200] mb-2">
                          <FaVideo className="animate-pulse" />{" "}
                          <span className="text-xs font-bold uppercase tracking-widest">
                            Live Recording
                          </span>
                        </div>
                        <h3 className="text-white text-xl md:text-3xl font-extrabold tracking-tight">
                          {meeting.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dimming overlay for side slides */}
                  {position !== "center" && (
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-16 z-30 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-[#1C4B42] text-[#1C4B42] hover:text-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 transition-all group"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:-right-16 z-30 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-[#1C4B42] text-[#1C4B42] hover:text-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 transition-all group"
            aria-label="Next slide"
          >
            <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Optional: Visual Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {meetingData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#1C4B42]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMeetings;
