"use client";

import { useState } from 'react';
import { projects } from '@/lib/site-data';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-24 bg-[rgb(var(--background))] text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

        {/* Left Sidebar (ToC) */}
        <Reveal className="relative flex-none lg:w-48 lg:sticky lg:top-32 hidden md:block">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="flex flex-col gap-6 py-2">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.title}
                  onClick={() => setActiveIndex(index)}
                  className={`relative pl-6 text-left font-mono text-sm transition-colors ${
                    isActive
                      ? 'text-[rgb(var(--highlight))]'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-[rgb(var(--highlight))]" />
                  )}
                  {project.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile Sidebar (Horizontal Tabs) */}
        <div className="md:hidden flex overflow-x-auto gap-4 border-b border-white/10 pb-4 w-full no-scrollbar">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap font-mono text-sm px-2 py-1 transition-colors ${
                index === activeIndex
                  ? 'text-[rgb(var(--highlight))] border-b-2 border-[rgb(var(--highlight))]'
                  : 'text-gray-500'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0">
          {projects.map((project, index) => (
            <div key={project.title} className={index === activeIndex ? 'block' : 'hidden'}>
              <Reveal>
                <ProjectCard {...project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
