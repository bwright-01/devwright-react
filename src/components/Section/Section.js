import SectionTitle from "./SectionTitle";

const Section = (props) => {
  return (
    <section>
      <SectionTitle name={props.sectionData.title} />
      {props.sectionData.section}
    </section>
  );
};

export default Section;
