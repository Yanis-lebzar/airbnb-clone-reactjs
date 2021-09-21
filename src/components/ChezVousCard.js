import React from "react";
import "../style/ChezVousCards.css";
function ChezVousCards({ url, text }) {
  return (
    <div className='card__container'>
      <div className='img__container'>
        <img className='card__image' src={url} alt='' />
      </div>
      <h2>{text}</h2>
    </div>
  );
}

export default ChezVousCards;
