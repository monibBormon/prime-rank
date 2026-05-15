import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function HomeCta() {
  return (
    <div className="bg-[#B4E718]">
      <div className="container">
        <div className="py-16 text-center  max-w-[550px] mx-auto">
          <h2 className="text-[35px] lg:text-[57px] leading-[40px] lg:leading-[65px] font-bold text-[#333 bebas uppercase">
            The businesses that adapt early will dominate search.
          </h2>
          <p className="text-base text-[#333] mt-5">
            SEO is evolving faster than most businesses realise. Google,
            ChatGPT, Gemini, voice assistants your customers use all of them.
            Does your business show up?
          </p>
          <div className="flex poppins text-sm font-bold flex-col lg:flex-row justify-center gap-y-5 lg:gap-y-0 gap-x-5 mt-10">
            <button className="text-center mx-auto w-full justify-center flex items-center text-white bg-black gap-x-2 p-[14px_25px] rounded-full cursor-pointer">
              Get Free SEO Audit <MoveRight />{" "}
            </button>
            <button className="text-center mx-auto w-full justify-center flex items-center text-white bg-green-600 gap-x-2 p-[14px_25px] rounded-full cursor-pointer">
              Book a Call <FaWhatsapp />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCta;
