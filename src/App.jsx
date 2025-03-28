import data from "./data.js";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
// import { TfiEmail } from "react-icons/tfi";
import "./css/App.css";
import TicketCard from "./components/TicketCard/TicketCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="ticket_head">
          <img className="logo" src="/img/Logo.png" />
          <h2 className="subtitle">YVN PARTY</h2>
          <p className="direction">JUST FOR FUN</p>
          <p className="direction">հարցերի դեպքում +374(33) 180 033</p>

          <div className="incon_box">
            <a href="https://www.instagram.com/yvnparty/" target="_blank">
              <FaInstagram size={35} />
            </a>
            <a
              href="https://www.tiktok.com/@yvnparty?_t=ZS-8uiGTXNsmgx&_r=1"
              target="_blank"
            >
              <AiFillTikTok size={35} />
            </a>
            <a href="https://t.me/yvnparty2024" target="_blank">
              <SiTelegram size={35} />
            </a>
          </div>
        </div>
        <div className="ticket_cards">
          {data.map((card) => {
            return <TicketCard key={card.id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
