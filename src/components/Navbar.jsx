import { Menu, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Initialize theme
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-sm md:text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600 dark:from-sky-400 dark:to-violet-400">
          DevPortfolio
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </nav>
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  );
}
