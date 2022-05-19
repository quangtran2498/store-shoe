// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import slider1 from "../assets/img/test-slider/badminton-1.jpg";
// import slider2 from "../assets/img/test-slider/badminton-2.jpg";
// import slider3 from "../assets/img/test-slider/badminton-3.jpg";
// import slider4 from "../assets/img/test-slider/badminton-4.jpg";
// import slider5 from "../assets/img/test-slider/badminton-5.jpg";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";

// export default function SliderDemo() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src={slider1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slider2} alt="" />
//         </SwiperSlide>{" "}
//         <SwiperSlide>
//           <img src={slider3} alt="" />
//         </SwiperSlide>{" "}
//         <SwiperSlide>
//           <img src={slider4} alt="" />
//         </SwiperSlide>{" "}
//         <SwiperSlide>
//           <img src={slider5} alt="" />
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={slider1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slider2} alt="" />
//         </SwiperSlide>{" "}
//         <SwiperSlide>
//           <img src={slider3} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slider4} alt="" />
//         </SwiperSlide>{" "}
//         <SwiperSlide>
//           <img src={slider5} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/slider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import slider1 from "../assets/img/test-slider/badminton-1.jpg";
import slider2 from "../assets/img/test-slider/badminton-2.jpg";
import slider3 from "../assets/img/test-slider/badminton-3.jpg";
import slider4 from "../assets/img/test-slider/badminton-4.jpg";
import slider5 from "../assets/img/test-slider/badminton-5.jpg";

import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SliderHomeDemo() {
  const [active, setActive] = useState();
  return (
    <div className="w-[50%] mt-[150px]">
      <Swiper
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        thumbs={{ Swiper: active }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <span>
          <SwiperSlide>
            <img src={slider1} alt="" className="img-top" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide>
            <img src={slider2} alt="" className="img-top" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide>
            <img src={slider3} alt="" className="img-top" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide>
            <img src={slider4} alt="" className="img-top" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide>
            <img src={slider5} alt="" className="img-top" />
          </SwiperSlide>
        </span>
      </Swiper>
      <Swiper
        onSwiper={setActive}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <span>
          <SwiperSlide className="slider-item-product">
            <img src={slider1} alt="" className="img-bottom" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide className="slider-item-product">
            <img src={slider2} alt="" className="img-bottom" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide className="slider-item-product">
            <img src={slider3} alt="" className="img-bottom" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide className="slider-item-product">
            <img src={slider4} alt="" className="img-bottom" />
          </SwiperSlide>
        </span>
        <span>
          <SwiperSlide className="slider-item-product">
            <img src={slider5} alt="" className="img-bottom" />
          </SwiperSlide>
        </span>
      </Swiper>
    </div>
  );
}
