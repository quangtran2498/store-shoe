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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [active, setActive] = useState();
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        thumbs={{ Swiper: active }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setActive}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
