"use client";

import { motion } from 'framer-motion';
import { contactLinks } from '@/lib/site-data';
import { Button } from './Button';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
});

export function Hero() {
  return (
    <section id="top" className="relative flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 text-center sm:pt-32 sm:pb-24">
      {/* Sky-blue radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="section-shell relative z-10 flex flex-col items-center">


        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-sm font-medium text-[#38bdf8] mb-8 backdrop-blur-md font-mono"
        >
          <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" /> Available for full-time roles
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="mb-6 max-w-5xl text-4xl font-bold tracking-tight text-balance text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Building context-aware <br className="hidden sm:block" /> LLM applications
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 mb-10 max-w-2xl text-base leading-relaxed text-balance text-gray-400 sm:text-lg md:text-xl"
        >
          I build full-stack GenAI products, RAG pipelines, and reliable AI systems that turn messy model output into production-ready solutions.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button download href={contactLinks.resume} variant="secondary">
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
