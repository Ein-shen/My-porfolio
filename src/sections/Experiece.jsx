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
  "Firewall",
  "Figma",
  "Django",
  "Docker",
  "CI/CD",
  "NeonDB",
  "Render",
];

/* ------------------------------------------------------------------
   Component
------------------------------------------------------------------ */
export const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 overflow-hidden py-2"
    >
      <div className="container relative z-10 mx-auto animate-fade-in px-4 py-10 sm:px-6 md:px-12">
        {/* Experience */}
        <div className="mx-auto w-full max-w-[800px]">
          <div className="mb-8 sm:mb-10">
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
                <div className="flex flex-col gap-3 rounded-2xl transition-all duration-500 sm:flex-row sm:items-start sm:gap-x-8 lg:gap-x-16 xl:gap-x-24">
                  <span className="theme-muted shrink-0 whitespace-nowrap text-muted-foreground font-mono text-xs font-medium sm:text-sm">
                    {exp.period}
                  </span>

                  <div className="flex w-full min-w-0 flex-col">
                    <h3 className="theme-text text-lg sm:text-xl font-mono break-words">
                      {exp.role}
                    </h3>

                    <p className="theme-muted font-bold pt-3 text-sm sm:text-base text-muted-foreground">
                      {exp.company}
                    </p>

                    {/* Icon-only tech stack: title attr keeps names accessible via tooltip */}
                    <ul className="flex flex-wrap gap-2 pt-2 text-muted-foreground">
                      {exp.technology.map((name) => (
                        <li
                          key={name}
                          title={name}
                          className="theme-muted inline-flex pt-2 text-muted-foreground rounded-full transition-colors hover:border-muted-foreground hover:bg-muted"
                        >
                          <TechIcon name={name} className="h-4 w-4 shrink-0" />
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
        <div id="stack" className="mx-auto max-w-[800px] scroll-mt-24 pt-7">
          <div className="mb-10 ">
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
                className="theme-muted inline-flex items-center gap-2 text-muted-foreground rounded-lg border border-border px-2.5 py-1.5 font-mono text-sm transition-colors hover:border-muted-foreground sm:px-3"
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