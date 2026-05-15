import { FaWhatsapp } from "react-icons/fa";
import ProfileCard from "./ProfileCard";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray pt-10 pb-20 overflow-hidden">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5 items-center">
        {/* --- Left Content --- */}
        <div className="z-10 order-2 lg:order-1">

          {/* Description */}
          <div className="max-w-[560px] space-y-4 text-[#333] text-base lg:text-lg mb-5">
            <p>
              Hello, <span className="font-semibold">I’m Foysal Ahmed,</span> the Founder & CEO of PrimeRank SEO
              Solutions. I am a Level 4 Digital Marketer with over 5 years of
              professional experience in <span className="font-semibold">SEO, YouTube growth, and channel
              monetization.</span>
            </p>
            <p>
              At PrimeRank SEO Solutions, we focus on professionalism,
              transparency, and performance-driven growth to help clients
              achieve real online success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="lg:flex gap-x-4 gap-y-5 text-[15px] poppins">
            <a href="https://wa.me/8801718002029" className="flex items-center gap-2 bg-[#1CBC35] text-white p-[16px_50px] rounded-full w-full justify-center mb-5 lg:mb-0 lg:w-auto font-bold hover:bg-[#19cf5f] transition-all shadow-lg ">
              WhatsApp
              <FaWhatsapp size={20} fill="currentColor" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 bg-white rounded-xl shadow-sm border border-gray-100 mt-8 overflow-hidden">
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 md:border-r-2 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">500+</div>
              <div className="text-sm text-[#333]">SEO Projects</div>
            </div>
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 md:border-r-2 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">98%</div>
              <div className="text-sm text-[#333]">Job Success Rate</div>
            </div>
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 md:border-r-2 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">5+</div>
              <div className="text-sm text-[#333]">Years Experience</div>
            </div>
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">200+</div>
              <div className="text-sm text-[#333]">Brands</div>
            </div>
          </div>
        </div>

        {/* --- Right Image Section --- */}
        <ProfileCard />
      </div>
    </section>
  );
};

export default HeroSection;
