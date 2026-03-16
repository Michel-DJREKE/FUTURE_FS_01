import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { ease } from "@/lib/animations";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const gradientX = useTransform(mouseX, [0, 1], ["20%", "80%"]);
  const gradientY = useTransform(mouseY, [0, 1], ["20%", "80%"]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Animated gradient orb */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) =>
              `radial-gradient(800px circle at ${x} ${y}, hsl(220 100% 50% / 0.06), transparent 50%)`
          ),
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(152,69%,53%)] animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.9] mb-8">
            <span className="block">DJREKE</span>
            <span className="block text-gradient-blue mt-2">Kodjo Michel</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground/60" />
            <span className="text-xs font-mono text-muted-foreground/60 tracking-wider uppercase">
              Lomé, Togo
            </span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-xs font-mono text-muted-foreground/60 tracking-wider uppercase">
              Frontend & UI/UX
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Je conçois des expériences digitales modernes, performantes et centrées sur l'utilisateur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projets" className="btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/michel-djreke-48b0a62b8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Michel-DJREKE"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#profil" className="block" aria-label="Scroll down">
          <ArrowDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
