import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TechIcon } from "../layout/Techicon";

// Images are served from /public, so use root-relative paths.
const projects = [
  {
    title: "Lazeu",
    description:
      "A full-stack study companion web app that lets users track study sessions and manage tasks, built with React on the frontend and Supabase on the backend. The idea came from being annoyed at how studying tools usually work: either a bare-bones flashcard app with zero social features, or something bloated that tries to do too much.",
    image: "/Lazeu.png",
    tags: ["React", "Supabase", "Tailwind CSS", "HTML", "Vite", "Netlify", "Docker", "Git", "Firewall"],
    github: "https://github.com/Ein-shen/CS50-Laze",
  },
  {
    title: "Expensekontrol",
    description:
      "A full-stack personal finance platform designed to help users take control of their spending and track expenses.",
    image: "/exp.png",
    tags: ["HTML", "Tailwind CSS", "PostgreSQL", "React", "Next.js", "Express", "Docker", "Render", "NeonDB", "CI/CD", "Git", "Firewall"],
    github: "https://github.com/Ein-shen/Finance_tracker",
  },
  {
    title: "Stock-Trading",
    description:
      "A web app that lets users manage a virtual stock portfolio: look up real-time stock prices, 'buy' and 'sell' shares with simulated cash, and review a full history of transactions. Built with Flask and SQLite.",
    image: "/fi.png",
    tags: ["Python", "Flask", "SQLite", "Jinja", "HTML", "CSS", "Git"],
    github: "https://github.com/Ein-shen/Stock-Trading",
  },
  {
    title: "Weather Web App",
    description:
      "A web app that allows users to search for a city and view its current weather using the OpenWeatherMap API.",
    image: "/weather.png",
    tags: ["HTML", "Python", "Django", "Tailwind CSS", "SQLite", "Git"],
    github: "https://github.com/Ein-shen/weather-webApp",
  },
  {
    title: "Cargo",
    description:
      "A full-stack peer-to-peer car rental mobile app (Flutter, Dart, PHP, MySQL). As part of a capstone team project, I performed QA testing on core features including user authentication, vehicle listings, search, and the booking/reservation system. I identified and reported bugs, and worked with developers to reproduce issues and verify fixes before submission.",
    image: "/cargo1.png",
    tags: ["Dart", "Flutter", "MySQL", "PHP", "Firewall", "Git"],
    github: "https://github.com/Syloms/Cargo",
  },
  {
    title: "Past Life Generator",
    description:
      "Built a quiz-based Python game that generates a personalized 'past life' story based on user input.",
    image: "/past.png",
    tags: ["Python", "Git"],
    github: "https://github.com/Ein-shen/CS50-python-past-life-generator",
  },
];

const VISIBLE_TAGS = 5;
const LONG_DESCRIPTION = 180;

const ProjectCard = ({ project, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > LONG_DESCRIPTION;
  const hiddenTags = project.tags.length - VISIBLE_TAGS;
  const tags = expanded ? project.tags : project.tags.slice(0, VISIBLE_TAGS);

  return (
    <article
      className="group flex animate-fade-in flex-col overflow-hidden rounded-2xl border-[0.5px] border-border transition-shadow duration-300 [animation-fill-mode:backwards] hover:shadow-lg"
      style={{ animationDelay: `${Math.min(idx, 4) * 100}ms` }}
    >
      {/* Window title bar */}
      <div className="theme-card-elevated flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-700" />
          <span className="h-3 w-3 rounded-full bg-yellow-700" />
          <span className="h-3 w-3 rounded-full bg-green-700" />
        </div>
        <span className="theme-muted ml-2 truncate font-mono text-xs">{project.title}</span>
      </div>

      {/* Screenshot: the whole image is the link, so it works on touch too */}
      <div className="p-4 pb-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="theme-card-elevated relative block aspect-video overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="theme-overlay pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="theme-tag flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs">
              <FaGithub className="theme-text h-4 w-4" />
              <span className="theme-text">View code</span>
            </span>
          </span>
        </a>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="theme-text text-xl font-semibold">{project.title}</h2>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-muted inline-flex shrink-0 items-center gap-1 font-mono text-xs transition-opacity hover:opacity-70"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div>
          <p className={`theme-muted text-sm leading-relaxed ${!expanded && isLong ? "line-clamp-3" : ""}`}>
            {project.description}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="theme-text mt-2 inline-flex items-center gap-1 font-mono text-xs transition-opacity hover:opacity-70"
            >
              {expanded ? "Show less" : "Read more"}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="theme-tag inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-xs font-medium"
            >
              <TechIcon name={tag} className="h-3.5 w-3.5 shrink-0" />
              {tag}
            </li>
          ))}
          {!expanded && hiddenTags > 0 && (
            <li>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                aria-label={`Show ${hiddenTags} more technologies`}
                className="theme-muted inline-flex items-center rounded-md border border-dashed border-border px-2.5 py-1 font-mono text-xs transition-opacity hover:opacity-70"
              >
                +{hiddenTags}
              </button>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

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
          <div className="w-11" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};