import React from "react";
import "../style/banner.css";
import { Link } from "react-router-dom";
const BannerShoeFballChildren = () => {
  return (
    <Link to="/multipurpose-children-page">
      <div className="BannerShoeFballChildren relative">
        <div className="btn-view-more absolute bottom-[20px] right-[50%]">
          <button className="btn rounded-[20px] w-[170px] h-[40px] bg-white text-black translate-x-[50%] hover:bg-[#BC412C] hover:text-white">
            MUA NGAY
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BannerShoeFballChildren;
