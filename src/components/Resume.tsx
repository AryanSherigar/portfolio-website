import { Button } from './Button';
import { Section } from './Section';

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Download a copy of my resume" description="A quick way for recruiters to review my experience. The PDF lives in the public folder and can be replaced at any time.">
      <div className="surface-card flex flex-col items-start justify-between gap-6 rounded-[1.75rem] p-6 sm:p-8 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-semibold">Resume / CV</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:rgb(var(--foreground)/0.82)]">Use the button below to view or download the PDF version of my resume.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/resume.pdf">Download Resume</Button>
          <Button href="/resume.pdf" variant="secondary">
            View Resume
          </Button>
        </div>
      </div>
    </Section>
  );
}
