import React from "react";

export default function Button({ color, text, toggleShow }) {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggleShow}
      >
        {text}
      </button>
    </div>
  );
}
