import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Vision from './components/Vision'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

export default function App(){
  return (
    <div>
      <Nav />
      <main className="mx-auto">
        <Home />
        <Services />
        <Vision />
        <Projects />
        <Testimonials /> 
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}