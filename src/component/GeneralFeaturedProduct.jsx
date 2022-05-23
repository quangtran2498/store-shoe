import { FaShoppingCart } from "react-icons/fa";
import qs from "qs";

import React, { useEffect, useState } from "react";
// import axiosClient from "../api/axiosClient";
import axios from "axios";

import { Link } from "react-router-dom";

export default function GeneralFeaturedProduct() {
  const [sliderHomeApi, setSliderHomeApi] = useState();
  const fetchSliderHome = async () => {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 5,
        },
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(
      `http://localhost:1337/api/all-featured-products?populate=*?${query}`
    );
    const data = res && res.data ? res.data : [];
    setSliderHomeApi(data);
  };
  useEffect(() => {
    fetchSliderHome();
  }, []);

  // console.log(sliderHomeApi);

  return (
    <div className="test">
      <div className="heading-featured-product flex justify-center mt-[50px] ">
        <p className="text-[32px] text-[#404040] mr-[10px]">SẢN PHẨM </p>
        <p className="text-[32px] font-bold text-[#BC412C]">NỔI BẬT</p>
      </div>
      <div className="flex justify-between mt-[30px]">
        {sliderHomeApi?.data.map((item, index) => {
          const linkLocal = `http://localhost:1337${item.attributes?.image?.data?.attributes?.url}`;

          // console.log(item);
          return (
            <Link data-aos="fade-up" to={`all-featured-products/${item.id}`}>
              <div key={index} className="">
                <div className="featured-product-item w-[235px] h-[318px] rounded-[20px] bg-[#E6E5EB] px-[10px] py-[20px]">
                  <div className="featured-product-item-heading font-bold text-center">
                    {item.attributes?.title}
                  </div>
                  <div className="featured-product-item-product overflow-hidden">
                    <img
                      src={linkLocal}
                      alt=""
                      className="img-product max-h-[205px] w-full"
                    />
                  </div>
                  <div className="flex justify-between px-[20px] items-center">
                    <div className="price"> {item.attributes?.price}.000đ</div>
                    <FaShoppingCart className="text-[20px]" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        ,
      </div>
    </div>
  );
}
