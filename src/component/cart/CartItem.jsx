import React, { useContext } from "react";
import "../../style/article.css";

import { RiCloseCircleLine } from "react-icons/ri";
import CartContext from "../../store/cart-context";

const CartItem = ({ cartItem }) => {
  const cartCtx = useContext(CartContext);
  const totalMoney = `${cartItem.price * cartItem.quantity}.000đ`;
  console.log(totalMoney);

  console.log(cartItem);

  const handleChangeQuantity = (e) => {
    console.log(e.target.value);
    cartCtx.updateQuantityCartItem({
      product: cartItem,
      quantity: Number(e.target.value),
    });
  };
  const handleRemoveCartItem = () => {
    cartCtx.removeCartItem(cartItem.id);
  };
  return (
    <>
      <tr className="">
        <th className="remove cursor-pointer">
          <RiCloseCircleLine
            onClick={handleRemoveCartItem}
            className="text-[28px]"
          />
        </th>
        <th className="thumnail">
          <img
            src={`http://localhost:1337${cartItem.image}`}
            alt=""
            className="w-[100px] h-[60px] px-[15px]"
          />
        </th>
        <th className="name-product text-left">
          <div className="font-light">{cartItem.title}</div>
          <div className="text-left font-light">size:{cartItem.size}</div>
        </th>
        <th className="price font-normal text-red-500 ">
          {cartItem.price}.000đ
        </th>
        <th className="quality">
          <input
            value={cartItem.quantity || 1}
            className="border-[1px] border-[#ccc] w-[40px] text-center"
            type="number"
            maxLength={5}
            placeholder="1"
            onChange={handleChangeQuantity}
          />
        </th>
        <th className="subtotal  text-red-500 font-normal">{totalMoney}</th>
      </tr>
    </>
  );
};

export default CartItem;
