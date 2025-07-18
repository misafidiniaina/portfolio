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

function App() {
  return (
    <>
      <Navbar />
      <Background count={5} />
      <Hero />
      <Services />
      {/* <CallToAction /> */}
      <Experiences />
      <Projects />
      <ScrollIndicator />
      <PermanentButton />
      <div className="h-10"></div>
    </>
  );
}

export default App;
