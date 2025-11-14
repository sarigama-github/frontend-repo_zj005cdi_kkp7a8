import { Code2, Server, Rocket, Mail, ExternalLink } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I'm a full‑stack engineer who loves turning ideas into polished, production‑ready products.
            I focus on performance, accessibility, and strong developer experience. I enjoy collaborating
            with teams, mentoring, and shipping features that matter.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Code2, title: 'Frontend', desc: 'React, Next.js, Tailwind, Framer Motion' },
              { icon: Server, title: 'Backend', desc: 'Node, Python, FastAPI, PostgreSQL, MongoDB' },
              { icon: Rocket, title: 'DevOps', desc: 'AWS, Docker, Terraform, CI/CD' },
              { icon: Code2, title: 'DX', desc: 'Monorepos, testing, design systems' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3">
                  <Icon className="text-slate-700" size={18} />
                  <p className="font-semibold text-slate-800">{title}</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_60%_80%,rgba(236,72,153,0.2),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Tailwind', 'Docker', 'AWS'
  ]
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'Realtime Chat Platform',
      desc: 'WebSocket-powered chat with rooms, presence, and media sharing.',
      tags: ['React', 'Node', 'WebSocket', 'Redis'],
      url: '#'
    },
    {
      title: 'E‑commerce Dashboard',
      desc: 'Admin analytics with server-side filtering and export.',
      tags: ['Next.js', 'FastAPI', 'PostgreSQL'],
      url: '#'
    },
    {
      title: 'Dev Portfolio Starter',
      desc: 'Beautiful starter kit with animations and CMS support.',
      tags: ['Vite', 'Framer Motion', 'Tailwind'],
      url: '#'
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.title} href={p.url} className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-slate-900">{p.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-slate-700" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Let’s work together</h2>
          <p className="mt-4 text-slate-600">Have an idea or a role in mind? I’m open to new opportunities and collaborations.</p>
          <div className="mt-6">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
              <Mail size={18} /> Email me
            </a>
          </div>
        </div>
        <form className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Name" />
            <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Email" />
          </div>
          <textarea rows="5" className="mt-4 w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Tell me about your project..." />
          <button type="button" className="mt-4 w-full px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Send</button>
        </form>
      </div>
    </section>
  )
}
