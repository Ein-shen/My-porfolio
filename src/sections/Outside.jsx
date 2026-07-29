import React from 'react'
import { Link } from 'react-router-dom'

export const Outside = () => {
  return (
     <section className="py-2 relative overflow-hidden scroll-mt-24">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 animate-fade-in">
                <div className="mx-auto max-w-[800px]">

                  <div className='flex items-center justify-between mb-4'>
                            <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 ">
                               Outside IDE
                            </h1>
                             <Link
                                to=""
                                className='font-mono font-lg  text-muted-foreground hover:text-foreground rounded-lg w-38 h-11 cursor-pointer flex items-center justify-center gap-1'
                                >
                                view all<span className="text-[20px]">↗</span>
                            </Link>
                        </div>

                </div>
            </div>
      </section>
  )
}
