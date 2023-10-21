const Monolith = () => {
  return (
    <section className="project-item">
      <div className="container">
        <img
          className="project-pic"
          src={require("../../../images/monolith.png")}
          alt="monolith screenshot"
          width="300px"
          height="300px"
        />
        <div className="overlay">
          <div className="text">Monolith</div>
        </div>
      </div>
      <section className="project-info">
        <h3>Monolith</h3>
        <h4>Unity 2021, C# and Aseprite</h4>
        <p>
          Monolith is a top-down action adventure game developed in under a week
          for the Brackey's 2022 Game Jam. You play as the protagonist who is
          trying to destroy three monoliths which your friends are trapped in.
          After destroying the three monoliths you have to go head to head with
          the final boss to save the world.
        </p>
        <p>
          The game was designed by me and my friend Don using Unity/C# for
          programming and Aseprite for art. My main contributions to the project
          were art & concept design, asset creation and animation.
        </p>
        <p>
          You can play Monolith by clicking the "play" button below. More
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
            onClick={()=>window.open('../../../../pages/Monolith-WebGL/index.html')}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">play</span>
          </div>
          <div
            className="btn-2 btn-project"
            onClick={()=>window.open('https://github.com/bwright-01/Monolith')}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">monolith on GitHub</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Monolith;
