import './App.css'
import { Landing } from './Home/landing';
import { Section } from './Section';
import { Navbar } from './Navigation/Navbar';
import { AboutMe } from './Sections/aboutme';
import { Skills } from './Sections/skills';
import { MyExperiences } from './Sections/experience';

function App() {
  return (
    <>
    <Navbar/>
    <section id = "home">
      <Landing/>
    </section>
    
    <section id="bio">
      <AboutMe/>
    </section>

    <section id="skills">
      <Skills/>
    </section>

    <section id="experience">
      < MyExperiences />
    </section>

    <section id = "projects">
      <Section title = "Projects" content = "This is my projects section"/>
    </section>
    </>
  )
}

export default App
