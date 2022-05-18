// import qs from "qs";
import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import rehypeRaw from "rehype-raw";
import "../stylePage/pages.css";

const ArticlePage = () => {
  const [size, setSize] = useState(35);
  // const borderSize = useRef();
  const { id, type } = useParams();
  const [detailArticle, setDetailArticle] = useState({
    data: {
      attributes: {},
      id: "",
    },
    meta: {},
  });
  useEffect(() => {
    axiosClient.get(`/males/${id}`).then((response) => {
      setDetailArticle(response);
    });
    // .finally(() => setIsLoading(false));
  }, [id, type]);

  const convertMarkdownToHTML = (content) => {
    return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
  };

  return (
    <div className="">
      <div className="article-detail-page mt-[120px] flex">
        <div className="article-left w-[50%] px-[50px]"></div>
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
                // borderSize.current.style.border = "2px solid #333";
              };

              console.log(size);
              return (
                <div
                  // ref={borderSize}
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
      <div className="content px-[20px] pb-[100px]">
        <div className="text-[24px] font-bold text-blue-400">MÔ TẢ</div>
        <div className="line-content w-full h-[2px] bg-[#BC412C] my-[20px]"></div>
        <div className="article-content py-[10px]">
          {convertMarkdownToHTML(detailArticle.data.attributes?.content)}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
