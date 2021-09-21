import React from "react";
import "../style/Ideas.css";
import IdeasCategories from "./IdeasCategories";

function Ideas() {
  return (
    <div className='ideas__container'>
      <h1>Des idées pour vos prochaines escapades</h1>
      <IdeasCategories />
    </div>
  );
}

export default Ideas;
