import { Fragment } from "react";

const Education = () => {
  return (
    <Fragment>
      <section>
        <h2 className="cert">Bachelor of Computer Science with Honours</h2>
        <h3 className="institute">Saint Mary's University - Halifax, Canada</h3>
        <ul>
          <li>
            Graduated <em>summa cum laude</em>.
          </li>
          <li>Achieved a cumulative GPA of 4.15. </li>
        </ul>
      </section>
      <br />
      <section>
        <h2 className="cert">
          Certificate of Completion of Intensive Mandarin Training
        </h2>
        <h3 className="institute">
          International Center of HIT - Harbin, China
        </h3>
        <ul>
          <li>
            Completed 3 semesters of intensive Mandarin language training (20
            hours a week).
          </li>
          <li>
            Completed 1-month summer intensive Mandarin speaking course (20
            hours a week).
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Education;
