import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Outfit", "system-ui", "sans-serif"],
        serif: ["Libre Baskerville", "Georgia", "serif"],
        mono: ["Space Mono", "Fira Code", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        co3er: {
          bg: "hsl(var(--co3er-bg))",
          "bg-2": "hsl(var(--co3er-bg-2))",
          "bg-3": "hsl(var(--co3er-bg-3))",
          "bg-4": "hsl(var(--co3er-bg-4))",
          "bg-card": "hsl(var(--co3er-bg-card))",
          text: "hsl(var(--co3er-text))",
          "text-2": "hsl(var(--co3er-text-2))",
          "text-3": "hsl(var(--co3er-text-3))",
          "text-4": "hsl(var(--co3er-text-4))",
          accent: "hsl(var(--co3er-accent))",
          "accent-2": "hsl(var(--co3er-accent-2))",
          "accent-3": "hsl(var(--co3er-accent-3))",
          "accent-warm": "hsl(var(--co3er-accent-warm))",
          border: "hsl(var(--co3er-border))",
          "border-2": "hsl(var(--co3er-border-2))",
          "border-3": "hsl(var(--co3er-border-3))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.125rem",
        "2xl": "1.75rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        "reviews-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "reviews-scroll-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.75)" },
        },
        "scroll-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(200%)", opacity: "0" },
        },
        "glow-drift": {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(-50px, 60px) scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
        "reviews-scroll": "reviews-scroll 55s linear infinite",
        "reviews-scroll-reverse": "reviews-scroll-reverse 60s linear infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        "glow-drift": "glow-drift 14s ease-in-out infinite alternate",
        "glow-drift-reverse": "glow-drift 18s ease-in-out infinite alternate-reverse",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
