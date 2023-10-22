import "./ProjectButtons.css";

const ProjectButtons = (props) => {
  const buttons = {
    "Set Finder": [
      {
        text: "view project",
        onClick: () => {
          window.location.href = "../../../../pages/set-finder-3.html";
        },
      },
      {
        text: "set finder on GitHub",
        onClick: () =>
          window.open("https://github.com/bwright-01/Set-Finder-3"),
      },
      {
        text: "set finder 2.0",
        onClick: () => {
          window.location.href = "../../../../pages/set-finder-2.html";
        },
      },
    ],

    Gravitron: [
      {
        text: "play",
        onClick: () =>
          window.open("../../../../pages/Gravitron-WebGL/index.html"),
      },
      {
        text: "view project",
        onClick: () =>
          (window.location.href = "../../../../pages/Gravitron.html"),
      },
      {
        text: "gravitron on GitHub",
        onClick: () =>
          window.open("https://github.com/Ayumu-J-S/UnityGame-Gravitron"),
      },
    ],

    Monolith: [
      {
        text: "play",
        onClick: () =>
          window.open("../../../../pages/Monolith-WebGL/index.html"),
      },
      {
        text: "monolith on GitHub",
        onClick: () => window.open("https://github.com/bwright-01/Monolith"),
      },
    ],

    "Brick Smasher": [
      {
        text: "view project",
        onClick: () => {
          window.location.href = "../../../../pages/brick-smasher.html";
        },
      },
      {
        text: "brick smasher on GitHub",
        onClick: () => window.open("https://github.com/bwright-01/BrickSmash"),
      },
    ],

    "Email Trainer": [
      {
        text: "view project",
        onClick: () =>
          (window.location.href = "../../../../pages/e-mail-training.html"),
      },
    ],
  };

  var id = 0;

  const buttonList = buttons[props.name].map((button) => (
    <div key={id++} className="btn-project" onClick={button.onClick} style={{cursor:"pointer"}}>
      <span className="btn-text">{button.text}</span>
    </div>
  ));

  return <div className="buttons-bar">{buttonList}</div>;
};

export default ProjectButtons;
