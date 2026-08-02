import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'

const grad = [

  
    { image: "11.jpg", folder: "Grad", title: "Grad" },
    { image: "13.jpg", folder: "Grad", title: "Grad" },
    { image: "14.jpg", folder: "Grad", title: "Grad" },
    { image: "12.jpg", folder: "Grad", title: "Grad" },
]


const cont = [


  { image: "c2.jpg", folder: "Contest", title: "contest" },
  { image: "c3.jpg", folder: "Contest", title: "contest" },
  { image: "c4.jpg", folder: "Contest", title: "contest" },
  { image: "c1.jpg", folder: "Contest", title: "contest" },
  

]


const up = [

  { image: "u1.jpg", folder: "Up", title: "up" },
  { image: "u2.jpg", folder: "Up", title: "up" },
  { image: "u3.jpg", folder: "Up", title: "up" },

]


const pag = [

  { image: "p1.jpg", folder: "pag-asa", title: "pag" },
  { image: "p2.jpg", folder: "pag-asa", title: "pag" },

]


const epor = [

  { image: "e1.jpg", folder: "epor", title: "Epor" },
  { image: "e2.jpg", folder: "epor", title: "Epor" },
  { image: "e3.jpg", folder: "epor", title: "Epor" },
  

]



export const View_gallery = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [selected])

    return (
        <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-28">
            <div className="mx-auto max-w-[800px]">

                {/* Header */}
                <div className="mb-16">
                    <div className='grid grid-cols-[auto_1fr_auto] items-center mb-4'>
                        <button onClick={() => navigate(-1)}>
                            <ArrowLeft size={24} className='animate-fade-in animation-delay-100' />
                        </button>

                        <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight pt-1 animate-fade-in animation-delay-100 text-center">
                            Gallery
                        </h1>

                        <div className="w-6" />
                    </div>


                    <div className="pl-5 sm:px-6 lg:pl-8">
                      <h1 className="font-mono pt-10 animate-fade-in">Graduation</h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6">
                        {grad.map((pro, idx) => (
                            <div key={idx}>
                                 <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl transition-all duration-500 animate-fade-in animation-delay-200">

                                    <div className="relative w-48 pt-5 items-center">
                                        <img
                                            src={`/files/${pro.folder}/${pro.image}`}
                                            alt={pro.title}
                                            onClick={() => setSelected(`/files/${pro.folder}/${pro.image}`)}
                                            className="w-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                        />
                                    </div>

                                    

                                </div>
                            </div>
                        ))}
                    </div>



                    <div className="pl-5 sm:px-6 lg:pl-8">
                      <h1 className="font-mono pt-10 animate-fade-in">Cyber Execellence</h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6">
                        {cont.map((pro, idx) => (
                            <div key={idx}>
                                 <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl transition-all duration-500 animate-fade-in animation-delay-200">

                                    <div className="relative w-48 pt-5 items-center">
                                        <img
                                            src={`/files/${pro.folder}/${pro.image}`}
                                            alt={pro.title}
                                            onClick={() => setSelected(`/files/${pro.folder}/${pro.image}`)}
                                            className="w-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                        />
                                    </div>

                                    

                                </div>
                            </div>
                        ))}
                    </div>


                    
                    <div className="pl-5 sm:px-6 lg:pl-8">
                      <h1 className="font-mono pt-10 animate-fade-in">Pag-as Cebu</h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6">
                        {pag.map((pro, idx) => (
                            <div key={idx}>
                                 <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl transition-all duration-500 animate-fade-in animation-delay-200">

                                    <div className="relative w-48 pt-5 items-center">
                                        <img
                                            src={`/files/${pro.folder}/${pro.image}`}
                                            alt={pro.title}
                                            onClick={() => setSelected(`/files/${pro.folder}/${pro.image}`)}
                                            className="w-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                        />
                                    </div>

                                    

                                </div>
                            </div>
                        ))}
                    </div>



                    
                    <div className="pl-5 sm:px-6 lg:pl-8">
                      <h1 className="font-mono pt-10 animate-fade-in">UP-cebu Incubator</h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6">
                        {up.map((pro, idx) => (
                            <div key={idx}>
                                 <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl transition-all duration-500 animate-fade-in animation-delay-200">

                                    <div className="relative w-48 pt-5 items-center">
                                        <img
                                            src={`/files/${pro.folder}/${pro.image}`}
                                            alt={pro.title}
                                            onClick={() => setSelected(`/files/${pro.folder}/${pro.image}`)}
                                            className="w-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                        />
                                    </div>

                                    

                                </div>
                            </div>
                        ))}
                    </div>



                    
                    <div className="pl-5 sm:px-6 lg:pl-8">
                      <h1 className="font-mono pt-10 animate-fade-in">Epormax</h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6">
                        {epor.map((pro, idx) => (
                            <div key={idx}>
                                 <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl transition-all duration-500 animate-fade-in animation-delay-200">

                                    <div className="relative w-48 pt-5 items-center">
                                        <img
                                            src={`/files/${pro.folder}/${pro.image}`}
                                            alt={pro.title}
                                            onClick={() => setSelected(`/files/${pro.folder}/${pro.image}`)}
                                            className="w-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                                        />
                                    </div>

                                    

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {selected && createPortal(
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
                    onClick={() => setSelected(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white z-[10000]"
                        onClick={() => setSelected(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selected}
                        alt="Preview"
                        className="max-w-[90vw] max-h-[70vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </div>
    )
}