function Card() {
  return (
    // es canvia class per className i es passen els estils com a objectes
    // El primer parentesi evalua una variable i el segon és per definir un objecte
    <div className="card" style={{ width: "18rem", height: "12rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>

  );
}
export default Card;
