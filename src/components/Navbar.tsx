import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] h-[70px] border-b backdrop-blur-2xl transition-all duration-300
        ${scrolled ? "bg-background/95 border-co3er-border-2" : "bg-background/80 border-co3er-border"}`}
    >
      <div className="container h-full flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-[34px] h-[34px] bg-gradient-to-br from-primary to-purple-400 rounded-[9px] flex items-center justify-center font-display font-extrabold text-[0.78rem] tracking-tight text-primary-foreground shadow-[0_0_20px_hsl(var(--co3er-accent)/0.3)]">
            C3
          </div>
          <span className="font-display font-bold text-[1.05rem] tracking-tight text-foreground">
            Co3er<span className="text-co3er-accent-2">Dev</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium px-3 py-2 rounded-[7px] transition-all duration-300
                ${location.pathname === link.path
                  ? "text-foreground bg-primary/10"
                  : "text-co3er-text-2 hover:text-foreground hover:bg-primary/10"
                }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold text-[0.85rem] px-5 py-2 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_0_28px_hsl(var(--co3er-accent)/0.3)]"
          >
            Hire Us →
          </Link>

          <button
            onClick={toggleMobile}
            className="flex md:hidden flex-col gap-[5px] p-1"
            aria-label="Menu"
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-foreground rounded transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-foreground rounded transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[0px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/97 backdrop-blur-2xl z-[199] flex flex-col items-center justify-center gap-2 pt-[70px]"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="font-display text-3xl font-bold text-co3er-text-2 hover:text-foreground transition-colors px-8 py-2 block"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-br from-primary to-purple-400 text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg"
              >
                Hire Us →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
