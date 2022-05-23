import React, { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const { carts } = cartCtx;
  return (
    <div className="cart">
      <div className="cart-item text-white flex items-center">
        Giỏ hàng
        <Link to="/cart" className="relative">
          <FaShoppingBag className="inline ml-[5px] text-[#ff7158] text-[24px] hover:text-white" />
          <div className="quality absolute top-[-5px] right-[-15px] w-[20px] h-[20px] rounded-full bg-white text-black text-center leading-[20px]">
            {carts.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartButton;
