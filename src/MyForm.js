import { useState } from "react";

export default function MyForm() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleFormsInputsChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  return (
    <form className="MyForm">
      <label>Name:</label>
      <input
        name="name"
        type="text"
        value={formInputs.name}
        onChange={(event) => {
          handleFormsInputsChange(event);
        }}
      ></input>

      <label>Email:</label>
      <input
        name="email"
        type="text"
        value={formInputs.email}
        onChange={(event) => {
          handleFormsInputsChange(event);
        }}
      ></input>

      <label>Age:</label>
      <input
        name="age"
        type="text"
        value={formInputs.age}
        onChange={(event) => {
          handleFormsInputsChange(event);
        }}
      ></input>

      <button style={{ margin: "1vh" }}>Submit</button>

      <label>
        Name is: {formInputs.name} , Email is: {formInputs.email}
      </label>
    </form>
  );
}
