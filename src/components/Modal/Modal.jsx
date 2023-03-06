import React from "react";
import "./modal.css";

const Modal = ({ children, open, setOpen, className }) => {
  const rootClasses = ["modal"];
  const contentClasses = ["modal-content"];

  if (open) {
    rootClasses.push("active");
  }
  if (className) {
      contentClasses.push(className);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setOpen(false)}>
      <div
        className={contentClasses.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
