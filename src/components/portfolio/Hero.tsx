import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "./data";
import avatar from "@/assets/profile.jpg";

// Small typewriter that cycles through profile.titles.
function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx];
    const done = !deleting && sub === current.length;
    const empty = deleting && sub === 0;

    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (empty) {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
          return;
        }
        setSub((s) => s + (deleting ? -1 : 1));
      },
      done ? 1600 : deleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [sub, deleting, idx, words]);

  return (
    <span className={className}>
      {words[idx].slice(0, sub)}
      <span className="ml-0.5 inline-block w-[2px] translate-y-1 bg-primary-glow align-baseline animate-blink-caret" style={{ height: "0.9em" }} />
    </span>
  );
}

// Floating particles (deterministic — no runtime randomness after mount).
function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 1 + ((i * 7) % 4),
        delay: (i % 10) * 0.4,
        duration: 8 + ((i * 3) % 10),
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40 blur-[0.5px]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animation: `float-slow ${d.duration}s ease-in-out ${d.delay}s infinite`,
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      <Particles />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_var(--success)]" />
            Available for graduate & full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 flex flex-wrap items-baseline gap-3 text-xl text-muted-foreground sm:text-2xl"
          >
            <span>I'm a</span>
            <Typewriter
              words={profile.titles}
              className="font-display font-semibold text-foreground"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-glow group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={profile.cvUrl} className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href="#contact" className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            <a href={profile.github} className="group inline-flex items-center gap-2 hover:text-foreground">
              <Github className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> GitHub
            </a>
            <a href={profile.linkedin} className="group inline-flex items-center gap-2 hover:text-foreground">
              <Linkedin className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto lg:mx-0"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-accent/40 to-highlight/30 blur-3xl" />
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-highlight animate-spin-slow opacity-70 blur-[1px]" />
            <img
              src={avatar}
              alt={`${profile.name} portrait`}
              width={288}
              height={288}
              className="relative h-64 w-64 rounded-full border border-white/10 object-cover shadow-elegant sm:h-72 sm:w-72"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary-glow" />
        </div>
      </div>
    </section>
  );
}
