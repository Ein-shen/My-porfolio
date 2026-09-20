import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Images are served from /public, so use root-relative paths.
// (If they live in src/assets, import them instead and put the imports here.)
const projects = [
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
    title: "Cargo",
    description:
      "A full-stack peer-to-peer car rental mobile app (Flutter, Dart, PHP, MySQL). As part of a capstone team project, I performed QA testing on core features including user authentication, vehicle listings, search, and the booking/reservation system. I identified and reported bugs, and worked with developers to reproduce issues and verify fixes before submission.",
    image: "/cargo1.png",
    tags: ["Dart", "Flutter", "MySQL", "PHP", "Firewall"],
    github: "https://github.com/Syloms/Cargo",
  },
  {
    title: "Lazeu",
    description:
      "A full-stack study companion web app that lets users track study sessions and manage tasks, built with React on the frontend and Supabase on the backend. The idea came from being annoyed at how studying tools usually work: either a bare-bones flashcard app with zero social features, or something bloated that tries to do too much.",
    image: "/Lazeu.png",
    tags: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "HTML",
      "Vite",
      "Netlify",
      "Docker",
    ],
    github: "https://github.com/Ein-shen/CS50-Laze",
  },
  {
    title: "Past Life Generator",
    description:
      "Built a quiz-based Python game that generates a personalized 'past life' story based on user input.",
    image: "/past.png",
    tags: ["Python"],
    github: "https://github.com/Ein-shen/CS50-python-past-life-generator",
  },
  {
    title: "Stock-Trading",
    description:
      "A web app that lets users manage a virtual stock portfolio: look up real-time stock prices, 'buy' and 'sell' shares with simulated cash, and review a full history of transactions. Built with Flask and SQLite.",
    image: "/past.png",
    tags: ["Python", "Flask", "SQLite", "Jinja", "HTML", "CSS"],
    github: "https://github.com/Ein-shen/Stock-Trading",
  },
  {
    title: "Weather Web App",
    description:
      "A web app that allows users to search for a city and view its current weather using the OpenWeatherMap API.",
    image: "/weather.png",
    tags: ["HTML", "Python", "Django", "Tailwind CSS", "SQLite"],
    github: "https://github.com/Ein-shen/weather-webApp",
  },
];

export const View_projects = () => {
  const navigate = useNavigate();

  return (
    <div className="container relative z-10 mx-auto px-6 py-10 pt-28 md:px-12">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <div className="mb-16 grid grid-cols-[auto_1fr_auto] items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="theme-text flex h-11 w-11 animate-fade-in items-center justify-start transition-opacity animation-delay-100 hover:opacity-70"
          >
            <ArrowLeft size={24} />
          </button>

          <h1 className="theme-text animate-fade-in pt-1 text-center font-mono text-xl font-medium tracking-tight animation-delay-100">
            Projects
          </h1>

          {/* spacer matching the back button width so the title stays centered */}
          <div className="w-11" aria-hidden="true" />
        </div>

        {/* Project list: one column only */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group flex animate-fade-in flex-col overflow-hidden rounded-2xl border-[0.5px] border-border transition-opacity duration-300 [animation-fill-mode:backwards] hover:opacity-90"
              style={{ animationDelay: `${Math.min(idx, 4) * 100}ms` }}
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

              {/* Project details */}
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="theme-text text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    {project.title}
                  </h2>

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

                <ul className="flex flex-wrap gap-2 pt-1">
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
  )
}