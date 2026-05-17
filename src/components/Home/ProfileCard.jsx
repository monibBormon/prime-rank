import userImg from "../../assets/foysal-ahmed.jpeg";

const ProfileCard = () => {
  return (
    /* Center the card in the viewport for testing */
    <div className=" order-1 lg:order-2">
      <div className="relative pt-14 px-10">
        {/* Container for the Design */}
        <div className="relative">
          {/* 1. THE GREEN BACKGROUND SHAPE */}
          {/* We use -inset-4 to make it slightly larger than the white card, 
              and rotate-3 to give it that specific offset look */}
          <div className="absolute inset-10 -top-2 right-0 md:right-0 bg-[#D9E9A3] rounded-[50px] rotate-[175deg] z-0"></div>

          {/* 2. THE MAIN WHITE CARD */}
          {/* z-10 ensures this stays on top of the green background */}
          <div className="relative z-10 p-3 bg-white rounded-[50px] shadow-xl max-w-[420px]">
            {/* The Image Wrapper */}
            <div className="overflow-hidden rounded-[40px]">
              <img
                src={userImg}
                alt="Foysal Ahmed"
                className="w-full h-[380px] md:h-[480px] object-cover block"
              />
            </div>

            {/* 3. Top Left Floating Card (SEO Project) */}
            <div className="absolute -left-12 -top-2 md:top-3 lg:top-10 bg-white p-2 lg:p-4 rounded-2xl shadow-lg border border-gray-50 min-w-[150px] z-20">
              <p className="text-[8px] lg:text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                SEO Project Complete
              </p>
              <p className="text-base lg:text-2xl font-extrabold text-[#1a1a1a]">500+</p>
            </div>

            {/* 4. Bottom Right Floating Card (Experience) */}
            <div className="absolute -right-8 bottom-10 bg-white p-2 lg:p-4 rounded-2xl shadow-lg border border-gray-50 min-w-[150px] z-20">
              <p className="text-[8px] lg:text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                Experience
              </p>
              <p className="text-base lg:text-2xl font-extrabold text-[#1a1a1a]">5+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
