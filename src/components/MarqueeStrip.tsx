const items = [
  "Website Design", "Discord Bots", "VFX & Motion", "Web Apps",
  "API Integration", "Dashboards", "Automation Tools", "Mobile Apps",
];

const MarqueeStrip = () => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-co3er-border bg-co3er-bg-2 py-4">
      <div className="flex gap-8 animate-marquee w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display font-semibold text-sm text-co3er-text-3 whitespace-nowrap uppercase tracking-[0.12em]">
              {item}
            </span>
            <span className="text-co3er-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
