import { motion } from "framer-motion";
import { fadeInUp, ease } from "@/lib/animations";

const experiences = [
  {
    role: "Responsable Marketing Digital",
    company: "e-Business Afrique",
    type: "CDD",
    period: "Janv. 2026 – Présent",
    location: "Lomé, Togo",
    description:
      "Optimisation des tunnels de conversion via des interfaces React haute performance. Stratégie marketing digitale et gestion de campagnes.",
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    type: "Stage · Remote",
    period: "Févr. 2026 – Présent",
    location: "Chine · À distance",
    description:
      "Intégration d'API Postman et gestion d'architectures distribuées. Développement full stack avec authentification et bases de données.",
  },
  {
    role: "Front-End Developer Intern",
    company: "Codveda Technologies",
    type: "Stage · Remote",
    period: "Janv. 2026 – Mars 2026",
    location: "Lomé, Togo · À distance",
    description:
      "Architecture de composants réutilisables sous TypeScript. Développement d'interfaces performantes avec React.",
  },
  {
    role: "Technico-commercial",
    company: "e-Business Afrique",
    type: "Saisonnier",
    period: "Nov. 2025 – Déc. 2025",
    location: "Lomé, Togo",
    description:
      "Prospection commerciale et présentation de solutions digitales aux entreprises.",
  },
  {
    role: "Développeur Frontend – Freelance",
    company: "Tech N Ctrl",
    type: "Freelance",
    period: "2025 – Présent",
    location: "Lomé, Togo",
    description:
      "Création d'interfaces dynamiques avec React, TypeScript et Vite. Développement de projets SaaS et e-commerce.",
  },
  {
    role: "Développeur Frontend",
    company: "Kiiako",
    type: "Projet collaboratif",
    period: "2024 – 2025",
    location: "Lomé, Togo",
    description:
      "Participation à la création d'une plateforme e-commerce africaine.",
  },
  {
    role: "Responsable Communication & SI",
    company: "ESGIS Alumni",
    type: "Bénévole",
    period: "2024 – 2025",
    location: "Lomé, Togo",
    description:
      "Gestion des publications et de la plateforme digitale de l'association.",
  },
  {
    role: "Stagiaire Développeur Frontend",
    company: "Numerum Dev Center",
    type: "Stage",
    period: "2024",
    location: "Lomé, Togo",
    description: "Formation pratique en React.js et TypeScript.",
  },
  {
    role: "Stagiaire UI/UX Designer & Dev Junior",
    company: "E-Business Afrique",
    type: "Stage",
    period: "2023 – 2024",
    location: "Lomé, Togo",
    description:
      "Création de maquettes Figma pour des entreprises comme MTN, NSIA, CRT et EBA.",
  },
];

const badgeVariants: Record<string, string> = {
  CDD: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  Freelance: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Saisonnier: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  Bénévole: "bg-muted text-muted-foreground",
  "Projet collaboratif": "bg-muted text-muted-foreground",
};

const getBadgeClass = (type: string) => {
  for (const key of Object.keys(badgeVariants)) {
    if (type.startsWith(key)) return badgeVariants[key];
  }
  return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding section-bg-alt">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeInUp}>
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">
            Expérience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Journal de bord
          </h2>
        </motion.div>

        {/* Now indicator */}
        <motion.div
          {...fadeInUp}
          className="flex items-center gap-2 mb-10 pl-6 relative"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500">
            En poste · Mars 2026
          </span>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="group relative pb-10 last:pb-0"
            >
              {/* Dot */}
              <span className="absolute -left-[25px] top-[5px] w-2 h-2 rounded-full border-2 border-border bg-background transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground" />

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 flex-wrap mt-1">
                    <span className="text-xs text-muted-foreground">
                      {exp.company}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase tracking-wide px-1.5 py-0.5 rounded-sm font-medium ${getBadgeClass(exp.type)}`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </p>
                  <p className="text-[10px] text-muted-foreground/40 mt-0.5">
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed mt-2 border-l-2 border-transparent pl-0 group-hover:border-border group-hover:pl-2.5 transition-all duration-200">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;