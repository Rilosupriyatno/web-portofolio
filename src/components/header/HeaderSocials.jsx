import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub />
      </a>
      <a href="https://upwork.com/" target="blank">
        <SiUpwork />
      </a>
    </div>
  );
};

export default HeaderSocials;
