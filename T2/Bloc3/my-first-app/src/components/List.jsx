import { useState } from "react";

/**
 *
 * @param {{data: string []}} props
 * @returns
 */
function List({ data }) {
  // state Hook [variable,setVariable]=useState(valorInicial)
 const  [index,setIndex]=useState(1);
  // let index =1;
  // const handleClick = (i) =>{
  //    index=i;
  //   }
  const handleClick =(i)=>{
    setIndex(i);
  }
  return (
    <div>
      <ul className="list-group">
        {data.map((el,i) => (
          <li
                    
            onClick={()=>handleClick(i)}
            key={el}
            className={`list-group-item ${index==i ? 'active':'' }`}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
