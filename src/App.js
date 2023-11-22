import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [user, setUser] = useState([]);
  const data = (newUser) => {
    newUser.id = user.length + 1;
    setUser((prev) => [...prev, newUser]);
  };

  return (
    <div className="app">
      <Form data={data} />
      <Table users={user} />
    </div>
  );
};

export default App;
