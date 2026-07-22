

import { Experience } from "./sections/Experiece"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Navbar } from "./layout/Navbar"
import { Education } from "./sections/Education"
import { Certificates } from "./sections/Certificates"
import { Cv } from "./away/Cv"
import { View_projects } from "./away/View_projects"
import { Toplok } from "./away/Toplok"
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
     <div className="min-h-screen overflow-hidden px-10 md:px-40">
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Projects />
              <Experience />
              <Education />
              <Certificates />
            </>
          } />
          <Route path="/cv" element={<Cv />} />
          <Route path="/view_projects" element={<View_projects />} />
          <Route path="/toplok" element={<Toplok />} />
        </Routes>
      </main>
    </div>
  )
}

export default App