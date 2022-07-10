/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import "./style.scss";

const Button = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { className, type, htmlType, content, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className || ""} ${type || ""}`}
      type={htmlType}
    >
      {content}
    </button>
  );
};

export default Button;
