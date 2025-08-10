import { useState } from 'react'
import Header from "./Components/Layout/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import CaseStudy from "./Components/CaseStudy";
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
      </div>
    </>
  )
}

export default App
