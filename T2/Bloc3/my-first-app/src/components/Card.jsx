function Card(props) {
    const {body} = props;
  return (
    // es canvia class per className i es passen els estils com a objectes
    // El primer parentesi evalua una variable i el segon és per definir un objecte
    <div className="card" style={{ width: "18rem", height: "12rem" }}>
      <div className="card-body">
       {body}
      </div>
    </div>
  );
}
export function CardBody(props) {
  const {title, text} = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {text}
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
export default Card;
