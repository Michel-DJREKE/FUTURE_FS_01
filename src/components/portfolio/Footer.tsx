import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding py-12 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DJREKE Kodjo Michel Junior
        </p>

        <p className="text-xs text-muted-foreground/60 italic text-center">
          "Less but better." — Dieter Rams
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/michel-djreke-48b0a62b8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Michel-DJREKE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
