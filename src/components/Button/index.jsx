import React from 'react'
import "./style.scss";
const Button = ({ className, type, htmlType, content, onClick }) => {
  return (
    <button onClick={onClick} className={`${className} ${type}`} type={htmlType}>{content}</button>
  )
}

export default Button;