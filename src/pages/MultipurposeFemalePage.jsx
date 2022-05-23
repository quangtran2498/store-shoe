import "../stylePage/pages.css";

import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { RiArrowDownSLine } from "react-icons/ri";

import ItemProductApi from "../pages/ItemProductApi";
import CustomPagination from "../component/CustomPagination";
const MultipurposeFemalePage = () => {
  const [sort, setSort] = useState("title");
  const [sortItem, setSortItem] = useState("Phổ biến");
  const [articles, setArticles] = useState({
    data: [],
    meta: {},
  });

  const location = useLocation();
  const { page, limit } = qs.parse(location.search.substr(1));
  useEffect(() => {
    const query = qs.stringify(
      {
        pagination: {
          page,
          pageSize: limit || 6,
        },
        populate: "*",
        sort,
        filters: {
          type: {
            $eq: "multipurpose",
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient.get(`/females?${query}`).then((response) => {
      setArticles(response);
    });
  }, [limit, page, sort]);
  console.log(articles);
  const totalPages = articles.meta?.pagination?.pageCount;
  const total = articles.meta?.pagination?.total;
  const pageSize = articles.meta?.pagination?.pageSize;
  //
  const handleFirstNew = () => {
    setSortItem("Mới nhất");
    setSort("type:desc");
  };
  const handleCommon = () => {
    setSortItem("Phổ biến");
    setSort("title:desc");
  };
  const handlePriceShortTall = () => {
    setSortItem("Giá từ thấp đến cao ");
    setSort("price:asc");
    // setSort("title");
  };
  const handlePriceTallShort = () => {
    setSortItem("Giá từ cao đến thấp");
    setSort("price:desc");
    // setSort("title");
  };
  return (
    <div className="news-page mt-[50px]">
      <div className="w-[1400px] mx-auto">
        <div className="news-page-heading">
          Prowin|Sản phẩm|Dành cho nam|Giày Thời trang
        </div>
        <div className="news-page-title w-[250px] h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          GIÀY THỜI TRANG
        </div>
      </div>
      <div className="px-[80px]">
        <div className="relative language cursor-pointer w-[250px] py-[5px] px-[10px] border-[1px] border-[#ccc] mb-[50px]">
          {sortItem}
          <RiArrowDownSLine className="absolute right-[10px] top-[10px]" />

          <div className="language-item left-0 mt-[8px] absolute w-full  bg-[white] rounded-[5px] ] hidden border-[1px] border-[#ccc]">
            <div
              onClick={handleCommon}
              className="common text-[#333] w-full py-[3px] pl-[10px]  hover:text-[red] hover:bg-[#f9fafb] hover:rounded-[5px] cursor-pointer"
            >
              Phổ biến
            </div>
            <div
              onClick={handleFirstNew}
              className="first-new text-[#333] w-full py-[3px] pl-[10px] hover:text-[red] hover:bg-[#f9fafb] hover:rounded-[5px] cursor-pointer"
            >
              Mới nhất
            </div>
            <div
              onClick={handlePriceShortTall}
              className="first-new text-[#333] w-full py-[3px] pl-[10px] hover:text-[red] hover:bg-[#f9fafb] hover:rounded-[5px] cursor-pointer"
            >
              Giá từ thấp đến cao
            </div>
            <div
              onClick={handlePriceTallShort}
              className="first-new text-[#333] w-full py-[3px] pl-[10px] hover:text-[red] hover:bg-[#f9fafb] hover:rounded-[5px] cursor-pointer"
            >
              Giá từ cao đến thấp
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="card-news pb-[120px] mt-[-25px]">
          <div className=" flex flex-wrap">
            {articles.data.map((newItem, index) => (
              <ItemProductApi newData={newItem} key={index} />
            ))}
          </div>
          <CustomPagination
            currentPage={Number(page) || 1}
            totalPages={totalPages}
            total={total}
            pageSize={pageSize}
            limit={limit}
          />
        </div>
      </div>
    </div>
  );
};

export default MultipurposeFemalePage;
