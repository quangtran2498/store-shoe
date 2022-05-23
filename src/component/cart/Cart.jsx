import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  console.log(cartCtx);
  const cartItemAddHandler = (item) => {
    cartCtx.items = [];
  };

  const cartItems = (
    <ul className="test">
      <div className="w-[1400px] mx-auto">
        <div className="news-page-heading">Prowin|Giỏ hàng</div>
        <div className="news-page-title w-[250px] h-[50px] bg-red-500 mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          GIỎ HÀNG
        </div>
      </div>
      <table className="w-[1200px] mx-auto px-[20px] pb-[20px]">
        <thead className="bg-[#f3f4f6] h-[65px] ">
          <tr>
            <th className="remove"></th>
            <th className="thumnail"></th>
            <th className="name-product text-left">Sản phẩm</th>
            <th className="price">Giá</th>
            <th className="quality">Số lượng</th>
            <th className="subtotal">Thành tiền</th>
          </tr>
        </thead>
        <tbody className="translate-y-[20px] w-full min-h-[100px]  bg-[#fff]">
          {cartCtx.carts.map((item) => (
            <CartItem
              cartItem={item}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </tbody>
      </table>
    </ul>
  );
  // console(props.data);
  return (
    <div className="mt-[120px]">
      {cartItems}
      <Link to="/pay">
        <div className="news-page-title px-[30px] w-fit h-[50px] mt-[50px] bg-red-500 mx-auto flex justify-center items-center font-medium text-white text-[24px] mb-[50px]">
          Thanh Toán Đơn Hàng
        </div>
      </Link>
    </div>
  );
};

export default Cart;
