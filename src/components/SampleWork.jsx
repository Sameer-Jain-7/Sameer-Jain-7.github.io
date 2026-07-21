import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { sampleWorks } from "../data/portfolio";

export default function SampleWork() {
  return (
    <section id="sample-work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">
            Sample Work
          </h2>

          <div className="w-16 h-1 bg-accent rounded-full mb-6" />

          <p className="text-text-muted max-w-2xl mb-12">
            A collection of personal iOS projects demonstrating architecture,
            reusable components, networking, animations, and modern Swift
            development practices.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {sampleWorks.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="bg-bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all"
              >

                <div className="flex justify-between items-start mb-4">

                  <h3 className="text-xl font-semibold text-heading">
                    {project.title}
                  </h3>
                
                  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
>
  <FaGithub size={18} />
  <span className="text-sm">GitHub</span>
</a>

                </div>

                <p className="text-text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}