const Contact = () => {
  
  /*
  return (
    <ul className="contact-list">
      <li>
        <a href="mailto:bwright_01@outlook.com">bwright_01@outlook.com</a>
      </li>
      <li>
        <a href="http://devwright.net" target="_blank" rel="noreferrer">
          devwright.net
        </a>
      </li>
      <li>
        <a
          href="https://github.com/bwright-01/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ben-wright-242937162/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
  */

  const links = [
    { href: "mailto:bwright_01@outlook.com", text: "Email"},
    { href: "http://devwright.net", text: "devwright.net"},
    { href: "https://github.com/bwright-01/", text: "GitHub" },
    { href: "https://www.linkedin.com/in/ben-wright-242937162/", text: "LinkedIn"}
  ];

  var id = 0;

  const buttonList = links.map((link) => (
    <div key={id++} className="btn-project" href={link.href} style={{cursor:"pointer"}}>
      <span className="btn-text">{link.text}</span>
    </div>
  ));

  return <div className="buttons-bar">{buttonList}</div>;

};

export default Contact;
