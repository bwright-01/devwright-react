import React, { useState } from "react";

//import logo from './logo.svg';
import "./App.css";

import classes from './App.module.css';

import Header from "./components/Layout/Header";
import Section from "./components/Section/Section";
import NavBar from "./components/NavBar/NavBar";

import Home from "./components/Content/Home";
import WorkExperience from "./components/Content/WorkExperience";
import Projects from "./components/Content/Projects";
import Skills from "./components/Content/Skills";
import Education from "./components/Content/Education";
import Languages from "./components/Content/Languages";
import Contact from "./components/Content/Contact";

function App() {
  const sections = {
    home: { title: "Home", section: <Home /> },
    work: { title: "Work Experience", section: <WorkExperience /> },
    projects: { title: "Projects", section: <Projects /> },
    skills: {title: "Technical Skills", section: <Skills />},
    education: {title: "Education", section: <Education />},
    languages: {title: "Languages", section: <Languages />},
    contact: {title: "Let's Keep in Touch!", section: <Contact />}
  };

  const [currentSection, setCurrentSection] = useState(sections.home);

  const sectionHandler = (name) => {
    setCurrentSection(sections[name]);
  };


  return (
    <div className={classes["back-container"]}>
      <NavBar onSwitch={sectionHandler} />
      <div className={classes["general-styles"]}>
        <Header className="App-header"></Header>
        <main>
          <Section sectionData={currentSection} />
        </main>
        
      </div>
    </div>
  );
}

export default App;
