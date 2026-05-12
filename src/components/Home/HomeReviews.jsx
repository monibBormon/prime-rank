import { Star, User } from "lucide-react";
import SectionTitle from "../Shared/SectionTitle";

const reviews = [
  {
    id: 1,
    tag: "DIGITAL MARKETING AGENCY",
    title: "High Authority Guest Post Backlinks",
    author: "Michael Turner",
    service: "Link Building",
    testimonial:
      "Proactive and fast service, exactly as agreed. He placed a high-quality backlink that fits perfectly with our SEO strategy. Highly reliable.",
    highlights: ["Execution speed", "Backlink quality", "Reliability"],
  },
  {
    id: 2,
    tag: "LOCAL SERVICE BUSINESS",
    title: "SEO Consultation — Business Growth Planning",
    author: "Olivia Bennett",
    service: "SEO Consultation",
    testimonial:
      "Hridoy provided an excellent session. Very easy to communicate with and clearly knows SEO inside out. He answered all our questions and gave us a clear direction.",
    highlights: ["Strategic thinking", "AI SEO", "High-value consulting"],
  },
];
function HomeReviews() {
  return (
    <div className="py-[50px]">
      <div className="container">
        <SectionTitle
          title="Reviews as a Top Rated SEO Consultant
"
          subtitle="Verified Reviews
"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-50">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative w-full bg-white rounded-3xl p-5 shadow-sm border border-gray-200 
                     transition-all duration-300 hover:shadow-xl hover:border-t-4 hover:border-t-[#92C200] group"
            >
              {/* Top ID Badge */}
              <div className="w-10 h-10 rounded-lg bg-[#E9F3CC] flex items-center justify-center mb-6">
                <span className="text-black font-bold border-2 border-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {review.id}
                </span>
              </div>

              {/* Industry Tag */}
              <div className="inline-flex items-center bg-[#E9F3CC] px-4 py-1.5 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#92C200] rounded-full mr-2"></div>
                <span className="text-[11px] font-bold text-[#92C200] tracking-wider uppercase">
                  {review.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-black text-[#1a1a1a] leading-tight mb-4">
                {review.title}
              </h3>

              {/* Author Row */}
              <div className="flex items-center gap-2 mb-4 text-[#1a1a1a]">
                <User size={18} fill="currentColor" />
                <span className="font-bold text-[15px]">
                  {review.author}{" "}
                  <span className="font-medium text-gray-400 mx-1">·</span>{" "}
                  {review.service}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#92C200" color="#92C200" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-[#4a4a4a] italic text-[17px] leading-relaxed mb-10">
                "{review.testimonial}"
              </p>

              {/* Footer Highlights */}
              <div className="flex flex-wrap gap-2 pt-4">
                {review.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[#6B8E00] font-bold text-[13px]"
                  >
                    {item}{" "}
                    {idx !== review.highlights.length - 1 && (
                      <span className="text-gray-300 ml-1">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeReviews;
