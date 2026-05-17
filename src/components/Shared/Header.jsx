import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaAddressCard,
  FaCaretDown,
  FaEnvelopeOpenText,
  FaFire,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiRocket } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers exactly when the top two bars are scrolled past (~110px total height)
      if (window.scrollY > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Services",
      hasDropdown: true,
      subItems: [
        { label: "YouTube SEO", path: "/portfolio?tab=Youtube SEO" },
        { label: "YouTube Monitaization", path: "/portfolio?tab=Monetization" },
        {
          label: "Subscribers Growth",
          path: "/portfolio?tab=Organic Subscriber",
        },
        { label: "Thumbnail  design", path: "/portfolio?tab=Thumbnail" },
        { label: "Watch Hours", path: "/portfolio?tab=Watch Hours" },
        { label: "Video Editing", path: "/video-editing" },
        { label: "Website SEO", path: "/seo" },
        { label: "Google Ads", path: "/google-ads" },
      ],
    },
    { title: "Client Meetings", path: "/meetings", hasDropdown: false },
    { title: "Portfolio", path: "/portfolio", hasDropdown: false },
    { title: "Pricing", path: "/pricing", hasDropdown: false },
    { title: "About", path: "/about", hasDropdown: false },
    { title: "Contact", path: "/contact", hasDropdown: false },
  ];

  return (
    <header className="w-full relative">
      {/* --- Top Bar (Dark Green) --- */}
      <div className="bg-[#1C4B42]">
        <div className="container mx-auto text-white py-1 flex justify-center items-center gap-2 text-xs md:text-sm font-bold">
          <FaFire size={16} />
          <span>Top Rated Digital Marketer</span>
        </div>
      </div>

      {/* --- Middle Info Bar (Lime Green) --- */}
      <div className="bg-[#92C200]">
        <div className="hidden lg:flex max-w-7xl mx-auto text-white px-4 pt-2 pb-3 justify-between items-center text-sm poppins">
          <div className="flex gap-x-8">
            <a
              className="flex items-center gap-2"
              href="https://wa.me/8801718002029"
            >
              <FaPhoneAlt size={14} /> <span>+8801718002029</span>
            </a>
            <a
              href="mailto:info.foysal.yt@gmail.com"
              className="flex items-center gap-2"
            >
              <FaEnvelopeOpenText size={14} />{" "}
              <span>info.foysal.yt@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <FaAddressCard size={14} /> <span>Natore, Bangladesh</span>
            </div>
          </div>
          <div className="flex items-center gap-x-5 text-lg">
            <a
              href="https://www.linkedin.com/in/findfoysalbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:opacity-80" />
            </a>
            <a
              href="https://www.instagram.com/findfoysalbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Invisible Spacer --- 
          Prevents layout layout jumping/flickering when the nav switches to position: fixed */}
      {isSticky && (
        <div className="h-[72px] lg:h-[80px] w-full bg-transparent" />
      )}

      {/* --- Main Navigation (Fixed fallback approach) --- */}
      <nav
        className={`w-full bg-white transition-all duration-300 left-0 right-0 ${
          isSticky
            ? "fixed top-0 z-50 shadow-md border-b border-gray-100 animate-fadeIn"
            : "relative shadow-sm"
        }`}
      >
        <div
          className={`container mx-auto px-4 flex justify-between items-center relative poppins transition-all duration-300 ${
            isSticky ? "py-3" : "py-4"
          }`}
        >
          <Link to="/">
            <img
              className={`cursor-pointer transition-all duration-300 ${
                isSticky ? "w-[120px]" : "w-[160px]"
              }`}
              src={logo}
              alt="logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center bg-[#D7E5C6] rounded-full px-14 py-2 gap-x-8">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button className="relative flex items-center gap-1 font-semibold text-sm text-[#111] pb-1 cursor-default select-none focus:outline-none">
                    {link.title}
                    <FaCaretDown size={14} />
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#92c200] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 font-semibold text-sm transition-colors pb-1 group ${
                        isActive ? "text-[#84aa12]" : "text-[#111]"
                      }`
                    }
                  >
                    {link.title}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#92c200] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                )}

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
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-3 text-sm text-[#111111] font-medium hover:bg-[#c3e45f] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/8801718002029"
            className={`hidden lg:flex items-center gap-2 bg-[#92C200] text-white px-6 rounded-full font-bold uppercase tracking-wider hover:bg-[#1C4B42] transition-all shadow-lg ${
              isSticky ? "py-2 text-xs" : "py-3.5 text-sm"
            }`}
          >
            Book a Call <FaLongArrowAltRight size={18} />
          </a>

          {/* Mobile Menu Button */}
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
              className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-[#0A252E] z-[100] p-6 text-white"
            >
              <div className="flex justify-between items-center mb-10">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-32 brightness-0 invert"
                  />
                </Link>
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
                    <div className="flex justify-between items-center">
                      {link.hasDropdown ? (
                        <span
                          className="cursor-pointer select-none w-full"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === idx ? null : idx,
                            )
                          }
                        >
                          {link.title}
                        </span>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.title}
                        </Link>
                      )}

                      {link.hasDropdown && (
                        <ChevronDown
                          size={20}
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === idx ? null : idx,
                            )
                          }
                          className={
                            activeDropdown === idx
                              ? "rotate-180 transition-transform cursor-pointer"
                              : "transition-transform cursor-pointer"
                          }
                        />
                      )}
                    </div>
                    {link.hasDropdown && activeDropdown === idx && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="ml-4 mt-4 space-y-4 text-[#92C200]"
                      >
                        {link.subItems.map((sub, i) => (
                          <li key={i}>
                            <Link
                              to={sub.path}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
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
