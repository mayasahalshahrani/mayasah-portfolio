import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Milestones"
          title={<>A track record of <span className="text-gradient">delivery</span></>}
          subtitle="Recognition, leadership roles, and moments that shaped the way I build and lead."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/80 via-accent/40 to-transparent sm:left-1/2" />

          <ul className="space-y-8">
            {achievements.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`relative grid grid-cols-[2rem_1fr] items-start gap-4 sm:grid-cols-2 sm:gap-10 ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <span className="relative z-10 mt-3 grid h-8 w-8 place-items-center justify-self-start rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow sm:justify-self-center">
                  <Trophy className="h-3.5 w-3.5" />
                </span>
                <div className="glass card-lift rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-primary-glow">{a.year}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
