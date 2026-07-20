import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">
            Resume
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10 mx-auto" />

          <div className="p-8 md:p-10 rounded-2xl bg-bg-card border border-border backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center">
              <FileText size={32} className="text-accent" />
            </div>

            <h3 className="text-xl font-semibold text-heading mb-2">
              Sameer Jain — iOS Developer
            </h3>
            <p className="text-text-muted mb-8">
              Updated July 2026 · PDF format
            </p>

            <a
              href={profile.resumeUrl}
              download="Sameer_Jain_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
