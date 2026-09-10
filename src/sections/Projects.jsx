import { ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const projects = [


  {
    title: "Laze",
    description:
      "Built a full-stack study companion web app that lets users track study sessions and manage tasks.",
    image: "Lazeu.png",
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
    image: "cargo.jpg",
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
    github: "https://github.com/Syloms/Cargo",
  },

  

  {
    title: "Weather Web App",
    description:
      "A web app that allows users to search for a city and view its current weather using the OpenWeatherMap API.",
    image: "weather.png",
    tags: ["HTML", "Python", "Django", "Tailwind CSS", "SQLite"],
    github: "https://github.com/Ein-shen/weather-webApp",
  },

  {
    title: "Stock-Trading",
    description:
      "A web app that lets users manage a virtual stock portfolio and look up real-time stock prices.",
    image: "past.png",
    tags: ["Python", "Flask", "SQLite", "Jinja", "HTML", "CSS"],
    github: "https://github.com/Ein-shen/Stock-Trading",
  },
]

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden scroll-mt-24 py-2"
    >
      <div className="container relative z-10 mx-auto animate-fade-in px-6 py-10 md:px-12">
        <div className="mx-auto max-w-[800px]">

          {/* Section header */}
          <div className="mb-16">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="theme-text pt-1 font-mono text-xl font-medium tracking-tight lg:text-xl">
                Projects
              </h1>

              <Link
                to="/view_projects"
                className="theme-muted hover:theme-text-hover ml-auto flex h-11 cursor-pointer items-center gap-1 rounded-lg font-mono text-sm"
              >
                view all
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </div>

          {/* Project grid */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl border-[0.5px] border-border transition-opacity duration-300 hover:opacity-90 md:row-span-1"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                {/* macOS-style title bar */}
                <div className="theme-card-elevated flex items-center gap-2 border-[0.5px] border-border border-b px-4 py-2.5">
                  <div className="flex gap-1.5">
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
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* GitHub overlay */}
                    <div className="theme-overlay absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-tag rounded-full p-3 transition-all hover:opacity-80"
                      >
                        <FaGithub className="theme-text h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className="space-y-3 p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="theme-text text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      {project.title}
                    </h3>

                    <ArrowRight
                      className="theme-muted theme-arrow-hover mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="theme-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="theme-tag rounded-full px-3 py-1.5 font-mono text-xs font-medium transition-all duration-300 hover:opacity-80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}