import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--co3er-accent)/0.12)_0%,transparent_65%)] pointer-events-none" />
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
          >
            Ready to work
            <br />
            <span className="text-gradient-accent">with us?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-co3er-text-2 mt-3 max-w-md"
          >
            Let's build something great together. Reach out and we'll get back to you within 24 hours.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold px-7 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_0_40px_hsl(var(--co3er-accent)/0.3)]"
          >
            Hire Us →
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center font-display font-semibold px-6 py-3 rounded-lg border border-co3er-border-2 text-foreground hover:border-primary hover:text-co3er-accent-2 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
