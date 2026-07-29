
import { Link } from "react-router-dom"
import { Toplok } from "../away/Toplok"

const Certificate = [
    {
        image: "/cs.png",
        period: "Jul-2026",
        title: "CS50x: Introduction to Computer Science",
        where: "CS50 Harvard",
    },
    {
        image: "/py.png",
        period: "Sep-2025",
        title: "CS50's Introduction to Programming with Python",
        where: "CS50 Harvard",
    },
    {
        image: "/cy.jpg",
        period: "Oct-2025",
        title: "Cyber x",
        where: "Regional Contest 3rd placer",
    },
]

export const Certificates = () => {
    return (
        <section id="certificates" className="py-2 relative overflow-hidden scroll-mt-24">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 animate-fade-in">
                <div className="mx-auto max-w-[800px]">

                    {/* Header */}
                    <div className="mb-16">
                        
                        <div className='flex items-center justify-between mb-4'>
                            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 ">
                               Certificate
                            </h1>
                             <Link
                                to="/toplok"
                                className='font-mono font-lg  text-muted-foreground hover:text-foreground rounded-lg w-38 h-11 cursor-pointer flex items-center justify-center gap-1'
                                >
                                view all<span className="text-[20px]">↗</span>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="relative">
                        {Certificate.map((cert, idx) => (
                            <div key={idx} className="pb-10">
                                <div className="flex flex-row items-start gap-4 p-6 rounded-2xl  transition-all duration-500">
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


                {/* Github con */}


                <div className="max-w-[800px] mx-auto pt-12">
                    <div className="flex flex-col items-start justify-between mb-4 cursor-pointer gap-3"
                    >
                        

                        

                        <h1 className="font-mono text-lg lg:text-md font-medium tracking-tight pt-1 ">
                            1,657 contributions Last 2025
                        </h1>
                        <a
                            href="https://github.com/Ein-shen?tab=overview&from=2026-07-01&to=2026-07-22"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="5.png"
                                alt="Ein-shen's GitHub stats"
                                className="rounded-lg w-full"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}