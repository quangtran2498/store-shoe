import SliderHome from "../component/SliderHome";
import FeaturedProduct from "../component/FeaturedProduct";
import Banner from "../component/Banner";
import ShoeFamale from "../component/ShoeFemale";
import ShoeChildren from "../component/ShoeChildren";
import BannerShoeFballChildren from "../component/BannerShoeFballChildren";
import SliderQuality from "../component/SliderQuality";
import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardNew from "../component/CardNew";
const Home = () => {
  const [articles, setArticles] = useState({
    data: [],
    meta: {},
  });
  const fetchApiNews = async () => {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 8,
        },
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(
      `http://localhost:1337/api/articles?populate=*?${query}`
    );
    const data = res && res.data ? res.data : [];
    setArticles(data);
  };
  useEffect(() => {
    fetchApiNews();
  }, []);
  return (
    <div>
      <div className="mt-[100px]">
        <SliderHome />
      </div>
      <FeaturedProduct />
      <Banner />
      <ShoeFamale />
      <ShoeChildren />
      <BannerShoeFballChildren />
      <SliderQuality />
      <div className="heading-article-home uppercase w-fit mx-auto flex mt-[80px] mb-[30px]">
        <p className="text-[32px] mr-[10px] h-fit">tin tức &</p>
        <p className="text-[32px] font-bold text-[#BC412C] ">khuyến mãi </p>
      </div>
      <div className="w-[1200px] flex flex-wrap mx-auto">
        {articles.data.map((newItem, index) => (
          <CardNew newData={newItem} key={index} />
        ))}
        <Link to="/news" className="mx-auto my-[30px]">
          <div className="btn-view-more ">
            <button className="btn rounded-[20px] w-[170px] h-[40px] bg-[#BC412C] text-white  hover:bg-[#ff7158]">
              XEM THÊM
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
