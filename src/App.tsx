import styles from "./App.module.css";
import { Landing } from "./Sections/home/Home";
import { Navbar } from "./Navigation/Navbar";
import { AboutMe } from "./Sections/aboutme/AboutMe";
import { MyExperiences } from "./Sections/experience/Experience";
import { Footer } from "./Sections/footer/Footer";
import { MyProjects } from "./Sections/projects/projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Landing />
        </section>

        <section id="aboutme" className={styles.pageSection}>
          <AboutMe />
        </section>

        <section id="experiences" className={styles.pageSection}>
          <MyExperiences />
        </section>

        <section id="projects" className={styles.pageSection}>
          <MyProjects/>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
