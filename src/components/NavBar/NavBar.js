const NavBar = (props) => {
  const clickHandler = props.onSwitch;

  /* Code for handling sidebar */
  /* Modified from */
  /* https://medium.com/@9cv9official/create-a-beautiful-hover-triggered-expandable-sidebar-with-simple-html-css-and-javascript-9f5f80a908d1 */

  const toggleOn = () => {
    document.getElementById("mySidebar").style.width = "225px";
    document.getElementById("back-container").style.marginLeft = "225px";
  };

  const toggleOff = () => {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("back-container").style.marginLeft = "85px";
  };

  return (
    <div
      id="mySidebar"
      className="sidebar"
      onMouseOver={toggleOn}
      onMouseOut={toggleOff}
    >
      <a href={() => false} onClick={clickHandler.bind(null, "home")}>
        <i className="material-icons">home</i>
        <span className="icon-text">home</span>
      </a>
      <a href={() => false} onClick={clickHandler.bind(null, "work")}>
        <i className="material-icons">business_center</i>
        <span className="icon-text">work</span>
      </a>
      <a href={() => false} onClick={clickHandler.bind(null, "projects")}>
        <i className="material-icons">draw</i>
        <span className="icon-text">projects</span>
      </a>
      <a href={() => false} onClick={clickHandler.bind(null, "skills")}>
        <i className="material-icons">handyman</i>
        <span className="icon-text">skills</span>
      </a>
      <a href={() => false} onClick={clickHandler.bind(null, "education")}>
        <i className="material-icons">school</i>
        <span className="icon-text">education</span>
      </a>
      <a href={() => false} onClick={clickHandler.bind(null, "languages")}>
        <i className="material-icons">translate</i>
        <span className="icon-text">languages</span>
      </a>
      <a href={() => false} onClick={clickHandler.bind(null, "contact")}>
        <i className="material-icons">email</i>
        <span className="icon-text">contact</span>
      </a>
    </div>
  );
};

export default NavBar;
