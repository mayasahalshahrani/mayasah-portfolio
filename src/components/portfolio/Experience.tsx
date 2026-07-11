import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={<>Leadership, teaching & <span className="text-gradient">building</span></>}
          subtitle="Where I've contributed — from research labs and internships to the community."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="pointer-events-none absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary/80 via-accent/40 to-transparent sm:left-4" />
          <ul className="space-y-6">
            {experience.map((e, i) => (
              <motion.li
                key={e.role}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-8 top-4 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-glow sm:-left-10">
                  <Briefcase className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <div className="glass card-lift rounded-2xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                    <span className="text-xs uppercase tracking-[0.16em] text-primary-glow">{e.period}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
