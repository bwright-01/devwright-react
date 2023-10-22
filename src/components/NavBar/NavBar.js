import classes from './NavBar.module.css';

const NavBar = (props) => {
  const clickHandler = props.onSwitch;

  return (
    <div className={classes["nav-bar"]}>
      <button onClick={clickHandler.bind(null, "home")}>Home</button>
      <button onClick={clickHandler.bind(null, "work")} >Work Experience</button>
      <button onClick={clickHandler.bind(null, "projects")} >Projects</button>
      <button onClick={clickHandler.bind(null, "skills")} >Technical Skills</button>
      <button onClick={clickHandler.bind(null, "education")} >Education</button>
      <button onClick={clickHandler.bind(null, "languages")} >Languages</button>
      <button onClick={clickHandler.bind(null, "contact")} >Contact</button>
    </div >
  );
};

export default NavBar;
