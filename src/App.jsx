import { useState } from 'react'
import './tailwind.css'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import ScrollIndicator from './components/ScrollIndicator'
import CallToAction from './components/CallToAction'
import Experiences from './pages/Experiences'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CallToAction />
      <Experiences />
      <ScrollIndicator />
      <div className="h-10"></div>
    </>
  )
}

export default App
