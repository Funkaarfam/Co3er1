import * as React from "react";
import { cn } from "@/lib/utils";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode;
  socialLinksMain?: SocialLink[];
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ title, description, members, registerLink, logo, socialLinksMain, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("relative w-full overflow-hidden py-12 md:py-24", className)}
        {...props}
      >
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
          {/* Header */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-2 text-center md:text-left">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-foreground">
                <span className="text-gradient-accent block font-mono text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 not-italic">
                  O U R
                </span>
                {title}
              </h2>
              <p className="max-w-[600px] text-co3er-text-2 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && <div className="text-2xl font-bold">{logo}</div>}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-400 px-8 text-sm font-semibold text-primary-foreground shadow transition-all hover:opacity-90 hover:-translate-y-0.5"
                >
                  Work With Us →
                </a>
              )}
            </div>
          </div>

          {/* Social Links */}
          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-2">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-co3er-text-3 hover:text-co3er-accent-2 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}

          {/* Team Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-2xl border border-co3er-border bg-co3er-bg-card p-7 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-co3er-border-2 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Glow wave on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-primary/15 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                {/* Avatar */}
                <div
                  className="relative z-10 h-32 w-32 overflow-hidden rounded-full border-2 border-co3er-border bg-co3er-bg-3 transition-all duration-500 ease-out group-hover:border-primary group-hover:scale-105 group-hover:shadow-[0_0_24px_hsl(var(--co3er-accent)/0.3)]"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <h3 className="relative z-10 mt-5 font-display text-lg font-extrabold tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="relative z-10 font-mono text-[0.68rem] text-co3er-accent-2 tracking-[0.12em] uppercase mt-1">
                  {member.designation}
                </p>

                {/* Member social links — appear on hover */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-4 flex gap-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-co3er-text-3 hover:text-co3er-accent-2 transition-colors"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
