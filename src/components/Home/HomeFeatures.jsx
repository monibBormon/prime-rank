import SectionTitle from "../Shared/SectionTitle";
import img1 from "../../assets/icons/strategy.svg"
import img2 from "../../assets/icons/optimized.svg"
import img3 from "../../assets/icons/graph.svg"
import img4 from "../../assets/icons/computer.svg"


const featuresData = [
    {
        id: 1,
        img: img1,
        title: "Strategy based on search intent",
        desc: "I build strategies around what your customers are actually searching for not guesswork or generic keyword lists."
    },
    {
        id: 2,
        img: img2,
        title: "Optimised for AI search, not just Google",
        desc: "Your customers are searching on ChatGPT, Gemini, and voice assistants. I make sure your business shows up there too."
    },
    {
        id: 3,
        img: img3,
        title: "Long-term authority, not short-term wins",
        desc: "I build compounding authority that protects your rankings against algorithm changes and future competitors."
    },
    {
        id: 4,
        img: img4,
        title: "Your business treated as a system",
        desc: "I don’t treat your business as a project. I treat it as a system built for consistent, scalable, long-term growth."
    }
]


function HomeFeatures() {
  return (
    <div className="bg-black py-[100px]">
      <div className="container grid lg:grid-cols-2 gap-x-10 items-center">
            <div className="mb-10 lg:mb-0">
                <SectionTitle title={"I focus on outcomes, not just rankings."} subtitle={"What Makes Me Different"} className="text-white" />
                <p className="text-base text-[#dfdbdb] poppins">Most SEO consultants focus on rankings. I focus on revenue. Traffic is meaningless if it doesn’t convert. Rankings are useless if they don’t bring in business.</p>
            </div>
            <div>
                {
                    featuresData.map(feature => (
                        <div key={feature.id} className="flex items-center gap-x-5 mb-10">
                            <img className="w-10 h-10" src={feature.img} alt="feature" />
                            <div>
                                <h4 className="bebas text-[20px] leading-[25px] text-white mb-1">{feature.title}</h4>
                                <p className="text-sm leading-[18px] text-[#7e7e7e]">{feature.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
