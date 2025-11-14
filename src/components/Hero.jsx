import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 items-center py-24">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
            Full‑stack Developer
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            I craft modern web apps that scale
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl">
            Building delightful, performant experiences from pixel to production. Specialized in React, Node, and cloud-native APIs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="backdrop-blur bg-white/40 border border-white/60 rounded-2xl p-4 shadow-xl">
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
                <div key={s} className="bg-white/70 border border-slate-200 rounded-xl p-3">
                  <p className="text-sm font-semibold text-slate-800">{s}</p>
                  <p className="text-xs text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ChevronDown className="animate-bounce" />
        <span className="text-sm">Scroll</span>
      </a>
    </section>
  );
}
