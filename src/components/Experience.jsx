import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l border-border last:pb-0"
              >
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 bg-accent rounded-full ring-4 ring-bg" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-accent shrink-0" />
                      <h3 className="text-lg font-semibold text-heading">
                        {job.role}
                      </h3>
                    </div>
                    <p className="text-text font-medium">{job.company}</p>
                    <p className="text-sm text-text-muted flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {job.location}
                    </p>
                  </div>
                  <time className="text-sm font-mono text-text-muted shrink-0">
                    {job.period}
                  </time>
                </div>

                <p className="text-text mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-text-muted flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
