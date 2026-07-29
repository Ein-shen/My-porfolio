import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'

export const Cv = () => {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/files/Shen-Sarsale-CV.pdf'
    link.download = 'Shen-Sarsale-CV.pdf'
    link.click()
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-28 animate-fade-in">
      <div className="mx-auto max-w-[800px]">

        {/* Header */}
        <div className="mb-16">
          <div className='grid grid-cols-[auto_1fr_auto] items-center mb-4'>
            <button onClick={() => navigate(-1)} aria-label="Go back">
              <ArrowLeft size={24} />
            </button>

            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 text-center">
              Cv
            </h1>

            <button onClick={handleDownload} aria-label="Download CV">
              <Download size={22} />
            </button>
          </div>
        </div>

       
        <div className='w-full flex justify-center'>
          <iframe
            src="/files/Shen_cv.pdf"
            title="CV"
            className="w-full h-[800px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}