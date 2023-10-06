import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About_Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
            Let me introduce myself, my name is Rilo Supriyatno. I am an
            informatics graduate from Yogyakarta Technology University, I have
            experience creating school attendance programs using HTML, CSS, PHP,
            MySql, Javascript, and using the CodeIgniter framework. I also
            attended the Full-Stack Web Developer bootcamp program to further
            develop my skills and wanted to contribute to web-based development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
