import React from "react";
import Search from "../components/Search";
import Main from "../components/Main";
import "../style/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='home__topContainer'>
        {" "}
        <div className='search__flexible'>
          <h3>Vous ne savez pas où partir ? Parfait !</h3>

          <button className='search--button'>
            <h4>Je suis flexible</h4>
          </button>
        </div>
      </div>
      <Main />
    </div>
  );
}

export default Home;
