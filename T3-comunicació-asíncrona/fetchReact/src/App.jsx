import "./App.css";
import { useAxios } from "./hooks/useAxios";
import { useFetch } from "./hooks/useFetch";

function App() {
  // const baseUrl = 'https://jsonplaceholder.typicode.com';
  // const baseUrl = "https://swapi.info/api/";
  const baseUrl = "https://api.api-onepiece.com/v2/fruits/e";
  const url = `${baseUrl}`;
  const name = "name";
  const id = "id";
  const other = "description";
  const { data, loading, error, handleCancelRequest } = useFetch(url);
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((el) => (
            <li key={el[id]}>
              {" "}
              <img src={el.filename} alt="akuma no mi image" />
              <h1>
                {el[name]}{" "}
              </h1>{" "}
              <br />
              <span className="opening">{el[other]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
