const NavCard = (props) => {
  return (
    <button onClick={props.onClick.bind(null, props.name)}>{props.title}</button>
  );
};

export default NavCard;