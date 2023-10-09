import React from "react";
import "./portApp.css";
import IMG1 from "../../assets/Gameshop.png";
import IMG2 from "../../assets/sistem_admin.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Game Shop",
    desc: "Buld with React JS and Tailwind CSS",
    github: "https://github.com/Rilosupriyatno/Gameshop",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sistem Admin",
    desc: "Laravel and Tailwind CSS",
    github: "https://github.com/Rilosupriyatno/sistem_admin",
  },
];

const PortApp = () => {
  return (
    <section id="portApp">
      <h5>My Recent Work</h5>
      <h2>Portofolio Aplikasi</h2>

      <div className="container portApp_container item-center">
        {data.map(({ id, image, title, desc, github }) => {
          return (
            <article key={id} className="portApp_item">
              <div className="portApp_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4 className="desc">{desc}</h4>
              <div className="portApp_item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortApp;
