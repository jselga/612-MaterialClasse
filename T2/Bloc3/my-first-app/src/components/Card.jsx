/**
 * 
 * @param {{children: import("react").ReactNode}} props 
 * @returns {JSX.Element}
 */
function Card(props) {
    const {children} = props;
  return (

    <div className="card" style={{ width: "18rem", height: "12rem" }}>
      <div className="card-body">
       {children}
      </div>
    </div>
  );
}
/**
 * 
 * @param {{title: string, text:string}} props 
 * @returns {JSX.Element}
 */
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
