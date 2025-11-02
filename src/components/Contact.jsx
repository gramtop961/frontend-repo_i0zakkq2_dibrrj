import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Freelance Inquiry');
    const body = encodeURIComponent(`Hi, I'm ${name} (${email}).\n\n${message}`);
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something great</h2>
          <p className="mt-2 text-slate-300">Tell me about your project timeline, goals, and budget. I’ll get back within 24 hours.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-slate-300">Your name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 outline-none ring-cyan-500/30 focus:ring"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 outline-none ring-cyan-500/30 focus:ring"
                placeholder="jane@email.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-slate-300">Project details</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 outline-none ring-cyan-500/30 focus:ring"
                placeholder="Describe what you need, timeline, and budget."
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
