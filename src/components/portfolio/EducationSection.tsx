import { motion } from "framer-motion";
import { fadeInUp, ease } from "@/lib/animations";

const certifications = [
  "Développement Web – D-Clic / OIF",
  "React & TypeScript – OpenClassrooms",
  "Vue.js & JavaScript – LinkedIn Learning",
  "Laravel – LinkedIn Learning",
  "UI/UX Design – OpenClassrooms",
  "Agile & Scrum avancé – LinkedIn Learning",
  "UX Design pratique – OpenClassrooms / Udemy",
];

const EducationSection = () => {
  return (
    <section id="formation" className="section-padding">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Formation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Éducation & Certifications
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Mon parcours académique et mes certifications professionnelles
            qui renforcent mes compétences en développement et design.
          </p>
        </motion.div>

        {/* EDUCATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative border border-border rounded-2xl p-10 mb-16 bg-background/60 backdrop-blur-lg hover:shadow-xl transition-all"
        >
          <div className="absolute -left-3 top-10 w-3 h-3 bg-primary rounded-full"></div>

          <h3 className="text-xl font-semibold mb-1">
            Licence en Architecture Logicielle
          </h3>

          <p className="text-muted-foreground">
            ESGIS TOGO
          </p>

          <p className="text-xs font-mono text-muted-foreground/60 mt-2">
            2022 – 2025
          </p>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8 text-center">
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">

            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group border border-border rounded-xl px-5 py-4 
                hover:border-primary hover:bg-primary/5 transition-all 
                cursor-default"
              >

                <div className="flex items-center gap-3">

                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition"></div>

                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
                    {cert}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;