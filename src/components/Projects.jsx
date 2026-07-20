import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-elevated">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 rounded-xl bg-bg-card border border-border hover:border-accent/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder size={28} className="text-accent" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-heading transition-colors"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-heading transition-colors"
                        aria-label={`${project.title} live link`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-heading group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.company && (
                    <span className="text-xs font-mono text-accent/80 px-2 py-0.5 rounded bg-accent/10">
                      {project.company}
                    </span>
                  )}
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.role && (
                  <p className="text-xs text-text mb-3">
                    <span className="text-heading font-medium">My role: </span>
                    {project.role}
                  </p>
                )}

                {project.achievements && (
                  <ul className="space-y-1.5 mb-4">
                    {project.achievements.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-text-muted flex items-start gap-2"
                      >
                        <span className="text-accent shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-text-muted px-2 py-1 rounded bg-bg border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
