import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer_logo">
        Portofolio
      </a>
      <ul className="permalinks">
        {/* <li>
          <a href="#top">Home</a>
        </li> */}
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#interests">Interest</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#educations">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portApp">Portofolio Aplikasi</a>
        </li>
        <li>
          <a href="#awards">Award</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://web.facebook.com/rilo.tiar">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/rilobahtiar__/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/B_rilobahtiar8?t=K7QZ-QsuRGq-WRNCpEqDDw&s=08">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Portofolio. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
