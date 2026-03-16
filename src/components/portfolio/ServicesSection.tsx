import { motion } from "framer-motion";
import { Code, Palette, Rocket, Globe, Megaphone, Wrench } from "lucide-react";
import { ease } from "@/lib/animations";

const services = [
  {
    icon: Code,
    title: "Développement Frontend",
    description:
      "Applications React & TypeScript performantes, scalables et maintenables. Architecture de composants, state management et intégration d'API.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Maquettes Figma haute fidélité, prototypage interactif et design systems. Centrés sur l'utilisateur et l'accessibilité (WCAG AA).",
  },
  {
    icon: Rocket,
    title: "Applications SaaS",
    description:
      "Conception et développement de plateformes SaaS complètes — dashboard, onboarding, gestion utilisateurs et facturation.",
  },
  {
    icon: Globe,
    title: "Sites Web & Landing Pages",
    description:
      "Sites vitrines modernes, landing pages à forte conversion et portfolios sur mesure. SEO optimisé et responsive.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Stratégie digitale, tunnels de conversion, rédaction web et communication sur les réseaux sociaux.",
  },
  {
    icon: Wrench,
    title: "Intégration & Maintenance",
    description:
      "Intégration de maquettes, refactoring de code existant, optimisation de performance et support technique continu.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-sm font-mono text-primary tracking-wide uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Comment je peux vous aider
          </h2>
          <p className="text-muted-foreground mb-16 max-w-lg">
            Des solutions digitales sur mesure, du design à la mise en production.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
