import { FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#072635] py-[50px]">
      <div className="container grid lg:grid-cols-[40%_60%] gap-x-[120px]">
        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-8 lg:gap-y-0">
          <div>
            {/* logo  */}
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
            <p className="text-white max-w-[280px] text-[15px] poppins leading-[23px] mt-5">
              Founder & CEO | Level 4 Digital Marketer | SEO & YouTube
              Monetization Specialist at PrimeRank SEO Solutions
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-[25px] leading-[30px] font-bold">
              Follow us on
            </h3>
            <ul className="flex gap-x-2 mt-5">
              <li>
                <a
                  href="https://www.linkedin.com/in/findfoysalbd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/findfoysalbd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row gap-x-10 gap-y-8 lg:gap-y-0">
          <div>
            <h3 className="text-[25px] leading-[30px] font-bold text-white">
              Office
            </h3>
            <p className="poppins text-base text-[#b2bec4] mt-3">
              Natore, Bangladesh
            </p>
          </div>
          <div>
            <h3 className="text-[25px] leading-[30px] font-bold text-white">
              Contact
            </h3>
            <p className="poppins text-base text-[#b2bec4] mt-3">
              <a href="https://wa.me/8801718002029" className="hover:text-[#92C200]">
                +8801718002029
              </a>
            </p>
            <p className="poppins text-base text-[#b2bec4]">
              <a
                href="mailto:info.foysal.yt@gmail.com"
                className="hover:text-[#92C200]"
              >
                info.foysal.yt@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
