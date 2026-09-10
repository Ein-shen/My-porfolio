import { ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { View_projects } from "../away/View_projects"

const projects = [



    { title: "Expensekontrol", 
      description: "A full-stack personal finance platform designed to help users take control of their spending, track expenses", 
      image: "cargo.jpg", 
      tags: ["Html", "Tailwind Css", "Postegsql", "React", "Nextjs", "Express", "Docker", "Render", "Neondb", "CI/CD" ], 
      github: "https://github.com/Syloms/Cargo" 
    },

    { title: "Laze", 
      description: "Built a full-stack study companion web app that lets users track study sessions and manage tasks", 
      image: "Lazeu.png", 
      tags: ["React", "Supabase", "Tailwind CSS", "HTML", "Vite", "Netlify", "Docker","CI/CD",], 
      github: "https://github.com/Ein-shen/CS50-Laze"
    },

    { title: "Weather Web App", 
      description: "A web app allows users to search for a city and view its current weather using the OpenWeatherMap API", 
      image: "weather.png", 
      tags: ["HTML", "Python", "Django", "Tailwind CSS", "SQLite"],  
      github: "https://github.com/Ein-shen/weather-webApp"
    },

    { title: "Stock-Trading", 
      description: "A web app that lets users manage a virtual stock portfolio — look up real-time stock prices",
      image: "past.png", 
      tags: 
      ["Python", "Flask", "SQLite", "Jinja", "HTML", "CSS"],  
      github: "https://github.com/Ein-shen/Stock-Trading" },
      
    

    
]

export const Projects = () => {

    return (
        <section id="projects" className="py-2 relative overflow-hidden scroll-mt-24">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 animate-fade-in ">
                <div className="mx-auto max-w-[800px]">

                    {/* section header */}
                    <div className="mb-16">
                        <div className='flex items-center justify-between mb-4'>
                           <h1 className="font-mono text-xl lg:text-xl font-medium tracking-tight pt-1  ">
                               Projects
                            </h1>

                            <Link
                                to="/view_projects"
                                className="ml-auto text-sm font-mono text-muted-foreground hover:text-foreground rounded-lg h-11 cursor-pointer flex items-center gap-1"
                                >
                                view all<span className="text-[10px]">↗</span>
                            </Link>
                        </div>
                    </div>

                    {/* Project grid */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start ">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group bg-zinc-900/60 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300 md:row-span-1"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                {/* macOS-style title bar — now per card */}
                                <div className="flex items-center gap-2 bg-zinc-800/80 px-4 py-2.5 border-b border-white/10">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="font-mono text-xs text-zinc-400 ml-2 truncate">
                                        {project.title}
                                    </span>
                                </div>

                                <div className="p-4 pb-0">
                                    <div className="relative overflow-hidden rounded-xl aspect-video bg-zinc-800">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                                            <a href={project.github} className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all">
                                                <FaGithub className="w-5 h-5 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 space-y-3">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-white text-xl font-semibold group-hover:text-white/90 transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="font-mono px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300"
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