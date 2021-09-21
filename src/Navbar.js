import React, { useState, useEffect, useRef } from "react";
import { MdLanguage } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./components/Search";
import ResponsiveHeader from "./components/ResponsiveHeader";
import "./style/Navbar.css";
function Navbar() {
  const [navLinks, setNavLinks] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputAnime, setInputAnime] = useState(false);
  const [responsiveH, setResponsiveH] = useState(false);
  const wrapperRef = useRef(null);

  const onClick = () => {
    setShowSearch(true);
    setInputAnime(false);
  };
  function handleScroll() {
    const yScroll = window.scrollY;
    if (yScroll >= 50) {
      setNavActive(true);
      setInputAnime(true);
      setShowSearch(false);
    } else {
      setNavActive(false);
      setInputAnime(false);
      setShowSearch(false);
    }
  }

  const showNavLinks = () => {
    if (window.innerWidth <= 1022) {
      setNavLinks(true);
      setResponsiveH(true);
    } else {
      setNavLinks(false);
      setResponsiveH(false);
    }
  };
  useEffect(() => {
    showNavLinks();
    window.addEventListener("resize", showNavLinks);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const box = {
    boxShadow: "0px 0px 0px darkgrey",
  };
  return (
    <>
      {responsiveH ? (
        <ResponsiveHeader />
      ) : (
        <div className='navbar'>
          {/* <div
        className='animBg animated__right'
        style={{
          transform: navActive ? "translate(-0px)" : "",
         
        }}></div>
      <div
        className='animBg animated__left'
        style={{
          transform: navActive ? "translate(-0px)" : "",
       
        }}></div> */}
          <div
            className='animatedBg'
            style={{
              transform: navActive ? "translate(-0px)" : "",
              height: showSearch ? "200%" : "100%",
            }}></div>
          <div className={"navbar__container"}>
            <div className='navbar__logo'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png'
                alt=''
              />
            </div>
            <div
              className={`${navActive ? "navbar__scrollSearch" : ""}  ${
                showSearch ? "navbar__scrollSearchOpen" : ""
              }`}>
              <div className={navLinks ? "none" : "navbar__center"}>
                <a
                  className='hebergement'
                  href='#'
                  style={{ color: navActive ? "black" : "" }}>
                  Hébergements
                </a>
                <a
                  className='exp'
                  href=''
                  style={{ color: navActive ? "black" : "" }}>
                  Expériences
                </a>
                <a
                  className='expOnline'
                  href=''
                  style={{ color: navActive ? "black" : "" }}>
                  Expériences en ligne
                </a>
              </div>
              {!showSearch ? (
                <div
                  onClick={() => onClick()}
                  className='navbar__search'
                  style={{
                    position: navActive ? "static" : "",
                    minWidth: "300px",
                    opacity: navActive ? "1" : "",
                    transition: !navActive ? "none" : "",
                  }}>
                  <p>Commencez votre recherche</p>
                  <div
                    className='search--icon'
                    style={{ fontSize: "16px", padding: "8px" }}>
                    <AiOutlineSearch navActive={navActive} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className='testnav'
              style={{
                // width: navActive ? "30%" : "",
                // opacity: navActive ? "0" : "1",
                top: inputAnime ? "60%" : "",
              }}>
              <Search anime={inputAnime} />
            </div>

            <div className='navbar__right'>
              <a href='' style={{ color: navActive ? "black" : "" }}>
                Devenez hôte
              </a>
              <div className='icon--language'>
                <MdLanguage
                  className='language'
                  style={{ fontSize: "18px", color: navActive ? "black" : "" }}
                />
              </div>

              <div
                className='navbar__burger'
                onClick={() => setDropdown(!dropdown)}
                style={{
                  border: navActive ? "solid 1px rgb(208, 208, 208)" : "",
                }}>
                <IoMenuOutline
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
                <FaRegUserCircle style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>

          {dropdown ? (
            <div className='navbar__dropdown'>
              <a href=''>Inscription</a>
              <a href=''>Connexion</a>
              <div className='dropdown__divider'></div>
              <a href=''>Héberger des voyageurs</a>

              <a href=''>Créer une expérience</a>
              <a href=''>Aide</a>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
