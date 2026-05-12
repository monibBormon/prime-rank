import React from 'react';
import userImg from "../../assets/foysal.jpeg"
const ProfileCard = () => {
  return (
    <div className="relative pt-14">
      {/* Container for the entire design */}
      <div className="relative group">
        
        {/* 1. The Light Green Background Decorative Shape */}
        <div className="absolute top-4 left-0 w-full h-full bg-[#92C200]/20 rounded-[45px] rotate-2 -z-10 group-hover:rotate-1 transition-transform duration-500"></div>

        {/* 2. The Main White Bordered Card */}
        <div className="relative p-2 bg-white border-4 border-white rounded-[50px] shadow-2xl overflow-visible max-w-[420px]">
          
          {/* Main Image */}
          <img
            src={userImg}
            alt="Profile"
            className="rounded-[35px] w-full h-auto object-cover"
          />

          {/* 3. Top Left Floating Card (SEO Project) */}
          <div className="absolute -left-10 top-12 bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-xl border border-gray-100 min-w-[160px] animate-bounce-subtle">
            <p className="text-[11px] text-[#64748b] font-bold tracking-tight mb-1">
              SEO Project Complete
            </p>
            <p className="text-2xl font-black text-[#0A1F1C]">3500+</p>
          </div>

          {/* 4. Bottom Right Floating Card (Experience) */}
          <div className="absolute -right-8 bottom-12 bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-xl border border-gray-100 min-w-[160px]">
            <p className="text-[11px] text-[#64748b] font-bold tracking-tight mb-1">
              Experience
            </p>
            <p className="text-2xl font-black text-[#0A1F1C]">7+ Years</p>
          </div>
        </div>
      </div>

      {/* Add this to your globals.css if you want the subtle bounce effect */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;