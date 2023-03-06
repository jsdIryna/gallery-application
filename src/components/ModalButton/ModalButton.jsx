import React from "react";
import './modalButton.css';

const ModalButton = ({ children, type = "button" }) => {
  return <button className="btn" type={type}>{children}</button>;
};

export default ModalButton;
