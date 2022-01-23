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
                <div className={styles.componentsDiv}>
                    <Input classDefiner="query"/>
                    <Button classDefiner ="query" text="Sorgula"/>
                </div>
            </div>
            <div>
                <div className={styles.floatChildRight}>
                    <h1>Başvuru Sorgulama</h1>
                    <p className={styles.p}>Başvuru kodunuzu yandaki alana girerek durumunu sorgulayabilirsiniz.</p>
                </div>
            </div>
            <div className={styles.description}>
                <p>Başvurularınız 24 saat içerisinde yanıtlanacaktır.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default TicketQuery;