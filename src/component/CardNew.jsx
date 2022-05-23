import React from "react";
import { Link } from "react-router-dom";
import "../style/news.css";
import { ImArrowRight2 } from "react-icons/im";
import LoadingSkeleton from "./LoadingSkeleton";

const CardNew = ({ newData }) => {
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
          className="img-article object-cover object-center min-h-[180px] w-[280px] h-[200px]"
        />
      </div>
      <div className="content-item-card py-[10px] px-[20px] bg-[#E6E5EB]">
        <p className="item-title vgs-text-ellipsis-3 news-title text-[18px] font-bold text-center text-[#ff7158]">
          {attributes?.title}
        </p>
        <div className="w-[230px] h-[1px] bg-[#ccc] my-[10px]"></div>
        <div className="flex items-center">
          <p className="item-title vgs-text-ellipsis-3 news-title text-[14px] text-center max-w-[200px] mr-[10px]">
            {attributes?.description}
          </p>
          <ImArrowRight2 className="text-[20px]  " />
        </div>
      </div>
    </Link>
  );
};
const Loading = () => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:basis-1/4 px-[25px] p-7 md:p-3 pb-11  md:mt-[50px]   rounded-xl overflow-hidden">
      <div className="bg-[#343434] p-4 rounded-2xl">
        <LoadingSkeleton className="overflow-hidden w-full  mx-auto mb-5 min-h-[180px]" />
        <LoadingSkeleton className="item-title vgs-text-ellipsis-3 news-title text-[18px] font-bold mb-5 min-h-[50px]" />
        <div className="news-info mt-auto flex justify-between items-center">
          <LoadingSkeleton className="news-date max-w-[110px] min-h-[27px]" />
          <LoadingSkeleton className="btn rounded-3xl  py-2 px-5 lg:px-5 xl:px-10  font-bold max-w-[110px] min-h-[40px]" />
        </div>
      </div>
    </div>
  );
};
CardNew.Loading = Loading;

export default CardNew;
