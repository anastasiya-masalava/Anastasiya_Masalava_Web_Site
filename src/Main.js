import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Recommendations from "./components/Recommendations";


export default function Main() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Work/>
      <Skills />
      <Recommendations />
      <Contact />  
    </main>
  );
}
