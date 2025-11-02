import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Framer Motion',
  'FastAPI',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
            <Star className="h-3.5 w-3.5 text-yellow-400" /> About Me
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">Designer-Developer hybrid focused on outcomes</h2>
          <p className="mt-3 text-pretty text-slate-300">
            I bridge design and engineering to ship delightful products. I partner with startups and teams to create user-centered, accessible interfaces that convert.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-4 py-3 text-center text-slate-200 shadow-sm"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
