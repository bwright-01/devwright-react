
import "./ProjectsBar.css";

const ProjectsBar = (props) => {
  const clickHandler = props.onSwitch;

  return (
    <div className="projects-bar">
      <button onClick={clickHandler.bind(null, "setFinder")}>Set Finder</button>
      <button onClick={clickHandler.bind(null, "gravitron")}>Gravitron</button>
      <button onClick={clickHandler.bind(null, "monolith")}>Monolith</button>
      <button onClick={clickHandler.bind(null, "brickSmasher")}>Brick Smasher</button>
      <button onClick={clickHandler.bind(null, "email")}>Email Trainer</button>
    </div>
  );
};


export default ProjectsBar;