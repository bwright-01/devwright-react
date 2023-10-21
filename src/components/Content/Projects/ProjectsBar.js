import { Fragment } from "react";


const ProjectsBar = (props) => {
  const clickHandler = props.onSwitch;

  return (
    <Fragment>
      <button onClick={clickHandler.bind(null, "setFinder")}>Set Finder</button>
      <button onClick={clickHandler.bind(null, "gravitron")}>Gravitron</button>
      <button onClick={clickHandler.bind(null, "monolith")}>Monolith</button>
      <button onClick={clickHandler.bind(null, "brickSmasher")}>Brick Smasher</button>
      <button onClick={clickHandler.bind(null, "email")}>Email Trainer</button>
    </Fragment>
  );
};


export default ProjectsBar;