import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skill">
      <h5>Whats Skill I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Markup Language</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
          <br />
          <h3>Programing Language</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill_backend">
          <h3>Other Skills</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>RDBMS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>CodeIgniter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>GIT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skills" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
