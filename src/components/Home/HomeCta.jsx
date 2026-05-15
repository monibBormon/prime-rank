import { FaWhatsapp } from "react-icons/fa";

function HomeCta() {
  return (
    <div className="bg-[#B4E718]">
      <div className="container">
        <div className="py-16 text-center  max-w-[550px] mx-auto">
          <h2 className="text-[35px] lg:text-[57px] leading-[40px] lg:leading-[65px] font-bold text-[#333 bebas uppercase">
            Brands That Move Early Will Control Online Visibility
          </h2>
          <p className="text-base text-[#333] mt-5">
            SEO Is Changing Fast. Is Your Business Ready for Google, ChatGPT &
            AI Search?
          </p>
          <div className="flex poppins text-sm font-bold flex-col lg:flex-row justify-center gap-y-5 lg:gap-y-0 gap-x-5 mt-10">
            <a
              href="https://wa.me/8801718002029"
              className="text-center justify-center flex items-center text-white bg-green-600 gap-x-2 p-[16px_45px] rounded-full cursor-pointer hover:bg-green-500 duration-300"
            >
              Book a Call <FaWhatsapp />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCta;
