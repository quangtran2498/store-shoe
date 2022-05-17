// import qs from "qs";
// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// import CardNew from "../component/CardNew";
// import CustomPagination from "../component/CustomPagination";
// const NewsPage = () => {
//   const [articles, setArticles] = useState({
//     data: [],
//     meta: {},
//   });
//   // const [isLoading, setIsLoading] = useState(true);

//   const location = useLocation();
//   const { page, limit } = qs.parse(location.search.substr(1));
//   const fetchApiNews = async () => {
//     const query = qs.stringify(
//       {
//         pagination: {
//           page: 1,
//           pageSize: 6,
//         },
//         populate: "*",
//       },
//       {
//         encodeValuesOnly: true,
//       }
//     );
//     const res = await axios.get(
//       `http://localhost:1337/api/articles?populate=*?${query}`
//     );
//     const data = res && res.data ? res.data : [];
//     setArticles(data);
//   };
//   useEffect(() => {
//     fetchApiNews();
//   }, [limit, page]);
//   console.log(articles);
//   const totalPages = articles.meta?.pagination?.pageCount;
//   const total = articles.meta?.pagination?.total;
//   const pageSize = articles.meta?.pagination?.pageSize;
//   return (
//     <div className="news-page w-[1200px] mx-auto mt-[50px]">
//       <div className="news-page-heading">Prowin|Bản tin Prowin</div>
//       <div className="news-page-title w-[250px] h-[50px] bg-[tomato] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
//         BẢN TIN PROWIN
//       </div>
//       <div className="card-news pb-[120px] mt-[-25px]">
//         <div className="container-small flex flex-wrap">
//           {articles.data.map((newItem, index) => (
//             <CardNew newData={newItem} key={index} />
//           ))}
//         </div>
//         <CustomPagination
//           currentPage={Number(page) || 1}
//           totalPages={totalPages}
//           total={total}
//           pageSize={pageSize}
//           limit={limit}
//         />
//       </div>
//     </div>
//   );
// };

// export default NewsPage;

import "../stylePage/pages.css";

import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../api/axiosClient";

import CardNew from "../component/CardNew";
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
          pageSize: limit || 8,
        },
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );
    axiosClient.get(`/articles?${query}`).then((response) => {
      setArticles(response);
    });
  }, [limit, page]);
  console.log(articles);
  const totalPages = articles.meta?.pagination?.pageCount;
  const total = articles.meta?.pagination?.total;
  const pageSize = articles.meta?.pagination?.pageSize;
  return (
    <div className="news-page mt-[50px] w-[1400px] mx-auto">
      <div className="w-[1400px] mx-auto">
        <div className="news-page-heading">Prowin|Bản tin Prowin</div>
        <div className="news-page-title w-[250px] h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          BẢN TIN PROWIN
        </div>
      </div>
      <div className="px-[80px]">
        <div className="card-news pb-[120px] mt-[-25px]">
          <div className=" flex flex-wrap">
            {articles.data.map((newItem, index) => (
              <CardNew newData={newItem} key={index} />
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
