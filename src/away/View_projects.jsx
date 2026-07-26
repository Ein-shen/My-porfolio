import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { FaGithub } from "react-icons/fa"



const projects = [
    { title: "Past-life-generator", 
      description: "AHHAAHAHAHAHHA", 
      image: "sv.jpg", 
      tags: ["Python"], 
      links: "#", 
      github: "#" },


    { title: "Anime", description: "HOHOHOHOHOHOH", image: "r.jpg", tags: ["JINJA"], links: "#", github: "#" },
    { title: "SECRET", description: "EHEHEHEH", image: "q.jpg", tags: ["Python"], links: "#", github: "#" },
    { title: "OUCH", description: "HIHIHIHIH", image: "a.jpg", tags: ["html"], links: "#", github: "#" },
]

export const View_projects = () => {

  const navigate = useNavigate()

  return (


    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-20">
                  <div className="mx-auto max-w-[800px]">
    
                      {/* Header */}
                      <div className="mb-16">
    
                          <div className='grid grid-cols-[auto_1fr_auto] items-center mb-4'>
                              <Link  onClick={(e) => {
                                      e.preventDefault()
                                      navigate(-1)
                                    }}>
                                  <ArrowLeft size={24}  className='animate-fade-in animation-delay-100'/>
                              </Link>
    
                              <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 animate-fade-in animation-delay-100 text-center">
                                Projects
                            </h1>
    
                              <div className="w-6" /> {/* spacer matching ArrowLeft size={24} */}
                          </div>


                          <div>
                            <div>
                              {projects.map((pro, idx) => (
                                <div
                                key={idx}
                                >
                                 <div className="flex flex-col items-start gap-4 p-6 rounded-2xl  transition-all duration-500 animate-fade-in animation-delay-200">
                                    <div className="relative w-full  pt-5 items-center">
                                            <img
                                                src={pro.image}
                                                alt={pro.title}
                                                className="w-full max-w-[1200px] object-cover "
                                            />
                                        </div>
                                    
                                    

                                    <div className="flex flex-col items-center w-full space-y-4">
                                        <h3 className="text-base md:text-lg font-semibold text-center ">
                                            {pro.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground pt-3 text-center">
                                            {pro.description}
                                        </p>
                                        <h1 className=" px-3 py-1.5 text-sm text-muted-foreground font-mono font-medium shrink-0 border border border-white/10 ">
                                        {pro.tags}
                                        </h1>

                                        <a href={pro.github} className="p-3 rounded-full glass hover:bg-muted-foreground hover:text-primary-foreground transition-all ">
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                        
                                    </div>
                                </div> 
                                  

                                </div>
                              ))}
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
  )
}
 