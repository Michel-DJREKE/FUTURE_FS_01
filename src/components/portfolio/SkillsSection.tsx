import { motion } from "framer-motion";
import { fadeInUp, ease } from "@/lib/animations";

const categories = [
  {
    index: "01",
    title: "Langages & Frameworks",
    color: "bg-indigo-400",
    featured: ["React.js", "TypeScript", "Laravel", "Vue.js"],
    skills: ["JavaScript ES6+", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Base de données & API",
    color: "bg-violet-400",
    featured: ["MySQL", "PostgreSQL", "MongoDB"],
    skills: ["REST API", "Postman", "Firebase"],
  },
  {
    index: "03",
    title: "Design & Outils créatifs",
    color: "bg-amber-400",
    featured: ["Figma"],
    skills: ["Photoshop", "WordPress", "Canva"],
  },
  {
    index: "04",
    title: "DevTools & Environnement",
    color: "bg-sky-400",
    featured: ["Git & GitHub", "VS Code"],
    skills: ["Postman", "Terminal", "npm / yarn", "Vite"],
  },
  {
    index: "05",
    title: "Marketing & Autres",
    color: "bg-emerald-400",
    featured: ["SEO"],
    skills: ["Marketing digital", "Communication digitale", "Rédaction web", "Agile / Scrum"],
  },
];

const stats = [
  { num: "28+", label: "Compétences" },
  { num: "5",   label: "Domaines" },
  { num: "3+",  label: "Ans d'expérience" },
];

const SkillsSection = () => {
  return (
    <section id="competences" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp}>
          <p className="text-[10px] font-mono text-muted-foreground/60 tracking-[0.2em] uppercase mb-3">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
            Outils & Technologies
          </h2>
        </motion.div>

        <div>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease }}
              className="grid grid-cols-[160px_1fr] border-t border-border last:border-b py-8 gap-0"
            >
              <div className="pr-8">
                <p className="text-[9.5px] font-mono text-muted-foreground/40 mb-1.5">
                  {cat.index}
                </p>
                <h3 className="text-sm font-semibold leading-snug">{cat.title}</h3>
                <p className="text-[9.5px] font-mono text-muted-foreground/40 mt-1">
                  {cat.featured.length + cat.skills.length} outils
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-start">
                {cat.featured.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium px-3 py-1.5 rounded-full border border-border bg-muted text-foreground transition-all duration-150 hover:-translate-y-px hover:border-foreground cursor-default"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.color} opacity-80`} />
                    {s}
                  </span>
                ))}
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-1.5 rounded-full border border-border text-muted-foreground transition-all duration-150 hover:-translate-y-px hover:border-foreground hover:text-foreground hover:bg-muted cursor-default"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.color} opacity-30`} />
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease }}
          className="mt-12 grid grid-cols-3 divide-x divide-border border border-border rounded-xl overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 hover:bg-muted/40 transition-colors duration-200">
              <p className="text-2xl font-bold">{s.num}</p>
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;