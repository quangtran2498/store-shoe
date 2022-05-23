import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import ArticleItem from "./ArticleItem";

const ArticlePage = () => {
  const [detailArticle, setDetailArticle] = useState({
    data: {
      attributes: {},
      id: "",
    },

    meta: {},
  });

  useEffect(() => {
    axiosClient.get(`/males/1?populate=*`).then((response) => {
      setDetailArticle(response);
    });
  }, []);

  const dataCart = detailArticle.data?.attributes;
  const image = dataCart.image?.data?.attributes?.url;

  // console.log(dataCart);
  const id = detailArticle.data.id;
  // console.log(id);

  return (
    <div className="article">
      <ArticleItem
        id={id}
        title={dataCart.title}
        price={dataCart.price}
        description={dataCart.description}
        sizes={dataCart.sizes}
        image={image}
      ></ArticleItem>
    </div>
  );
};

export default ArticlePage;