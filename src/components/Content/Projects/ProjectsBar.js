
import "./ProjectsBar.css";

const ProjectsBar = (props) => {
  const clickHandler = props.onSwitch;

  const projects = [
    "Set Finder", "Gravitron", "Monolith", "Brick Smasher", "Email Trainer"
  ];

  var id = 0;

  const buttonList = projects.map((project) => (
    <div key={id++} className="btn-project" onClick={clickHandler.bind(null, project)} style={{cursor:"pointer"}}>
      <span className="btn-text">{project}</span>
    </div>
  ));

  return <div className="buttons-bar">{buttonList}</div>;
  
};


export default ProjectsBar;