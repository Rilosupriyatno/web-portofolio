import React from "react";
import "./award.css";
import AVTR1 from "../../assets/MOS.jpg";
import AVTR2 from "../../assets/Data.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Microsoft Office Specialist",
  },
  {
    avatar: AVTR2,
    name: "Data Engineer",
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
        {data.map(({ avatar, name }, index) => {
          return (
            <SwiperSlide key={index} className="award">
              <div className="avatar">
                <img src={avatar} alt="" />
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
