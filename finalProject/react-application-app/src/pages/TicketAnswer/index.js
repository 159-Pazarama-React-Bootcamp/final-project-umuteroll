import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from  "../../components/footer";
import Row    from "../../components/row";
import { connect } from "react-redux";
import { getTicketAnswer } from "../../redux/actions";
import {React,useEffect} from "react";




const  TicketAnswer = (props) => {
  
  
    useEffect(() => {
        props.getTicketAnswer()  
        },[])
console.log(props)

    return (
        <div className={styles.floatContainer}>
            <Header/> 
            <h1 className={styles.subTitle}>Başvuru Durumu</h1>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h1>Cevaplandı!</h1>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.cardBodyLeft}>
                        <Row label="Ad: " detail="Umut"/>
                        <Row label="Soyad: " detail="Erol" />
                        <Row label="TC: " detail="30641326702"/>
                        <Row label="Başvuru Kodu: " detail="tx123765"/>

                    </div>
                    <div className={styles.cardBodyRight}>
                        <Row label="Başvuru Durumu: " detail="reddedildi"/>
                        <Row label="Başvuru Nedeni: " detail="ayagım yok oldu ayagımı bulun"/>
                        <Row label="Başvuru Cevabı: " detail="uzgunum size yardım olamıyoruz"/>
                        <Row label="Cevaplanma Tarihi: " detail="17.05.1999 20.30"/>
                
                    </div>   
                </div>
            </div>
            <Footer/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        application: state.application
    }
}

export default connect(mapStateToProps,{getTicketAnswer})(TicketAnswer);