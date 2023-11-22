import React from "react";
import "./table.css";

const Table = ({ users }) => {
  const newUsers = users.sort((a, b) => a.lastName.localeCompare(b.lastName));

  const display =
    newUsers.length > 0 ? (
      newUsers.map((user) => (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.phone}</td>
        </tr>
      ))
    ) : (
      <></>
    );

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>{display}</tbody>
    </table>
  );
};

export default Table;
