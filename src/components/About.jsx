import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile, education } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />

          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div className="relative">
              <div className="aspect-square max-w-[280px] mx-auto md:mx-0 rounded-2xl bg-bg-card border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-bg-elevated">
                  <span className="text-6xl font-bold text-accent/40 select-none">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="absolute -inset-3 border border-accent/20 rounded-2xl -z-10 translate-x-3 translate-y-3" />
            </div>

            <div className="space-y-5">
              <p className="text-text leading-relaxed text-lg">{profile.bio}</p>
              <p className="text-text leading-relaxed">{profile.summary}</p>
              <p className="text-text-muted text-sm flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Based in {profile.location} · Open to opportunities
              </p>

              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <GraduationCap
                    size={20}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-heading font-medium">
                      {education.degree}
                    </p>
                    <p className="text-sm text-text-muted mt-1">
                      {education.institution}
                    </p>
                    <p className="text-sm text-text-muted mt-1">
                      {education.period} · GPA: {education.gpa}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
