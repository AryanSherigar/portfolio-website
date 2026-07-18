"use client";

import { useState, useEffect } from 'react';
import { projects } from '@/lib/site-data';
import { Reveal } from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectItem {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly github: string;
  readonly live: string;
  readonly image?: string;
}

function ProjectMockup({ project }: { project: ProjectItem }) {
  const { title, image } = project;

  return (
    <div className="relative rounded-xl border border-white/10 bg-[rgb(var(--surface-elevated))] p-1 shadow-2xl overflow-hidden aspect-video w-full">
      {/* Window Controls */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/10 bg-[rgb(var(--surface))] flex items-center px-4 gap-2 z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="ml-4 font-mono text-xs text-gray-500">{title.toLowerCase().replace(/\s+/g, '-')}</div>
      </div>

      {image ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={image}
          alt={`${title} screenshot`}
          className="mt-10 h-[calc(100%-40px)] w-full object-cover"
        />
      ) : (
        /* Custom Unix Terminal Mockup for C-Shell */
        <div className="mt-10 flex h-[calc(100%-40px)] flex-col bg-neutral-950 p-4 font-mono text-xs text-neutral-300 select-none overflow-y-auto">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">➜</span>
              <span className="text-sky-400">~/projects/c-shell</span>
              <span className="text-neutral-500 font-light">git:(main)</span>
              <span className="text-white">make</span>
            </div>
            <div className="text-neutral-500 text-[10px] sm:text-xs">g++ -std=c++17 -O3 -Wall -c main.cpp parser.cpp shell.cpp</div>
            <div className="text-neutral-500 text-[10px] sm:text-xs">g++ -std=c++17 -O3 -Wall -o c-shell main.o parser.o shell.o</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-emerald-500">➜</span>
              <span className="text-sky-400">~/projects/c-shell</span>
              <span className="text-neutral-500 font-light">git:(main)</span>
              <span className="text-white">./c-shell</span>
            </div>
            <div className="text-sky-400 border-l border-sky-500/40 pl-3 py-1 my-1">
              <div className="text-white font-semibold text-xs sm:text-sm">Welcome to C-Shell v1.0.0</div>
              <div className="text-neutral-400 text-[10px]">Type &apos;help&apos; to see built-in commands.</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">c-shell $</span>
              <span className="text-white">ls -lh</span>
            </div>
            <div className="text-neutral-400 grid grid-cols-4 gap-2 text-[9px] sm:text-[10px] pl-4">
              <div>-rwxr-xr-x</div>
              <div>1.2M</div>
              <div className="text-emerald-400 font-medium">c-shell</div>
              <div className="text-neutral-500">executable</div>
              
              <div>-rw-r--r--</div>
              <div>4.8K</div>
              <div className="text-neutral-300">main.cpp</div>
              <div className="text-neutral-500">source</div>

              <div>-rw-r--r--</div>
              <div>8.2K</div>
              <div className="text-neutral-300">shell.cpp</div>
              <div className="text-neutral-500">source</div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sky-500">c-shell $</span>
              <span className="text-white animate-pulse">|</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-auto flex justify-center text-[9px] sm:text-[10px] text-neutral-600 font-sans italic pb-1">
            * Artistic representation. Not an actual screenshot.
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-project-index'));
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll('.project-scroll-item');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  const handleProjectClick = (index: number) => {
    const element = document.getElementById(`project-block-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <section id="projects" className="bg-[rgb(var(--background))] py-20 text-white sm:py-24 relative">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 relative">

          {/* Left Column: Sticky Navigation (ToC) */}
          <div className="relative flex-none hidden lg:sticky lg:top-32 lg:block lg:w-56 self-start z-10">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

            <div className="flex flex-col gap-6 py-2">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={project.title}
                    onClick={() => handleProjectClick(index)}
                    className={`relative pl-6 text-left font-mono text-xs xl:text-sm transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[rgb(var(--highlight))] font-medium'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {/* Active Indicator Dot (Animated with framer-motion) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-[rgb(var(--highlight))] shadow-[0_0_8px_rgb(var(--highlight))]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {project.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation (Horizontal Tabs) - sticky underneath main header */}
          <div className="flex w-full gap-4 overflow-x-auto border-b border-white/10 pb-4 lg:hidden sticky top-24 bg-[#02040A]/90 backdrop-blur-md z-20 py-3 px-1">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => handleProjectClick(index)}
                className={`whitespace-nowrap font-mono text-xs px-3 py-1.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'text-[rgb(var(--highlight))] bg-[rgb(var(--highlight))/0.1] font-medium border border-[rgb(var(--highlight))/0.3]'
                    : 'text-gray-500 hover:text-gray-300 border border-transparent'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Center Column: Scroll-Driven Content */}
          <div className="flex-1 w-full min-w-0">
            <div className="flex flex-col">
              {projects.map((proj, index) => {
                const project: ProjectItem = proj;
                return (
                  <div
                    key={project.title}
                    id={`project-block-${index}`}
                    data-project-index={index}
                    className="project-scroll-item w-full min-h-[50vh] py-16 lg:py-32 first:pt-4 last:pb-32 flex flex-col justify-center border-b border-white/5 lg:border-none"
                  >
                    <Reveal>
                      <div className="w-full max-w-xl">
                        {/* Project Counter Tag */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgb(var(--highlight)/0.1)] text-[rgb(var(--highlight))]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="font-mono text-sm text-[rgb(var(--highlight))] tracking-wide">Project 0{index + 1}</span>
                        </div>

                        {/* Heading */}
                        <h2 className="mb-6 text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[40px]">
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p className="mb-8 text-base leading-relaxed text-gray-400 sm:text-lg">
                          {project.description}
                        </p>

                        {/* Tech stack */}
                        <ul className="mb-10 flex flex-col gap-3">
                          {project.tags.map((tag) => (
                            <li key={tag} className="flex items-start gap-3 text-gray-400 text-base">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[rgb(var(--highlight))]" />
                              {tag}
                            </li>
                          ))}
                        </ul>

                        {/* Action Buttons */}
                        {((project.github && !project.github.startsWith('[GITHUB_REPO') && project.github !== '') || 
                          (project.live && !project.live.startsWith('[LIVE_DEMO') && project.live !== '')) && (
                          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                            {project.github && !project.github.startsWith('[GITHUB_REPO') && project.github !== '' && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-2.5 font-mono text-sm text-white transition hover:bg-white/5"
                              >
                                GitHub Repo
                               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                            {project.live && !project.live.startsWith('[LIVE_DEMO') && project.live !== '' && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[rgb(var(--highlight))] px-5 py-2.5 font-mono text-sm font-semibold text-[rgb(var(--background))] transition hover:opacity-90"
                              >
                                {project.live.includes('youtu.be') || project.live.includes('youtube.com') ? 'Watch Demo' : 'Live Demo'}
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  {project.live.includes('youtu.be') || project.live.includes('youtube.com') ? (
                                    <>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </>
                                  ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  )}
                                </svg>
                              </a>
                            )}
                          </div>
                        )}

                        {/* Inline Media for Mobile (Hidden on Desktop) */}
                        <div className="w-full mt-10 block lg:hidden">
                          <ProjectMockup project={project} />
                        </div>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Media - hidden on mobile, stuck on desktop */}
          <div className="hidden lg:block lg:sticky lg:top-32 lg:w-[480px] xl:w-[600px] flex-none self-start z-10">
            <div className="w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <ProjectMockup project={projects[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

