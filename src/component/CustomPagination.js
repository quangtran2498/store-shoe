import React from "react";
import qs from "qs";
import ReactJsPagination from "react-js-pagination";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";

export default function CustomPagination({
  pageRangeDisplayed = 5,
  currentPage = 0,
  total,
  pageSize,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = qs.parse(location.search.substr(1));

  const handleChangePage = (pageNumber) => {
    // navigate(`?page=${pageNumber}`);
    navigate({
      search: `?${createSearchParams({
        ...queryParams,
        page: pageNumber,
      })}`,
    });
  };
  return (
    <div className="flex justify-center mt-10">
      <ReactJsPagination
        activePage={currentPage}
        itemsCountPerPage={pageSize}
        totalItemsCount={total || 1}
        pageRangeDisplayed={pageRangeDisplayed}
        activeLinkClass="pagination-link-active"
        onChange={handleChangePage}
        // thêm class
        linkClass="pagination-link"
        linkClassPrev="pagination-link-prev"
        linkClassNext="pagination-link-next"
        linkClassFirst="pagination-link-first"
        linkClassLast="pagination-link-last"
        disabledClass="pagination-item-disabled"
      />
    </div>
  );
}
