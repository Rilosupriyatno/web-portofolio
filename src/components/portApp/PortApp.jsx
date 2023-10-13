import React from "react";
import "./portApp.css";
import IMG1 from "../../assets/Gameshop.png";
// import IMG2 from "../../assets/sistem_admin.png";
import IMG3 from "../../assets/sistem_presensi.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Game Shop",
    desc: "Buld with React JS and Tailwind CSS",
    github: "https://github.com/Rilosupriyatno/Gameshop",
    preview: "https://stirring-rugelach-de6245.netlify.app/",
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: "Sistem Presensi",
  //   desc: "Codeigniter, Bootstrap, PHP, Mysql",
  //   github: "https://github.com/Rilosupriyatno/sistem_admin",
  //   preview: "https://smansawal-attendance.000webhostapp.com/",
  // },
  {
    id: 2,
    image: IMG3,
    title: "Sistem Presensi",
    desc: "Codeigniter, Bootstrap, PHP, Mysql",
    github: "https://github.com/Rilosupriyatno/sistem-presensi/tree/Update-4.0",
    preview: "https://smansawal-attendance.000webhostapp.com/",
  },
];

const PortApp = () => {
  return (
    <section id="portApp">
      <h5>My Recent Work</h5>
      <h2>Portofolio Aplikasi</h2>

      <div className="container portApp_container item-center">
        {data.map(({ id, image, title, desc, github, preview }) => {
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
                <a href={preview} className="btn" target="blank">
                  Preview
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
