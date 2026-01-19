
import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
const url=`${baseUrl}/users`;
const {data,loading,error} = useFetch(url);
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map ((user)=> <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
