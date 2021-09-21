import "../style/ResponsiveHeader.css";
import { AiOutlineSearch } from "react-icons/ai";

import React from "react";

function ResponsiveHeader() {
  return (
    <div className={"responsiveHeader__container"}>
      <div className='responsiveHeader__content'>
        <div
          className='responsiveHeader__icon'
          style={{
            fontSize: "20px",
            fontWeight: 900,
            padding: "8px",
            marginTop: "5px",
            color: "#FF385C",
          }}>
          <AiOutlineSearch />
        </div>
        <p>Où allez-vous ?</p>
      </div>
    </div>
  );
}

export default ResponsiveHeader;
