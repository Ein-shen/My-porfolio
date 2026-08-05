const experiences = [ 
    {
        title: "On-the-Job Training (OJT)",
        period: "Dec 2025 - Feb 2026",
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
    "Kali-linux", "Figma", "Vercel", "Django", "Firewall"
]

export const Experience = () => {
    return (
        <section 
            id="experience"
            className="py-2 relative overflow-hidden scroll-mt-24 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 py-10 relative z-10">  
                <div className="mx-auto max-w-[800px]">

                    {/* section header */}
                    <div className="max-w-3xl mb-16"> 
                        <h1 className="font-mono text-xl lg:text-xl font-medium tracking-tight pt-1">
                            Experience
                        </h1>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* experience items */}
                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="pb-10"
                                    style={{animationDelay: `${(idx + 1) * 100}ms`}}
                                >
                                    {/* content */}
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 sm:p-6 md:p-10 rounded-2xl transition-all duration-500">
                                        <span className="text-sm text-muted-foreground font-mono shrink-0 text-center md:text-left md:w-32">
                                            {exp.period}
                                        </span>

                                        <div className="flex flex-col items-center w-full min-w-0">
                                            <h3 className="text-lg md:text-xl font-semibold text-center">{exp.role}</h3>
                                            <p className="text-sm md:text-base text-muted-foreground text-center">{exp.company}</p>
                                            <p className="text-xs md:text-sm text-muted-foreground mt-4 text-center max-w-xs sm:max-w-sm md:w-72">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-4 justify-center">
                                                {exp.technology.map((tech, indxtech) => (
                                                    <span 
                                                        key={indxtech} 
                                                        className="px-3 py-1 text-xs font-mono rounded-lg border border-foreground/10 text-muted-foreground text-center"
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
                    <div className='flex items-center justify-between mb-15'>
                        <h1 className="font-mono text-lg lg:text-lg font-medium tracking-tight pt-1">
                            Stack
                        </h1>
                    </div>

                    <div className='flex flex-wrap gap-2 justify-center'>
                        {tech.map((stc, idx) => (
                            <span
                                key={idx}
                                className='px-2.5 py-1.5 sm:px-3 border border-white/10 rounded-lg text-sm sm:text-md font-mono text-muted-foreground hover:border-muted-foreground transition-colors'
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