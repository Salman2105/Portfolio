import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import Projects from "../components/project";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Services from "../components/services";
import Learning from "../components/learning";
import Contact from "../components/contact";
import Footer from "../components/footer";
export default function Home({ onPrivacy }) {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Learning />
        <Contact />
      </main>
      <Footer onPrivacy={onPrivacy} />
    </>
  );
}
