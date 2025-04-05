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
    selectedOption: "",
    radioButtonOptions: "",
  });

  const handleFormsInputsChange = (event) => {
    const { name, value } = event.target;
    console.log("name is: ", name, " value is: ", value);
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

      <label>Choose:</label>
      <select
        name="selectedOption"
        value={formInputs.selectedOption}
        onChange={handleFormsInputsChange}
      >
        <option value={"A"}>A</option>
        <option value={"B"}>B</option>
        <option value={"C"}>C</option>
      </select>

      <hr></hr>

      <label>
        <input
          type="radio"
          name="radioButtonOptions"
          value="option1"
          checked={formInputs.radioButtonOptions === "option1"}
          onChange={handleFormsInputsChange}
        />{" "}
        Option 1
      </label>
      <label>
        <input
          type="radio"
          name="radioButtonOptions"
          value="option2"
          checked={formInputs.radioButtonOptions === "option2"}
          onChange={handleFormsInputsChange}
        />{" "}
        Option 2
      </label>
      <label>
        <input
          type="radio"
          name="radioButtonOptions"
          value="option3"
          checked={formInputs.radioButtonOptions === "option3"}
          onChange={handleFormsInputsChange}
        />{" "}
        Option 3
      </label>

      <hr></hr>

      <button style={{ margin: "1vh" }}>Submit</button>

      <label>
        Name is: {formInputs.name} , Email is: {formInputs.email}
      </label>
    </form>
  );
}
