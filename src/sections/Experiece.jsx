

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






export const Experience = () => {
    return (
    
    
    <section 
        id="experience"
        className="py-2 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full
                blur-3xl -translate-y-1/2"
            />

            <div className="container m-auto px-6 relative z-10">


                {/* section header */}
                <div className="max-w-3xl mb-16"> 
                    
                    <h2 className="text-lg md:text-xl  mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground font-mono"
                        >
                        Experience 
                    </h2>

                </div>

                {/* Timeline */}

                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 botttom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-(0_0_25px_rgba(32,178,166,0.8)"/>
                
                {/* experience items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="  gap-8 animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms `}}
                            >
                            

                            {/* content */}
                            
                                <div className={`glass p-6 rounded-2xl border border-muted-foreground hover:border-primary-foreground trasition-all duration-500`}>
                                    <span className="text-sm text-muted-foreground font-mono font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                    
                                        <div className="flex flex-wrap gap-2 pt-4">
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
                 
                       
                    ))}
                </div>
                </div>
            </div>
        </section>


    )
}
