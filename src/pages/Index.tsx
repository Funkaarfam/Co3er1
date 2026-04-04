import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Star, Smartphone, Wrench } from "lucide-react";
import MarqueeStrip from "@/components/MarqueeStrip";
import CTASection from "@/components/CTASection";
import { Reviews3D } from "@/components/Reviews3D";
import { Co3erPricing } from "@/components/Co3erPricing";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import CelestialBloomShader from "@/components/ui/celestial-bloom-shader";


const Index = () => {
  return (
    <main className="pt-[70px]">
      {/* HERO — Spline 3D */}
      <section className="relative min-h-[calc(100vh-70px)] flex items-center overflow-hidden">
        {/* Celestial animated background */}
        <CelestialBloomShader />

        <Card className="w-full min-h-[calc(100vh-70px)] border-0 rounded-none bg-transparent relative overflow-hidden flex items-center">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(254 96% 64% / 0.8)"
          />

          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center py-24">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 font-mono text-[0.75rem] text-co3er-accent-2 bg-primary/[0.08] border border-primary/25 px-4 py-1.5 rounded-full mb-9 tracking-wide w-fit"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-primary animate-pulse-dot shadow-[0_0_8px_hsl(var(--co3er-accent))]" />
                Available for projects — &lt;24h response
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.0] tracking-[-0.04em] mb-6"
              >
                We Build
                <br />
                <span className="text-gradient-accent">Digital Experiences</span>
                <br />
                That Stand Out.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[1.05rem] text-co3er-text-2 max-w-[480px] leading-[1.75] mb-10"
              >
                Co3er Development is a boutique digital studio building websites, apps, VFX, and intelligent tools. Four builders. Real craft. No shortcuts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 flex-wrap mb-14"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 glow-accent"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center font-display font-semibold px-6 py-3 rounded-lg border border-co3er-border-2 text-foreground hover:border-primary hover:text-co3er-accent-2 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get a Quote →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-10 flex-wrap"
              >
                {[
                  { n: "50+", l: "Clients" },
                  { n: "100%", l: "5★ Rated" },
                  { n: "4+", l: "Years Active" },
                  { n: "<24h", l: "Response" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-10">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display text-[1.6rem] font-extrabold tracking-tight text-foreground">{stat.n}</span>
                      <span className="font-mono text-[0.65rem] text-co3er-text-3 tracking-[0.1em] uppercase">{stat.l}</span>
                    </div>
                    {i < 3 && <div className="w-px h-10 bg-co3er-border-2" />}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right content — 3D Spline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[600px] w-full"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </Card>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* SERVICES PREVIEW */}
      <section className="py-32 bg-co3er-bg-2 border-t border-co3er-border">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <div className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">What we do</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">
              Four disciplines.
              <br />
              One studio.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-co3er-border rounded-xl border border-co3er-border overflow-hidden">
            {[
              { num: "01", icon: Monitor, title: "Web Development", desc: "Landing pages, full-stack apps, dashboards. Pixel-perfect and performance-first." },
              { num: "02", icon: Star, title: "VFX & Motion", desc: "Visual effects, animations, motion graphics. Making the digital feel alive." },
              { num: "03", icon: Smartphone, title: "Apps & Bots", desc: "Discord bots, automation scripts, and custom tools engineered for scale." },
              { num: "04", icon: Wrench, title: "Digital Tools", desc: "Browser utilities, Chrome extensions, and productivity systems built to last." },
            ].map((svc, i) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to="/services"
                  className="block bg-co3er-bg-card p-7 group transition-colors duration-300 hover:bg-co3er-bg-3 h-full"
                >
                  <div className="font-mono text-[0.65rem] text-co3er-text-4 tracking-[0.12em] mb-3">{svc.num}</div>
                  <div className="w-[38px] h-[38px] bg-primary/10 border border-primary/20 rounded-[9px] flex items-center justify-center text-primary mb-3">
                    <svc.icon size={18} />
                  </div>
                  <div className="font-display font-bold text-foreground mb-2">{svc.title}</div>
                  <div className="text-sm text-co3er-text-2 leading-relaxed mb-3">{svc.desc}</div>
                  <div className="text-co3er-text-3 group-hover:text-co3er-accent-2 group-hover:translate-x-1 transition-all duration-300">→</div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/services" className="inline-flex items-center font-display font-semibold text-sm px-6 py-3 rounded-lg border border-co3er-border-2 text-foreground hover:border-primary hover:text-co3er-accent-2 hover:bg-primary/5 transition-all duration-300">
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
            <div>
              <div className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">Selected work</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">Things we've shipped.</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center font-display font-semibold text-sm px-6 py-3 rounded-lg border border-co3er-border-2 text-foreground hover:border-primary hover:text-co3er-accent-2 hover:bg-primary/5 transition-all duration-300">
              Full portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-co3er-bg-card border border-co3er-border rounded-xl overflow-hidden hover:border-co3er-border-2 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div className="h-[280px] bg-gradient-to-br from-[hsl(250,50%,12%)] via-[hsl(260,55%,18%)] to-[hsl(270,50%,25%)] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-co3er-bg-card/100" />
                <span className="relative text-6xl">🌐</span>
              </div>
              <div className="p-7">
                <div className="font-mono text-[0.68rem] text-co3er-accent-2 tracking-[0.12em] uppercase mb-2">Website · Tool</div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-2">DropMail</h3>
                <p className="text-sm text-co3er-text-2 leading-relaxed mb-4">Disposable email service with live inbox, premium key system, and zero signup. Handles thousands of daily users.</p>
                <div className="flex gap-1.5 flex-wrap">
                  {["HTML/CSS", "Vercel", "Cloudflare"].map(t => (
                    <span key={t} className="font-mono text-[0.65rem] text-co3er-text-3 bg-primary/[0.07] border border-co3er-border px-2.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            <div className="flex flex-col gap-5">
              {[
                { emoji: "🛡️", tag: "Discord Bot", title: "Guardian Bot", desc: "Full moderation bot with antinuke, automod, ticket system. 50+ servers.", stack: ["Discord.js", "Node.js", "MongoDB"] },
                { emoji: "📊", tag: "Dashboard", title: "ServerPanel", desc: "Discord server management dashboard with real-time stats and OAuth2.", stack: ["React", "Node.js", "MongoDB"] },
              ].map((proj, i) => (
                <motion.article
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-co3er-bg-card border border-co3er-border rounded-xl overflow-hidden hover:border-co3er-border-2 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className="h-[150px] bg-gradient-to-br from-[hsl(250,50%,12%)] via-[hsl(255,50%,16%)] to-[hsl(260,50%,22%)] flex items-center justify-center">
                    <span className="text-4xl">{proj.emoji}</span>
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[0.68rem] text-co3er-accent-2 tracking-[0.12em] uppercase mb-1.5">{proj.tag}</div>
                    <h3 className="font-display font-bold tracking-tight mb-1.5">{proj.title}</h3>
                    <p className="text-sm text-co3er-text-2 leading-relaxed mb-3 line-clamp-2">{proj.desc}</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {proj.stack.map(t => (
                        <span key={t} className="font-mono text-[0.65rem] text-co3er-text-3 bg-primary/[0.07] border border-co3er-border px-2.5 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32 bg-co3er-bg-2 border-y border-co3er-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">Why Co3er</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">
                Small team.
                <br />
                <span className="text-gradient-accent">Big results.</span>
              </h2>
              <p className="text-co3er-text-2 mt-5 leading-relaxed">
                We're not an agency with 50 employees. We're four focused builders who actually care about the work. That means faster communication, better quality, and zero corporate overhead.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-co3er-border border border-co3er-border rounded-xl overflow-hidden">
              {[
                { icon: "⚡", title: "Ship Fast", desc: "Most projects delivered in under a week." },
                { icon: "🎯", title: "Pixel Perfect", desc: "Every detail matters. We don't ship 'close enough'." },
                { icon: "💬", title: "Direct Access", desc: "Talk to the person building your project. No middlemen." },
                { icon: "🔒", title: "You Own It", desc: "Full source code, domains, assets — all handed over." },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-co3er-bg-card p-7 hover:bg-co3er-bg-3 transition-colors duration-300"
                >
                  <div className="text-xl mb-3">{card.icon}</div>
                  <div className="font-display font-bold text-foreground text-[0.95rem] mb-1.5">{card.title}</div>
                  <div className="text-[0.82rem] text-co3er-text-3 leading-relaxed">{card.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <Co3erPricing />

      {/* REVIEWS — 3D */}
      <Reviews3D />

      {/* CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
