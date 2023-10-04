import React, { useState } from "react";

const validate = (user) => {
  const errors = {};
  if (!user.name) {
    errors.name = "name is required";
  } else if (user.name.length < 4) {
    errors.name = "too short";
  }
  if (!user.lastname) {
    errors.lastname = "lastname is required";
  } else if (user.lastname.length < 4) {
    errors.lastname = "too short";
  }
  if (!user.mail) {
    errors.mail = "mail is required";
  } else if (!user.mail.includes("@gmail.com")) {
    errors.mail = "invalid mail format";
    console.log(errors);
  }
  if (user.age < 18) {
    {
      errors.age = "grow up kiddo";
    }
  }
  return errors;
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    mail: "",
    age: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = { ...user, id: Math.random() };
    setUsers([...users, newUser]);
    setUser({
      id: "",
      name: "",
      lastname: "",
      mail: "",
      age: "",
    });
    const { name, lastname, mail, age } = user;
    console.log(name, lastname, mail, age);
    console.log(validate(user));
    console.log(newUser);
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="name"
          value={user.name}
          onChange={handleInputChange}
        ></input>
        name
        <input
          name="lastname"
          value={user.lastname}
          onChange={handleInputChange}
        ></input>
        lastname
        <input
          name="mail"
          value={user.mail}
          onChange={handleInputChange}
        ></input>
        mail
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
        ></input>
        age
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleEdit}>Edit</button>
        <button>Delete</button>
      </form>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
