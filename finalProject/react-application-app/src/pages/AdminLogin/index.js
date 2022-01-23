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
                <Input classDefiner="adminLogin"/>
                <Button text="Sorgula"/>
            </div>
            <Footer />
        </div>
    )
}

export default AdminLogin;