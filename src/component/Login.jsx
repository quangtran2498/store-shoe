import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="mt-[150px] mb-[100px]">
      <div className="w-[1400px] mx-auto ">
        <div className="news-page-heading">Prowin|Tài khoản</div>
        <div className="news-page-title px-[30px] w-fit h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          TÀI KHOẢN
        </div>
      </div>
      <div className="w-[1200px] mx-auto">
        <h3 className="text-[#208cea] text-[30px] font-bold mb-[20px]">
          Đăng nhập
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name ">Tên tài khoản hoặc địa chỉ email </label>
          <input
            id="name"
            className="border-[1px] border-[#ccc] block w-full h-[40px] mt-[5px] px-[10px] mb-[10px]"
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <label htmlFor="password ">Mật khẩu </label>

          <input
            id="password"
            className="border-[1px] border-[#ccc] block w-full h-[40px] mt-[5px] px-[10px]"
            type="email"
            placeholder="email"
            {...register("email", {})}
          />
          <div className="mt-[20px]">
            <input className="inline" type="checkbox" />
            <p className="inline"> Ghi nhớ mật khẩu</p>
          </div>

          <input
            className="w-[160px] h-[38px] cursor-pointer  bg-[#eeee] font-medium text-[18px] text-center hover:bg-[#f3f4f6] mt-[5px] mb-[10px] block"
            value="Đăng Nhập"
            type="submit "
          />
          <Link to="/" className="text-[16px] mt-[10px] py-[10px]">
            Quên mật khẩu
          </Link>
        </form>
      </div>
    </div>
  );
}
