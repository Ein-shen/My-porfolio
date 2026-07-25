import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

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
                                  <ArrowLeft size={24}  className='animate-fade-in animation-delay-400'/>
                              </Link>
    
                              <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 animate-fade-in animation-delay-400 text-center">
                                Projects
                            </h1>
    
                              <div className="w-6" /> {/* spacer matching ArrowLeft size={24} */}
                          </div>
                      </div>
                  </div>
              </div>
  )
}
 