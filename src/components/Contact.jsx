import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-mono text-sm mb-4">What's next?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6">
            Get In Touch
          </h2>
          <p className="text-text text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors mb-12"
          >
            <Mail size={18} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6 text-text-muted">
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              {profile.location}
            </span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-heading transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-heading transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
