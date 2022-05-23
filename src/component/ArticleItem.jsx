import React, { useState, useRef } from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
// import CartItem from '../cart/CartItem'
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const ArticleItem = (props) => {
  // const [size, setSize] = useState(35);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const [size, setSize] = useState(35);

  const handleAddToCart = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      size: size,
    });
    console.log(cartCtx.addItem);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };

  const convertMarkdownToHTML = (content) => {
    return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
  };

  return (
    <div className="article-detail-page mx-auto flex">
      <div className="article-rightpx-[20px]">
        <p className="article-title mt-[50px] text-[24px] font-bold pb-[10px]">
          {props.title}
        </p>
        <p className="article-price text-[#BC412C] pb-[10px] text-[14px]">
          {props.price}
        </p>
        <div className="article-line w-full h-[2px] bg-[#BC412C] mb-[20px]"></div>
        <div className="article-description leading-[2] text-[18px]">
          {convertMarkdownToHTML(props.description)}
        </div>
        <div className="name-size mt-[20px] mb-[10px]">Tên size:{size}</div>
        <div className="flex">
          {props.sizes?.map((sizeitem, index) => {
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
        <div className="flex mt-[10px]">
          <form onSubmit={handleAddToCart}>
            <input
              ref={amountInputRef}
              type="number"
              className="w-[80px] text-center h-[38px] border-[1px] border-[#ccc] mr-[15px] "
              placeholder="1"
            />
          </form>
          <button
            onClick={handleAddToCart}
            className="add-cart w-[300px] h-[38px] border-[2px] border-[#333] hover:bg-[#333] hover:text-white"
          >
            Thêm giỏ hàng
          </button>
        </div>
        {!amountIsValid && (
          <p className="text-red-500 mt-[5px]">
            Bạn phải nhập số lượng lớn hơn 0
          </p>
        )}

        <Link to="/pay">
          <button className="add-cart w-[300px] mt-[5px] font-bold bg-[#fca5a5] h-[42px] border-[2px] hover:bg-[white] block text-white hover:text-[#333]">
            Mua ngay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
