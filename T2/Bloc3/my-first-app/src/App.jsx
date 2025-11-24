import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Chopper", "Rocket", "Cosmo", "Ponyo"];
  const handleSelect = (element)=> {
    console.log('imprimint', element);
    
  }
  return (
    <Card>
      <CardBody title="Hola Card" text="Aquest és el text" />
      <List data={list} onSelect={handleSelect}/>
      {/* <List data={list} /> */}
    </Card>
  );
}
export default App;
