import React from "react";
import "../style/Host.css";

function Host() {
  return (
    <div className='host__container'>
      <div className='host__background'>
        <div className='host__content'>
          <h1>Je deviens hôte</h1>
          <p>
            Gagnez un revenu complémentaire et saisissez de nouvelles
            opportunités en louant votre logement.
          </p>
          <button className='host__button'>En savoir plus</button>
        </div>
      </div>
    </div>
  );
}

export default Host;
