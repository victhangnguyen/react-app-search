import React from "react";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Subarm</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <tr>
              <th>{item.first_name}</th>
              <th>{item.last_name}</th>
              <th>{item.email}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
