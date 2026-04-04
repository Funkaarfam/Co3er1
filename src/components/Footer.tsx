import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-co3er-border bg-co3er-bg-2 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-[34px] h-[34px] bg-gradient-to-br from-primary to-purple-400 rounded-[9px] flex items-center justify-center font-display font-extrabold text-[0.78rem] text-primary-foreground">
                C3
              </div>
              <span className="font-display font-bold text-foreground">
                Co3er<span className="text-co3er-accent-2">Dev</span>
              </span>
            </Link>
            <p className="text-sm text-co3er-text-3 leading-relaxed">
              Boutique digital studio crafting websites, bots, and tools. Four builders, real craft, no shortcuts.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.68rem] font-bold text-co3er-accent-2 tracking-[0.15em] uppercase mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-co3er-text-2 hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[0.68rem] font-bold text-co3er-accent-2 tracking-[0.15em] uppercase mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Web Development", "VFX & Motion", "Apps & Bots", "Digital Tools"].map(s => (
                <Link key={s} to="/services" className="text-sm text-co3er-text-2 hover:text-foreground transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[0.68rem] font-bold text-co3er-accent-2 tracking-[0.15em] uppercase mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://https://discord.gg/5epFBxPr4D" target="_blank" rel="noopener" className="text-sm text-co3er-text-2 hover:text-foreground transition-colors">Discord</a>
              <a href="https://wa.me/923329439821" target="_blank" rel="noopener" className="text-sm text-co3er-text-2 hover:text-foreground transition-colors">WhatsApp</a>
              <a href="mailto:co3erdevelopment@gmail.com" className="text-sm text-co3er-text-2 hover:text-foreground transition-colors">co3erdevelopment@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-co3er-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-co3er-text-4">© {year} Co3er Development. All rights reserved.</p>
          <p className="text-xs text-co3er-text-4">Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
