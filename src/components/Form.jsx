import React, { useState } from "react";
import "./form.css";

const Form = ({ data }) => {
  const initialState = {
    id: null,
    firstName: "Harry",
    lastName: "Potter",
    phone: 9876543082,
  };

  const [user, setUser] = useState(initialState);

  const handleNewUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName || !user.phone) {
      return;
    } else {
      data({ ...user });
      setUser(initialState);
    }
  };

  return (
    <form className="phonebook" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          className="text"
          value={user.firstName}
          onChange={handleNewUser}
        />
        <br />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          className="text"
          value={user.lastName}
          onChange={handleNewUser}
        />
        <br />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          className="text"
          value={user.phone}
          onChange={handleNewUser}
        />
        <br />
      </label>
      <br />
      <input type="submit" value="Add User" />
      <br />
    </form>
  );
};

export default Form;
