import { Fragment, useState } from "react";

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
      <section>
        <ProjectTitle name={props.projectData.title} />
        {props.projectData.project}
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
      <ProjectContent projectData={currentProject} />
      <ProjectsBar onSwitch={projectHandler} />
    </section>
  );
};
export default Projects;
