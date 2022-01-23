
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Button = (props) => {

  if (props.classDefiner === "query") {
    return (
      <div className={styles.btnWidth}>
      <button className={styles.buttonQuery} type={props.type}>{props.text}</button>
     </div>
    );
  } else if (props.classDefiner === "adminLoginButton") {
    return (
      <div className={styles.btnWidth}>
      <button className={styles.adminLoginButton} type={props.type}>{props.text}</button>
     </div>
    );
  }
  
  return (
   <>
  <div className={styles.btnWidth}>
  <button className={styles.button} type={props.type}>{props.text}</button>
 </div>
   </>
  );
};



export default Button;