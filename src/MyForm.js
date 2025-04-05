import { useState } from "react";

export default function MyForm() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isChecked: false,
  });

  const handleFormsInputsChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleCheckboxChanged = (event) => {
    setFormInputs({ ...formInputs, isChecked: event.target.checked });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs);
  };

  return (
    <form className="MyForm" onSubmit={handleOnSubmit}>
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

      <label>Long Text Area:</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInputs({ ...formInputs, generalInfo: event.target.value });
        }}
      />

      <label>Check?</label>
      <input
        type="checkbox"
        checked={formInputs.isChecked}
        onChange={handleCheckboxChanged}
      ></input>

      <button style={{ margin: "1vh" }}>Submit</button>

      <label>
        Name is: {formInputs.name} , Email is: {formInputs.email}
      </label>
    </form>
  );
}
