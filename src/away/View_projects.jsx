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
                                  <ArrowLeft size={24} />
                              </Link>
    
                              <h2 className="text-lg md:text-xl font-mono mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground text-center">
                                  Projects
                              </h2>
    
                              <div className="w-6" /> {/* spacer matching ArrowLeft size={24} */}
                          </div>
                      </div>
                  </div>
              </div>
  )
}
 