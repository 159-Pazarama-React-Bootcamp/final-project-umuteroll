import React from "react";
import styles from "./styles.module.css";

const RadioButtons = () => {
    return (
        <div className={styles.wrapper}>
            <input type="radio" id="accepted" value="Kabul Edildi" name="status" />
            <label for="accepted">Kabul Edildi    </label> 
            <input type="radio" id="rejected" value="Reddedildi" name="status" />
            <label for="rejected">Reddedildi    </label> 
            <input type="radio" id="waiting" value="Beklemede" name="status"/>
            <label for="waiting">Beklemede    </label> 
        </div>
    );  
}

export default RadioButtons;