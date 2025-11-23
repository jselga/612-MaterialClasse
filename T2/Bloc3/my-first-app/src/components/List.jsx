/**
 * 
 * @param {{data: string []}} props
 * @returns 
 */
function List({data}) {
    
  return (
    <div>
      <ul className="list-group">
        {data.map((el)=>(
        <li key={el} className="list-group-item">{el}</li>))}
        {/* <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </div>
  );
}

export default List;
