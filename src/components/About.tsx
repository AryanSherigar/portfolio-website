import { skills } from '@/lib/site-data';
import { Badge } from './Badge';
import { Section } from './Section';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Focused on software, AI systems, and the details that make them reliable"
      description="I'm a final-year B.Tech student at IIT (ISM) Dhanbad, graduating in May 2026, building full-stack and GenAI systems with an emphasis on clarity, structure, and production readiness."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="surface-card rounded-[1.75rem] p-6 sm:p-8">
          <p className="text-base leading-8 text-white/90 sm:text-lg">
            I build full-stack and GenAI systems, from RAG pipelines and LLM-powered backends to interactive React frontends, and enjoy turning messy, unstructured model output into reliable, structured, production-ready systems. Currently working as a Coding &amp; Math Annotator at Outlier AI, where I evaluate and correct LLM-generated code and math solutions, design adversarial test cases to stress-test model performance, and help improve dataset quality for LLM training and fine-tuning.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]/70 font-mono">Experience</p>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-white">Outlier AI</h3>
              <p className="text-sm text-gray-400">Coding &amp; Math Annotator (Remote) · January 2025 – Present</p>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Evaluating and correcting LLM-generated algorithmic and mathematical solutions, identifying failure patterns through code analysis and debugging, and designing adversarial test cases to stress-test model performance.
              </p>
            </div>
          </div>
        </article>

        <aside className="surface-card rounded-[1.75rem] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">Skills</h3>
          <div className="mt-5 space-y-5">
            {skills.map((group) => (
              <div key={group.group}>
                <p className="text-sm font-semibold font-mono text-[#38bdf8]">{group.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
