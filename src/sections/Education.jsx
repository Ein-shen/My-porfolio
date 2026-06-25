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
                                {/* Fixed 6rem date column keeps content aligned with other sections */}
                                <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-x-4 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-x-8 lg:gap-x-20 xl:gap-x-40">
                                    <span className="theme-muted text-muted-foreground font-mono text-xs font-medium sm:text-sm">
                                        {edu.period}
                                    </span>

                                    <div className="flex min-w-0 flex-col">
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