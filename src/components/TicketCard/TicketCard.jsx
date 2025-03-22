import React from "react";

export default function TicketCard({ card }) {
  return (
    <a target="_blank" href={card.link}>
      <div className="card">
        <img src={card.url} />
        <div className="card_text">
          <p>{card.text}</p>
        </div>
      </div>
    </a>
  );
}
