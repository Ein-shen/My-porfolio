import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { FaGithub } from "react-icons/fa"



const projects = [
     { title: "Cargo", 
      description: "A full-stack peer-to-peer car rental mobile app", 
      image: "sv.jpg", 
      tags: ["Dart", "Flutter", "Mysql", "PHP", "Firewall"], 
      github: "https://github.com/Syloms/Cargo" },

    { title: "Laze", 
      description: "Built a full-stack study companion web app that lets users track study sessions and manage tasks", 
      image: "laze.png", 
      tags: ["React", "Supabase", "TailwinCss", "Html", "Vite"], 
      github: "https://github.com/Ein-shen/CS50-Laze"
    },


   
    
    { title: "Past Life Generator", 
      description: "Built a quiz-based Python game that generates a personalized 'past life' story based on user input.", 
      image: "past.png", tags: 
      ["Python"],  
      github: "https://github.com/Ein-shen/CS50-python-past-life-generator" },

      
    { title: "OUCH", description: "HIHIHIHIH", image: "a.jpg", tags: ["html"],  github: "#" },
]

export const View_projects = () => {

  const navigate = useNavigate()

  return (


    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-28">
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
                                         <div className="flex flex-wrap gap-2 justify-center">
                                            {pro.tags.map((tag, tagIdx) => (
                                                <span
                                                    key={tagIdx}
                                                    className=" font-mono px-4 py-1.5 rounded-lg text-xs font-medium border border-border/ text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

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
 