import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
      {/* 3D layers */}
      <div className="absolute inset-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Decorative 3D-ish blobs using CSS for performance on mobile */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

      {/* Overlay to handle light/dark contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 dark:from-slate-900/80 dark:via-slate-900/10 dark:to-slate-900/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-10 items-center py-28">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-400/10 border border-sky-200/70 dark:border-sky-400/20 px-3 py-1 rounded-full">
            Full‑stack Developer
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
            I craft modern web apps that scale
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg max-w-xl">
            Building delightful, performant experiences from pixel to production. Specialized in React, Node, and cloud-native APIs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="backdrop-blur bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-slate-700 rounded-2xl p-4 shadow-xl">
            <div className="grid grid-cols-2 gap-4 w-[360px]">
              {[
                ['React', 'Advanced'],
                ['Node.js', 'Advanced'],
                ['TypeScript', 'Advanced'],
                ['Python', 'Advanced'],
                ['FastAPI', 'Advanced'],
                ['MongoDB', 'Advanced'],
                ['AWS', 'Intermediate'],
                ['CI/CD', 'Intermediate'],
              ].map(([s, l]) => (
                <div key={s} className="bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{s}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
        <ChevronDown className="animate-bounce" />
        <span className="text-sm">Scroll</span>
      </a>
    </section>
  );
}
