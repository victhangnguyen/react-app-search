import "./App.css";
import React from "react";
import axios from "axios";
import { Users } from "./user";
import Table from "./Table";

function App() {
  const [query, setQuery] = React.useState({
    frontend: "",
    backend: "",
  });
  const [data, setData] = React.useState([]);

  const searchKeys = ["first_name", "last_name", "email"];

  //! some ||
  function search(data) {
    return data.filter((item) =>
      searchKeys.some((key) => item[key].toLowerCase().includes(query.frontend))
    );
  }

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `http://localhost:5000/?q=${query.backend}`
      );

      console.log("response: ", response);
      setData(response.data);
    };

    if (query.backend.length === 0 || query.backend.length > 0) {
      fetchUsers();
    }
  }, [query.backend]);

  function handleChangeQuery(e) {
    setQuery((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="App">
      <div className="search-frontend">
        <h1>Search Frontend</h1>
        <input
          type="text"
          placeholder="Search..."
          name="frontend"
          className="search"
          onChange={handleChangeQuery}
        />
        <ul className="list">
          <Table data={search(Users)} />
        </ul>
      </div>
      <div className="search-backend">
        <h1>Search Backend</h1>
        <input
          type="text"
          name="backend"
          placeholder="Search..."
          className="search"
          onChange={handleChangeQuery}
        />
        <ul className="list">
          <Table data={data} />
        </ul>
      </div>
    </div>
  );
}

export default App;
