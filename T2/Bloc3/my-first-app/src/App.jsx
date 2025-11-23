import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list =['Chopper','Rocket','Cosmo']
  return <Card>
    <CardBody title="Hola Card" text="Aquest és el text" />
    <List data={list}/>
  </Card>;
}
export default App;
