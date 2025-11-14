import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}

export default App
