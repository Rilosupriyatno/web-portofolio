import React from "react";
import "./educations.css";
import { BiCheck } from "react-icons/bi";

const Education = () => {
  return (
    <section id="educations">
      <h2>Education</h2>

      <div className="container educations_container">
        <article className="education">
          <div className="education_head">
            <h3>SMPN 1 Babakan</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>2013 - 2016</p>
            </li>
          </ul>
        </article>
        <article className="education">
          <div className="education_head">
            <h3>Universitas Teknologi Yogyakarta</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>2018 - 2022</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="education">
          <div className="education_head">
            <h3>SMAN 1 Waled</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>2016 - 2018</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}

        {/* End of content creation */}
      </div>
    </section>
  );
};

export default Education;
