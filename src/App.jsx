import "./App.scss"
import Contact from "./components/contact/contact"
import Cursor from "./components/cursor/cursor"
import Education from "./components/education/education"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import Parallax from "./components/parallax/parallax"
import Portfolio from "./components/projects/projects"
import Skills from "./components/skills/skills"
import Tech from "./components/technologies/tech"
const App = () => {
  return (   
        <div>
        <Cursor />
          <section id="Home">
            <Navbar />
            <Hero />
          </section>
          <section id="Education">
            <Parallax type="Education"/>
          </section>
          <section>
            <Education />
          </section>
          <section id="Skills">
            <Parallax type="Skills"/>
          </section>
          <section id="Skills">
            <Tech/>
          </section>
          <section id="Skill">
            <Skills/>
          </section>
          <section id="Projects">
          <Parallax type="Projects"/>
          </section>
            <Portfolio />
          <section id="Contact">
            <Contact/>
          </section>
        </div>
  )
}

export default App
