import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={className} aria-label={title}>
      <div className="section-shell py-20 sm:py-24">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#38bdf8]/80 font-mono">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            {description ? (
              <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">{description}</p>
            ) : null}
          </div>
        </Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
