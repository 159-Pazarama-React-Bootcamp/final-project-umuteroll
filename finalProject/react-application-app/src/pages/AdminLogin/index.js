import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";

function AdminLogin() {
    return (
        <div>
            <Header />
            <div className={styles.adminLoginForm}>
                <h1>Admin Girişi</h1>
                <Input classDefiner="adminLogin" placeholder="   Kullanıcı Adı"/>
                <Input classDefiner="adminLogin" placeholder="   Şifre"/>
                <Button classDefiner="adminLoginButton" text="Giriş Yap"/>
            </div>
            <Footer />
        </div>
    )
}

export default AdminLogin;