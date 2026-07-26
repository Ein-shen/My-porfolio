import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const Cv = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-20">
      <div className="mx-auto max-w-[800px]">

        {/* Header */}
        <div className="mb-16">
          <div className='grid grid-cols-[auto_1fr_auto] items-center mb-4'>
            <button onClick={() => navigate(-1)} aria-label="Go back">
              <ArrowLeft size={24} className='animate-fade-in animation-delay-100'/>
            </button>

            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 animate-fade-in animation-delay-100 text-center">
              Cv
            </h1>

            <div className="w-6" />
          </div>
        </div>

        <div className='w-full flex justify-center' >
          <img
            src="c.png"
            alt="CV"
            className="w-full object-contain animate-fade-in animation-delay-200"
          />
        </div>
      </div>
    </div>
  )
}