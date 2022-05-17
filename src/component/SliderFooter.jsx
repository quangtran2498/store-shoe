import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/slider.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImgSlider1 from "../assets/img/footer/f1.jpg";
import ImgSlider2 from "../assets/img/footer/f2.jpg";
import ImgSlider3 from "../assets/img/footer/f3.jpg";
import ImgSlider4 from "../assets/img/footer/f4.jpg";
import ImgSlider5 from "../assets/img/footer/f5.jpg";
import ImgSlider6 from "../assets/img/footer/f6.jpg";
import ImgSlider7 from "../assets/img/footer/f7.jpg";
import ImgSlider8 from "../assets/img/footer/f8.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderFooter() {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={8}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider1} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider2} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider3} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider4} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider5} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider6} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider7} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
        <SwiperSlide className="fix-margin">
          <span>
            <img src={ImgSlider8} alt="" className="slider-img-footer-item" />
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
