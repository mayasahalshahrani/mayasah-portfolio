import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-xs font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <span>© {new Date().getFullYear()} {profile.name}. Designed & Developed with passion.</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={profile.github} aria-label="GitHub" className="transition hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="transition hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
