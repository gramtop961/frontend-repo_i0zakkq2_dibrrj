import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Interactive charts, role-based access, and real-time updates.',
    tags: ['React', 'Tailwind', 'Node.js'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1551281044-8b1a7d1a06d2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Launchpad',
    description: 'High-converting storefront with frictionless checkout.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Marketing Site Revamp',
    description: 'Playful animations and blazing performance scores.',
    tags: ['Vite', 'Framer Motion', 'SEO'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">A selection of recent work focused on performance, usability, and a bit of magic.</p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/10 md:inline-flex"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="text-sm text-slate-300">{p.description}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
