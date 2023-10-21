const Gravitron = () => {
  return (
    <section className="project-item">
      <div className="container">
        <img
          className="project-pic"
          src={require("../../../images/gravitron-screenshot.png")}
          alt="gravitron screenshot"
          height="300px"
        />
        <div className="overlay">
          <div className="text">Gravitron</div>
        </div>
      </div>
      <section className="project-info">
        <h3>Gravitron</h3>
        <h4>Unity 2020 and C#</h4>
        <p>
          Gravitron is a puzzle platformer centered around manipulating gravity
          in order to navigate the labratory of the evil Dr. Wretched. The
          titular character, Dr. Gravitron uses his anti-gravity tech to
          navigate the laboratory and save his beloved dog Atom.
        </p>
        <p>
          The game was designed by me and two classNamemates, Ayumu Saito and
          Theresa Clarke, as a term long project for a course on game
          development. It was developed using Unity. My main contributions to
          the project were concept design, asset creation and animation, as well
          as AI implementation.
        </p>
        <p>
          You can play Gravitron by clicking the "play" button below. More
          details and screen shots can be found by clicking "view project"
          below.
        </p>
        <p>
          {" "}
          Code for this project is available on github which can be accessed by
          clicking below.
        </p>
        <br />
        <div className="box-project">
          <div
            className="btn-2 btn-project"
            onClick={
              ()=>window.open('../../../../pages/Gravitron-WebGL/index.html')
            }
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">play</span>
          </div>
          <div
            className="btn-2 btn-project"
            onClick={()=>window.location.href='../../../../pages/Gravitron.html'}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">view project</span>
          </div>
          <div
            className="btn-2 btn-project"
            onClick={
              ()=>window.open('https://github.com/Ayumu-J-S/UnityGame-Gravitron')
            }
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">gravitron on GitHub</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gravitron;
