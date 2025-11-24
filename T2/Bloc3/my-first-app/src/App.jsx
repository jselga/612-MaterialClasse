import Card, { CardBody } from "./components/Card";
import List from "./components/List";
/** En  JS
 * truthy:
 *
 * falsy:
 *  0
 *  ''
 *  false
 *  undefinded
 *  nul
 */
/**
 * En React no és així.
 *  Compte amb el 0, no és un falsy
 */
function App() {
  const list = ["Chopper", "Rocket", "Cosmo", "Ponyo"];
  // const list=[];
  const handleSelect = (element) => {
    console.log("imprimint", element);
  };
  // const content =
  //   list.length !== 0 ? (
  //     <List data={list} onSelect={handleSelect} />
  //   ) : (
  //     "Sense elements per mostrar"
  //   );
  const content = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  return (
    <Card>
      <CardBody title="Hola Card" text="Aquest és el text" />
      {content}
    </Card>
  );
}
export default App;
