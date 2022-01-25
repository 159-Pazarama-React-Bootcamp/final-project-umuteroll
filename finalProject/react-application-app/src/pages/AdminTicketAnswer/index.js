import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import Row from "../../components/row"
import RadioButtons from "../../components/radioButtons"
function AdminLogin() {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <h1>Başvuru durumunu güncelleyin</h1>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                    </div>
                    <div className={styles.right}>
                        <Row label="selam :"  detail="slm cnm deneme sol"/>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                        <Row label="selam :"  detail="slm cnm deneme sağ"/>
                    </div>
                </div>

                <div>
                    <RadioButtons />
                </div>

                <div className={styles.applyReason}>
                    <h1>Başvuru Nedeni</h1>
                    <textarea name="applyReason" className={styles.txtArea}></textarea>
                </div>

                <div>
                    <Button/>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default AdminLogin;