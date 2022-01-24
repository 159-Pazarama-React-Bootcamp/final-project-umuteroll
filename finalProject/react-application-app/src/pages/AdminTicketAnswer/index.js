import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import Row from "../../components/row"

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
                    radio buttonlar
                </div>

                <div>
                    güncelleme mesajı textbox
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