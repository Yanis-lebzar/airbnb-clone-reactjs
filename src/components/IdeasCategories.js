import React, { useState } from "react";
import "../style/IdeasCategories.css";
import { mer, sport, montagne, autres } from "../data/categories";

function IdeasCategories() {
  const [data, setData] = useState(mer);

  return (
    <div className='iCategories__container'>
      <div className='iCategories__categories'>
        <button
          type='button'
          className={
            data === mer ? "categories__buttons clicked" : "categories__buttons"
          }
          onClick={() => setData(mer)}>
          Bord de mer
        </button>
        <button
          type='button'
          className={
            data === sport
              ? "categories__buttons clicked"
              : "categories__buttons"
          }
          onClick={() => setData(sport)}>
          Sports d'hiver
        </button>
        <button
          type='button'
          className={
            data === montagne
              ? "categories__buttons clicked"
              : "categories__buttons"
          }
          onClick={() => setData(montagne)}>
          Montagne
        </button>
        <button
          type='button'
          className={
            data === autres
              ? "categories__buttons clicked"
              : "categories__buttons"
          }
          onClick={() => setData(autres)}>
          Autres destinations populaires
        </button>
      </div>
      <div className='iCategories__locations'>
        {data.map((location) => (
          <div className='location'>
            <h5>{location.city}</h5>
            <p>{location.region}</p>
          </div>
        ))}
        {/* <div className='location'>
          <h5>Aigues-Mortes</h5>
          <p>Occitanie</p>
        </div>
        <div className='location'>
          <h5>Aigues-Mortes</h5>
          <p>Occitanie</p>
        </div>{" "}
        <div className='location'>
          <h5>Aigues-Mortes</h5>
          <p>Occitanie</p>
        </div>
        <div className='location'>
          <h5>Aigues-Mortes</h5>
          <p>Occitanie</p>
        </div> */}
      </div>
    </div>
  );
}

export default IdeasCategories;
