import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-heading font-semibold text-lg tracking-tight hover:text-accent transition-colors"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text hover:text-heading transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={toggleTheme}
            className={`relative w-16 h-9 rounded-full transition-colors duration-300 ${
              theme === "dark"
                ? "bg-neutral-700"
                : "bg-accent"
            }`}
            aria-label="Toggle Theme"
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              animate={{
                x: theme === "dark" ? 0 : 28,
              }}
              className="absolute top-1 left-1 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Moon size={15} className="text-slate-700" />
                  ) : (
                    <Sun size={15} className="text-yellow-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-heading bg-accent/10 border border-accent/30 rounded-full hover:bg-accent/20 transition-colors"
          >
            Get in touch
          </a>

        </div>

        <button
          type="button"
          className="md:hidden p-2 text-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-elevated border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-text hover:text-heading transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleTheme}
                  className={`relative w-16 h-9 rounded-full transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-neutral-700"
                      : "bg-accent"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 ${
                      theme === "dark"
                        ? "translate-x-0"
                        : "translate-x-7"
                    }`}
                  >
                    {theme === "dark" ? (
                      <Moon size={15} className="text-slate-700" />
                    ) : (
                      <Sun size={15} className="text-yellow-500" />
                    )}
                  </div>
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-heading bg-accent/10 border border-accent/30 rounded-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
