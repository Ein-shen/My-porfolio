import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

// Images are served from /public, so use root-relative paths.
// (If they live in src/assets, import them instead and put the imports here.)
const projects = [
  {
    title: "Laze",
    description:
      "Built a full-stack study companion web app that lets users track study sessions and manage tasks.",
    image: "/Lazeu.png",
    tags: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "HTML",
      "Vite",
      "Netlify",
      "Docker",
      "CI/CD",
    ],
    github: "https://github.com/Ein-shen/CS50-Laze",
  },
  {
    title: "Expensekontrol",
    description:
      "A full-stack personal finance platform designed to help users take control of their spending and track expenses.",
    image: "/exp.png",
    tags: [
      "HTML",
      "Tailwind CSS",
      "PostgreSQL",
      "React",
      "Next.js",
      "Express",
      "Docker",
      "Render",
      "NeonDB",
      "CI/CD",
    ],
    github: "https://github.com/Ein-shen/Finance_tracker",
  },
  {
    title: "Weather Web App",
    description:
      "A web app that allows users to search for a city and view its current weather using the OpenWeatherMap API.",
    image: "/weather.png",
    tags: ["HTML", "Python", "Django", "Tailwind CSS", "SQLite"],
    github: "https://github.com/Ein-shen/weather-webApp",
  },
  {
    title: "Stock-Trading",
    description:
      "A web app that lets users manage a virtual stock portfolio and look up real-time stock prices.",
    image: "/fi.png",
    tags: ["Python", "Flask", "SQLite", "Jinja", "HTML", "CSS"],
    github: "https://github.com/Ein-shen/Stock-Trading",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 overflow-hidden py-2"
    >
      <div className="container relative z-10 mx-auto animate-fade-in px-6 py-10 md:px-12 ">
        <div className="mx-auto max-w-[800px]">
          {/* Section header */}
          <div className="mb-16 flex items-center justify-between">
            <h2
              id="projects-heading"
              className="theme-text pt-1 font-mono text-xl font-medium tracking-tight"
            >
              Projects
            </h2>

            <Link
              to="/view_projects"
              className="theme-muted hover:theme-text-hover flex h-11 items-center gap-1 rounded-lg font-mono text-sm"
            >
              view all
              <span className="text-[10px]" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          {/* Project grid: items-stretch makes cards in a row the same height */}
          <div className="grid items-stretch gap-8 lg:grid-cols-2 ">
            {projects.map((project, idx) => (
              <article
                key={project.title}
                className="group flex h-full animate-fade-in flex-col overflow-hidden rounded-2xl border-[0.5px] border-border transition-opacity duration-300 [animation-fill-mode:backwards] hover:opacity-90"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* macOS-style title bar */}
                <div className="theme-card-elevated flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <span className="theme-muted ml-2 truncate font-mono text-xs">
                    {project.title}
                  </span>
                </div>

                {/* Project image */}
                <div className="p-4 pb-0">
                  <div className="theme-card-elevated relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* GitHub overlay: only clickable while visible,
                        and also revealed on keyboard focus */}
                    <div className="theme-overlay pointer-events-none absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="theme-tag rounded-full p-3 transition-all hover:opacity-80"
                      >
                        <FaGithub className="theme-text h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project details: flex-1 fills the card, mt-auto on the
                    tags pins them to the bottom so all cards line up */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="theme-text text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      {project.title}
                    </h3>

                    {/* Always-visible link, so touch devices (no hover)
                        can still reach the repo */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="mt-1 shrink-0"
                    >
                      <ArrowRight className="theme-muted theme-arrow-hover h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </div>

                  <p className="theme-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="theme-tag rounded-full border border-border px-2.5 py-1 font-mono text-xs font-medium transition-all duration-300 hover:opacity-80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}