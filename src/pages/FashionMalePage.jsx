import "../stylePage/pages.css";

import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../api/axiosClient";

import ItemProductApi from "../pages/ItemProductApi";
import CustomPagination from "../component/CustomPagination";
const NewsPage = () => {
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
        // sort: "date:desc",
        filters: {
          type: {
            $eq: "fashion",
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient.get(`/males?${query}`).then((response) => {
      setArticles(response);
    });
  }, [limit, page]);
  // console.log(articles);
  const totalPages = articles.meta?.pagination?.pageCount;
  const total = articles.meta?.pagination?.total;
  const pageSize = articles.meta?.pagination?.pageSize;
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
        <select className="w-[280px] h-[38px] border-[1px] border-[#ccc] px-[5px] mb-[50px]">
          <option value="">Mới nhất</option>
          <option value="">Phổ biến</option>
          <option value="">Giá từ cao đến thấp</option>
          <option value="">Giá từ thấp đến cao</option>
        </select>
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

export default NewsPage;
