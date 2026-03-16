import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { fadeInUp, ease } from "@/lib/animations";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:micheldjreke7@gmail.com?subject=Contact depuis le portfolio – ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0ADe: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-padding section-bg-alt">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeInUp}>
          <p className="text-sm font-mono text-primary tracking-wide uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            Travaillons ensemble
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="space-y-6"
          >
            <a
              href="tel:+22870033002"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +228 70033002
            </a>
            <a
              href="mailto:micheldjreke7@gmail.com"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              micheldjreke7@gmail.com
            </a>
            <a
              href="https://archcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4 text-primary" />
              archcss.com
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Nom"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <textarea
              placeholder="Message"
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
            <button type="submit" className="btn-primary w-full">
              Envoyer
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
