import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${colorClass ? colorClass : ""
        }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={process.env.PUBLIC_URL + footerLogo} />
        </Link>
      </div>
      <p>
        <a href="https://wa.me/905319028672" target="_blank" rel="noopener noreferrer">KHAMZAT-ISTANBUL</a> &copy;2022-{new Date().getFullYear()}{" "}
        {/* <a href="//hasthemes.com" rel="noopener noreferrer" target="_blank">
          BUTIK <span>ISTANBUL</span>
        </a> */}
        <br /> Все права защищены
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
