import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Chopper", "Rocket", "Cosmo", "Ponyo"];
  return (
    <Card>
      <CardBody title="Hola Card" text="Aquest és el text" />
      <List data={list} />
      {/* <List data={list} /> */}
    </Card>
  );
}
export default App;
