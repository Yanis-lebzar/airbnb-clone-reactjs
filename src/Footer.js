import React from "react";
import "./style/Footer.css";
import { links } from "./data/footerLinks";
function Footer() {
  return (
    <div className='footer__container'>
      {/* {about.map((data) =>
        div
      )} */}
      <div className='footer__links'>
        {links.map((data) => (
          <div className='footer__content'>
            <h4>{data.title}</h4>
            {data.links?.map((link) => (
              <span>{link}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
