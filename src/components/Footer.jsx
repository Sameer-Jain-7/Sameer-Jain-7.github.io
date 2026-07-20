import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <p className="font-mono text-xs">
          Designed & developed by {profile.name.split(" ")[0]}
        </p>
      </div>
    </footer>
  );
}
