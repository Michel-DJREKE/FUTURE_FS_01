import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
  Lightbulb,
  Wrench,
  Layers,
} from "lucide-react";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sections = [
  { label: "Profil", href: "#profil", icon: User },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Compétences", href: "#competences", icon: Wrench },
  { label: "Expérience", href: "#experience", icon: Briefcase },
  { label: "Formation", href: "#formation", icon: GraduationCap },
  { label: "Projets", href: "#projets", icon: FolderOpen },
  { label: "Philosophie", href: "#philosophie", icon: Lightbulb },
  { label: "Contact", href: "#contact", icon: Mail },
];

const CommandMenu = ({ open, onOpenChange }: CommandMenuProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const navigate = (href: string) => {
    onOpenChange(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Naviguer vers…" />
      <CommandList>
        <CommandEmpty>Aucun résultat.</CommandEmpty>
        <CommandGroup heading="Sections">
          {sections.map((s) => (
            <CommandItem key={s.href} onSelect={() => navigate(s.href)}>
              <s.icon className="mr-2 h-4 w-4" />
              {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandMenu;
