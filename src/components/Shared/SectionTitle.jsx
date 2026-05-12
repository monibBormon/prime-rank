function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h4 className="text-base font-medium green">{subtitle}</h4>
      <h2 className="text-[57px] leading-[65px] text-black bebas font-bold my-5">{title}</h2>
    </div>
  );
}

export default SectionTitle;
