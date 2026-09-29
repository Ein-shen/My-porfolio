import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import { X } from "lucide-react"
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
        title: "Cyber Exellence",
        where: "Regional Contest 3rd placer",
    },
]

export const Certificates = () => {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [selected])

    return (
        <section id="certificates" className="py-2 relative overflow-hidden scroll-mt-24">

            <div className="container mx-auto px-4 sm:px-6 md:px-12 py-10 relative z-10 animate-fade-in">
                <div className="mx-auto w-full max-w-[800px]">

                    {/* Header */}
                    <div className="mb-8 sm:mb-16">

                        <div className='flex items-center justify-between mb-4'>
                            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 ">
                            Certificate
                            </h1>
                            <Link
                                to="/toplok"
                                className="ml-auto text-sm font-mono text-muted-foreground hover:text-foreground rounded-lg h-11 cursor-pointer flex items-center gap-1"
                                >
                                view all<span className="text-[10px]">↗</span>
                            </Link>
                        </div>

                    </div>

                    <div className="relative">
                        {Certificate.map((cert, idx) => (
                            <div key={idx} className="pb-10">
                               <div className="flex flex-col gap-3 pb-4 rounded-2xl transition-all duration-500 sm:flex-row sm:items-start sm:gap-x-8 lg:gap-x-20 xl:gap-x-40">
                                    <span className="theme-muted shrink-0 text-muted-foreground font-mono text-xs font-medium sm:text-sm">
                                        {cert.period}
                                    </span>

                                    <div className="flex flex-col pb-4 w-full min-w-0">
                                        <h3 className="text-base md:text-lg font-mono break-words">
                                            {cert.title}
                                        </h3>

                                        <div className="relative w-full max-w-xs sm:w-40 md:w-52 pt-5 space-y-3">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                onClick={() => setSelected(cert.image)}
                                                className="w-full aspect-[4/3] object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                            />

                                            <p className="text-xs md:text-sm text-muted-foreground pt-3">
                                                {cert.where}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


                {/* Github con */}


                <div className="max-w-[800px] w-full mx-auto pt-8 sm:pt-12">
                    <div className="flex flex-col items-start justify-between mb-4 cursor-pointer gap-3">

                        <h1 className="font-mono text-base sm:text-lg font-medium tracking-tight pt-1">
                            1,657 contributions Last 2025
                        </h1>
                        <a
                            href="https://github.com/Ein-shen?tab=overview&from=2026-07-01&to=2026-07-22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <img
                                src="/5.png"
                                alt="Ein-shen's GitHub stats"
                                className="rounded-lg w-full h-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {selected && createPortal(
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[9999]"
                    onClick={() => setSelected(null)}
                >
                    <button
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white z-[10000]"
                        onClick={() => setSelected(null)}
                        aria-label="Close preview"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selected}
                        alt="Preview"
                        className="max-w-[92vw] max-h-[80vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </section>
    )
}