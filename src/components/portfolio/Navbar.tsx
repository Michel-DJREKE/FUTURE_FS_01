import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";

const links = [
  { label: "Profil", href: "#profil" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onCommandOpen: () => void;
}

const Navbar = ({ onCommandOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(var(--glass-bg))] backdrop-blur-xl border-b border-[hsl(var(--glass-border))] shadow-sm"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#hero" className="text-sm font-semibold tracking-tight">
            DJREKE<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={onCommandOpen}
              className="flex items-center gap-1.5 text-xs text-muted-foreground/60 border border-border rounded-md px-2 py-1 hover:text-muted-foreground hover:border-muted-foreground/30 transition-colors"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>
          </div>

          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
