import React from "react";

function Button() {
  const handleClick = (e) => {
    console.log("Salam P320");
  };

  return <button onClick={handleClick}>Click for test</button>;
}

export default Button;

export function ParaghBtn() {
  const a = "salam";

  return (
    <p>
      Edit <code>src/App.js</code> {a} and save to reload.
    </p>
  );
}
