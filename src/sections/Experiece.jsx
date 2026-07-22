const experiences = [ 

    {
        title: "On-the-Job Training (OJT)",
        period: "December 2025 - February 2026",
        role: "Software Developer",
        company: "Jairosoft Inc.",
        description: "Maintained and enhanced a Learning Management System (LMS) — built new features, fixed bugs, and collaborated in Agile/Scrum sprints.",
        technology: ["Bubble.io", "Microsoft Teams", "DevOps", "Bubble Version Control"],
        current: false,
    },
]



const tech = [
    "Bubble.io", "Microsoft Teams", "DevOps", "Bubble Version Control", "Git",
    "Vite", "React", "Vercel", "Html", "TailwindCss", "Supabase", "Jinja", "Sql",
    "Php", "Python", "Javascript", "C", "C++", "Mysql", "Css", "Bootstrap", "Dart",
    "Kali-linux"
]

export const Experience = () => {
    return (
    
    
    <section 
        id="experience"
        className="py-2 relative overflow-hidden">
            <div
                className="container mx-auto px-6 md:px-12 py-10 relative z-10">  
            <div className="mx-auto max-w-[800px]">


                {/* section header */}
                <div className="max-w-3xl mb-16"> 
                    
                    <h2 className="text-lg md:text-xl  mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground font-mono"
                        >
                        Experience 
                    </h2>

                </div>

                {/* Timeline */}

                <div className="relative">
                   
                
                {/* experience items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="pb-10 animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms `}}
                            >

                            {/* content */}
                            <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-2xl border border-white/10 hover:border-muted-foreground transition-all duration-500">
                                <span className="text-sm text-muted-foreground font-mono shrink-0">
                                    {exp.period}
                                </span>

                                <div className="flex flex-col items-center w-full">
                                    <h3 className="text-lg md:text-xl font-semibold text-center">{exp.role}</h3>
                                    <p className="text-sm md:text-base text-muted-foreground text-center">{exp.company}</p>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-4 text-center">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2 pt-4 justify-center">
                                        {exp.technology.map((tech, indxtech) => (
                                            <span 
                                                key={indxtech} 
                                                className="px-3 py-1 bg-surface text-xs font-mono rounded-full text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                </div>
            </div>


            {/* Tech stack */}
                <div className='max-w-[800px] mx-auto pt-12'>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-lg md:text-xl  mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground font-mono'>Stack</span>
                        <a href="#" className='text-xs font-mono text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1'>
                            view all <span className="text-[10px]">→</span>
                        </a>
                    </div>

                    <div className='flex flex-wrap gap-2 justify-center'>
                        {tech.map((stc, idx) => (
                            <span
                                key={idx}
                                className='px-3 py-1.5 border border-white/10 rounded-lg text-md font-mono text-muted-foreground hover:border-muted-foreground transition-colors'
                            >
                                {stc}
                            </span>
                        ))}
                        
                    </div>
                </div>

            </div>
        </section>


    )
}