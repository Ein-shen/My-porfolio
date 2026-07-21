import { ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
    {
        title:"Past-life-generator",
        description:"AHHAAHAHAHAHHA",
        image:"sv.jpg",
        tags:["Python"],
        links:"#",
        github:"#",
    },


    {
        title:"Anime",
        description:"HOHOHOHOHOHOH",
        image:"r.jpg",
        tags:["JINJA"],
        links:"#",
        github:"#",
    },


    {
        title:"SECRET",
        description:"EHEHEHEH",
        image:"q.jpg",
        tags:["Python"],
        links:"#",
        github:"#",
    },

    {
        title:"OUCH",
        description:"HIHIHIHIH",
        image:"a.jpg",
        tags:["html"],
        links:"#",
        github:"#",
    },
]





export const Projects = () => {
    
    
    return (
        
        <section id="projects"className="py-2 relative overflow-hidden">

            {/* bg glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlights/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10"> 

            {/* section header */}
            <div className="text-center mx-auto max-w3xl mb-16">
                
                <h2 className="text-xl md:text-lg font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                   
                </h2>

            </div>

            {/* Project grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                        key={idx} 
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${(idx + 1) * 100}ms `}}
                        > 

                        {/* image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />

                        <div
                            className=" absolute inset--0 bg-gradient-to-t from-card vias-card/50 to-transparent opacity-60"
                        />

                        {/* Overly links */}

                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> 

                            <a 
                            href={project.link}
                            className="p- rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <ArrowRight className="w-5 h-5"/>
                            </a>

                            <a
                            href={project.github}
                            className="p- rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <FaGithub className="w-5 h-5"/>
                            </a>
                        </div>

                            
                      </div>

                        {/* Content */}

                        <div className="p-6 space-y-4 ">
                            <div className="flex items-start justify-between"> 
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors"> {project.title}</h3>
                                <ArrowRight
                                    className="w-5 h-5
                                    text-muted-foreground group-hover:text-primary
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm"> {project.description}</p>
                            
                                <div className="flex flex-wrap gap-2"> 
                                    {project.tags.map((tag, tagIdx) => (
                                    <span 
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                        </span>
                                ))}
                                </div>
                            </div>

                        </div>
                ))}
            </div>

            </div> 
            {/* view all cta */}
            
            



         </section>
                
    )
           
}
