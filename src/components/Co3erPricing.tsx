import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { motion } from 'framer-motion';

const chartData = [
  { month: 'Jan', projects: 3 },
  { month: 'Feb', projects: 6 },
  { month: 'Mar', projects: 5 },
  { month: 'Apr', projects: 9 },
  { month: 'May', projects: 12 },
  { month: 'Jun', projects: 15 },
  { month: 'Jul', projects: 14 },
  { month: 'Aug', projects: 18 },
  { month: 'Sep', projects: 22 },
  { month: 'Oct', projects: 26 },
  { month: 'Nov', projects: 30 },
  { month: 'Dec', projects: 38 },
];

const chartConfig = {
  projects: {
    label: 'Projects',
    color: 'hsl(254 96% 64%)',
  },
} satisfies ChartConfig;

function GrowthChart() {
  return (
    <Card className="bg-co3er-bg-3 border-co3er-border">
      <CardHeader className="space-y-0 border-b border-co3er-border p-3">
        <CardTitle className="text-sm font-semibold text-foreground">Client Growth</CardTitle>
        <CardDescription className="text-xs text-co3er-text-3">
          Monthly project completions this year
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 8, right: 8 }}>
            <CartesianGrid vertical={false} stroke="hsl(235 30% 18% / 0.5)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              tick={{ fontSize: 10, fill: 'hsl(240 12% 42%)' }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="projects"
              type="monotone"
              stroke="hsl(254 96% 64%)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function Co3erPricing() {
  return (
    <section className="py-32 bg-co3er-bg-2 border-t border-co3er-border">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[0.72rem] font-bold text-co3er-accent-2 tracking-[0.18em] uppercase mb-4"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
          >
            Transparent pricing.
            <br />
            <span className="text-gradient-accent">No surprises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-co3er-text-2 mt-4 max-w-md mx-auto"
          >
            Every project starts with a free consultation. Fixed quotes, delivered on time.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-co3er-bg-card border border-co3er-border rounded-2xl overflow-hidden grid md:grid-cols-6"
        >
          {/* Starter Plan */}
          <div className="flex flex-col justify-between border-b border-co3er-border p-7 md:col-span-2 md:border-r md:border-b-0">
            <div className="space-y-5">
              <div>
                <div className="font-mono text-[0.68rem] text-co3er-accent-2 tracking-[0.12em] uppercase mb-2">Starter</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Basic Project</h3>
                <span className="font-display text-4xl font-extrabold text-gradient-accent block mb-1">$25</span>
                <p className="text-sm text-co3er-text-3">Landing page · 3-day delivery</p>
              </div>

              <Link
                to="/contact"
                className="block text-center border border-co3er-border-2 text-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-primary hover:text-co3er-accent-2 hover:bg-primary/5 transition-all duration-300"
              >
                Get Started
              </Link>

              <div className="h-px w-full bg-co3er-border" />

              <ul className="space-y-2.5">
                {[
                  'Landing page or small site',
                  'Custom design from scratch',
                  'Mobile responsive',
                  'Cloudflare + SSL setup',
                  'Source code handover',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-co3er-text-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="grid gap-6 p-7 md:col-span-4 lg:grid-cols-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {/* Left — pricing + chart */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                <div className="font-mono text-[0.68rem] text-co3er-accent-2 tracking-[0.12em] uppercase mb-2">Pro</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Full Stack Project</h3>
                <span className="font-display text-4xl font-extrabold text-gradient-accent block mb-1">$150+</span>
                <p className="text-sm text-co3er-text-3">Web app · Bot · Dashboard · Custom scope</p>
              </div>
              <GrowthChart />
            </div>

            {/* Right — features + CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-mono text-[0.68rem] text-co3er-text-3 tracking-[0.1em] uppercase mb-3">Everything in Starter plus:</div>
                <ul className="space-y-2">
                  {[
                    'Full-stack web application',
                    'Discord bot development',
                    'Admin dashboard & panel',
                    'MongoDB / API integration',
                    'Priority support & revisions',
                    'Staging + production deploy',
                    'Cloudflare CDN + caching',
                    'Post-launch support included',
                    '24h response guarantee',
                    'Weekly project updates',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-co3er-text-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link
                  to="/contact"
                  className="text-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 glow-accent"
                >
                  Hire Us →
                </Link>
                <Link
                  to="/portfolio"
                  className="text-center border border-co3er-border-2 text-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-primary hover:text-co3er-accent-2 hover:bg-primary/5 transition-all duration-300"
                >
                  See Work
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-co3er-text-3 mt-6"
        >
          All prices are starting rates. Final quote based on scope. Free consultation, no commitment required.
        </motion.p>
      </div>
    </section>
  );
}
