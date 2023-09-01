import React from "react";
import "./Button.css";

const Button = ({ label, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
