import React, { useState } from "react";

function InputForm({ handleSubmitGuess, gameStatus }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setValue("");
    handleSubmitGuess(value);
  }
  return (
    <form onSubmit={handleSubmit} class="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="Requires 5 letters"
        value={value}
        onChange={(event) => {
          setValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default InputForm;
