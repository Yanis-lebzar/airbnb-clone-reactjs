import React, { useState, useEffect } from "react";
import "../style/Explore.css";
import ExploreCities from "./ExploreCities";

function Explore() {
  const [hide, setHide] = useState(false);
  const [hideMobile, setHideMobile] = useState(false);

  const responsiveGrid = () => {
    if (window.innerWidth <= 1022) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  useEffect(() => {
    responsiveGrid();
  }, []);

  const mobileGrid = () => {
    if (window.innerWidth <= 830) {
      setHideMobile(true);
    } else {
      setHideMobile(false);
    }
  };
  useEffect(() => {
    mobileGrid();
  }, []);

  window.addEventListener("resize", responsiveGrid);
  window.addEventListener("resize", mobileGrid);

  return (
    <div className='explore__container'>
      <h1>Explorez les environs</h1>
      <div className='explore__citiesContainer'>
        <div className={"explore__cities"}>
          <ExploreCities
            url='https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'
            time='2'
            cityName='Montpellier'
          />
          <ExploreCities
            url='https://a0.muscache.com/im/pictures/857ca168-3321-4956-b106-6d1c084811cb.jpg?im_q=medq&im_w=240'
            time='3'
            cityName='Seoul'
          />
          <ExploreCities
            hide={hideMobile ? "hideMobile" : ""}
            url='https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=240'
            time='1'
            cityName='Annière'
          />
          <ExploreCities
            hide={hide ? "hide" : ""}
            url='https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240'
            time='3'
            cityName='Lyon'
          />
        </div>
        <div className={"explore__cities"}>
          <ExploreCities
            url='https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240'
            time='2'
            cityName='Bordeau'
          />
          <ExploreCities
            url='https://a0.muscache.com/im/pictures/c9e34a08-01ca-49b0-a589-457a4f990e57.jpg?im_q=medq&im_w=240'
            time='1'
            cityName='Annecy'
          />
          <ExploreCities
            hide={hideMobile ? "hideMobile" : ""}
            url='https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240'
            time='2'
            cityName='Nice'
          />
          <ExploreCities
            hide={hide ? "hide" : ""}
            url='https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240'
            time='0,3'
            cityName='VDA'
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
