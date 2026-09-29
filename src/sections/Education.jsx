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

            <div className="container mx-auto px-4 sm:px-6 md:px-12 py-10 relative z-10 animate-fade-in">
                <div className="mx-auto w-full max-w-[800px]">

                    {/* Header */}
                    <div className="mb-10 sm:mb-16">
                        <h1 className="font-mono text-xl font-medium tracking-tight pt-1">
                            Education
                        </h1>
                    </div>

                    <div className="relative">
                        {Educ.map((edu, idx) => (
                            <div key={idx} className="pb-10">
                                <div className="flex flex-col gap-3 rounded-2xl transition-all duration-500 sm:flex-row sm:items-start sm:gap-x-8 lg:gap-x-20 xl:gap-x-40">
                                    <span className="theme-muted shrink-0 text-muted-foreground font-mono text-xs font-medium sm:text-sm">
                                        {edu.period}
                                    </span>

                                    <div className="flex flex-col w-full min-w-0">
                                        <h3 className="text-lg sm:text-xl font-mono break-words">{edu.course}</h3>
                                        <p className="text-xs font-bold text-muted-foreground pt-3 sm:pt-4">{edu.school}</p>
                                        <p className="text-sm sm:text-base font-bold text-muted-foreground pt-3 sm:pt-4">{edu.award}</p>
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