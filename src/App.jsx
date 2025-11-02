import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Header />
      <Hero />
      <About />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
          Your Name
        </a>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <a href="#about" className="text-slate-300 hover:text-white">About</a>
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-950 to-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Have a vision? Let’s bring it to life.</h3>
            <p className="mt-1 text-slate-300">I can help with design, development, and launching your product end-to-end.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-sm text-slate-400">Built with ❤️ — Interactive 3D + motion</div>
      </div>
    </footer>
  );
}
