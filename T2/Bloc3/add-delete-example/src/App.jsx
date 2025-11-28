import { useState } from "react";

import "./App.css";
import List from "./components/List";
import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";

function App() {
  const [data,setData]= useState(["Zelda", "Link", "Prunia", "Riju"]);

  let element='Kolog'
  const addElement = ()=> setData([...data,element]);
  const delElement = ()=> setData(data.slice(0,data.length-1));
  return(
  <Card>
    <Button onClick={addElement}>Afegir</Button>
    <Button onClick={delElement}>Eliminar</Button>
    <List data={data} />
  </Card>
  

 
  )
}

export default App;
