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
            className="py-2 relative overflow-hidden scroll-mt-24">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 animate-fade-in">
                <div className="mx-auto max-w-[800px]">

                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="font-mono text-xl lg:text-xl font-medium tracking-tight pt-1">
                            Experience
                        </h1>
                    </div>

                    <div className="relative">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="pb-10">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-2xl transition-all duration-500">
                                    <span className="text-xs sm:text-sm text-muted-foreground font-mono font-medium shrink-0 sm:w-24">
                                        {exp.period}
                                    </span>

                                    <div className="flex flex-col items-center w-full">
                                        <h3 className="text-xl font-semibold text-center">{exp.role}</h3>
                                        <p className="text-xs text-muted-foreground pt-3 text-center">{exp.company}</p>
                                        <p className="text-md text-muted-foreground pt-3 text-center max-w-sm">
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

                {/* Tech stack */}
                <div className="mx-auto max-w-[800px] pt-12">
                    <div className="mb-16">
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