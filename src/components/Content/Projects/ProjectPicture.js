import setFinderImage from "../../../images/set-shot-2-uncropped-light.jpeg";
import gravitronImage from "../../../images/gravitron-screenshot-cropped.png";
import monolithImage from "../../../images/monolith.png";
import brickSmasherImage from "../../../images/brick-smasher-screen-cropped.png";
import emailImage from "../../../images/e-mail-user-interface-cropped.png";

const ProjectPicture = (props) => {
  const pictures = {
    "Set Finder": {
      title: "Set Finder",
      source: setFinderImage,
    },
    "Gravitron": {
      title: "Gravitron",
      source: gravitronImage,
    },
    "Monolith": { title: "Monolith", source: monolithImage },
    "Brick Smasher": {
      title: "Brick Smasher",
      source: brickSmasherImage,
    },
    "Email Trainer": {
      title: "Email Trainer",
      source: emailImage,
    },
  };

  return (
    <img
      className="project-pic"
      src={pictures[props.name].source}
      alt={pictures[props.name].title}
      width="650px"
      height="650px"
    />
  );
};

export default ProjectPicture;

/*
  <div>
    <img
      className="project-pic"
      src={pictures[props.name].source}
      alt={pictures[props.name].title}
      width="300px"
      height="300px"
    />
    <div className="overlay">
      <div className="text">Gravitron</div>
    </div>
  </div>
  */
