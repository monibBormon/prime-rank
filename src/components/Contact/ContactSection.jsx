import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCheckCircle } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import SectionTitle from "../Shared/SectionTitle";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submission:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/findfoysalbd",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/findfoysalbd",
      color: "hover:bg-[#E4405F]",
    },
  ];

  return (
    <section className="py-[100px] bg-[#fdfdfd] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E9F3CC] rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#92C200] rounded-full blur-[150px] -z-10 opacity-20"></div>

      <div className="container">
        <SectionTitle
          title="Transforming Clicks into Customers"
          subtitle="Start a Conversation"
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-0 rounded-[50px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          {/* --- Unique Sidebar (Deep Palette) --- */}
          <div className="lg:col-span-4 bg-[#1C4B42] p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[#92C200] font-bold text-xs uppercase tracking-[4px]">
                Contact Me
              </span>
              <h3 className="text-4xl font-black mt-4 mb-8 leading-tight">
                Let's Talk SEO Strategy
              </h3>

              <div className="space-y-10">
                <div className="group flex items-start gap-5">
                  <div className="text-[#92C200] mt-1 transition-transform group-hover:scale-110">
                    <HiOutlinePhone size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                      Direct Line
                    </p>
                    <p className="text-lg font-bold mt-1">
                      <a href="https://wa.me/8801718002029" className="hover:text-[#92C200]">
                        +8801718002029
                      </a>
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5">
                  <div className="text-[#92C200] mt-1 transition-transform group-hover:scale-110">
                    <HiOutlineMail size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                      Official Email
                    </p>
                    <p className="text-lg font-bold mt-1">
                      <a href="mailto:info.foysal.yt@gmail.com" className="hover:text-[#92C200]">
                        info.foysal.yt@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5">
                  <div className="text-[#92C200] mt-1 transition-transform group-hover:scale-110">
                    <HiOutlineLocationMarker size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                      Base Location
                    </p>
                    <p className="text-lg font-bold mt-1">
                      Natore, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-10 mt-16 lg:mt-0">
              <p className="text-sm font-bold text-gray-400 mb-6 tracking-widest uppercase">
                Connect Socially
              </p>
              <div className="flex gap-4">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className={`w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-2 ${item.color}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#92C200] rounded-full opacity-10"></div>
          </div>

          {/* --- Unique Form Area --- */}
          <div className="lg:col-span-8 p-8 lg:p-20 bg-white relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Full Name */}
              <div className="relative group">
                <input
                  {...register("fullName", { required: "Name is required" })}
                  className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all ${errors.fullName ? "border-red-400" : "border-gray-200 focus:border-[#92C200]"}`}
                  placeholder="Full Name *"
                />
                {errors.fullName && (
                  <span className="text-[10px] text-red-500 font-bold absolute -bottom-5 left-0">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all ${errors.email ? "border-red-400" : "border-gray-200 focus:border-[#92C200]"}`}
                  placeholder="Email Address *"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 font-bold absolute -bottom-5 left-0">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="relative group">
                <input
                  {...register("phone", { required: "Phone required" })}
                  className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all ${errors.phone ? "border-red-400" : "border-gray-200 focus:border-[#92C200]"}`}
                  placeholder="Phone Number *"
                />
              </div>

              {/* Selection: Services */}
              <div className="relative group">
                <select
                  {...register("service", { required: true })}
                  className="w-full bg-transparent border-b-2 py-4 outline-none cursor-pointer border-gray-200 focus:border-[#92C200] appearance-none"
                >
                  <option value="">What are you looking for?</option>
                  <option value="Youtube Seo">YouTube SEO</option>
                  <option value="Thumbnail">Thumbnail Design</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ↓
                </div>
              </div>

              {/* Discovery: Radios */}
              <div className="md:col-span-2 py-4">
                <p className="text-sm font-bold text-gray-400 mb-4 tracking-widest uppercase">
                  How did you find me?
                </p>
                <div className="flex flex-wrap gap-8">
                  {["Google", "LinkedIn", "YouTube"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        value={item.toLowerCase()}
                        {...register("source", { required: true })}
                        className="w-5 h-5 accent-[#92C200]"
                      />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-[#92C200] transition-colors">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative group">
                <textarea
                  {...register("message", { required: true })}
                  rows="3"
                  className="w-full bg-transparent border-b-2 py-4 outline-none border-gray-200 focus:border-[#92C200] resize-none"
                  placeholder="Your Message..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-6">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-black bg-[#92C200] rounded-full overflow-hidden transition-all duration-500 hover:pr-14 active:scale-95"
                >
                  <span className="relative z-10 uppercase tracking-[2px]">
                    Send Message
                  </span>
                  <FaPaperPlane className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-black" />
                </button>
              </div>
            </form>

            {/* Success Bottom Toast */}
            {isSubmitted && (
              <div className="absolute bottom-10 left-10 right-10 bg-[#E9F3CC] border-l-8 border-[#92C200] p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500">
                <BiCheckCircle className="text-[#92C200] text-3xl shrink-0" />
                <div>
                  <p className="font-black text-[#1C4B42] text-lg">
                    Message Sent!
                  </p>
                  <p className="text-sm text-[#1C4B42]/70">
                    Hridoy will get back to you shortly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
