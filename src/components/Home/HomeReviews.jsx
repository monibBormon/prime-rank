import { Star, User } from "lucide-react";
import SectionTitle from "../Shared/SectionTitle";

const reviews = [
  {
    id: 1,
    author: "John Miller",
    client:"USA",
    testimonial:
      "Excellent SEO service! My website traffic increased significantly within a short time. Very professional and skilled expert.",
  },
  {
    id: 2,
    author: "Sarah Williams ",
    client:"UK",
    testimonial:
      "Professional YouTube marketing and amazing communication. I’m really satisfied with the results.",
  },
  {
    id: 3,
    author: "Michael Brown",
    client:"Canada",
    testimonial:
      "Highly recommended for monetization and organic growth. My channel performance improved a lot.",
  },
  {
    id: 4,
    author: "David Anderson ",
    client:"Australia",
    testimonial:
      "Very experienced SEO specialist. He optimized my website perfectly and improved Google rankings.",
  },
  {
    id: 5,
    author: "Emma Johnson",
    client:"USA",
    testimonial:
      "Outstanding YouTube promotion service. Real audience growth and excellent support throughout the project.",
  },
  {
    id: 6,
    author: "Daniel Wilson",
    client:"Germany",
    testimonial:
      "Great communication and fast delivery. My website now gets much better organic traffic.",
  },
  {
    id: 7,
    author: "Olivia Martinez",
    client:"Spain",
    testimonial:
      "Best YouTube SEO expert I have worked with. My videos started ranking higher very quickly.",
  },
  {
    id: 8,
    author: "James Taylor",
    client:"USA",
    testimonial:
      "Professional work and honest service. Monetization process became much easier with his guidance.",
  },
  {
    id: 9,
    author: "Sophia Moore",
    client:"Italy",
    testimonial:
      "Very reliable digital marketer. My business website visibility improved significantly.",
  },
  {
    id: 10,
    author: "Robert Thomas",
    client:"France",
    testimonial:
      "Amazing results from YouTube marketing. Gained real subscribers and higher engagement.",
  },
  {
    id: 11,
    author: "Isabella Clark",
    client:"Canada",
    testimonial:
      "Top-quality SEO service with excellent communication. Highly professional and friendly.",
  },
  {
    id: 12,
    author: "William Harris",
    client:"UAE",
    testimonial:
      "Delivered exactly what was promised. Organic growth on my YouTube channel was impressive.",
  },
  {
    id: 13,
    author: "Mia Lewis",
    client:"USA",
    testimonial:
      "Fantastic experience working with him. My website ranking and traffic both increased fast.",
  },
  {
    id: 14,
    author: "Benjamin Walker",
    client:"Netherlands",
    testimonial:
      "Very skilled in YouTube monetization and SEO strategy. I highly recommend this service.",
  },
  {
    id: 15,
    author: "Charlotte Hall",
    client:"Sweden",
    testimonial:
      "Excellent support and professional attitude. Truly one of the best SEO and YouTube experts online.",
  },
];

function HomeReviews() {
  return (
    <div className="py-[50px]">
      <div className="container">
        <SectionTitle
          title="Reviews as a Top Rated SEO Consultant"
          subtitle="Verified Reviews"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-50">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative w-full bg-white rounded-3xl p-5 shadow-sm border border-[#92C200] 
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-[5px] group overflow-hidden"
            >
              {/* Animated Top Border - Slides from Left to Right */}
              <div className="absolute top-0 left-0 w-0 h-[4px] bg-[#92C200] transition-all duration-500 ease-in-out group-hover:w-full" />

              {/* Top ID Badge */}
              <div className="w-10 h-10 rounded-lg bg-[#E9F3CC] flex items-center justify-center mb-6">
                <span className="text-black font-bold border-2 border-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {review.id}
                </span>
              </div>

              {/* Industry Tag */}
              {/* <div className="inline-flex items-center bg-[#E9F3CC] px-4 py-1.5 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#92C200] rounded-full mr-2"></div>
                <span className="text-[11px] font-bold text-[#92C200] tracking-wider uppercase">
                  {review.tag}
                </span>
              </div> */}

              {/* Title */}
              {/* <h3 className="text-[19px] font-bold poppins text-[#333] leading-tight mb-4">
                {review.title}
              </h3> */}

              {/* Author Row */}
              <div className="flex items-center gap-2 mb-4 text-[#1a1a1a]">
                <User size={18} fill="currentColor" />
                <span className="font-bold text-[16px]">
                  {review.author}{" "}
                  <span className="">-</span>{" "}
                  {review.client}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#92C200" color="#92C200" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-[#333] italic poppins text-[16px] leading-[24px] mb-10">
                "{review.testimonial}"
              </p>

              {/* Footer Highlights */}
              {/* <div className="flex flex-wrap gap-2 pt-4">
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
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeReviews;
