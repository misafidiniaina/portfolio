import { useState } from "react";
import "./tailwind.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import ScrollIndicator from "./components/ScrollIndicator";
import CallToAction from "./components/CallToAction";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import PermanentButton from "./components/PermanentButton";
import Background from "./components/Background";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <PermanentButton />
      <Background count={5} />
      <Hero />
      <Services />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
