import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/slider.css";

import ImgSliderMain from "../assets/img/slider-home/slider-main.jpg";
import ImgSlider2 from "../assets/img/slider-home/shoe-children.png";
import ImgSlider3 from "../assets/img/slider-home/snaker.png";
import ImgSlider4 from "../assets/img/slider-home/slider4.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper important mt-[100px]"
      >
        <SwiperSlide>
          <span>
            <img
              src={ImgSliderMain}
              alt=""
              className="img-slider-home w-full"
            />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span>
            <img src={ImgSlider2} alt="" className="img-slider-home w-full" />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span>
            <img src={ImgSlider3} alt="" className="img-slider-home w-full" />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span>
            <img src={ImgSlider4} alt="" className="img-slider-home w-full" />
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
