
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Button = (props) => {

  if (props.style === "query") {
    return (
      <div className={styles.btnWidth}>
      <button className={styles.buttonQuery} type={props.type}>{props.text}</button>
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