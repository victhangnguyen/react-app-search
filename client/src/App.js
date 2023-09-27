import "./App.css";
import React from "react";
import { Users } from "./user";
import Table from "./Table";

function App() {
  const [query, setQuery] = React.useState("");

  const searchKeys = ["first_name", "last_name", "email"];

  //! some ||
  function search(data) {
    return data.filter((item) =>
      searchKeys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  return (
    <div className="App">
      <div className="search-frontend">
        <h1>Search Frontend</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <ul className="list">
          <Table data={search(Users)} />
        </ul>
      </div>
      <div className="search-backend">
        <h1>Search Backend</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <ul className="list">
          <Table data={search(Users)} />
        </ul>
      </div>
    </div>
  );
}

export default App;
