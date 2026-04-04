import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

const testimonials = [
  { name: "Ali Khan", country: "🇵🇰 Pakistan", text: "Amazing website, very professional! Delivered in just 3 days.", img: "https://randomuser.me/api/portraits/men/11.jpg", username: "@alikhan" },
  { name: "Ahmed Raza", country: "🇵🇰 Pakistan", text: "Best dev team I've worked with. The bot works flawlessly.", img: "https://randomuser.me/api/portraits/men/12.jpg", username: "@ahmedraza" },
  { name: "Hassan Malik", country: "🇵🇰 Pakistan", text: "Clean design and fast delivery. Exceeded all expectations.", img: "https://randomuser.me/api/portraits/men/13.jpg", username: "@hassanm" },
  { name: "John Smith", country: "🇺🇸 USA", text: "These guys are something else. Our site went live 2 days early.", img: "https://randomuser.me/api/portraits/men/32.jpg", username: "@johnsmith" },
  { name: "David Miller", country: "🇺🇸 USA", text: "I've tried 5 dev teams. Co3er is the only one I keep coming back to.", img: "https://randomuser.me/api/portraits/men/44.jpg", username: "@davidm" },
  { name: "Alex Johnson", country: "🇺🇸 USA", text: "Great team, incredible work. My Discord community loves the new bot.", img: "https://randomuser.me/api/portraits/men/55.jpg", username: "@alexj" },
  { name: "Sophie Martin", country: "🇫🇷 France", text: "Very professional. Communication was perfect throughout.", img: "https://randomuser.me/api/portraits/women/22.jpg", username: "@sophiem" },
  { name: "Luca Bianchi", country: "🇮🇹 Italy", text: "Incredible design sensibility. My website looks better than any competitor's.", img: "https://randomuser.me/api/portraits/men/66.jpg", username: "@lucab" },
  { name: "Usman Tariq", country: "🇵🇰 Pakistan", text: "Co3er built our Discord bot in 2 days. Incredible speed and quality.", img: "https://randomuser.me/api/portraits/men/77.jpg", username: "@usmant" },
  { name: "Emma Thompson", country: "🇬🇧 UK", text: "They took a rough brief and turned it into something extraordinary.", img: "https://randomuser.me/api/portraits/women/33.jpg", username: "@emmat" },
  { name: "Ryan Williams", country: "🇺🇸 USA", text: "The dashboard they built is slick and fast. Clients are impressed.", img: "https://randomuser.me/api/portraits/men/88.jpg", username: "@ryanw" },
  { name: "Arjun Sharma", country: "🇮🇳 India", text: "The Discord bot handles 20+ servers without any issues. Brilliant.", img: "https://randomuser.me/api/portraits/men/99.jpg", username: "@arjuns" },
  { name: "Bilal Sheikh", country: "🇵🇰 Pakistan", text: "Super responsive team. They answered all my questions instantly.", img: "https://randomuser.me/api/portraits/men/21.jpg", username: "@bilals" },
  { name: "Carlos Mendes", country: "🇧🇷 Brazil", text: "Fast delivery and fantastic quality. My community is thriving now.", img: "https://randomuser.me/api/portraits/men/43.jpg", username: "@carlosm" },
  { name: "Yusuf Al-Rashid", country: "🇦🇪 UAE", text: "Premium quality at a great price. Made our brand look world-class.", img: "https://randomuser.me/api/portraits/men/54.jpg", username: "@yusufa" },
  { name: "Hamza Qureshi", country: "🇵🇰 Pakistan", text: "Absolutely stunning design. My clients couldn't believe it.", img: "https://randomuser.me/api/portraits/men/65.jpg", username: "@hamzaq" },
  { name: "Michael Brown", country: "🇺🇸 USA", text: "Hired them for a landing page. Got a masterpiece. Highly recommended.", img: "https://randomuser.me/api/portraits/men/76.jpg", username: "@michaelb" },
  { name: "Kai Müller", country: "🇩🇪 Germany", text: "Efficient, skilled, and delivered exactly on time. Will rehire.", img: "https://randomuser.me/api/portraits/men/87.jpg", username: "@kaim" },
];

// Split into 4 columns
const col1 = testimonials.slice(0, 5);
const col2 = testimonials.slice(4, 9);
const col3 = testimonials.slice(8, 13);
const col4 = testimonials.slice(12, 18);

function TestimonialCard({ img, name, username, text, country }: typeof testimonials[number]) {
  return (
    <Card className="w-48 bg-co3er-bg-card border-co3er-border hover:border-co3er-border-2 transition-colors duration-300">
      <CardContent className="p-3.5">
        <div className="flex items-center gap-2 mb-2.5">
          <Avatar className="size-7">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-primary/20 text-primary text-xs font-bold">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-[0.72rem] font-semibold text-foreground truncate flex items-center gap-1">
              {name} <span className="text-[0.6rem]">{country.split(' ')[0]}</span>
            </span>
            <span className="text-[0.62rem] text-co3er-text-4">{username}</span>
          </div>
        </div>
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-co3er-accent text-[0.6rem]">★</span>
          ))}
        </div>
        <p className="text-[0.72rem] text-co3er-text-2 leading-[1.6] font-serif italic">"{text}"</p>
      </CardContent>
    </Card>
  );
}

export function Reviews3D() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mb-14">
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
        </div>
      </div>

      {/* 3D perspective container */}
      <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden [perspective:400px]">
        <div
          className="flex flex-row items-center gap-3"
          style={{
            transform: 'translateX(-60px) translateY(0px) translateZ(-80px) rotateX(18deg) rotateY(-8deg) rotateZ(18deg)',
          }}
        >
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:38s]">
            {col1.map((r) => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:42s]">
            {col2.map((r) => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
            {col3.map((r) => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:45s]">
            {col4.map((r) => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  );
}
