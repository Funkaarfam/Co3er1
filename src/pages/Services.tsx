import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const services = [
  {
    id: "webdev",
    badge: "01",
    title: "Web Development",
    body: "From high-converting landing pages to full-stack web applications — we build websites that look exceptional, perform fast, and actually work. Every project is built from scratch.",
    deliverables: [
      "Landing pages & marketing sites", "Portfolio & personal websites",
      "E-commerce storefronts", "Full-stack web applications",
      "Admin dashboards & panels", "API development & integration",
      "Cloudflare + SSL + CDN setup", "Performance optimization",
    ],
    tech: ["HTML/CSS/JS", "React", "Next.js", "Node.js", "Tailwind", "Vercel", "Cloudflare", "MongoDB"],
    price: "$25",
    priceNote: "Landing page · 3-day delivery",
  },
  {
    id: "vfx",
    badge: "02",
    title: "VFX & Motion",
    body: "Digital visuals that stop the scroll. We create motion graphics, animations, and VFX for websites, social media, and product demos. Making the digital feel alive.",
    deliverables: [
      "Website animations & micro-interactions", "Motion graphics & intros",
      "Product showcase animations", "Social media motion content",
      "Lottie & CSS animation systems", "Video editing & compositing",
    ],
    tech: ["After Effects", "GSAP", "Lottie", "CSS Animations", "Canvas", "Three.js"],
    price: "$40",
    priceNote: "Animation package · 5-day delivery",
  },
  {
    id: "apps",
    badge: "03",
    title: "Apps & Bots",
    body: "Custom Discord bots, mobile apps, and automation systems built for production scale. Every bot is engineered from scratch — no off-the-shelf parts.",
    deliverables: [
      "Discord moderation bots", "Economy & leveling systems",
      "Antinuke & security bots", "Ticket & verification systems",
      "24/7 hosted deployment", "Web dashboard integration", "Mobile app development",
    ],
    tech: ["Discord.js", "Node.js", "MongoDB", "Express", "React Native", "Slash Commands"],
    price: "$25",
    priceNote: "Basic bot · 2-day delivery",
  },
  {
    id: "tools",
    badge: "04",
    title: "Digital Tools",
    body: "Custom utilities, Chrome extensions, and automation scripts built to solve real problems. Every tool is designed for reliability and maintainability.",
    deliverables: [
      "Chrome extensions", "Browser automation scripts",
      "API wrappers & SDKs", "Webhook systems",
      "Cloudflare Workers", "Productivity tools",
    ],
    tech: ["JavaScript", "Node.js", "Cloudflare Workers", "Chrome APIs", "Webhooks"],
    price: "$20",
    priceNote: "Basic tool · 2-day delivery",
  },
];

const Services = () => {
  return (
    <main className="pt-[70px]">
      <PageHero
        label="Our Services"
        title="Everything you need."
        titleAccent="Nothing you don't."
        description="We operate across four core disciplines — each with dedicated specialists, not generalists. Pick what you need, or combine them all."
      >
        <div className="flex gap-2 flex-wrap">
          {services.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-display text-sm font-semibold text-co3er-text-3 px-4 py-2 rounded-lg border border-co3er-border hover:text-co3er-accent-2 hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-28 ${i % 2 === 1 ? "bg-co3er-bg-2" : ""} ${i > 0 ? "border-t border-co3er-border" : ""}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="font-mono text-[0.72rem] text-co3er-accent-2 tracking-[0.15em] uppercase mb-4">{svc.badge}</div>
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-tight mb-5">{svc.title}</h2>
                <p className="text-co3er-text-2 leading-[1.8] mb-8">{svc.body}</p>

                <div className="grid grid-cols-2 gap-x-5 gap-y-2 mb-8">
                  {svc.deliverables.map(d => (
                    <div key={d} className="text-sm text-co3er-text-2 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary before:text-xs">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <div className="font-mono text-[0.68rem] text-co3er-text-3 tracking-[0.1em] uppercase mb-3">Tech stack</div>
                  <div className="flex gap-2 flex-wrap">
                    {svc.tech.map(t => (
                      <span key={t} className="font-mono text-[0.7rem] text-co3er-text-3 bg-primary/[0.07] border border-co3er-border px-3 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 glow-accent"
                >
                  Get a Quote →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-col gap-5"
              >
                {/* Showcase card */}
                <div className="rounded-xl border border-co3er-border overflow-hidden bg-co3er-bg-3">
                  <div className="px-4 py-3 bg-co3er-bg-2 border-b border-co3er-border flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(135,60%,45%)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(45,100%,55%)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(0,85%,55%)]" />
                    <span className="ml-3 font-mono text-[0.68rem] text-co3er-text-3 bg-foreground/[0.04] px-3 py-0.5 rounded border border-co3er-border">
                      co3er.dev/{svc.id}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="h-2 bg-foreground/[0.04] rounded w-full mb-4" />
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="h-5 bg-primary/15 rounded w-[60%]" />
                      <div className="h-2 bg-foreground/[0.05] rounded w-[82%]" />
                      <div className="h-7 bg-primary/10 border border-primary/30 rounded-md w-28 mt-1" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className="flex-1 h-16 bg-foreground/[0.03] border border-co3er-border rounded-md" />
                      <div className="flex-1 h-16 bg-foreground/[0.03] border border-co3er-border rounded-md" />
                      <div className="flex-1 h-16 bg-foreground/[0.03] border border-co3er-border rounded-md" />
                    </div>
                  </div>
                </div>

                {/* Pricing mini */}
                <div className="bg-co3er-bg-card border border-co3er-border rounded-xl p-6 text-center">
                  <div className="font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-1">Starting from</div>
                  <div className="font-display text-4xl font-extrabold text-gradient-accent mb-1">{svc.price}</div>
                  <div className="text-sm text-co3er-text-3">{svc.priceNote}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </main>
  );
};

export default Services;
