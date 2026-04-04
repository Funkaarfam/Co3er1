import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const projects = [
  { emoji: "🌐", cat: ["web", "tool"], tag: "Website · Tool", title: "DropMail", desc: "Disposable email service with live inbox, premium key system, and zero signup. Handles thousands of daily users.", stack: ["HTML/CSS", "JavaScript", "Vercel", "Cloudflare"], gradient: "from-[hsl(250,50%,12%)] via-[hsl(260,55%,18%)] to-[hsl(270,50%,25%)]" },
  { emoji: "🛡️", cat: ["bot"], tag: "Discord Bot", title: "Guardian Bot", desc: "Full-featured Discord moderation bot with antinuke, automod, ticket system, logging, and advanced slash commands. 50+ servers.", stack: ["Discord.js", "Node.js", "MongoDB", "Express"], gradient: "from-[hsl(235,50%,12%)] via-[hsl(240,45%,16%)] to-[hsl(245,45%,22%)]" },
  { emoji: "📊", cat: ["dashboard"], tag: "Web Dashboard", title: "ServerPanel", desc: "Custom Discord server management dashboard with real-time stats, member analytics, moderation logs, and OAuth2.", stack: ["React", "Node.js", "MongoDB", "Vercel"], gradient: "from-[hsl(248,45%,11%)] via-[hsl(252,50%,16%)] to-[hsl(258,45%,24%)]" },
  { emoji: "🏪", cat: ["web"], tag: "E-Commerce Website", title: "StoreFront Pro", desc: "Minimal e-commerce storefront with product pages, cart system, and GoDaddy-hosted domain. Sub-1s load times.", stack: ["HTML/CSS/JS", "GoDaddy", "Cloudflare"], gradient: "from-[hsl(265,50%,12%)] via-[hsl(270,55%,18%)] to-[hsl(275,50%,25%)]" },
  { emoji: "🎮", cat: ["bot"], tag: "Discord Bot", title: "EconBot", desc: "Full economy Discord bot with virtual currency, shop system, gambling commands, leaderboards, and daily rewards.", stack: ["Discord.js", "MongoDB", "Express"], gradient: "from-[hsl(250,45%,11%)] via-[hsl(255,48%,15%)] to-[hsl(260,50%,22%)]" },
  { emoji: "🎨", cat: ["web"], tag: "Portfolio Website", title: "Creative Portfolio", desc: "Custom portfolio with dark/light mode, animated project gallery, contact form, and Cloudflare CDN. Lighthouse 98+.", stack: ["Next.js", "Tailwind", "Vercel", "Cloudflare"], gradient: "from-[hsl(260,50%,10%)] via-[hsl(265,45%,14%)] to-[hsl(270,50%,20%)]" },
  { emoji: "⚡", cat: ["tool"], tag: "Automation Tool", title: "AutoPing", desc: "Scheduled webhook automation tool on Cloudflare Workers. Formatted Discord embeds on custom schedules. Zero-maintenance.", stack: ["Cloudflare Workers", "Webhooks", "JS"], gradient: "from-[hsl(230,50%,12%)] via-[hsl(235,50%,18%)] to-[hsl(240,48%,26%)]" },
  { emoji: "🏢", cat: ["dashboard", "web"], tag: "SaaS Dashboard", title: "BizPanel SaaS", desc: "Multi-tenant SaaS admin dashboard with user management, analytics, billing via Stripe, and role-based access.", stack: ["React", "Node.js", "Stripe", "MongoDB"], gradient: "from-[hsl(235,50%,14%)] via-[hsl(240,52%,19%)] to-[hsl(245,50%,28%)]" },
];

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "bot", label: "Bots" },
  { key: "tool", label: "Tools" },
  { key: "dashboard", label: "Dashboards" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter(p => p.cat.includes(filter));

  return (
    <main className="pt-[70px]">
      <PageHero
        label="Portfolio"
        title="Things we've"
        titleAccent="shipped."
        description="50+ projects delivered across websites, bots, tools, and more. Here's a selection of what we've built."
      >
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-display text-sm font-semibold px-4 py-2 rounded-lg border transition-all ${
                filter === f.key
                  ? "text-co3er-accent-2 border-primary/30 bg-primary/5"
                  : "text-co3er-text-3 border-co3er-border hover:text-co3er-accent-2 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="py-20">
        <div className="container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((proj) => (
                <motion.article
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-co3er-bg-card border border-co3er-border rounded-xl overflow-hidden hover:border-co3er-border-2 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className={`h-[180px] bg-gradient-to-br ${proj.gradient} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-co3er-bg-card/80" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {proj.cat.map(c => (
                        <span key={c} className="font-mono text-[0.6rem] text-co3er-accent-2 bg-background/30 backdrop-blur-sm px-2 py-0.5 rounded capitalize">{c}</span>
                      ))}
                    </div>
                    <span className="relative text-5xl">{proj.emoji}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg tracking-tight mb-1.5">{proj.title}</h3>
                    <p className="text-sm text-co3er-text-2 leading-relaxed mb-4 line-clamp-3">{proj.desc}</p>
                    <div className="flex gap-1.5 flex-wrap mb-4">
                      {proj.stack.map(t => (
                        <span key={t} className="font-mono text-[0.62rem] text-co3er-text-3 bg-primary/[0.07] border border-co3er-border px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.68rem] text-co3er-text-3">{proj.tag}</span>
                      <span className="text-sm text-co3er-text-3 hover:text-co3er-accent-2 transition-colors cursor-pointer">View project →</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Portfolio;
