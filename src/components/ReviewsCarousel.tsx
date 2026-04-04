import { motion } from "framer-motion";

const reviews = [
  // Pakistan
  { name: "Ali Khan", country: "🇵🇰 Pakistan", text: "Amazing website, very professional! Delivered in just 3 days." },
  { name: "Ahmed Raza", country: "🇵🇰 Pakistan", text: "Best dev team I've worked with. The bot works flawlessly across all our servers." },
  { name: "Hassan Malik", country: "🇵🇰 Pakistan", text: "Clean design and fast delivery. Exceeded all my expectations." },
  { name: "Usman Tariq", country: "🇵🇰 Pakistan", text: "Co3er built our Discord bot in 2 days. Incredible speed and quality." },
  { name: "Bilal Sheikh", country: "🇵🇰 Pakistan", text: "Super responsive team. They answered all my questions instantly." },
  { name: "Zain Abbas", country: "🇵🇰 Pakistan", text: "The landing page they built converts so well. Worth every penny." },
  { name: "Hamza Qureshi", country: "🇵🇰 Pakistan", text: "Absolutely stunning design. My clients couldn't believe it." },
  { name: "Saad Iqbal", country: "🇵🇰 Pakistan", text: "Professional, fast, and reliable. Will definitely hire again." },
  { name: "Faisal Nawaz", country: "🇵🇰 Pakistan", text: "The VFX work they did for our Discord server is next level." },
  { name: "Omar Siddiqui", country: "🇵🇰 Pakistan", text: "Delivered exactly what was promised, on time. No excuses." },
  { name: "Asad Mehmood", country: "🇵🇰 Pakistan", text: "Best investment I made for my business. Stunning website." },
  { name: "Imran Butt", country: "🇵🇰 Pakistan", text: "The moderation bot saved my server from raiders. 10/10." },
  { name: "Fahad Hussain", country: "🇵🇰 Pakistan", text: "Top tier work. They care about quality more than most agencies." },
  { name: "Waleed Chaudhry", country: "🇵🇰 Pakistan", text: "Fast delivery, clean code, great communication throughout." },
  { name: "Shahzeb Mirza", country: "🇵🇰 Pakistan", text: "Co3er rebuilt our entire website in a week. Incredible." },
  { name: "Junaid Rahman", country: "🇵🇰 Pakistan", text: "Our community grew 3x after the new bot was added. Insane." },
  { name: "Talha Farooq", country: "🇵🇰 Pakistan", text: "Super professional team. They go above and beyond every time." },
  { name: "Anas Rehman", country: "🇵🇰 Pakistan", text: "Pixel perfect design, blazing fast performance. Love it." },
  // USA
  { name: "John Smith", country: "🇺🇸 USA", text: "These guys are something else. Our site went live 2 days early." },
  { name: "David Miller", country: "🇺🇸 USA", text: "I've tried 5 dev teams. Co3er is the only one I keep coming back to." },
  { name: "Alex Johnson", country: "🇺🇸 USA", text: "Great team, incredible work. My Discord community loves the new bot." },
  { name: "Ryan Williams", country: "🇺🇸 USA", text: "The dashboard they built for us is slick and fast. Clients are impressed." },
  { name: "Michael Brown", country: "🇺🇸 USA", text: "Hired them for a landing page. Got a masterpiece. Highly recommended." },
  { name: "Chris Davis", country: "🇺🇸 USA", text: "Response time is insane. I had a question at 2am and got an answer." },
  { name: "James Wilson", country: "🇺🇸 USA", text: "Best value for money I've ever experienced in tech. Brilliant team." },
  { name: "Kevin Anderson", country: "🇺🇸 USA", text: "They nailed our brand aesthetic perfectly. Not a single revision needed." },
  { name: "Brian Taylor", country: "🇺🇸 USA", text: "Co3er is my go-to for anything digital. Fast, clean, reliable." },
  { name: "Steven Thomas", country: "🇺🇸 USA", text: "The economy bot they built has kept our 10k member server engaged for months." },
  { name: "Daniel Jackson", country: "🇺🇸 USA", text: "Told them my vision and they made it 10x better. Genuinely impressed." },
  { name: "Matt Harris", country: "🇺🇸 USA", text: "Website loads in under a second, looks premium. Couldn't ask for more." },
  { name: "Tyler Martin", country: "🇺🇸 USA", text: "Transparent pricing, no hidden fees. Exactly what I paid for — delivered." },
  { name: "Jake Garcia", country: "🇺🇸 USA", text: "3 projects done with Co3er. Every single one delivered on time." },
  { name: "Nathan Martinez", country: "🇺🇸 USA", text: "The code quality is exceptional. Clean, well-documented, maintainable." },
  { name: "Austin Robinson", country: "🇺🇸 USA", text: "I run a SaaS and needed a dashboard fast. Co3er had it done in 4 days." },
  // Mixed / International
  { name: "Luca Bianchi", country: "🇮🇹 Italy", text: "Incredible design sensibility. My website looks better than any competitor's." },
  { name: "Sophie Martin", country: "🇫🇷 France", text: "Very professional. Communication was perfect. Loved working with Co3er." },
  { name: "Kai Müller", country: "🇩🇪 Germany", text: "Efficient, skilled, and delivered exactly on time. Will rehire." },
  { name: "Arjun Sharma", country: "🇮🇳 India", text: "The Discord bot handles 20+ servers without any issues. Brilliant." },
  { name: "Carlos Mendes", country: "🇧🇷 Brazil", text: "Fast delivery and fantastic quality. My community is thriving now." },
  { name: "Emma Thompson", country: "🇬🇧 UK", text: "They took a rough brief and turned it into something extraordinary." },
  { name: "Riku Yamamoto", country: "🇯🇵 Japan", text: "Precise, professional, and polite. Exactly what I needed." },
  { name: "Liu Wei", country: "🇨🇳 China", text: "The website loads incredibly fast globally. Co3er really knows hosting." },
  { name: "Yusuf Al-Rashid", country: "🇦🇪 UAE", text: "Premium quality at a great price. Made our brand look world-class." },
  { name: "Tom Bakker", country: "🇳🇱 Netherlands", text: "Clear communication, no nonsense, beautiful result. 5 stars." },
  { name: "Mateus Costa", country: "🇵🇹 Portugal", text: "Our site now ranks on Google and looks stunning. Two birds, one stone." },
  { name: "Adam Kowalski", country: "🇵🇱 Poland", text: "Hired for a small project. Got blown away. Now they do all our work." },
  { name: "Erik Lindqvist", country: "🇸🇪 Sweden", text: "Clean minimal design exactly how I envisioned it. Spot on delivery." },
  { name: "Nadia Petrov", country: "🇷🇺 Russia", text: "The automation script they built saves our team 10 hours a week." },
  { name: "Pablo Ruiz", country: "🇪🇸 Spain", text: "Incredible value. Co3er delivers agency-quality work at freelancer prices." },
];

// Split into two rows
const row1 = reviews.slice(0, 25);
const row2 = reviews.slice(25);

function ReviewCard({ name, country, text }: { name: string; country: string; text: string }) {
  return (
    <div className="relative flex-shrink-0 w-[300px] bg-co3er-bg-card border border-co3er-border rounded-xl p-5 mx-2.5 hover:border-co3er-border-2 transition-all duration-300 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-co3er-accent text-xs">★</span>
        ))}
      </div>
      <p className="text-sm text-co3er-text-2 leading-[1.7] mb-4 font-serif italic line-clamp-2">"{text}"</p>
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center font-display font-bold text-[0.65rem] text-primary-foreground flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-display font-semibold text-[0.82rem] text-foreground">{name}</div>
          <div className="font-mono text-[0.62rem] text-co3er-text-4">{country}</div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsCarousel() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="py-32 overflow-hidden">
      <div className="container mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4"
          >
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
          >
            Trusted by clients
            <br />
            <span className="text-gradient-accent">worldwide.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-co3er-text-2 mt-4 max-w-md mx-auto"
          >
            50+ happy clients across Pakistan, USA, Europe, and beyond.
          </motion.p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-reviews-scroll">
          {doubled1.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-reviews-scroll-reverse">
          {doubled2.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
