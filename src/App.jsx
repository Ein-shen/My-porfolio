import { useEffect } from "react"
import { useLocation, Routes, Route } from 'react-router-dom'
import { Experience } from "./sections/Experiece"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Navbar } from "./layout/Navbar"
import { Education } from "./sections/Education"
import { Certificates } from "./sections/Certificates"
import { Cv } from "./away/Cv"
import { View_projects } from "./away/View_projects"
import { Toplok } from "./away/Toplok"
import { Gallery } from "./sections/Gallery"
import { ThemeProvider } from "./sections/ThemeContext"
import { View_gallery } from "./away/View_gallery"

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-hidden px-10 md:px-40">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Experience />
                <Education />
                <Certificates />
                <Gallery />
              </>
            } />
            
            <Route path="/cv" element={<Cv />} />
            <Route path="/view_projects" element={<View_projects />} />
            <Route path="/view_gallery" element={<View_gallery />} />
            <Route path="/toplok" element={<Toplok />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App