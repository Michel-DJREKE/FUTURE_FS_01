import { motion } from "framer-motion";
import { fadeInUp, ease } from "@/lib/animations";
import photo from "@/assets/photo.jpg";

const stats = [
  { value: "10+", label: "Projets livrés" },
  { value: "3+",  label: "Ans d'exp." },
  { value: "5+",  label: "Clients" },
];

const tags = ["React.js", "TypeScript", "UI/UX Design", "Lomé, Togo", "Disponible"];

const AboutSection = () => {
  return (
    <section id="profil" className="section-padding section-bg-alt">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <p className="text-[10px] font-mono text-muted-foreground/60 tracking-[0.2em] uppercase mb-3">
            Profil
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 leading-tight">
            Construire des interfaces<br />qui comptent.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-6">
              <p>
                Développeur Frontend passionné et rigoureux, spécialisé en React.js,
                TypeScript et UI/UX Design. Diplômé en Architecture Logicielle à
                ESGIS-TOGO, je conçois des interfaces modernes, performantes et
                centrées sur l'utilisateur.
              </p>
              <p>
                Je travaille sur des projets SaaS, e-commerce et plateformes
                digitales en mettant l'accent sur l'expérience utilisateur, la
                performance et l'architecture front-end.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-border border border-border rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-4 hover:bg-muted/40 transition-colors duration-200"
                >
                  <p className="text-xl font-bold">{s.value}</p>
                  <p className="text-[9.5px] font-mono text-muted-foreground/60 uppercase tracking-widest mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="relative rounded-2xl overflow-hidden border border-border aspect-[3/4] bg-muted"
          >
            <img
              src={photo}
              alt="Photo de profil"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border">
              <p className="text-[13px] font-semibold">Dev Frontend</p>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide mt-0.5">
                React · TypeScript · UI/UX
              </p>
              <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
                <span className="text-[9.5px] font-mono text-emerald-500 uppercase tracking-widest">
                  Disponible
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;