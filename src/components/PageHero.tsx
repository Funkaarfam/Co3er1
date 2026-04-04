import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  children?: React.ReactNode;
}

const PageHero = ({ label, title, titleAccent, description, children }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 border-b border-co3er-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4"
        >
          {label}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em] mb-6"
        >
          {title}
          <br />
          <span className="text-outline">{titleAccent}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-co3er-text-2 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
