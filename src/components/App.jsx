import React from "react";
import { Element, Link } from "react-scroll";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import  NavigationContainer from "./Navigationcontainer";


function App() {
  return (
    <div>
      < NavigationContainer />
      <Element name="home">
        <Header /> 
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
