import { FaGlobe, FaRocket, FaTrophy, FaUsers } from "react-icons/fa";

const stats = [
  { id: 1, label: "Happy Clients", value: "500+", icon: <FaUsers /> },
  { id: 2, label: "Projects Done", value: "1.2k", icon: <FaRocket /> },
  { id: 3, label: "Global Brands", value: "45+", icon: <FaGlobe /> },
  { id: 4, label: "Awards Won", value: "12", icon: <FaTrophy /> },
];

const CounterSection = () => {
  return (
    <section className="py-20 bg-[#1C4B42]">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center group">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-[#92C200] text-3xl mb-4 group-hover:bg-[#92C200] group-hover:text-[#1C4B42] transition-all duration-500">
              {stat.icon}
            </div>
            <h2 className="text-4xl font-black text-white mb-2">
              {stat.value}
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
