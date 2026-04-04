import { useState } from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form     = e.currentTarget;
    const elements = form.elements as HTMLFormControlsCollection & {
      name:     HTMLInputElement;
      email:    HTMLInputElement;
      service:  HTMLSelectElement;
      budget:   HTMLSelectElement;
      timeline: HTMLSelectElement;
      message:  HTMLTextAreaElement;
    };

    const payload = {
      name:     elements.name.value.trim(),
      email:    elements.email.value.trim(),
      service:  elements.service.value,
      budget:   elements.budget.value,
      timeline: elements.timeline.value,
      message:  elements.message.value.trim(),
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch("/api/send-email", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
        signal:  controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`API returned ${res.status}`);
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you within 24 hours.");
    } catch (err: any) {
      clearTimeout(timeout);
      if (err.name === "AbortError") {
        toast.error("Request timed out. Please contact us on Discord or WhatsApp.");
      } else {
        toast.error("Something went wrong. Please reach out on Discord or WhatsApp.");
      }
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-[70px]">
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left info */}
            <div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">
                Get in touch
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em] mb-6"
              >
                Let's build
                <br />
                <span className="text-outline">together.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-co3er-text-2 max-w-md leading-relaxed mb-10"
              >
                Tell us about your project. We'll come back with a quote and timeline within 24 hours. Free consultation, no commitment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {[
                  { icon: "💬", name: "Discord Server", detail: "https://discord.gg/5epFBxPr4D", badge: "Fastest response", href: "https://https://discord.gg/5epFBxPr4D" },
                  { icon: "📱", name: "WhatsApp", detail: "+92 332 9439821", badge: "Direct line", href: "https://wa.me/923329439821" },
                  { icon: "📧", name: "Email", detail: "co3erdevelopment@gmail.com", badge: "<24h reply", href: "mailto:co3erdevelopment@gmail.com" },
                ].map(ch => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="flex items-center gap-4 p-4 bg-co3er-bg-card border border-co3er-border rounded-xl hover:border-co3er-border-2 hover:bg-co3er-bg-3 transition-all duration-300 group"
                  >
                    <div className="text-2xl shrink-0">{ch.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-foreground text-sm">{ch.name}</div>
                      <div className="font-mono text-[0.72rem] text-co3er-text-3">{ch.detail}</div>
                    </div>
                    <span className="font-mono text-[0.6rem] text-co3er-accent-2 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full whitespace-nowrap">{ch.badge}</span>
                    <span className="text-co3er-text-3 group-hover:text-co3er-accent-2 group-hover:translate-x-1 transition-all">→</span>
                  </a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                {["Free quote within 24 hours", "No commitment required", "Fixed pricing, no surprises"].map(a => (
                  <div key={a} className="text-sm text-co3er-text-2 flex items-center gap-2">
                    <span className="text-primary text-xs">✓</span> {a}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-co3er-bg-card border border-co3er-border rounded-2xl p-8">
                {!submitted ? (
                  <>
                    <h2 className="font-display font-bold text-xl mb-1">Send us a message</h2>
                    <p className="text-sm text-co3er-text-3 mb-8">We read every message and respond personally.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-2">Your name</label>
                          <input name="name" required className="w-full bg-co3er-bg-3 border border-co3er-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-co3er-text-4 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all" placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="block font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-2">Email</label>
                          <input name="email" required type="email" className="w-full bg-co3er-bg-3 border border-co3er-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-co3er-text-4 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all" placeholder="john@email.com" />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-2">Service</label>
                        <select name="service" className="w-full bg-co3er-bg-3 border border-co3er-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none">
                          <option value="">Select a service…</option>
                          <option>Website / Landing Page</option>
                          <option>Discord Bot</option>
                          <option>Full Web App</option>
                          <option>Dashboard / Admin Panel</option>
                          <option>VFX / Motion Graphics</option>
                          <option>Mobile App</option>
                          <option>Digital Tool / Script</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-2">Budget</label>
                          <select name="budget" className="w-full bg-co3er-bg-3 border border-co3er-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none">
                            <option value="">Rough budget…</option>
                            <option>Under $25</option>
                            <option>$25 – $75</option>
                            <option>$75 – $200</option>
                            <option>$200 – $500</option>
                            <option>$500+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-2">Timeline</label>
                          <select name="timeline" className="w-full bg-co3er-bg-3 border border-co3er-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none">
                            <option value="">When do you need it?</option>
                            <option>ASAP (1–3 days)</option>
                            <option>This week</option>
                            <option>Within 2 weeks</option>
                            <option>This month</option>
                            <option>No rush</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[0.68rem] text-co3er-text-3 tracking-wide uppercase mb-2">Project details</label>
                        <textarea name="message" required rows={5} className="w-full bg-co3er-bg-3 border border-co3er-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-co3er-text-4 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none" placeholder="Tell us about your project…" />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold py-3.5 rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_hsl(var(--co3er-accent)/0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending…" : "Send message →"}
                      </button>

                      <p className="text-[0.72rem] text-co3er-text-4 text-center">We never spam. By submitting you agree to receive a response from Co3er Development.</p>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center py-12 gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-xl text-primary-foreground mb-2">✓</div>
                    <h3 className="font-display text-xl font-extrabold">Message sent!</h3>
                    <p className="text-sm text-co3er-text-2 max-w-[320px]">We'll get back to you within 24 hours. For the fastest response, join our Discord.</p>
                    <a href="https://https://discord.gg/5epFBxPr4D" target="_blank" rel="noopener" className="mt-4 inline-flex items-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg">
                      Join Discord →
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-co3er-bg-2 border-t border-co3er-border">
        <div className="container">
          <div className="text-center mb-12">
            <div className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4">FAQ</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight">Common questions.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {[
              { q: "How quickly do you respond?", a: "Within 24 hours via any channel. Discord is the fastest — usually under 2 hours." },
              { q: "Do you require upfront payment?", a: "For most projects, yes — we ask for 50% upfront and 50% on delivery. For smaller jobs, we're flexible." },
              { q: "Can I see progress during the build?", a: "Absolutely. We share preview links daily so you can watch your project come to life." },
              { q: "What if I need revisions?", a: "Revision rounds are included in every project. We iterate until you're 100% happy." },
              { q: "Do I own the final code?", a: "Yes. Full source code, assets, and domains are handed over. You own everything." },
              { q: "Can you help with hosting?", a: "Yes. We set up Cloudflare, Vercel, or any hosting provider you prefer. SSL and CDN included." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="pb-6 border-b border-co3er-border"
              >
                <div className="font-display font-bold text-[0.95rem] text-foreground mb-2">{faq.q}</div>
                <div className="text-sm text-co3er-text-2 leading-[1.7]">{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Contact;
