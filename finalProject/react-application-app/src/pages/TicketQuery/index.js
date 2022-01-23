import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from  "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";

function TicketQuery() {
    return (
        <div className={styles.floatContainer}>
            <Header/> 
            <h1 className={styles.subTitle}>Başvuru Sorgula</h1>
            <div className={styles.floatChildLeft}>
                <Input style="query"/>
                <Button style="query"/>
            </div>
            <div className={styles.floatChildRight}>
                <h1>Some explanation</h1>
                <p>BLABLA</p>
            </div>
            <Footer/>
        </div>
    )
}

export default TicketQuery;