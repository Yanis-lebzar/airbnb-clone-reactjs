import React from "react";
import "../style/ActivitiesCard.css";

function ActivitiesCard({ url, titre, p }) {
  return (
    <div className='actiCard__container'>
      <div className='actiCard__img'>
        <img className='acti__img' src={url} alt='' />
      </div>
      <h2>{titre}</h2>
      <p>{p}</p>
    </div>
  );
}

export default ActivitiesCard;
