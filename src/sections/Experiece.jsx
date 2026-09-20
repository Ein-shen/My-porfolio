import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaFigma,
  FaMicrosoft,
  FaDatabase,
} from "react-icons/fa";
import {
  SiVite,
  SiVercel,
  SiTailwindcss,
  SiSupabase,
  SiJinja,
  SiC,
  SiCplusplus,
  SiMysql,
  SiDart,
  SiKalilinux,
  SiDjango,
  SiRender,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import {
  Blocks,
  Code,
  GitBranch,
  Infinity as InfinityIcon,
  Workflow,
} from "lucide-react";

/* ------------------------------------------------------------------
   Icons
   Keys must match the tech names used below exactly.
------------------------------------------------------------------ */
const techIcons = {
  "Bubble.io": Blocks, // no Bubble logo in react-icons, so a generic no-code icon
  "Microsoft Teams": FaMicrosoft,
  DevOps: InfinityIcon,
  "Bubble Version Control": GitBranch,
  Git: FaGitAlt,
  Vite: SiVite,
  React: FaReact,
  TypeScript: SiTypescript,
  Vercel: SiVercel,
  HTML: FaHtml5,
  "Tailwind CSS": SiTailwindcss,
  Supabase: SiSupabase,
  Jinja: SiJinja,
  SQL: FaDatabase,
  PHP: FaPhp,
  Python: FaPython,
  JavaScript: FaJs,
  C: SiC,
  "C++": SiCplusplus,
  MySQL: SiMysql,
  CSS: FaCss3Alt,
  Bootstrap: FaBootstrap,
  Dart: SiDart,
  "Kali Linux": SiKalilinux,
  Figma: FaFigma,
  Django: SiDjango,
  Docker: FaDocker,
  "CI/CD": Workflow,
  NeonDB: SiPostgresql, // Neon is serverless Postgres
  Render: SiRender,
};

// Brand colors. Anything not listed (like Vercel) uses the text color, so it
// stays readable in both light and dark themes.
const techColors = {
  "Bubble.io": "#6C6CFF",
  "Microsoft Teams": "#00A4EF",
  DevOps: "#34D399",
  "Bubble Version Control": "#F05032",
  Git: "#F05032",
  Vite: "#8B7CFF",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  "Tailwind CSS": "#38BDF8",
  Supabase: "#3ECF8E",
  Jinja: "#D9413B",
  SQL: "#F29111",
  PHP: "#777BB4",
  Python: "#4B8BBE",
  JavaScript: "#F7DF1E",
  C: "#A8B9CC",
  "C++": "#659AD2",
  MySQL: "#4479A1",
  CSS: "#1572B6",
  Bootstrap: "#8F6AD6",
  Dart: "#0175C2",
  "Kali Linux": "#557C94",
  Figma: "#F24E1E",
  Django: "#44B78B",
  Docker: "#2496ED",
  "CI/CD": "#FBBF24",
  NeonDB: "#00E599",
  Render: "#46E3B7",
};

const TechIcon = ({ name, className = "h-4 w-4" }) => {
  const Icon = techIcons[name] ?? Code; // generic fallback if a name is missing
  const color = techColors[name];
  return (
    <Icon
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    />
  );
};

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
                          className="theme-muted inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1 font-mono text-xs"
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