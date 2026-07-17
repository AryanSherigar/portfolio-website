"use client";

import { useState } from 'react';
import { projects } from '@/lib/site-data';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="bg-[rgb(var(--background))] py-20 text-white sm:py-24">
      <div className="section-shell flex flex-col items-start gap-10 lg:flex-row lg:gap-16">

        {/* Left Sidebar (ToC) */}
        <Reveal className="relative flex-none hidden lg:sticky lg:top-32 lg:block lg:w-52">
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
        <div className="flex w-full gap-4 overflow-x-auto border-b border-white/10 pb-4 lg:hidden">
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
