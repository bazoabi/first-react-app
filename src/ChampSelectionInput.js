import { useState } from "react";

// useState Demo Component

export default function ChampSelectionInput() {
  const [champSelectInput, setChampSelectInput] = useState("");

  function handleInputChange(event) {
    console.log(event.target.value);
    setChampSelectInput(event.target.value);
  }

  return (
    <div className="ChampSelectionInput">
      <h5>This is what you type:</h5>
      <div>{champSelectInput}</div>
      <input value={champSelectInput} onChange={handleInputChange} />
    </div>
  );
}
