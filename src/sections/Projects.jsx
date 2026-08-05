import { ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { View_projects } from "../away/View_projects"

const projects = [

    { title: "Cargo", 
      description: "A full-stack peer-to-peer car rental mobile app", 
      image: "sv.jpg", 
      tags: ["Dart", "Flutter", "Mysql", "PHP", "Firewall"], 
      github: "https://github.com/Syloms/Cargo" },

    { title: "Laze", 
      description: "Built a full-stack study companion web app that lets users track study sessions and manage tasks", 
      image: "laze.png", 
      tags: ["React", "Supabase", "TailwinCss", "Html", "Vite"], 
      github: "https://github.com/Ein-shen/CS50-Laze"
    },



    { title: "Past Life Generator", 
      description: "Built a quiz-based Python game that generates a personalized 'past life' story based on user input.", 
      image: "past.png", tags: 
      ["Python"],  
      github: "https://github.com/Ein-shen/CS50-python-past-life-generator" },


    { title: "Weather Web App", description: "A web app allows users to search for a city and view its current weather using the OpenWeatherMap API", image: "weather.png", tags: ["html", "Python", "Django", "tailwindCss", "SQLlite"],  github: "https://github.com/Ein-shen/weather-webApp" },
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
                                className='font-mono font-lg  text-muted-foreground hover:text-foreground rounded-lg w-38 h-11 cursor-pointer flex items-center  justify-center gap-1 '
                                >
                                view all<span className="text-[20px]">↗</span>
                            </Link>
                        </div>
                    </div>

                    {/* Project grid */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start ">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group border border-foreground/10  rounded-2xl overflow-hidden  md:row-span-1"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        
                                        <a href={project.github} className="p-3 rounded-full glass hover:bg-muted-foreground hover:text-primary-foreground transition-all">
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-muted-foreground text-xl font-semibold group-hover:text-foreground transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                    <p className="text-muted-foreground text-xs">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className=" font-mono px-4 py-1.5 rounded-lg text-xs font-medium border border-border/ text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
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