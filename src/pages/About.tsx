import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { TeamSection } from "@/components/ui/team-section-1";
import { Github, Twitter, Instagram, Globe } from "lucide-react";

const About = () => {
  return (
    <main className="pt-[70px]">
      <PageHero
        label="About Co3er"
        title="Four builders."
        titleAccent="Real craft."
        description="We're a boutique digital studio based in Pakistan, building websites, Discord bots, and digital tools for clients worldwide. Small team, serious craft, zero outsourcing."
      />

      {/* STORY */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start mb-20">
            <div>
              <div className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">Our story</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">
                Started small.
                <br />
                Built with intent.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-co3er-text-2 leading-[1.8]">Co3er Development started as a small group of developers who cared deeply about the craft. We were tired of seeing mediocre work shipped at premium prices — so we decided to do it better.</p>
              <p className="text-co3er-text-2 leading-[1.8]">Every project we take on is treated as if it were our own. We obsess over performance, design, and reliability. We communicate like partners, not vendors. And we ship on time, every time.</p>
              <p className="text-co3er-text-2 leading-[1.8]">Today, we serve 50+ clients across Pakistan, the USA, and beyond — and we're still a tight four-person team. That's intentional.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-co3er-border border border-co3er-border rounded-xl overflow-hidden">
            {[
              { num: "01", title: "Craft over speed", desc: "We move fast but never cut corners. Quality is non-negotiable at every stage." },
              { num: "02", title: "Radical transparency", desc: "Daily updates, honest timelines, clear pricing. No surprises, ever." },
              { num: "03", title: "Client ownership", desc: "When we hand over a project, you own everything. Code, assets, domains — all yours." },
              { num: "04", title: "Long-term thinking", desc: "We build things that scale. Not quick fixes — proper foundations." },
            ].map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-co3er-bg-card p-7 hover:bg-co3er-bg-3 transition-colors"
              >
                <div className="font-mono text-[0.68rem] text-primary tracking-[0.12em] mb-3">{v.num}</div>
                <div className="font-display font-bold text-[0.95rem] text-foreground mb-2">{v.title}</div>
                <div className="text-[0.82rem] text-co3er-text-3 leading-relaxed">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <TeamSection
        title="CREATIVE TEAM"
        description="Four specialists. One studio. We're a tight-knit team of developers, designers, and creators based in Pakistan — building digital experiences for clients worldwide. No outsourcing, no middlemen. Just real craft."
        registerLink="/contact"
        className="bg-co3er-bg-2 border-t border-co3er-border"
        members={[
          {
            name: "Fahad",
            designation: "Lead Developer · Full-Stack",
            imageSrc: "",
            socialLinks: [
              { icon: Github, href: "https://github.com" },
              { icon: Twitter, href: "https://twitter.com" },
            ],
          },
          {
            name: "Areez",
            designation: "Social Media · Freelancer",
            imageSrc: "",
            socialLinks: [
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Globe, href: "#" },
            ],
          },
          {
            name: "Talha",
            designation: "VFX Editor · Motion",
            imageSrc: "",
            socialLinks: [
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
            ],
          },
        ]}
      />

      {/* PROCESS */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <div className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">How we work</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">
              Our process is
              <br />
              intentionally simple.
            </h2>
          </div>

          <div className="max-w-[680px] mx-auto space-y-0">
            {[
              { num: "01", title: "You reach out", desc: "Tell us what you need via Discord, WhatsApp, or our contact form. We reply within 24 hours — always." },
              { num: "02", title: "We scope and quote", desc: "We define deliverables, timeline, and price. Everything confirmed in writing before a single line of code." },
              { num: "03", title: "We build", desc: "Your dedicated builder starts immediately. Preview links shared daily so you watch your project come to life." },
              { num: "04", title: "Review and refine", desc: "We walk through the finished build together. Revision rounds are included — we iterate until it's right." },
              { num: "05", title: "Launch and hand off", desc: "We deploy, configure Cloudflare, and hand over full ownership. Post-launch support included." },
            ].map((step, i, arr) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-[56px_24px_1fr] gap-x-5 items-start"
              >
                <div className="font-mono text-sm font-bold text-primary text-right pt-1">{step.num}</div>
                <div className="flex flex-col items-center pt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-background shadow-[0_0_12px_hsl(var(--co3er-accent)/0.3)] shrink-0" />
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 min-h-[56px] bg-gradient-to-b from-primary to-co3er-border mt-1.5" />
                  )}
                </div>
                <div className="pb-10">
                  <div className="font-display font-bold text-foreground mb-1.5">{step.title}</div>
                  <div className="text-sm text-co3er-text-2 leading-[1.7]">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
