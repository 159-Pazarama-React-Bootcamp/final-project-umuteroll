import React, { useState } from "react";
import styles from "./styles.module.css";

const Header = (props) => {

    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.logo}  > LOGO </span>
            </div>
            <div>
                <span className={styles.links}> Link 1 </span>
                <span className={styles.links}> Link 2 </span>
                <span className={styles.links}> Link 3 </span>
            </div>
        </header>


    );
};



export default Header;