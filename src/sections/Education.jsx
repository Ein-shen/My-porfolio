const Educ = [
    {
        period: "2022-2026",
        course: "Bachelor of Science in Information Technology",
        school: "Southway College of Technology",
        award: "Cum Laude",
    },
]

export const Education = () => {
    return (
        <section id="education" className="py-2 relative overflow-hidden scroll-mt-24">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 animate-fade-in">
                <div className="mx-auto max-w-[800px]">

                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="font-mono text-xl lg:text-xl font-medium tracking-tight pt-1 ">
                            Education
                        </h1>
                    </div>

                    <div className="relative  ">
                        {Educ.map((edu, idx) => (
                            <div key={idx} className="pb-10 ">
                                <div className="flex flex-col items-center space-y-4    rounded-2xl p-6 transition-all duration-500 sm:flex-row sm:items-start ">
                                    <span className="theme-muted shrink-0 text-muted-foreground font-mono text-xs font-medium sm:w-24 sm:text-sm ">
                                        {edu.period}
                                    </span>

                                    <div className="flex flex-col items-center w-full">
                                        <h3 className="text-xl font-semibold text-center">{edu.course}</h3>
                                        <p className="text-xs text-muted-foreground pt-4 text-center">{edu.school}</p>
                                        <p className="text-md text-muted-foreground pt-4 text-center">{edu.award}</p>
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