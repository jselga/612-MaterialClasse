import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  // const baseUrl = 'https://jsonplaceholder.typicode.com';
  const baseUrl = "https://swapi.info/api/";
  const url = `${baseUrl}/films`;
  const name = "title";
  const id = "episode_id";
  const other = "opening_crawl";
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
              <h1>
                Episode {el[id]}: {el[name]}{" "}
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
