import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'

// One list for everything: add a section or a photo here and the page updates.
const sections = [
  { title: 'Graduation', folder: 'Grad', images: ['11.jpg', '13.jpg', '14.jpg', '12.jpg'] },
  { title: 'Cyber Excellence', folder: 'Contest', images: ['c2.jpg', 'c3.jpg', 'c4.jpg', 'c1.jpg'] },
  { title: 'Pag-asa Cebu', folder: 'pag-asa', images: ['p1.jpg', 'p2.jpg'] },
  { title: 'UP Cebu Incubator', folder: 'Up', images: ['u1.jpg', 'u2.jpg', 'u3.jpg'] },
  { title: 'Epormax', folder: 'epor', images: ['e1.jpg', 'e2.jpg', 'e3.jpg'] },
]

const src = (folder, image) => `/files/${folder}/${image}`

const Section = ({ section, onOpen }) => (
  <section className="mb-14 animate-fade-in animation-delay-200">
    <div className="flex items-baseline justify-between border-b border-current/10 pb-3 mb-5">
      <h2 className="font-mono text-base md:text-lg font-medium tracking-tight">
        {section.title}
      </h2>
      <span className="font-mono text-xs opacity-50">
        {section.images.length} {section.images.length === 1 ? 'photo' : 'photos'}
      </span>
    </div>

    <div className="columns-2 md:columns-3 gap-3 [&>*]:mb-3">
      {section.images.map((image, idx) => (
        <button
          key={image}
          type="button"
          onClick={() => onOpen(idx)}
          aria-label={`Open ${section.title} photo ${idx + 1}`}
          className="group block w-full overflow-hidden rounded-xl break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current"
        >
          <img
            src={src(section.folder, image)}
            alt={`${section.title} ${idx + 1}`}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </button>
      ))}
    </div>
  </section>
)

const Lightbox = ({ section, index, setIndex, onClose }) => {
  const total = section.images.length
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total, setIndex])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total, setIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  const btn =
    'absolute z-[10000] flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white'

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${section.title} photo viewer`}
    >
      <button className={`${btn} top-5 right-5`} onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      {total > 1 && (
        <>
          <button
            className={`${btn} left-3 md:left-6 top-1/2 -translate-y-1/2`}
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`${btn} right-3 md:right-6 top-1/2 -translate-y-1/2`}
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <figure className="flex flex-col items-center px-14 md:px-24" onClick={(e) => e.stopPropagation()}>
        <img
          key={index}
          src={src(section.folder, section.images[index])}
          alt={`${section.title} ${index + 1}`}
          className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl animate-fade-in"
        />
        <figcaption className="mt-4 font-mono text-xs text-white/70">
          {section.title} · {index + 1} / {total}
        </figcaption>
      </figure>
    </div>,
    document.body
  )
}

export const View_gallery = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null) // { section: number, index: number }

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selected])

  const setIndex = useCallback(
    (updater) =>
      setSelected((s) =>
        s ? { ...s, index: typeof updater === 'function' ? updater(s.index) : updater } : s
      ),
    []
  )

  return (
    <div className="container mx-auto px-6 md:px-12 py-10 relative z-10 pt-28">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center mb-12 animate-fade-in animation-delay-100">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="p-2 -m-2 rounded-full hover:opacity-60 transition-opacity"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-mono text-xl lg:text-lg font-medium tracking-tight text-center">
            Gallery
          </h1>
          <div className="w-6" />
        </div>

        {sections.map((section, sIdx) => (
          <Section
            key={section.title}
            section={section}
            onOpen={(index) => setSelected({ section: sIdx, index })}
          />
        ))}
      </div>

      {selected && (
        <Lightbox
          section={sections[selected.section]}
          index={selected.index}
          setIndex={setIndex}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}