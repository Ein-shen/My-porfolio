import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experiece"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonials"
import { Navbar } from "./layout/Navbar"

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* <Nav /> */}
      <Navbar />
      <main>

        <Hero />
        <Projects />
        <Experience />
        <Contact />
        <Testimonials />
        <About />
      </main>
    </div>
  )
}

export default App