import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useForm } from "react-hook-form";
import PayItemProduct from "../../component/cart/PayItemProduct";

const Pay = () => {
  const CartCtx = useContext(CartContext);
  // console.log(CartCtx.carts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);
  const totalPrice = (
    <>{CartCtx.carts.reduce((a, b) => a + Number(b.price * b.quantity), 0)}</>
  );
  // console(intoMoney);

  // console.log(totalPrice);
  const totalOrder = totalPrice.props.children + 30;
  // console.log(totalPrice.props.children);

  const payMent = (
    <table className="w-full ">
      <tr className="bg-gray-100">
        <th>SẢN PHẨM</th>
        <th className="px-[20px]">THÀNH TIỀN</th>
      </tr>
      {CartCtx.carts.map((item, index) => (
        <PayItemProduct payData={item} index={index} />
      ))}
      <tr>
        <th className="text-[#333] bg-gray-100">Thành Tiền</th>
        <th className="text-red-500 font-normal ">{totalPrice}.000đ</th>
      </tr>
      <tr>
        <th className="text-[#333] bg-gray-100">GIAO HÀNG</th>
        <th className="text-red-500 font-normal text-left">
          Đồng giá: 30.000đ
        </th>
      </tr>
      <tr>
        <th className="text-[#333] bg-gray-100">TỔNG TIỀN</th>
        <th className="text-red-500 font-normal ">{totalOrder}.000đ</th>
      </tr>
    </table>
  );
  const handleSubmitInformationUser = (event) => {
    // event.preventDefault();
    alert("Bạn đã gửi thông tin thành công");
  };

  return (
    <div className="mt-[120px]">
      <div className="w-[1200px] mx-auto">
        <div className="news-page-heading">Prowin|Thanh toán</div>
        <div className="news-page-title w-[250px] h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          THANH TOÁN
        </div>
      </div>
      <div className="flex justify-between w-[1200px] mx-auto">
        <div className="pay-user information w-[45%]">
          <div className="font-bold text-[#208cea] text-[30px] mb-[25px]">
            Thông tin thanh toán
          </div>

          <form onSubmit={handleSubmit(handleSubmitInformationUser)}>
            <div className="mt-[15px]">
              <label htmlFor="name" className="text-[14px] text-gray-500">
                Họ và tên
              </label>
              <input
                id="name"
                type="text"
                placeholder="Họ và tên"
                className="w-full h-[35px] border-[1px] border-[#ccc] px-[10px] mt-[5px]"
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "(*) Bạn chưa nhập Họ và tên",
                  },
                })}
              />
              {errors.fullName && (
                <p className="text-error mt-[5px] text-[red]">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="mt-[15px]">
              <label htmlFor="name" className="text-[14px] text-gray-500">
                Tỉnh thành
              </label>
              <select
                className="w-full h-[35px] border-[1px] border-[#ccc] px-[10px] mt-[5px] rounded-0"
                {...register("province")}
              >
                <option value="Tỉnh thành">An Giang</option>
                <option value="Tỉnh thành">Bà rịa – Vũng tàu</option>
                <option value="Tỉnh thành">Bắc Giang</option>
                <option value="Tỉnh thành">Bắc Kạn</option>
                <option value="Tỉnh thành">Bắc Kạn</option>
                <option value="Tỉnh thành">Bắc Kạn</option>
                <option value="Tỉnh thành">Bến Tre</option>
                <option value="Tỉnh thành">Bình Định</option>
                <option value="Tỉnh thành">Bình Dương</option>
                <option value="Tỉnh thành">Bình Phước</option>
                <option value="Tỉnh thành">Bình Thuận</option>
                <option value="Tỉnh thành">Cà Mau</option>
                <option value="Tỉnh thành">Cần Thơ</option>
                <option value="Tỉnh thành">Cao Bằng </option>
                <option value="Tỉnh thành">Đà Nẵng</option>
                <option value="Tỉnh thành">Đắk Lắk</option>
                <option value="Tỉnh thành">Đắk Nông</option>
                <option value="Tỉnh thành">Điện Biên</option>
                <option value="Tỉnh thành">Đồng Nai</option>
                <option value="Tỉnh thành">Đồng Tháp</option>
                <option value="Tỉnh thành">Gia Lai</option>
                <option value="Tỉnh thành">Hà Giang</option>
                <option value="Tỉnh thành">Hà Nam</option>
                <option value="Tỉnh thành">Hà Nội</option>
                <option value="Tỉnh thành">Hà Tĩnh</option>
                <option value="Tỉnh thành">Hải Dương</option>
                <option value="Tỉnh thành">Hải Phòng</option>
                <option value="Tỉnh thành">Hậu Giang</option>
                <option value="Tỉnh thành">Hòa Bình</option>
                <option value="Tỉnh thành">Hưng Yên</option>
                <option value="Tỉnh thành">Khánh Hòa</option>
                <option value="Tỉnh thành">Kiên Giang</option>
                <option value="Tỉnh thành">Kon Tum</option>
                <option value="Tỉnh thành">Lai Châu</option>
                <option value="Tỉnh thành">Lâm Đồng</option>
                <option value="Tỉnh thành">Lạng Sơn</option>
                <option value="Tỉnh thành">Lào Cai</option>
                <option value="Tỉnh thành">Long An</option>
                <option value="Tỉnh thành">Nam Định</option>
                <option value="Tỉnh thành">Nghệ An</option>
                <option value="Tỉnh thành">Ninh Bình</option>
                <option value="Tỉnh thành">Ninh Thuận</option>
                <option value="Tỉnh thành">Phú Thọ</option>
                <option value="Tỉnh thành">Quảng Bình</option>
                <option value="Tỉnh thành">Quảng Nam</option>
                <option value="Tỉnh thành">Quảng Ngãi</option>
                <option value="Tỉnh thành">Quảng Ninh</option>
                <option value="Tỉnh thành">Quảng Trị</option>
                <option value="Tỉnh thành">Sóc Trăng</option>
                <option value="Tỉnh thành">Sơn La</option>
                <option value="Tỉnh thành">Tây Ninh</option>
                <option value="Tỉnh thành">Thái Bình</option>
                <option value="Tỉnh thành">Thái Nguyên</option>
                <option value="Tỉnh thành">Thanh Hóa</option>
                <option value="Tỉnh thành">Thừa Thiên Huế</option>
                <option value="Tỉnh thành">Tiền Giang</option>
                <option value="Tỉnh thành">Thành phố Hồ Chí Minh</option>
                <option value="Tỉnh thành">Trà Vinh</option>
                <option value="Tỉnh thành">Tuyên Quang</option>
                <option value="Tỉnh thành">Vĩnh Long</option>
                <option value="Tỉnh thành">Vĩnh Phúc</option>
                <option value="Tỉnh thành">Yên Bái</option>
              </select>
            </div>

            <div className="mt-[15px]">
              <label htmlFor="name" className="text-[14px] text-gray-500">
                Địa chỉ
              </label>
              <input
                type="text"
                placeholder="Địa chỉ"
                className="w-full h-[35px] border-[1px] border-[#ccc] px-[10px] mt-[5px]"
                {...register("address", {
                  required: {
                    value: true,
                    message: "(*) Bạn chưa nhập địa chỉ",
                  },
                })}
              />
              {errors.address && (
                <p className="text-error mt-[5px] text-[red]">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className="mt-[15px]">
              <label htmlFor="name" className="text-[14px] text-gray-500">
                Số điện thoại
              </label>
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full h-[35px] border-[1px] border-[#ccc] px-[10px] mt-[5px]"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "(*) Bạn chưa nhập số điện thoại",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-error mt-[5px] text-[red]">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="mt-[15px]">
              <label htmlFor="name" className="text-[14px] text-gray-500">
                Email
              </label>
              <input
                type="text"
                placeholder="email"
                {...register("email", {})}
                className="w-full h-[35px] border-[1px] border-[#ccc] px-[10px] mt-[5px]"
              />
            </div>
            <div className="mt-[30px] w-[90%] mx-auto">
              <button
                type="submit"
                className="w-full border-[2px] border-[#000] hover:bg-[#000] hover:text-white h-[40px] text-[24px] font-medium"
              >
                Đặt Hàng
              </button>
            </div>
          </form>
        </div>
        <div className="pay-payment w-[48%]">
          <div className="font-bold text-[#208cea] text-[30px] mb-[25px]">
            Đơn hàng của bạn
          </div>
          {payMent}
        </div>
      </div>
    </div>
  );
};

export default Pay;
