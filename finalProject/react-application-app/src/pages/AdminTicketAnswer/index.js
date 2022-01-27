import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import Row from "../../components/row"
import RadioButtons from "../../components/radioButtons"
import { useParams } from "react-router-dom";
import { connect } from "formik";
import { useEffect,useState } from "react";

const  AdminLogin = (props) => {
    const {basvuruNo}= useParams();
    const [selected, setSelected] = useState({});
    
    setSelected({
        name: "qwe",
        surname: "qwe",
        email: "e",
        phone: "w",
        subject: "w",
        message: "w",
        status: "we",
        applicationCode: "",
        createdAt: "",
        updatedAt: "",
        id: "1",
        identityNumber: 2,
        file:"1",
        applicationReason:"dasfa"


    });

    
    const  getDetailInfos= function(){
        var arrUsers = props.users.filter(user => user.applicationCode == basvuruNo);
        return arrUsers;
    }

    return (
        /*
        <div>
            <Header />
            <div>
                <div>
                    <h1>Başvuru durumunu güncelleyin</h1>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <Row label="Ad: "  detail={selected.name}/>
                        <Row label="Soyad :"  detail={selected.surname}/>
                        <Row label="TC :"  detail={selected.identityNumber}/>
                        <Row label="Başvuru Kodu :"  detail={selected.applicationCode}/>

                    </div>
                    <div className={styles.right}>
                    <Row label="Başvuru Tarihi :"  detail={selected.createdAt}/>
                    <Row label="Başvuru Konusu :"  detail={selected.subject}/>
                    <Row label="Başvuru Nedeni :"  detail={selected.applicationReason}/>
                    <Row label="Dosya :"  detail={selected.file}/>
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
        */
       console.log("cenk adamdir")
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(AdminLogin);

