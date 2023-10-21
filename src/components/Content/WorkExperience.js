import { Fragment } from "react";

const WorkExperience = () => {
  return (
    <div className="content-wrap">
      {/* <--Work Experience 1--> */}
      <section>
        <h3>Developer - Core Platform Services</h3>
        <p>Arctic Wolf Networks</p>
        <p>
          <time dateTime="2022-07-01">July 2022</time>&nbsp;-&nbsp;
          <time>May 2023</time>
        </p>
        <ul>
          <li>
            Work with team to write and maintain software which supports
            internal systems.
          </li>
          <li>
            Develop packages using Golang utilizing Kubernetes including custom
            operator design.
          </li>
          <li>
            Use AWS as backbone for all services, regularly interacting and
            designing for Cloudformation, EKS and ECR.
          </li>
          <li>
            Work with Github, Github Actions and Harness for version control and
            CI/CD.
          </li>
        </ul>
      </section>
      <br />
      {/* <!-- Work Experience 2--> */}
      <section>
        <h3>Research Assistant</h3>
        <p>Beiko Bioinformatics Lab</p>
        <p>
          <time dateTime="2014-05-01">May 2014</time>&nbsp;-&nbsp;
          <time dateTime="2014-08-01">August 2014</time>
        </p>
        <ul>
          <li>
            Handled datasets which contained thousands of bacterias' genomic
            data.
          </li>
          <li>
            Used bacterial genomes and bioinformatics software to generate a
            picture of the evolutionary history of a large group of bacteria.
          </li>
          <li>
            Worked closely with a colleague to advance understanding of bacteria
            with large genome sizes.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default WorkExperience;
