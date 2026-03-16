import { motion } from "framer-motion";
import { Zap, Eye, Layers } from "lucide-react";
import { ease } from "@/lib/animations";

const pillars = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Le design commence par la vitesse. Un site lent est un mauvais design.",
  },
  {
    icon: Eye,
    title: "Accessibilité",
    description:
      "L'élégance doit être inclusive. WCAG AA est ma norme, pas une option.",
  },
  {
    icon: Layers,
    title: "Architecture",
    description:
      "Un code propre est invisible pour l'utilisateur, mais vital pour le produit.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophie" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-sm font-mono text-primary tracking-wide uppercase mb-4">
            Philosophie
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            Approche de design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="glass-card p-8"
            >
              <pillar.icon className="w-5 h-5 text-primary mb-6" />
              <h3 className="text-base font-semibold tracking-tight mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
