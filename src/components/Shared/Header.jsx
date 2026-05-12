import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  FaAddressCard,
  FaCaretDown,
  FaEnvelopeOpenText,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { SiRocket } from "react-icons/si";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    {
      title: "SEO Services",
      hasDropdown: true,
      subItems: ["YouTube SEO", "Google Ads"],
    },
    { title: "Client Meetings", hasDropdown: false },
    { title: "Portfolio", hasDropdown: false },
    { title: "About", hasDropdown: false },
    { title: "Contact", hasDropdown: false },
  ];

  return (
    <header className="w-full font-sans">
      {/* --- Top Bar (Dark Green) --- */}
      <div className="bg-[#1C4B42]">
        <div className="container text-white py-1 flex justify-center items-center gap-2 text-xs md:text-sm font-bold">
          <SiRocket size={16} />
          <span>Top Rated Plus SEO Expert</span>
        </div>
      </div>

      {/* --- Middle Info Bar (Lime Green) - Hidden on Mobile --- */}
      <div className="bg-[#92C200]">
        <div className="hidden lg:flex container  text-white px-10 pt-2 pb-3 justify-between items-center text-sm poppins">
          <div className="flex gap-x-8">
            <div className="flex items-center gap-2 ">
              <FaPhoneAlt size={14} /> <span>+4407311099834</span>
            </div>
            <a
              href="mailto:admin@topratedseoexpert.com"
              className="flex items-center gap-2"
            >
              <FaEnvelopeOpenText size={14} />{" "}
              <span>admin@topratedseoexpert.com</span>
            </a>
            <div className="flex items-center gap-2">
              <FaAddressCard size={14} />{" "}
              <span>3 Muirfield Cresent, E14 9SZ, London</span>
            </div>
          </div>
          <div className="flex items-center gap-x-5 text-lg">
            <FaFacebook className="cursor-pointer hover:opacity-80" />
            <FaLinkedin className="cursor-pointer hover:opacity-80" />
            <FaYoutube className="cursor-pointer hover:opacity-80" />
            <FaInstagram className="cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav className="bg-gray">
        <div className="container px-4 py-3 flex justify-between items-center relative poppins">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="bg-white border-2 border-[#92C200] p-1 flex items-center">
              <span className="text-xl px-2 font-bold allura">
                <span className="text-[#92C200]">P</span>rime Ran
                <span className="text-[#92C200]">k</span>
              </span>
              <div className="bg-[#92C200] text-white text-[10px] px-2 py-1 leading-tight text-center">
                SEO <br /> SOLUTIONS
              </div>
            </div>
          </div>

          {/* Desktop Menu (Pill Shape) */}
          <div className="hidden lg:flex items-center bg-[#D7E5C6] rounded-full px-14 py-2 gap-x-8">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="relative flex items-center gap-1 text-[#111] font-semibold cursor-pointer text-sm hover:text-[#92c200] transition-colors pb-1 group">
                  {link.title}
                  {link.hasDropdown && <FaCaretDown size={14} />}

                  {/* The Animated Border */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#92c200] transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Dropdown Desktop */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === idx && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-3 w-48 bg-white shadow-xl rounded-lg overflow-hidden z-50"
                    >
                      {link.subItems.map((sub, i) => (
                        <li
                          key={i}
                          className="px-4 py-3 text-sm text-[#111111] font-medium hover:bg-[#c3e45f] transition-colors cursor-pointer"
                        >
                          {sub}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden lg:flex items-center gap-2 bg-[#92C200] text-white px-6 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1C4B42] transition-all shadow-lg">
            Book a Call <FaLongArrowAltRight size={18} />
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden bg-[#92C200] p-2 rounded-md text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[99]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 h-full w-[80%] bg-[#0A252E] z-[100] p-6 text-white"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="bg-white text-black p-1 text-xs">
                  Logo Placeholder
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#92C200] p-1 rounded"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="space-y-6 text-lg font-medium">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <div
                      className="flex justify-between items-center"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === idx ? null : idx)
                      }
                    >
                      <span>{link.title}</span>
                      {link.hasDropdown && (
                        <ChevronDown
                          size={20}
                          className={
                            activeDropdown === idx
                              ? "rotate-180 transition-transform"
                              : ""
                          }
                        />
                      )}
                    </div>
                    {link.hasDropdown && activeDropdown === idx && (
                      <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        className="ml-4 mt-4 space-y-4 text-[#92C200]"
                      >
                        {link.subItems.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
