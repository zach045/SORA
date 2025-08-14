import { useState } from 'react'
import Header from "./Components/Layout/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import CaseStudy from "./Components/CaseStudy";
import Contact from "./Components/Contact";
import Footer from "./Components/Layout/Footer"
import './App.css'

function App() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <Header />
        <Hero />
        <About />
        <Services />
        <CaseStudy />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
