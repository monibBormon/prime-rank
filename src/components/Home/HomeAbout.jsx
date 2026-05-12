import foysalImg from "../../assets/foysal.jpeg"


function HomeAbout() {
  return (
    <div className="bg-gray py-[50px] border-t border-green-300">
      <div className="container grid lg:grid-cols-[65%_35%] gap-5">
        <div>
          <h4 className="green uppercase poppins">About Foysal</h4>
          <h2 className="text-[57px] leading-[65px] text-black bebas font-bold my-5">Who is Foysal Ahmed ?</h2>
          <p className="text-lg text-[#333] mb-2">
            Hello, I’m Foysal Ahmed, the Founder & CEO of PrimeRank SEO
            Solutions. I am a Level 4 Digital Marketer with over 5 years of
            professional experience in SEO, YouTube growth, and channel
            monetization.
          </p>
          <p className="text-lg text-[#333] mb-2">I specialize in helping businesses, brands, and content creators increase their online visibility through advanced SEO strategies and organic YouTube promotion. My expertise includes <span className="font-semibold">Technical SEO, On-Page SEO, Keyword Research, YouTube SEO, audience growth, and monetization strategy</span>.</p>
          <p className="text-lg text-[#333] mb-2">Over the years, I have worked with clients from different industries to improve search rankings, grow targeted traffic, and build profitable YouTube channels. My goal is always to deliver long-term, sustainable results using safe and effective digital marketing methods.</p>
          <p className="light-green-bg text-lg font-bold italic px-5 py-1 rounded-2xl">"At PrimeRank SEO Solutions, we focus on professionalism, transparency, and performance-driven growth to help clients achieve real online success."</p>
        </div>
        <div>
            <img className="rounded-xl" src={foysalImg} alt="Foysal Ahmed" />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
