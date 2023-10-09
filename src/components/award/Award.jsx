import React from "react";
import "./award.css";
import img1 from "../../assets/MOS.png";
import img2 from "../../assets/Data.png";
import img3 from "../../assets/Harisenin-1.png";
import img4 from "../../assets/cp.png";
import img5 from "../../assets/pdpb 2.png";
import img6 from "../../assets/pdpb 1.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    img: img1,
    name: "Microsoft Office Specialist",
  },
  {
    img: img2,
    name: "Data Engineer",
  },
  {
    img: img3,
    name: "Fullstack Web Developer",
  },
  {
    img: img4,
    name: "Prakerja",
  },
  {
    img: img5,
    name: "Introduction to Data Science with Python",
  },
  {
    img: img6,
    name: "Python for Data Professional Beginer - Part 1",
  },
];

const Award = () => {
  return (
    <section id="awards">
      <h5>My</h5>
      <h2>Awards</h2>

      <Swiper
        className="container awards_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ img, name }, index) => {
          return (
            <SwiperSlide key={index} className="award">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="name">
                <h5 className="ame">{name}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Award;
