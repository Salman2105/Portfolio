import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import AboutMe from '../components/aboutme';
import Projects from '../components/project';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact />
        <Footer />

    </div>
  )
}
