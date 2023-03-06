import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddButton = ({ subClassName, addHandler }) => {
  return (
    <button className={`${subClassName} add`} onClick={addHandler}>
      <IoMdAdd />
    </button>
  );
};

export default AddButton;
