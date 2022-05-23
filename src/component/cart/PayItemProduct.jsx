import React from "react";
import "../../style/pay.css";

const PayItemProduct = ({ payData, index }) => {
  const total = payData.price * payData.quantity;
  const totalMoney = `${total}.000đ`;

  // console.log(payData);
  // const abc = totalMoney;
  // console.log(abc);

  return (
    <>
      <tr>
        <th>
          <div className="flex">
            <div className="">
              <img
                src={`http://localhost:1337${payData.image}`}
                alt=""
                className="w-[100px] h-[60px] px-[15px]"
              />
              <div className="">X {payData.quantity}</div>
            </div>
            <div className="text-left">
              <div className="title-product-pay font-light">
                {payData.title}
              </div>
              <div className=" font-normal">Size:{payData.size}</div>
            </div>
          </div>
        </th>
        <th className="total-money text-red-500 font-normal flex">
          <div className="mx-auto">{totalMoney}</div>
        </th>
      </tr>
    </>
  );
};

export default PayItemProduct;
