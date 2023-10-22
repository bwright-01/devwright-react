import { useState } from "react";

import "./Projects.css";

import ProjectPicture from "./Projects/ProjectPicture";
import ProjectButtons from "./Projects/ProjectButtons";

import ProjectsBar from "./Projects/ProjectsBar";
import SetFinder from "./Projects/SetFinder";
import Gravitron from "./Projects/Gravitron";
import Monolith from "./Projects/Monolith";
import BrickSmasher from "./Projects/BrickSmasher";
import EmailTrainer from "./Projects/EmailTrainer";

const ProjectTitle = (props) => {
  return <h3>{props.name}</h3>;
};

const ProjectContent = (props) => {
    return (
      <section className="project-container">
        <div className="project-container-left">
          <ProjectTitle name={props.projectData.title} />  
          {props.projectData.project}
        </div>
        <div className="project-container-right">
          <ProjectPicture name={props.projectData.title}/>
          <ProjectButtons name={props.projectData.title}/>
        </div>
      </section>
    );
};

const Projects = () => {
  const projects = {
    setFinder: { title: "Set Finder", project: <SetFinder /> },
    gravitron: { title: "Gravitron", project: <Gravitron /> },
    monolith: { title: "Monolith", project: <Monolith /> },
    brickSmasher: { title: "Brick Smasher", project: <BrickSmasher /> },
    email: { title: "Email Trainer", project: <EmailTrainer /> },
  };

  const [currentProject, setCurrentProject] = useState({
    title: "Set Finder",
    project: <SetFinder />,
  });

  const projectHandler = (name) => {
    setCurrentProject(projects[name]);
  };

  return (
    <section>
      <ProjectsBar onSwitch={projectHandler} />
      <ProjectContent projectData={currentProject} />
    </section>
  );
};
export default Projects;
