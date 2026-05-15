import { MessageCircle, MoveRight } from "lucide-react";
import ProfileCard from "./ProfileCard";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray pt-10 pb-20 overflow-hidden">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5">
        {/* --- Left Content --- */}
        <div className="z-10 order-2 lg:order-1">
          {/* Badge */}
          <button className="poppins w-full lg:w-auto bg-[#E1F2BF] text-[#92c200] p-[3px_10px] mb-4">
            <span>
              <span className="inline-block w-2 h-2 rounded-full text-sm bg-[#92c200]"></span>{" "}
              TOP RATED PLUS · LONDON · UPWORK
            </span>
          </button>

          {/* Headline */}
          <h1 className="text-[32px] lg:text-[80px] bebas leading-[40px] lg:leading-[90px] font-semibold max-w-[500px]">
            TOP RATED PLUS  <span className="text-[#92C200]">SEO</span>
            <span className="text-[#92C200]"> EXPERT</span> IN LONDON
          </h1>

          {/* Sub-headline */}
          <p className="text-[16px] lg:text-[20px] leading-[30px] text-[#333] tracking-wide mb-6 mt-4">
            SEO · AEO · GEO · AI Search Specialist
          </p>

          {/* Description */}
          <div className="max-w-[560px] space-y-4 text-[#333] text-base lg:text-lg mb-5">
            <p>
              I'm <span className="font-bold text-gray-700">Foysal Ahmed</span>,
              a Top Rated Plus SEO Consultant, also London's leading SEO, AEO &
              AI Search specialist. I built strategies that generate real
              revenue and helped businesses rank not just on Google but inside
              AI-driven search results.
            </p>
            <p>
              Websites don't fail because of effort; they fail because of the
              wrong strategy. I fix that.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="lg:flex gap-x-4 gap-y-5 text-[15px] poppins">
            <button className="flex items-center gap-2 bg-[#1CBC35] text-white px-10 py-3 rounded-full w-full justify-center mb-5 lg:mb-0 lg:w-auto font-bold hover:bg-[#1ebd5b] transition-all shadow-lg">
              WhatsApp
              <FaWhatsapp size={20} fill="currentColor" />
            </button>
            <button className="flex gap-2 bg-black text-white px-10 py-3 lg:py-2 rounded-full w-full justify-center mb-5 lg:mb-0 lg:w-auto font-bold hover:bg-gray-800 transition-all shadow-lg">
              Get Free SEO <br className="hidden lg:block" /> Audit <MoveRight size={20} />
            </button>
            <button className="flex items-center gap-2 bg-white border border-green-100 text-black px-10 py-3 rounded-full w-full justify-center mb-5 lg:mb-0 lg:w-auto font-bold hover:bg-gray-50 transition-all shadow-sm">
              View real results <MoveRight size={20} />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 bg-white rounded-xl shadow-sm border border-gray-100 mt-8 overflow-hidden">
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 md:border-r-2 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">3,500+</div>
              <div className="text-sm text-[#333]">
                SEO Projects
              </div>
            </div>
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 md:border-r-2 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">98%</div>
              <div className="text-sm text-[#333]">
                Job Success Rate
              </div>
            </div>
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 md:border-r-2 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">7+</div>
              <div className="text-sm text-[#333]">
                Years Experience
              </div>
            </div>
            <div className="p-6 text-center border-b-2 md:border-b-0 hover:bg-[#E5EDD1] duration-300 border-gray-300">
              <div className="text-3xl font-bold text-black poppins">500+</div>
              <div className="text-sm text-[#333]">
                Brands
              </div>
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
