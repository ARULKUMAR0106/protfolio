import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
//import Testimonials from "./components/Testimonials";\
//
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App: React.FC = () => (
  <>
    <header>
      <nav>
       
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="home"><Home /></section>
 
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
    </main>
    <footer>
      &copy; {new Date().getFullYear()} Arulkumar Muthusami. All rights reserved.
    </footer>
  </>
);

export default App;
