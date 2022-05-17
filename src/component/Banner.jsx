import React from "react";
import "../style/banner.css";
const Banner = () => {
  return (
    <div className="banner relative">
      <div className="btn-view-more absolute bottom-[20px] right-[50%]">
        <button className="btn rounded-[20px] w-[170px] h-[40px] bg-[#BC412C] text-white translate-x-[50%] hover:bg-white hover:text-black">
          MUA NGAY
        </button>
      </div>
    </div>
  );
};

export default Banner;
