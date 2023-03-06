import React from "react";
import { FiShare } from "react-icons/fi";

const ShareButton = ({ link, subClassName }) => (
  <a href={link} target="_blank" className={`${subClassName} share`}>
    <FiShare />
  </a>
);

export default ShareButton;
