import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data,setData] = useState(null);
  const baseUrl='https://jsonplaceholder.typicode.com'
  useEffect(()=>{
    fetch(`${baseUrl}/users`)
    .then((res)=> res.json())
    .then((data)=> setData(data));
  }, [])
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <div className="card">
        <ul>
          {data?.map ((user)=> <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
