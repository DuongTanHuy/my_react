import React from "react";
import "./Button.scss";
// import styles from "./Button.module.css";

const Button = (props) => {
  return (
    // Dung sass
    <button className={`button ${props.className || ""}`}>{props.children}</button>

    // Dung styles module
    // <button
    //   className={`${styles.button} ${props.className ? styles.secondary : ""}`}
    // >
    //   {props.children}
    // </button> // trong ${} co the dung js
  );
};

export default Button;
