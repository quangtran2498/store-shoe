import Iconfootball from "../assets/img/shoe-football/icon_giay_bong_da.png";

// export default ShoeFootball;
import { FaShoppingCart } from "react-icons/fa";
import qs from "qs";

import React, { useEffect, useState } from "react";
// import axiosClient from "../api/axiosClient";
import axios from "axios";

import { Link } from "react-router-dom";

export default function ShoeFootball() {
  const [sliderHomeApi, setSliderHomeApi] = useState();
  const fetchSliderHome = async () => {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 6,
        },
        populate: "*",
        // sort: "date:desc",
        filters: {
          type: {
            $eq: "football",
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(
      `http://localhost:1337/api/males?filters[type][$eq]=football?${query}`
    );
    const data = res && res.data ? res.data : [];
    setSliderHomeApi(data);
  };
  useEffect(() => {
    fetchSliderHome();
  }, []);

  // console.log(sliderHomeApi);

  return (
    <div className="shoe-fball mt-[80px] flex justify-between">
      <div className="shoe-fb-right h-[690px]">
        <div className="shoe-fb-right-item mr-[10px] flex items-center ">
          <div className="h-[620px] w-full text-center relative">
            <div className="text-white text-center flex justify-center">
              <p className="text-[24px] mr-[10px]">GIẦY</p>
              <p className="text-[24px] font-bold">BÓNG ĐÁ NAM</p>
            </div>
            <div className="icon-football flex justify-center mt-[10px]">
              <img src={Iconfootball} alt="" className="w-[50px] h-[50px] " />
            </div>
            <Link to="football-male-page">
              <div className="btn-view-more absolute bottom-0 right-[50%]">
                <button className="btn rounded-[20px] w-[170px] h-[40px] bg-[#BC412C] text-white translate-x-[50%] hover:bg-white hover:text-black">
                  XEM THÊM
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between h-[700px]">
        {sliderHomeApi?.data.map((item, index) => {
          const linkLocal = `http://localhost:1337${item.attributes?.image?.data?.attributes?.url}`;
          return (
            <div
              key={index}
              className="shoe-fb-item w-[280px] h-[340px] bg-[#e6e5eb] p-[15px]"
            >
              <Link to={`/males/${item.id}`}>
                <div className="shoe-fb-item-img overflow-hidden ">
                  <img
                    src={linkLocal}
                    alt=""
                    className="img-shoefball max-h-245px w-[245px] "
                  />
                </div>
                <div className="shoe-fb-item-heading font-bold leading-[1.2] text-[15px]">
                  Giày bóng đá sân cỏ nhân tạo Prowin USA
                </div>
                <div className="flex justify-between items-center mt-[5px]">
                  <div className="price text-[13px]">
                    {item.attributes?.price}
                  </div>
                  <FaShoppingCart className="cart-shoe-fball text-[18px]]" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
