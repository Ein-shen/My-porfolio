

const Certificate = [

    {
        image:"cs.png",
        period:"July 2026",
        title:"CS50x: Intorduction to Computer Science",
        where:"CS50 Harvard",

    },


    {
      image: "py.png",
      period: "September 2025",
      title: "CS50'S Introduction to Programming with Python",
      where: "CS50 Harvard",
    },
]




export const Certificates = () => {
    return (


        <section id="certificates"className="py-2 relative overflow-hidden">


            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">

                    <h2 className="text-lg md:text-xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Certificates</h2>

                </div>

                <div className="relative">
                    
                

                <div className="max-w-4xl mx-auto px-6">
                    {Certificate.map((cert, idx) => (
                        <div key={idx} className="pb-10">
                           
                            <div className= {`flex flex-row items-start gap-4 glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 trasition-all duration-500`}>
                                <span className="text-sm text-primary font-medium w-44 shrink-0">
                                    {cert.period}
                                </span>

                                <div className="flex flex-col items-center w-full">
                                    <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
                                    <p className="text-xs text-muted-foreground pt-3">{cert.where}</p>

                                    <div className="relative h-46 w-52 pt-5 ">
                                        <img src={cert.image} alt={cert.title} className="rounded-md" />
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