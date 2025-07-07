import { useState } from 'react'
import './tailwind.css'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import ScrollIndicator from './components/ScrollIndicator'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ScrollIndicator />
    </>
  )
}

export default App
