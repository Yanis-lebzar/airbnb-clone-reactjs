import React from "react";
import "../style/ExploreCities.css";

function ExploreCities({ url, time, cityName, hide }) {
  return (
    <div className={`city__container ${hide}`}>
      <img src={url} alt='' />
      <div className='city__infos'>
        <h2>{cityName}</h2>
        <span>{time} heures de route</span>
      </div>
    </div>
  );
}

export default ExploreCities;
