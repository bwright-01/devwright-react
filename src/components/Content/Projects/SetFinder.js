const SetFinder = () => {
  return (
    <section className="project-item">
      <div className="container">
        <img
          className="project-pic"
          src={require("../../../images/set-shot-2-uncropped-light.jpeg")}
          alt="set card game cards"
          width="300px"
          height="300px"
        />
        <div className="overlay">
          <div className="text">Set Finder</div>
        </div>
      </div>
      <section className="project-info">
        <h3>Set Finder</h3>
        <h4>Unity 2019 and C#, v2.0 C++</h4>
        <p>
          SET is a card game where players try and find certain combinations of
          three cards called sets. A set is three cards where each of the four
          identifying properties of each card, the color, number, shape and
          fill, are either all different or all the same. A more in-depth
          explanation of the rules is available{" "}
          <a
            href="https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <p>
          It is a challenging game to wrap your head around at first and when
          playing there is no way to check if the cards you have been dealt
          contain a set or not. I designed a GUI that can interpret a hand of
          cards, tell the user if any sets exist in the hand and display those
          sets for the user.
        </p>
        <p>
          More details and screen shots can be found by clicking "view project"
          below. Information about an older version of this project, v2.0, is
          also avaiable by clicking below.
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
            onClick={() => {
              window.location.href = "../../../../pages/set-finder-3.html";
            }}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">view project</span>
          </div>
          <div
            className="btn-2 btn-project"
            onClick={() =>
              window.open("https://github.com/bwright-01/Set-Finder-3")
            }
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">set finder on GitHub</span>
          </div>
          <div
            className="btn-2 btn-project"
            onClick={() => {
              window.location.href = "../../../../pages/set-finder-2.html";
            }}
            style={{ cursor: "pointer" }}
          >
            <span className="btn-text">set finder 2.0</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SetFinder;
