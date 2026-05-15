function SectionTitle({ title, subtitle, className }) {
  return (
    <div>
      <h4 className="text-base font-medium green uppercase">{subtitle}</h4>
      <h2 className={`${className} text-[57px] leading-[65px] text-black bebas font-bold my-5`}>{title}</h2>
    </div>
  );
}

export default SectionTitle;
