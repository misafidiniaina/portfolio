import { useState } from "react";
import "./tailwind.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
