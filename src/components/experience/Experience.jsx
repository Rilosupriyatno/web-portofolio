import React from "react";
import "./experience.css";
import Me from "../../assets/SMAN1Waled.jpeg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Get To Know</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_me">
          <div className="experience_me-image">
            <img src={Me} alt="experience_Image" />
          </div>
        </div>
        <div className="experience_content">
          <p>
            I have internship experience at SMAN 1 Waled to create a presence
            system where the system is connected between the web and Android.
            This system aims to make it easier for teachers and students to take
            attendance, this presence can be used during online and offline
            meetings
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
