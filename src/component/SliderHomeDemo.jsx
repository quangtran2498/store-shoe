import React, { useEffect, useState } from "react";
// import axiosClient from "../api/axiosClient";
import axios from "axios";

// Import Swiper React components
import { Link } from "react-router-dom";

export default function SliderHome() {
  const [sliderHomeApi, setSliderHomeApi] = useState();
  const fetchSliderHome = async () => {
    const res = await axios.get("http://localhost:1337/api/sliders?populate=*");
    const data = res && res.data ? res.data : [];
    setSliderHomeApi(data);
  };
  useEffect(() => {
    fetchSliderHome();
  }, []);

  console.log(sliderHomeApi);

  return (
    <div className="test">
      {sliderHomeApi?.data.map((item, index) => {
        const linkLocal = `http://localhost:1337${item.attributes?.image?.data?.attributes?.url}`;

        console.log(item);
        return <div className="item-slider" key={index}></div>;
      })}
      ,
    </div>
  );
}
