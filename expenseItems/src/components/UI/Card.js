import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //props children prevents dublicates
  return <div className={classes}>{props.children}</div>;
};

export default Card;
