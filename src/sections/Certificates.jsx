const Certificate = [
    {
        image: "/cs.png",
        period: "July 2026",
        title: "CS50x: Introduction to Computer Science",
        where: "CS50 Harvard",
    },
    {
        image: "/py.png",
        period: "September 2025",
        title: "CS50'S Introduction to Programming with Python",
        where: "CS50 Harvard",
    },
]

export const Certificates = () => {
    return (
        <section id="certificates" className="py-2 relative overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10">
                <div className="mx-auto max-w-[800px]">

                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-lg md:text-xl font-mono mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground">
                            Certificates
                        </h2>
                    </div>

                    <div className="relative">
                        {Certificate.map((cert, idx) => (
                            <div key={idx} className="pb-10">
                                <div className="flex flex-row items-start gap-4 p-6 rounded-2xl border border-white/10 hover:border-muted-foreground transition-all duration-500">
                                    <span className="text-sm text-muted-foreground font-mono font-medium shrink-0">
                                        {cert.period}
                                    </span>

                                    <div className="flex flex-col items-center w-full">
                                        <h3 className="text-base md:text-lg font-semibold text-center">
                                            {cert.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground pt-3 text-center">
                                            {cert.where}
                                        </p>
                                        <div className="relative h-[140px] md:h-[184px] w-40 md:w-52 pt-5">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>
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