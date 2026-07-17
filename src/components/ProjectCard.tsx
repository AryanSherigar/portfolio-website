type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  github: string;
  live: string;
};

export function ProjectCard({ title, description, tags, github, live }: ProjectCardProps) {
  return (
    <article className="flex flex-col xl:flex-row gap-12 lg:gap-16 items-start w-full min-w-0">
      {/* Text Content */}
      <div className="flex-1 max-w-xl">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgb(var(--highlight)/0.1)] text-[rgb(var(--highlight))]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-mono text-sm text-[rgb(var(--highlight))] tracking-wide">Project</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-white mb-6 leading-[1.15]">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="flex flex-col gap-3 mb-10">
          {tags.map((tag) => (
            <li key={tag} className="flex items-start gap-3 text-gray-400 text-base">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[rgb(var(--highlight))]" />
              {tag}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-sm font-mono text-white transition hover:bg-white/5"
          >
            GitHub Repo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--highlight))] px-5 py-2.5 text-sm font-mono text-[rgb(var(--background))] font-semibold transition hover:opacity-90"
          >
            Live Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right side Card / Image Placeholder */}
      <div className="flex-1 w-full xl:max-w-xl">
        <div className="relative rounded-xl border border-white/10 bg-[rgb(var(--surface-elevated))] p-1 shadow-2xl overflow-hidden aspect-[4/3] w-full">
          {/* Window Controls */}
          <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/10 bg-[rgb(var(--surface))] flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <div className="ml-4 font-mono text-xs text-gray-500">{title.toLowerCase().replace(/\s+/g, '-')}</div>
          </div>

          {/* Fake Content / Dashboard Mock */}
          <div className="mt-10 p-6 h-full flex flex-col gap-6 bg-[rgb(var(--surface-elevated))]">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[rgb(var(--highlight)/0.3)] flex items-center justify-center">
                   <div className="w-3 h-3 rounded-full bg-[rgb(var(--highlight))]" />
                </div>
                <div>
                   <div className="text-white font-medium">{title}</div>
                   <div className="text-gray-500 text-xs mt-1 font-mono">Status: Active Deployments (3)</div>
                </div>
             </div>

             {/* Fake Chart Lines */}
             <div className="flex-1 border border-white/5 rounded-lg bg-[rgb(var(--surface))] p-4 flex items-end gap-2">
                {[40, 70, 45, 90, 65, 80, 30, 50, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-[rgb(var(--highlight)/0.2)] rounded-t-sm hover:bg-[rgb(var(--highlight)/0.4)] transition-colors" style={{ height: `${h}%` }} />
                ))}
             </div>
          </div>
        </div>
      </div>
    </article>
  );
}
