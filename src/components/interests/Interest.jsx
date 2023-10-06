import React from "react";
import "./interest.css";
import IMG1 from "../../assets/koding.png";
import IMG2 from "../../assets/music.webp";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Coding",
    why: "I'm interested in coding because I can create something that can make a process that used to be a hassle easier and faster.",
    img: IMG1,
  },
  {
    name: "Music",
    why: "I like music because music can easily touch someone's heart so it can lighten that person's burden.",
    img: IMG2,
  },
];

const Interest = () => {
  return (
    <section id="interests">
      <h5>My</h5>
      <h2>Interest</h2>

      <Swiper
        className="container interests_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ img, name, why }, index) => {
          return (
            <SwiperSlide key={index} className="interest">
              <div className="client_name">
                <h4 className="client_name">{name}</h4>
                <br />
                <div className="item_image">
                  <img src={img} alt="about_image" />
                </div>
                <br />
                <h5 className="client_name">{why}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Interest;
