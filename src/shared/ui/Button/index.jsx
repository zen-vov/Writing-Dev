import React from "react";

const Button = ({ isRed }) => {
  return <button className={isRed ? "red" : "black"}>Hello</button>;
};

export default Button;
