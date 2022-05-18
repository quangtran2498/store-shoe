import React from "react";
import { Link } from "react-router-dom";

// import "../styles/base.css";
// import NewImg from "../assets";
const ItemProductApi = ({ newData }) => {
  const { attributes } = newData;
  // console.log(attributes);

  const linkLocal = `http://localhost:1337${attributes?.image?.data?.attributes?.url}`;

  const type = attributes?.typedad;
  return (
    <Link
      to={`/${type}/${newData?.id}`}
      className="news-card flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-[25px] p-7 md:p-3 pb-11  md:mt-[20px]"
    >
      <div className="overflow-hidden w-full mx-auto">
        <img
          src={linkLocal}
          alt=""
          className="img-article object-cover object-center min-h-[180px] w-[340px] h-[240px]"
        />
      </div>
      <div className="content-item-product-api mt-[20px] text-center">
        <p className="item-title-product vgs-text-ellipsis-3 news-title text-[15px] font-bold  text-center text-[#208cea] ">
          {attributes?.title}
        </p>
        <p className="price py-[10px]">{attributes?.price}</p>
        <div className="w-full h-[38px] border-[2px] border-black text-center leading-[35px] hover:bg-[#333] hover:text-white">
          XEM
        </div>
      </div>
    </Link>
  );
};

export default ItemProductApi;
