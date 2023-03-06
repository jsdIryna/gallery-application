import React from "react";
import "./input.css";

const Input = ({ value, onChange }) => {
  return (
    <input
      className="input"
      placeholder="search the image"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
