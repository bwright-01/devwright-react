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
  return <h3 className="project-title">{props.name}</h3>;
};

const ProjectContent = (props) => {
    return (
      <section className="project-container">
        <div className="project-container-left">
          <ProjectsBar onSwitch={props.onSwitch} />
          <ProjectTitle name={props.projectData.title} />
          <ProjectButtons name={props.projectData.title}/>  
          {props.projectData.project}
        </div>
        <div className="project-container-right">
          <ProjectPicture name={props.projectData.title}/>
        </div>
      </section>
    );
};

const Projects = () => {
  const projects = {
    "Set Finder": { title: "Set Finder", project: <SetFinder /> },
    "Gravitron": { title: "Gravitron", project: <Gravitron /> },
    "Monolith": { title: "Monolith", project: <Monolith /> },
    "Brick Smasher": { title: "Brick Smasher", project: <BrickSmasher /> },
    "Email Trainer": { title: "Email Trainer", project: <EmailTrainer /> },
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
      <ProjectContent projectData={currentProject} onSwitch={projectHandler}/>
    </section>
  );
};
export default Projects;
