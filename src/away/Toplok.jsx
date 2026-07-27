import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'




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
        title: "CS50'S Introduction to Programming with Python",
        where: "CS50 Harvard",
    },


    {
        image: "/cy.jpg",
        period: "Oct-2025",
        title: "Cyber Ex",
        where: "Regional Contest 3rd placer",
    },

    {
        image: "/g.jpg",
        period: "Feb-24-2026",
        title: "Mario Solutions",
        where: "Gun-ob, Lapu-Lapu City, Cebu 6015",
    },

    

    {
        image: "/h.jpg",
        period: "Feb-23-2025",
        title: "ePERFORMAX",
        where: "JY Square IT Center, Salinas Drive Lahug, Cebu city",
    },


    {
        image: "/i.jpg",
        period: "Feb-24-2026",
        title: "EMOT TOONS Animations Studiio",
        where: "A. Tumulak St., Gun-ob, Lapu-Lapu City, Cebu.",
    },

    {
        image: "/j.jpg",
        period: "FEb-24-2026",
        title: "CDRRMO",
        where: "Mandaue Presidencia, P. J. Burgos, Mandaue City, Cebu.",
    },

    

]



export const Toplok = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-28 animate-fade-in">
      <div className="mx-auto max-w-[800px]">

        {/* Header */}
        <div className="mb-16">
          <div className='grid grid-cols-[auto_1fr_auto] items-center mb-4'>
            <button onClick={() => navigate(-1)} aria-label="Go back">
              <ArrowLeft size={24}  />
            </button>

            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 text-center">
                Certificates
            </h1>

            <div className="w-6" />
          </div>

          <div className="relative">
                        {Certificate.map((cert, idx) => (
                            <div key={idx} className="pb-10">
                                <div className="flex flex-col items-start gap-4 p-6 rounded-2xl  transition-all duration-500 ">
                                    <div className="relative w-full  pt-5 items-center">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full max-w-[1200px] object-cover "
                                            />
                                        </div>
                                    
                                    

                                    <div className="flex flex-col items-center w-full">
                                        <h3 className="text-base md:text-lg font-semibold text-center">
                                            {cert.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground pt-3 text-center">
                                            {cert.where}
                                        </p>
                                        <span className="text-sm text-muted-foreground font-mono font-medium shrink-0">
                                        {cert.period}
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

        </div>
      </div>
    
  )
}