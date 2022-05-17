import React from "react";

import ShoeFootball from "../component/ShoeFootball";
import FashionShoe from "../component/FashionShoe";

import GeneralFeaturedProduct from "../component/GeneralFeaturedProduct";
const FeaturedProduct = () => {
  return (
    <div className="w-[1220px] mx-auto">
      <GeneralFeaturedProduct />
      <ShoeFootball />
      <FashionShoe />
    </div>
  );
};

export default FeaturedProduct;
