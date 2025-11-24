/**
 *
 * @param {{data: string []}} props
 * @returns
 */
function List({ data }) {
  const handleClick = (element) =>{
     console.log(element)
    }
  return (
    <div>
      <ul className="list-group">
        {data.map((el) => (
          <li
            // onClick={() =>console.log(el)}
            onClick={()=>handleClick(el)}
            key={el}
            className="list-group-item"
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
