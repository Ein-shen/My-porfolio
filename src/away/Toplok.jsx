import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, X, Maximize2 } from 'lucide-react'

const certificates = [
  {
    image: '/cs.png',
    period: 'Jul 2026',
    title: 'CS50x: Introduction to Computer Science',
    where: 'CS50 Harvard',
  },
  {
    image: '/py.png',
    period: 'Sep 2025',
    title: "CS50's Introduction to Programming with Python",
    where: 'CS50 Harvard',
  },
  {
    image: '/cy.jpg',
    period: 'Oct 2025',
    title: 'Cyber Ex',
    where: 'Regional Contest, 3rd placer',
  },
  {
    image: '/g.jpg',
    period: 'Feb 24, 2026',
    title: 'Mario Solutions',
    where: 'Gun-ob, Lapu-Lapu City, Cebu 6015',
  },
  {
    image: '/h.jpg',
    period: 'Feb 23, 2025',
    title: 'ePERFORMAX',
    where: 'JY Square IT Center, Salinas Drive, Lahug, Cebu City',
  },
  {
    image: '/i.jpg',
    period: 'Feb 24, 2026',
    title: 'EMOT TOONS Animations Studio',
    where: 'A. Tumulak St., Gun-ob, Lapu-Lapu City, Cebu',
  },
  {
    image: '/j.jpg',
    period: 'Feb 24, 2026',
    title: 'CDRRMO',
    where: 'Mandaue Presidencia, P. J. Burgos, Mandaue City, Cebu',
  },
]

const CertCard = ({ cert, onOpen }) => (
  <article className="overflow-hidden rounded-2xl border-[0.5px] border-border transition-shadow duration-300 hover:shadow-lg">
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${cert.title} full size`}
      className="group relative block w-full p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current"
    >
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        loading="lazy"
        className="w-full rounded-lg object-cover"
      />
      <span className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 size={16} />
      </span>
    </button>

    <div className="flex flex-col gap-2 border-t border-border px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <h2 className="text-base font-semibold md:text-lg">{cert.title}</h2>
        <p className="pt-1 text-xs text-muted-foreground md:text-sm">{cert.where}</p>
      </div>
      <span className="shrink-0 font-mono text-sm font-medium text-muted-foreground sm:pt-1">
        {cert.period}
      </span>
    </div>
  </article>
)

const Viewer = ({ cert, onClose }) =>
  createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <button
        className="absolute right-5 top-5 z-[10000] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={22} />
      </button>
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  )

export const Toplok = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto'
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <div className="container relative z-10 mx-auto animate-fade-in px-6 py-10 pt-28 md:px-12">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <div className="mb-12 grid grid-cols-[auto_1fr_auto] items-center">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="-m-2 rounded-full p-2 transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="pt-1 text-center font-mono text-xl font-medium tracking-tight lg:text-lg">
            Certificates
          </h1>
          <div className="w-6" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {certificates.map((cert) => (
            <CertCard key={cert.title} cert={cert} onOpen={() => setSelected(cert)} />
          ))}
        </div>
      </div>

      {selected && <Viewer cert={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}