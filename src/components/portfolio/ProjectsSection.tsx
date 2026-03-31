import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ease } from "@/lib/animations";

// 🔹 Import des images depuis src/assets
import ecoleAvenir from "@/assets/ecole-avenir.png";
import copa from "@/assets/copa.png";
import serieHubi from "@/assets/seriehubi.png";
import lucieUI from "@/assets/lucie-ui.png";
import serieHub from "@/assets/serie-hub.png";
import awoe from "@/assets/awoe.jpg";
import assetTracker from "@/assets/asset-tracker.jpg";
import plateformeServices from "@/assets/plateforme-services.png";

const projects = [
  {
    title: "Ecole Avenir",
    description: "Plateforme éducative moderne avec gestion scolaire, inscriptions et suivi des élèves.",
    techs: ["React", "TypeScript", "Tailwind"],
    url: "https://ecole-avenir.vercel.app",
    image: ecoleAvenir,
    featured: true,
  },
  {
    title: "Copa – Plan d'Affaires",
    description: "Plateforme de concours entrepreneurial avec soumission et gestion des candidatures.",
    techs: ["React", "Vite", "Tailwind"],
    url: "https://copa-burundi.vercel.app/",
    image: copa,
    featured: true,
  },
  {
    title: "SerieHubi",
    description: "Plateforme de streaming avec catalogue, recherche et lecture de séries TV.",
    techs: ["React", "TypeScript", "API"],
    url: "https://seriehubi.vercel.app",
    image: serieHubi,
    featured: true,
  },
  {
    title: "Lucie UI",
    description: "Bibliothèque de composants UI élégants, accessibles et prêts pour la production.",
    techs: ["React", "CSS", "Design System"],
    url: "https://lucie-ui.vercel.app",
    image: lucieUI,
    featured: true,
  },
  {
    title: "SerieHub",
    description: "Hub de découverte de séries et films avec communauté de passionnés.",
    techs: ["React", "API", "Tailwind"],
    url: "https://serie-hub.vercel.app",
    image: serieHub,
  },
  {
    title: "Awoé Immobilier",
    description: "Application complète de gestion immobilière avec catalogue et recherche.",
    techs: ["React", "TypeScript", "Tailwind"],
    url: "https://awoe-gestion-immobilier-ol8rufl9v-mich06413-gmailcoms-projects.vercel.app",
    image: awoe,
  },
  {
    title: "AssetTracker",
    description: "SaaS de gestion d'équipements, suivi d'actifs et reporting.",
    techs: ["React", "TypeScript", "SaaS"],
    url: "https://asset-tracker-dgi5zahog-mich06413-gmailcoms-projects.vercel.app",
    image: assetTracker,
  },
  {
    title: "Plateforme Services",
    description: "Application SPA de services numériques avec interface moderne.",
    techs: ["React", "SPA", "Vite"],
    url: "https://task1-spa-myapp.vercel.app",
    image: plateformeServices,
  },
];

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projets" className="section-padding section-bg-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-sm font-mono text-primary tracking-wide uppercase mb-4">
            Projets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Travaux sélectionnés
          </h2>
          <p className="text-muted-foreground mb-16 max-w-lg">
            Une sélection de projets récents illustrant mon approche du design et du développement.
          </p>
        </motion.div>

        {/* Featured: large bento cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Others: smaller grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
