import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const Toplok = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-20">
      <div className="mx-auto max-w-[800px]">

        {/* Header */}
        <div className="mb-16">
          <div className='grid grid-cols-[auto_1fr_auto] items-center mb-4'>
            <button onClick={() => navigate(-1)} aria-label="Go back">
              <ArrowLeft size={24} />
            </button>

            <h2 className="text-lg md:text-xl font-mono mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground text-center">
              Certificates
            </h2>

            <div className="w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}