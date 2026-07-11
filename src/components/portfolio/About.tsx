import { motion } from "framer-motion";
import { Compass, Eye, Heart, Target, type LucideIcon } from "lucide-react";
import { about } from "./data";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = { Target, Eye, Heart, Compass };

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={<>Engineering meets <span className="text-gradient">imagination</span></>}
          subtitle={about.intro}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Target;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass card-lift group relative overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary-glow ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
