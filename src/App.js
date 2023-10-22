import React, { Fragment, useState } from "react";

import "./App.css";

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
    skills: { title: "Technical Skills", section: <Skills /> },
    education: { title: "Education", section: <Education /> },
    languages: { title: "Languages", section: <Languages /> },
    contact: { title: "Let's Keep in Touch!", section: <Contact /> },
  };

  const [currentSection, setCurrentSection] = useState(sections.projects);

  const sectionHandler = (name) => {
    setCurrentSection(sections[name]);
  };

  return (
  <Fragment>
    <Header />
    <div id="back-container" className="back-container">
      <NavBar onSwitch={sectionHandler}/>
      <div className="general-styles">
        <main>
          <Section sectionData={currentSection} />
        </main>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
