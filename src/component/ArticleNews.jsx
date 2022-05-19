import React, { useEffect, useState } from "react";
import qs from "qs";
import axiosClient from "../api/axiosClient";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
const ArticleNews = () => {
  const { id, type } = useParams();
  const [detailArticle, setDetailArticle] = useState({
    data: {
      attributes: {},
      id: "",
    },

    meta: {},
  });

  useEffect(() => {
    axiosClient.get(`/articles/${id}?populate=*`).then((response) => {
      setDetailArticle(response);
    });
    // .finally(() => setIsLoading(false));
  }, [id, type]);
  const convertMarkdownToHTML = (content) => {
    return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
  };
  console.log(detailArticle);
  return (
    <div className="mt-[150px] w-[1200px] mx-auto">
      <div className="news-page-heading">
        {detailArticle.data?.attributes?.heading}
      </div>
      <div className="news-page-title w-fit px-[30px] h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[30px] text-[24px] mb-[50px]">
        {detailArticle.data?.attributes?.title}
      </div>
      <div className="mt-[50px]">
        {detailArticle.data?.attributes?.description}
      </div>
      <div className="mt-[50px] article-content">
        {convertMarkdownToHTML(detailArticle.data?.attributes?.content)}
      </div>
    </div>
  );
};

export default ArticleNews;
