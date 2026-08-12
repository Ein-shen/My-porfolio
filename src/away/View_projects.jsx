import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { FaGithub } from "react-icons/fa"



const projects = [
     { title: "Cargo", 
      description: "A full-stack peer-to-peer car rental mobile app,  Performed QA testing on a full-stack peer-to-peer car rental mobile app (Flutter, Dart, PHP, MySQL) as part of a capstone team project. Tested core features — including user authentication, vehicle listings, search, and booking/reservation system — identifying and reporting bugs to ensure app stability, and collaborated with developers to reproduce issues and verify fixes before submission.", 
      image: "cargo1.png", 
      tags: ["Dart", "Flutter", "Mysql", "PHP", "Firewall"], 
      github: "https://github.com/Syloms/Cargo" },

    { title: "Lazeu", 
      description: "Built a full-stack study companion web app that lets users track study sessions and manage tasks. Lazeu is a full-stack study app I built with React on the frontend and Supabase doing basically everything else on the backend. The idea came from just being annoyed at how studying tools usually work — you've either got a bare-bones flashcard app with zero social features, or something bloated that tries to do too much.", 
      image: "Lazeu.png", 
      tags: ["React", "Supabase", "TailwinCss", "Html", "Vite", "Netlify"], 
      github: "https://github.com/Ein-shen/CS50-Laze"
    },

    { title: "Past Life Generator", 
      description: "Built a quiz-based Python game that generates a personalized 'past life' story based on user input.", 
      image: "past.png", tags: 
      ["Python"],  
      github: "https://github.com/Ein-shen/CS50-python-past-life-generator" },


    { title: "Stock-Trading", 
      description: "A web app that lets users manage a virtual stock portfolio — look up real-time stock prices, 'buy' and 'sell' shares with simulated cash, and review a full history of transactions. Built with Flask and SQLite.",
      image: "past.png", 
      tags: 
      ["Python", "Flask", "SQllite", "Jinja", "Html", "Css"],  
      github: "https://github.com/Ein-shen/Stock-Trading"
    },

      
    { title: "Weather Web App", 
      description: "A web app allows users to search for a city and view its current weather using the OpenWeatherMap API", 
      image: "weather.png", 
      tags: ["html", "Python", "Django", "tailwindCss", "SQLlite"],  
      github: "https://github.com/Ein-shen/weather-webApp"
     },

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
 