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

const ArticleChildren = () => {
  const [active, setActive] = useState();
  // const [typeSimilar, setTypeSimilar] = useState();

  const [similarPrduct, setSimilarProduct] = useState({
    data: [],
    meta: {},
  });
  const [size, setSize] = useState(35);

  const { id, type } = useParams();
  const [detailArticle, setDetailArticle] = useState({
    data: {
      attributes: {},
      id: "",
    },

    meta: {},
  });

  useEffect(() => {
    axiosClient.get(`/children/${id}?populate=*`).then((response) => {
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
          // type: {
          //   $eq: typeRamdom,
          // },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient
      .get(`/children?${query}`)
      .then((response) => setSimilarProduct(response));
  }, [id]);
  // console.log(similarPrduct);

  const convertMarkdownToHTML = (content) => {
    return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
  };
  // console.log(detailArticle.data.attributes);
  // console.log(imgList);
  const typeRamdom = detailArticle.data.attributes?.type;
  console.log(typeRamdom);

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
          <p className="article-title mt-[50px] text-[24px] font-bold pb-[10px]">
            {detailArticle.data.attributes?.title}
          </p>
          <p className="article-price text-[#BC412C] pb-[10px] text-[14px]">
            {detailArticle.data.attributes?.price}
          </p>
          <div className="article-line w-full h-[2px] bg-[#BC412C] mb-[20px]"></div>
          <div className="article-description leading-[2] text-[18px]">
            {convertMarkdownToHTML(detailArticle.data.attributes?.description)}
          </div>
          <div className="name-size mt-[20px]">Tên size:{size}</div>

          <div className="sizes flex mt-[10px]">
            {detailArticle.data.attributes?.sizes?.map((sizeitem, index) => {
              // console.log(sizeitem);
              const handleNameSize = () => {
                setSize(sizeitem);
              };

              console.log(size);
              return (
                <div
                  onClick={handleNameSize}
                  key={index}
                  className="size-item w-[32px]  cursor-pointer h-[30px] border-[1px] border-[#ccc] mr-[5px] flex items-center justify-center hover:bg-[#333] hover:text-[white]"
                >
                  {sizeitem}
                </div>
              );
            })}
          </div>
          <div className="flex mt-[30px]">
            <input
              type="number"
              className="w-[80px] text-center h-[38px] border-[1px] border-[#ccc] mr-[15px] "
              placeholder="1"
            />
            <button
              type="submit"
              className="add-cart w-[300px] h-[38px] border-[2px] border-[#333] hover:bg-[#333] hover:text-white"
            >
              Thêm vào giỏ
            </button>
          </div>
          <button
            type="submit"
            className="add-cart w-[300px] mt-[5px] font-bold bg-[#fca5a5] h-[42px] border-[2px] hover:bg-[white] block text-white hover:text-[#333]"
          >
            Mua Ngay
          </button>
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

export default ArticleChildren;
