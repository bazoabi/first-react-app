import { useState } from "react";

export default function MyForm() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  return (
    <form className="MyForm">
      <label>Name:</label>
      <input
        type="text"
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      ></input>

      <label>Email:</label>
      <input
        type="text"
        value={emailInput}
        onChange={(event) => {
          setEmailInput(event.target.value);
        }}
      ></input>

      <button style={{ margin: "1vh" }}>Submit</button>

      <label>
        Name is: {nameInput} , Email is: {emailInput}
      </label>
    </form>
  );
}
