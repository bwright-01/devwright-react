const SetFinder = () => {
  return (
    <section className="project-info">
      <h4>Unity 2019 and C#, v2.0 C++</h4>
      <p>
        SET is a card game where players try and find certain combinations of
        three cards called sets. A set is three cards where each of the four
        identifying properties of each card, the color, number, shape and fill,
        are either all different or all the same. A more in-depth explanation of
        the rules is available{" "}
        <a
          href="https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf"
          target="_blank"
          rel="noreferrer"
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
        below. Information about an older version of this project, v2.0, is also
        avaiable by clicking below.
      </p>
      <p>
        Code for this project is available on my github repository which can be
        accessed by clicking below.
      </p>
    </section>
  );
};

export default SetFinder;
