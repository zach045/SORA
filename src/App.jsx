import { useState } from 'react'
import Header from "./Components/Layout/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import './App.css'

function App() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App
