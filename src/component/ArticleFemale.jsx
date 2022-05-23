import React, { useEffect, useState } from "react";
import qs from "qs";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import axiosClient from "../api/axiosClient";
import "../style/slider.css";
import ItemProductApi from "../pages/ItemProductApi";
import "../stylePage/pages.css";
import ArticleItem from "./ArticleItem";

const ArticleFemale = () => {
  const [active, setActive] = useState();

  const [similarPrduct, setSimilarProduct] = useState({
    data: [],
    meta: {},
  });
  // const [size, setSize] = useState(35);

  const { id, type } = useParams();
  const [detailArticle, setDetailArticle] = useState({
    data: {
      attributes: {},
      id: "",
    },

    meta: {},
  });

  useEffect(() => {
    axiosClient.get(`/females/${id}?populate=*`).then((response) => {
      setDetailArticle(response);
    });
    // .finally(() => setIsLoading(false));
  }, [id, type]);
  useEffect(() => {
    const query = qs.stringify(
      {
        pagination: {
          page: 1,
          pageSize: 4,
        },
        populate: "*",
        sort: ["title", "price"],
        filters: {
          id: {
            $ne: id,
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient
      .get(`/females?${query}`)
      .then((response) => setSimilarProduct(response));
  }, [id]);
  // console.log(similarPrduct);
  const dataCart = detailArticle.data?.attributes;
  console.log(dataCart);
  const image = dataCart.image?.data?.attributes?.url;

  const convertMarkdownToHTML = (content) => {
    return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
  };
  // console.log(detailArticle.data.attributes);
  // console.log(imgList);
  // const typeRamdom = detailArticle.data.attributes?.type;
  // console.log(typeRamdom);

  return (
    <div className="">
      <div className="article-detail-page mt-[120px] flex">
        <div className="article-left w-[50%] px-[50px]">
          <div className="mt-[50px]">
            <Swiper
              loop={true}
              spaceBetween={10}
              grabCursor={true}
              navigation={true}
              thumbs={{ Swiper: active }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper1"
            >
              {detailArticle?.data?.attributes?.listImage?.data?.map(
                (itemimg, index) => {
                  // console.log(itemimg);
                  const listImg = `http://localhost:1337${itemimg?.attributes?.url}`;
                  return (
                    <SwiperSlide key={index}>
                      <img src={listImg} alt="" className="img-top" />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
            <Swiper
              onSwiper={setActive}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {detailArticle?.data?.attributes?.listImage?.data?.map(
                (itemimg, index) => {
                  // console.log(itemimg);
                  const listImg = `http://localhost:1337${itemimg?.attributes?.url}`;
                  return (
                    <SwiperSlide key={index}>
                      <img src={listImg} alt="" className="img-bottom" />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div>
        <div className="article-right w-[50%] px-[20px]">
          <ArticleItem
            id={id}
            title={dataCart.title}
            price={dataCart.price}
            description={dataCart.description}
            sizes={dataCart.sizes}
            image={image}
          ></ArticleItem>
        </div>
      </div>
      <div className="content px-[20px] pt-[50px] pb-[100px]">
        <div className="text-[24px] font-bold text-blue-400">MÔ TẢ</div>
        <div className="line-content w-full h-[2px] bg-[#BC412C] my-[20px]"></div>
        <div className="article-content py-[10px]">
          {convertMarkdownToHTML(detailArticle.data.attributes?.content)}
        </div>
      </div>
      <div className="my-[50px] text-[#208cea] text-[40px] font-bold px-[10px]">
        Sản phẩm tương tự
      </div>
      <div className="similar-product flex">
        {similarPrduct.data.map((newItem, index) => (
          <ItemProductApi newData={newItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleFemale;
