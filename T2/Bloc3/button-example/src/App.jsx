import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const [isLoading, setIsLoading]=useState(false);
  const handleClick =()=> setIsLoading(!isLoading);
  const list = ["Zelda", "Link", "Prunia", "Riju"];
  // const list=[];
  const handleSelect = (element) => {
    console.log("imprimint", element);
  };
   const content = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  return (
    <Card>
      <CardBody title="Hola Card" text="Aquest és el text" />
      {content}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola
      </Button>
    </Card>
  );
}
export default App;
