import { Fragment } from "react";

import NavCard from "./NavCard";

const NavBar = (props) => {
  const clickHandler = props.onSwitch;

  return (
    <Fragment>
      <NavCard title={"Home"} name={"home"} onClick={clickHandler} />
      <NavCard title={"Work Experience"} name={"work"} onClick={clickHandler} />
      <NavCard title={"Projects"} name={"projects"} onClick={clickHandler} />
      <NavCard title={"Technical Skills"} name={"skills"} onClick={clickHandler} />
      <NavCard title={"Education"} name={"education"} onClick={clickHandler} />
      <NavCard title={"Languages"} name={"languages"} onClick={clickHandler} />
      <NavCard title={"Contact"} name={"contact"} onClick={clickHandler} />
    </Fragment>
  );
};

/*
    home: { title: "Home", section: <Home /> },
    work: { title: "Work Experience", section: <WorkExperience /> },
    projects: { title: "Projects", section: <Project /> },
    skills: {title: "Technical Skills", section: <Skills />},
    education: {title: "Education", section: <Education />},
    language: {title: "Language", section: <Language />},
    contact: {title: "Contact Info", section: <Contact />}
*/

export default NavBar;
