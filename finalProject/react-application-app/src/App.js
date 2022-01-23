import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TicketApplication from './pages/TicketApplication';
import TicketQuery from './pages/TicketQuery';
import TicketAnswer from './pages/TicketAnswer';
import TicketSuccess from './pages/TicketSuccess';
import AdminLogin from './pages/AdminLogin';
import AdminTicketList from './pages/AdminTicketList';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<TicketApplication/>} />
        <Route path="/basvuru-sorgula" element={<TicketQuery/>} />
        <Route path="/basvuruCevap" element={<TicketAnswer/>} />
        <Route path="/basvuru-basarili" element={<TicketSuccess/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin/basvuru-listesi" element={<AdminTicketList/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
