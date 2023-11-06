import React from "react";
import Resume from "./components/Resume"
import Navbar from "./components/NavbarResume";
import NavbarResume from "./components/NavbarResume";



export default function Main() {
  return (
    <main>
      <NavbarResume />
      <Resume/>
    </main>
  );
}
