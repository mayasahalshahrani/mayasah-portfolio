import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { credentials } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(credentials.map((c) => c.category)))],
    [],
  );
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<null | (typeof credentials)[number]>(null);

  const list = credentials.filter((c) => filter === "All" || c.category === filter);

  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Credentials"
          title={<>Continuous <span className="text-gradient">learning</span></>}
          subtitle="Professional certifications spanning AI, cloud, security and leadership."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                filter === c
                  ? "border-primary/60 bg-primary/20 text-foreground shadow-glow"
                  : "border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((c, i) => (
            <motion.button
              key={c.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => setActive(c)}
              className="glass card-lift group relative overflow-hidden rounded-2xl p-5 text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary-glow ring-1 ring-white/10">
                  <Award className="h-4 w-4" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {c.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.year}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/70 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-lg rounded-3xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.16em] text-primary-glow">
                {active.category} • {active.year}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{active.title}</h3>
              <div className="mt-6">
  <img
    src={active.image}
    alt={active.title}
    className="w-full rounded-2xl border border-white/10 shadow-lg"
  />
</div>

<p className="mt-4 text-sm text-muted-foreground">
  Issued by {active.issuer}
</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
  
}
