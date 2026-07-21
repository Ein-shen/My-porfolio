
const Educ = [

    {
        period: "2022-2026 ",
        course: "Bachelor of Science in Information Technology",
        school: "Southway College of Technology ",
        award: "Cum Laude",
    },
]


export const Education = () => {
    return (
    
    
    
    <section id="education"className="py-2 relative overflow-hidden">


            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">

                    <h2 className="text-lg md:text-xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Education</h2>

                </div>

                <div className="relative">
                    
                

                <div className="max-w-4xl mx-auto px-6">
                    {Educ.map((edu, idx) => (
                        <div key={idx} className="pb-10">
                          
                            <div className={`flex flex-row items-start gap-4 glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 trasition-all duration-500`}>
                                <span className="text-sm text-primary font-medium  shrink-0">
                                    {edu.period}
                                </span>

                                <div className="flex flex-col items-center w-full">
                                    <h3 className="text-xl font-semibold text-center">{edu.course}</h3>
                                    <p className="text-xs text-muted-foreground pt-3 text-center">{edu.school}</p>
                                    <p className="text-md text-muted-foreground pt-3 text-center">{edu.award}</p>


                                   
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
