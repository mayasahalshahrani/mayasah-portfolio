import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Moments"
          title={<>Beyond the <span className="text-gradient">Jourrney</span></>}
          subtitle="Highlights from workshops, innovation programs, university events, competitions, and the experiences that shaped my journey."
        />

        <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              onClick={() => setActive(i)}
              className="mb-4 block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:border-primary/50 hover:shadow-glow"
            >
              <img
  src={g.src}
  alt={g.alt}
  loading="lazy"
  className={`object-cover transition-transform duration-700 hover:scale-[1.04] ${
    g.orientation === "landscape"
      ? "h-[300px] w-[480px]"
      : "h-[480px] w-[320px]"
  }`}
/>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/85 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[85vh] max-w-full rounded-2xl border border-white/10 shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-foreground backdrop-blur"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
