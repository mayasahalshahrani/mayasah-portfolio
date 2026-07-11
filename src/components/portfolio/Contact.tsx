import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Interested in <span className="text-gradient">Collaborating?</span></>}
          subtitle="Open to graduate programs, internships, collaborations, innovation projects, and speaking opportunities."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-highlight/20 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Whether you have an opportunity, a project, or simply want to connect, I’d be happy to hear from you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
                <a href={profile.cvUrl} className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
                  <Download className="h-4 w-4" /> View CV
                </a>
              </div>
            </div>

            <ul className="grid gap-3 self-center text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-primary/50">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary-glow ring-1 ring-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="truncate font-medium">{profile.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-primary/50">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary-glow ring-1 ring-white/10">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">LinkedIn</div>
                    <div className="truncate font-medium">https://www.linkedin.com/in/mayasah-raqae</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={profile.github} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-primary/50">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary-glow ring-1 ring-white/10">
                    <Github className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">GitHub</div>
                    <div className="truncate font-medium">https://github.com/mayasahalshahrani</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary-glow ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="truncate font-medium">{profile.location}</div>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
