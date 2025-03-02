import React, { useState } from "react";

const Updated = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null); // Change default result to null

  const handler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const evil = (fn) => {
    if (fn.trim() === "" || /[^\d+\-*/().]/.test(fn)) {
      return "Invalid Expression";
    }
    try {
      return new Function("return " + fn)();
    } catch (error) {
      return "Invalid Expression";
    }
  };

  const calculateResult = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setResult("Invalid Expression");
    } else {
      setResult(evil(input));
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null); // Clear the result also
  };

  return (
    <>
      <div>🔥 Calculator</div>
      <form onSubmit={calculateResult}>
        <input
          type="text"
          value={input}
          onChange={handler}
          placeholder="Enter Expression"
        />
        <br />
        <button type="submit">Result</button>

        {result !== null && <h2>Result is: {result}</h2>} {/* Show result only on click */}

        {/* Number Buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button type="button" key={num} onClick={() => setInput(input + num)}>
            {num}
          </button>
        ))}
        <br />

        {/* Operator Buttons */}
        {["+", "-", "*", "/"].map((op) => (
          <button
            type="button"
            key={op}
            onClick={() => setInput(input + op)}
          >
            {op}
          </button>
        ))}

        <button type="button" onClick={clearInput}>
          cls
        </button>
      </form>
    </>
  );
};

export default Updated;
