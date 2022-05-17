import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/slider.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImgSlider1 from "../assets/img/slider-quality/icon-100.png";
import ImgSlider2 from "../assets/img/slider-quality/icon-check.png";
import ImgSlider3 from "../assets/img/slider-quality/icon-earth-green.png";
import ImgSlider4 from "../assets/img/slider-quality/icon-price.png";
import ImgSlider5 from "../assets/img/slider-quality/icon-shoe.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderQuality() {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={5}
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
        className="mySwiper w-[1200px] mt-[120px] h-[250px] flex items-center]"
      >
        <div className="slider-dad flex items-center p-[10px]">
          <SwiperSlide>
            <div className="slider-quality-item w-[195px] h-[180px] bg-white shadow-lg flex justify-center flex-wrap">
              <div className="w-[65px] h-[65px] bg-[#BC412C] rounded-full flex justify-center items-center mb-[15px]">
                <img src={ImgSlider1} alt="" className="img-slider-home" />
              </div>
              <p className="uppercase text-[20px] font-bold w-full ">
                Hậu mãi <br></br> chu đáo
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-quality-item w-[195px] h-[180px] bg-white shadow-lg flex justify-center flex-wrap">
              <div className="w-[65px] h-[65px] bg-[#BC412C] rounded-full flex justify-center items-center mb-[15px]">
                <img src={ImgSlider2} alt="" className="img-slider-home" />
              </div>
              <p className="uppercase text-[20px] font-bold w-full ">
                Chất lượng<br></br> bảo hành
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-quality-item w-[195px] h-[180px] bg-white shadow-lg flex justify-center flex-wrap">
              <div className="w-[65px] h-[65px] bg-[#BC412C] rounded-full flex justify-center items-center mb-[15px]">
                <img src={ImgSlider3} alt="" className="img-slider-home" />
              </div>
              <p className="uppercase text-[20px] font-bold w-full ">
                môi trường<br></br>xanh sạch
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-quality-item w-[195px] h-[180px] bg-white shadow-lg flex justify-center flex-wrap">
              <div className="w-[65px] h-[65px] bg-[#BC412C] rounded-full flex justify-center items-center mb-[15px]">
                <img src={ImgSlider4} alt="" className="img-slider-home" />
              </div>
              <p className="uppercase text-[20px] font-bold w-full ">
                giá cả<br></br> phù hợp
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-quality-item w-[195px] h-[180px] bg-white shadow-lg flex justify-center flex-wrap">
              <div className="w-[65px] h-[65px] bg-[#BC412C] rounded-full flex justify-center items-center mb-[15px]">
                <img src={ImgSlider5} alt="" className="img-slider-home" />
              </div>
              <p className="uppercase text-[20px] font-bold w-full ">
                mẫu mã<br></br> phong phú
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
