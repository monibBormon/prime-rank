import SectionTitle from "../Shared/SectionTitle";

const steps = [
  {
    num: "01",
    title: "Audit & Analysis",
    desc: "Deep diving into your current SEO status and competitor gaps.",
  },
  {
    num: "02",
    title: "Strategy Building",
    desc: "Creating a custom roadmap tailored to your specific niche.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "On-page, Off-page, and Technical SEO implementation.",
  },
  {
    num: "04",
    title: "Review & Scale",
    desc: "Analyzing data and scaling what works for maximum ROI.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="container">
        <SectionTitle title="How I Deliver Results" subtitle="My Workflow" />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-[40px] bg-[#E9F3CC]/30 border-2 border-transparent hover:border-[#92C200] transition-all group"
            >
              <span className="text-6xl font-black text-[#92C200]/20 absolute top-4 right-8 group-hover:text-[#92C200]/40 transition-colors">
                {step.num}
              </span>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#1C4B42] mb-6 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
