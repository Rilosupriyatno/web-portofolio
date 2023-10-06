import React from "react";
import "./portApp.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Games Store",
    github: "https://github.com/Rilosupriyatno/games-store",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sistem Admin",
    github: "https://github.com/Rilosupriyatno/Sistem-Admin",
  },
  {
    id: 3,
    image: IMG3,
    title: "Sistem Presensi",
    github: "https://github.com/Rilosupriyatno/sistem-presensi",
  },
];

const PortApp = () => {
  return (
    <section id="portApp">
      <h5>My Recent Work</h5>
      <h2>Portofolio Aplikasi</h2>

      <div className="container portApp_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portApp_item">
              <div className="portApp_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
