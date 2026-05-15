import { FaArrowRight, FaStar } from "react-icons/fa";
import userImg from "../../assets/foysal-ahmed.jpeg";

// -- Sub-Components for Design Consistency --

const Pill = ({ children, className = "" }) => (
  <div
    className={`inline-block bg-[#E5E9F8] text-[#557EF3] font-sans font-medium text-xs px-4 py-1.5 rounded-full border-[1px] ${className}`}
  >
    {children}
  </div>
);

const ReviewStars = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? "text-[#FF8A00]" : "text-gray-300"}`}
        size={14}
      />
    ))}
  </div>
);

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#dfe9ff] to-[#fff8f3] pt-[30px] pb-[80px] overflow-hidden">
      {/* CSS for the hanging animation */}
      <style>
        {`
          @keyframes hanging {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          .animate-hanging {
            animation: hanging 2s ease-in-out infinite;
          }
        `}
      </style>

      <div className="container grid grid-cols-1 md:grid-cols-[60%_40%] items-center gap-10">
        {/* Left Column: Content */}
        <div className="space-y-6 order-2 md:order-1">
          <Pill>Hi There!</Pill>

          <h1 className="poppins font-bold text-[34px] lg:text-[62px] leading-[38px] lg:leading-[67px] text-[#1D1D1D]">
            Top Rated SEO Expert
            <br />
            <div className="flex items-center gap-4 mt-2 animate-hanging">
              {/* Decorative Border before the name */}
              <span className="hidden lg:block w-2 h-[45px] bg-[#5692F7]"></span>
              <span className="text-[#5692F7]">Foysal Ahmed</span>
            </div>
          </h1>

          <p className="text-[15px] lg:text-lg font-medium text-[#475569] max-w-[650px]">
            I am a Top Rated Plus Freelancer who have worked for big brand
            company from last 5 years and boost up a lot of brands. Now I am an{" "}
            <span className="text-[#E11C88] font-semibold underline">
              SEO mentor
            </span>{" "}
            and Freelancer as well as work for Ryyan International (London,
            United Kingdom) as a marketing head.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <p className="font-semibold text-base text-[#0f172a]">
              100+ Reviews by students
            </p>
            <ReviewStars rating={5} />
          </div>

          <button className="flex items-center gap-3 bg-[#111111] text-white poppins font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg hover:bg-[#333333] transition-all hover:gap-5">
            Book a call
            <FaArrowRight size={14} className="text-white" />
          </button>
        </div>

        {/* Right Column: Image with Badges */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative pt-14 lg:px-10">
            <div className="relative">
              {/* THE MAIN WHITE CARD */}
              <div className="relative z-10 p-3 bg-white rounded-[50px] shadow-2xl max-w-[420px]">
                <div className="overflow-hidden rounded-[40px]">
                  <img
                    src={userImg}
                    alt="Profile"
                    className="w-full h-[320px] md:h-[500px] object-cover block hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Top Left Floating Card */}
                <div className="absolute -left-6 lg:-left-12 top-10 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 min-w-[130px] lg:min-w-[150px] z-20">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Top Rated
                  </p>
                  <p className="text-lg lg:text-xl poppins font-extrabold text-[#1a1a1a]">
                    SEO EXPERT
                  </p>
                </div>

                {/* Bottom Right Floating Card */}
                <div className="absolute -right-4 lg:-right-8 bottom-10 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 min-w-[130px] lg:min-w-[150px] z-20">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Experience
                  </p>
                  <p className="text-lg lg:text-xl poppins font-extrabold text-[#1a1a1a]">
                    7+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
