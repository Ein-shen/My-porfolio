import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialGal = [
    { image: "sv.jpg", title: "Sunset View" },
    { image: "z.jpg", title: "Zen Garden" },
    { image: "s.jpg", title: "Studio Shot" },
]

export const Gallery = () => {
  const [gal, setGal] = useState(initialGal)

  const rotateRight = () => {
    setGal((prev) => {
      // last item wraps to the front, everything else shifts right
      const last = prev[prev.length - 1]
      const rest = prev.slice(0, prev.length - 1)
      return [last, ...rest]
    })
  }

  return (
    <section className="py-2 relative overflow-hidden scroll-mt-24 pb-15">
      <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 animate-fade-in">
        <div className="mx-auto max-w-[800px]">

          <div className='flex items-center justify-between mb-4'>
            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1">
              Gallery
            </h1>
            <Link
              to=""
              className='font-mono font-lg text-muted-foreground hover:text-foreground rounded-lg w-38 h-11 cursor-pointer flex items-center justify-center gap-1'
            >
              view all<span className="text-[20px]">↗</span>
            </Link>
          </div>

          {/* Photo deck */}
          <div className="deck relative flex items-center justify-center h-64">
            {gal.map((item, index) => {
              const rotation =
                index === 0 ? "-rotate-6 -translate-x-16 scale-90" :
                index === 1 ? "rotate-0 translate-x-0 scale-100 z-10" :
                "rotate-6 translate-x-16 scale-90"

              return (
                <img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${item.title}`}
                  onClick={rotateRight}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      rotateRight()
                    }
                  }}
                  className={`absolute w-48 h-56 object-cover rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 ${rotation}`}
                />
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}