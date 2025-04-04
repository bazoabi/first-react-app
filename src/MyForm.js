import { useState } from "react";

export default function MyForm() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInputs] = useState({ name: "", email: "" });

  return (
    <form className="MyForm">
      <label>Name:</label>
      <input
        type="text"
        value={formInputs.name}
        onChange={(event) => {
          setFormInputs({ ...formInputs, name: event.target.value });
        }}
      ></input>

      <label>Email:</label>
      <input
        type="text"
        value={formInputs.email}
        onChange={(event) => {
          setFormInputs({ ...formInputs, email: event.target.value });
        }}
      ></input>

      <button style={{ margin: "1vh" }}>Submit</button>

      <label>
        Name is: {formInputs.name} , Email is: {formInputs.email}
      </label>
    </form>
  );
}
