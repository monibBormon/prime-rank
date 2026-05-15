import team1 from "../../assets/team/team1.jpeg";
import team2 from "../../assets/team/team2.jpeg";
import team3 from "../../assets/team/team3.jpeg";
import team4 from "../../assets/team/team4.jpeg";
import team5 from "../../assets/team/team5.jpeg";
import team6 from "../../assets/team/team6.jpeg";
import team7 from "../../assets/team/team7.jpeg";
import team8 from "../../assets/team/team8.jpeg";
import team9 from "../../assets/team/team9.jpeg";
import team10 from "../../assets/team/team10.jpeg";
import SectionTitle from "../Shared/SectionTitle";

const team = [
  {
    id: 1,
    name: "Hridoy Miah",
    role: "SEO & YT Specialist.",
    image: team1,
  },
  {
    id: 2,
    name: "Rahan Kha",
    role: "YT Specialist",
    image: team2,
  },
  {
    id: 3,
    name: "Habibur Rahman",
    role: "YT Specialist & Google ads Expert.",
    image: team3,
  },
  {
    id: 4,
    name: "Abu Sayed",
    role: "YT Specialist",
    image: team4,
  },
  {
    id: 5,
    name: "Ashraful Alam Lalin",
    role: "YT Specialist.",
    image: team5,
  },
  {
    id: 6,
    name: "Yeasin Ali",
    role: "YT Specialist.",
    image: team6,
  },
  {
    id: 7,
    name: "Rocky Sham",
    role: "Video Editor.",
    image: team7,
  },
  {
    id: 8,
    name: "Abu Talha",
    role: "YT Specialist.",
    image: team8,
  },
  {
    id: 9,
    name: "Mizanur Rahman",
    role: "Thumbnail & Graphic Design Specialist",
    image: team9,
  },
  {
    id: 10,
    name: "Helal Ahamad",
    role: "YT Specialist.",
    image: team10,
  },
];

function HomeTeam() {
  return (
    <section className="py-[100px] bg-white">
      <div className="container">
        <SectionTitle
          title="Meet the Experts Behind Our Success"
          subtitle="Our Dedicated Team"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {team.map((member) => (
            <div key={member.id} className="group relative">
              {/* Image Container with Custom Shape */}
              <div className="relative overflow-hidden rounded-tr-[80px] rounded-bl-[80px] bg-gray-100 border-2 border-transparent transition-all duration-500 group-hover:border-[#92C200]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>

              {/* Info Card - Floating Effect */}
              <div className="relative mt-[-60px] mx-6 bg-white p-6 rounded-2xl shadow-lg border-b-4 border-[#92C200] transition-transform duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#E9F3CC] rounded-md">
                  <span className="text-[10px] font-bold text-[#92C200] uppercase tracking-widest">
                    Expert Member
                  </span>
                </div>

                <h4 className="text-xl font-black text-[#1a1a1a] mb-1">
                  {member.name}
                </h4>
                <p className="text-[#92C200] font-semibold text-sm">
                  {member.role}
                </p>

                {/* Decorative element */}
                <div className="mt-4 w-8 h-1 bg-[#E9F3CC] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeTeam;
