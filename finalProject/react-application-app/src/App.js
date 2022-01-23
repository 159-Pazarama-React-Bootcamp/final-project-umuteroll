import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TicketApplication from './pages/TicketApplication';
import TicketQuery from './pages/TicketQuery';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<TicketApplication/>} />
        <Route path="/basvuru-sorgula" element={<TicketQuery/>} />

      </Routes>
    </Router>
  </div>
  );
}

export default App;
