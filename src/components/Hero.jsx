import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-sm mb-4"
        >
          Hi 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-heading tracking-tight mb-4"
        >
          I'm {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-text mb-4"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm md:text-base font-mono text-accent mb-6"
        >
          {profile.techStack}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href={profile.resumeUrl}
            download="Sameer_Jain_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-heading border border-border rounded-full hover:border-accent/50 hover:bg-accent/5 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-heading border border-border rounded-full hover:border-accent/50 hover:bg-accent/5 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-5 mt-12"
        >
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-heading transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-heading transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-muted hover:text-heading transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 text-text-muted hover:text-heading transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
