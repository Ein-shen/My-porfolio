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


            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">

                    <h2 className="text-lg md:text-xl font-mono mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground"> Certificates</h2>

                </div>

                <div className="relative">



                <div className="max-w-4xl mx-auto px-6">
                    {Certificate.map((cert, idx) => (
                        <div key={idx} className="pb-10">

                            <div className="flex flex-col gap-4 glass p-6 rounded-2xl border border-muted-foreground hover:border-primary-foreground transition-all duration-500">

                                    <div className="flex flex-row items-center gap-4">
                                        <span className="text-sm text-muted-foreground font-mono  shrink-0">
                                            {cert.period}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-semibold text-center w-full">{cert.title}</h3>
                                    </div>

                                    <div className="flex flex-col items-center justify-center w-full pl-16">
                                        <p className="text-xs md:text-sm text-muted-foreground">{cert.where}</p>
                                        <div className="relative h-[184px] w-52 pt-5">
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