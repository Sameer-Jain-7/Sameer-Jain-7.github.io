import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const categories = [...new Set(skills.map((s) => s.category))];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-elevated">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">
            Skills & Tools
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="p-6 rounded-xl bg-bg-card border border-border"
              >
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 text-sm text-text bg-bg border border-border rounded-lg hover:border-accent/40 hover:text-heading transition-colors"
                      >
                        {skill.name}
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
