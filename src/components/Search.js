import "../style/Search.css";
import "../style/Home.css";
import { AiOutlineSearch } from "react-icons/ai";

import React, { useState } from "react";

function Search({ anime }) {
  const [navActive, setNavActive] = useState(false);
  function handleScroll() {
    const yScroll = window.scrollY;
    if (yScroll >= 10) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className='search'>
      <div
        className='search__inputs'
        style={{
          width: anime ? "20%" : "",
          opacity: anime ? "0" : 1,
          border: !anime ? "solid 1px rgb(206, 206, 206) " : "",
        }}>
        <div className='inputs__inputContainer one'>
          <div className='input__text'>
            <strong>Adresse</strong>
          </div>
          <input type='text' placeholder='Où allez-vous ?' />
        </div>
        <div className='inputs__inputContainer two'>
          <div className='input__text'>
            <strong>Arrivée</strong>
            <span>Quand ?</span>
          </div>
        </div>
        <div className='inputs__inputContainer three'>
          <div className='input__text'>
            <strong>Départ</strong>
            <span>Quand ?</span>
          </div>
        </div>
        <div className='inputs__inputContainer four'>
          <div className='input__text'>
            <strong>Voyageurs</strong>
            <span>Qui ?</span>
          </div>
          <div className='search--icon'>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
