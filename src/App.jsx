
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experiece"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Navbar } from "./layout/Navbar"
import { Education } from "./sections/Education"
import { Certificates } from "./sections/Certificates"

function App() {
  return (
    <div className="min-h-screen overflow-hidden px-10 md:px-40">
      {/* <Nav /> */}
      <Navbar />
      <main>

        <Hero />
        <Projects />
        <Experience />
        <Contact />
        <Education />
        <Certificates />
        
      </main>
    </div>
  )
}

export default App