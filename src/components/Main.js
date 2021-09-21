import React from "react";
import "../style/Main.css";
import Explore from "./Explore";
import ChezVous from "./ChezVous";
import Host from "./Host";
import Activities from "./Activities";
import Ideas from "./Ideas";

function Main() {
  return (
    <div className='main'>
      <Explore />
      <ChezVous />
      <Host />
      <Activities />
      <Ideas />
    </div>
  );
}

export default Main;
