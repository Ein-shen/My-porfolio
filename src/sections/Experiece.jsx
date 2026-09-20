import { TechIcon } from "../layout/Techicon";

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */
const experiences = [
  {
    title: "On-the-Job Training (OJT)",
    period: "Dec 2025 - Feb 2026",
    role: "Web Developer Intern",
    company: "Jairosoft Inc.",
    description:
      "Built and shipped a grading/assessment module for Jairosoft's LMS using Bubble.io, designed for both teachers and students so instructors could create and score assessments with ease.",
    technology: [
      "Bubble.io",
      "Microsoft Teams",
      "DevOps",
      "Bubble Version Control",
      "TypeScript",
      "React",
    ],
    current: false,
  },
];

const stack = [
  "Bubble.io",
  "Microsoft Teams",
  "DevOps",
  "Bubble Version Control",
  "Git",
  "Vite",
  "React",
  "Vercel",
  "HTML",
  "Tailwind CSS",
  "Supabase",
  "Jinja",
  "SQL",
  "PHP",
  "Python",
  "JavaScript",
  "C",
  "C++",
  "MySQL",
  "CSS",
  "Bootstrap",
  "Dart",
  "Kali Linux",
  "Figma",
  "Django",
  "Docker",
  "CI/CD",
  "NeonDB",
  "Render",
  "PostgreSQL",
];

/* ------------------------------------------------------------------
   Component
------------------------------------------------------------------ */
export const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 overflow-hidden py-2"
    >
      <div className="container relative z-10 mx-auto animate-fade-in px-6 py-10 md:px-12">
        {/* Experience */}
        <div className="mx-auto max-w-[800px]">
          <div className="mb-16">
            <h2
              id="experience-heading"
              className="theme-text pt-1 font-mono text-xl font-medium tracking-tight"
            >
              Experience
            </h2>
          </div>

          <div className="relative">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="pb-10">
                <div className="flex flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-500 sm:flex-row sm:items-start">
                  <span className="theme-muted shrink-0 font-mono text-xs font-medium sm:w-24 sm:text-sm">
                    {exp.period}
                  </span>

                  <div className="flex w-full flex-col items-center">
                    <h3 className="theme-text text-center text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="theme-muted pt-3 text-center text-xs">
                      {exp.company}
                    </p>
                    <p className="theme-muted max-w-sm pt-3 text-center text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="flex flex-wrap justify-center gap-2 pt-4">
                      {exp.technology.map((name) => (
                        <li
                          key={name}
                          className="theme-muted inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 font-mono text-xs"
                        >
                          <TechIcon name={name} className="h-3.5 w-3.5 shrink-0" />
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div id="stack" className="mx-auto max-w-[800px] scroll-mt-24 pt-12">
          <div className="mb-16">
            <h2
              id="stack-heading"
              className="theme-text pt-1 font-mono text-lg font-medium tracking-tight"
            >
              Stack
            </h2>
          </div>

          <ul
            aria-labelledby="stack-heading"
            className="flex flex-wrap justify-center gap-2"
          >
            {stack.map((name) => (
              <li
                key={name}
                className="theme-muted inline-flex items-center gap-2 rounded-lg border border-border px-2.5 py-1.5 font-mono text-sm transition-colors hover:border-muted-foreground sm:px-3"
              >
                <TechIcon name={name} className="h-4 w-4 shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};