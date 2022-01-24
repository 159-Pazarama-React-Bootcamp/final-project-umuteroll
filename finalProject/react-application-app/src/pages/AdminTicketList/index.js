import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { connect } from "react-redux";
import MultiSpan from "../../components/multiSpan";



function AdminTicketList() {
//TODO: MultiSpana onClick ekle 
    return (
        <div>
            <Header />
            <div className={styles.listContainer}>
                <div className={styles.listHeader}>
                    <span className={styles.ticketSpan}>Başvuru Kodu</span>
                    <span className={styles.ticketSpan}>Başvuru Tarihi</span>
                    <span className={styles.ticketSpan}>Başvuru Durumu</span>
                    <span className={styles.ticketSpan}>Başvuru Detayları</span>
                </div>
                <div className={styles.listBody}>
                    {this.props.user.map(tickets => (
                   <MultiSpan ticketLabel1={tickets.user} ticketLabel2="Başvuru Tarihi" ticketLabel3="Başvuru Durumu" ticketLabel4="Başvuru Detayları" /> ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AdminTicketList);