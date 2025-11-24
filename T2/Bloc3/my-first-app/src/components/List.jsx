import { useState } from "react";
// @ts-check
/**
 *
 * @param {{data: string[],onSelect: (element:string)=>void}} props
 * @returns
 */
function List({ data, onSelect }) {
  // state Hook [variable,setVariable]=useState(valorInicial)
  const [index, setIndex] = useState(1);
  const handleClick = (i, el) => {
    setIndex(i);
    onSelect(el);
 
  };
  return (
    <div>
      <ul className="list-group">
        {data.map((el, i) => (
          <li
            onClick={() => handleClick(i, el)}
            key={el}
            className={`list-group-item ${index == i ? "active" : ""}`}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
