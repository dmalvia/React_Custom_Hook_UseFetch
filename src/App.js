import "./App.css";
import useFetch from "./useFetch";

function App() {
  const BASE_URL = "https://reqres.in/api/users/";
  const { data: users, loading, error } = useFetch(BASE_URL);
  return (
    <div className="App">
      <h1>Custom React Hook (Data Fetching)</h1>
      {loading && <h3>loading...</h3>}
      {error && <h3>Error: Something went wrong</h3>}
      <div>
        <pre>{JSON.stringify(users, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
