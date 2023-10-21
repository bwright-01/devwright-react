const BrickSmasher = () => {
  return (
    <section className="project-item">
      <div className="container">
        <img
          className="project-pic"
          src={require("../../../images/brick-smasher-screen.png")}
          alt="brick smasher game"
          width="300px"
          height="300px"
        />
        <div className="overlay">
          <div className="text">Brick Smasher</div>
        </div>
      </div>
      <section className="project-info">
        <h3>Brick Smasher</h3>
        <h4>Python using PyGame modules</h4>
        <p>
          Brick Smasher, although a small project, is not your average brick
          breaking game. In Brick Smasher, your ball does not bounce of bricks,
          it flies through them. destroying them as it goes.
        </p>
        <p>
          {" "}
          The object of the game is to destroy all bricks before running out of
          lives.
        </p>
        <p> The game was developed in python using the PyGame modules.</p>
        <p>
          {" "}
          More details and screen shots can be found by clicking "view project"
          below.
        </p>
        <p>
          {" "}
          Code for this project is available on my github repository which can
          be accessed by clicking below.
        </p>
        <br />
        <div className="box-project">
          <div
            className="btn-2 btn-project"
            onClick={()=>{window.location.href='../../../../pages/brick-smasher.html';}}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">view project</span>
          </div>
          <div
            className="btn-2 btn-project"
            onClick={()=> window.open('https://github.com/bwright-01/BrickSmash')}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">brick smasher on GitHub</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BrickSmasher;
