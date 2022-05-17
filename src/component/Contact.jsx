import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    alert("Gửi đi thành công");
  };
  return (
    <div>
      <div className="w-[1400px] mx-auto mt-[150px]">
        <div className="news-page-heading">Prowin|Liên hệ</div>
        <div className="news-page-title px-[30px] w-fit h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          LIÊN HỆ
        </div>
      </div>
      <div className="content-contact flex justify-between w-[1200px] mx-auto">
        <div className="map w-[48%]">
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449513!2d105.801944044242!3d21.022736016275918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652795339407!5m2!1svi!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-content w-[48%]">
          <form
            className="form w-[80%] mx-auto pb-[50px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-user_name">
              <div className=" flex">
                <label htmlFor="fullname" className="font-bold text-[16px]">
                  Họ và tên *
                </label>
              </div>

              <input
                id="fullname"
                className="input-form-contact border-[1px] border-[#ccc] w-full h-[50px] pl-[10px] rounded-[5px] text-[#333]"
                placeholder="Vui lòng nhập tên đầy đủ"
                maxLength={30}
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

            <div className="form-user_item pb-[10px] sm:mt-[10px]">
              <div className=" flex">
                <label className=" font-bold" htmlFor="email">
                  Email *
                </label>
              </div>

              <input
                id="email"
                className="input-form-contact border-[1px] border-[# ccc] input-user w-full h-[50px] pl-[10px] rounded-[5px] text-[#333]"
                placeholder="bluebill1049@hotmail.com"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "(*) Bạn chưa nhập Email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-error mt-[5px] text-[red]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-user_item sm:mt-[10px]">
              <div className="flex">
                <label className="font-bold" htmlFor="phone">
                  Số điện thoại *
                </label>
              </div>
              <input
                id="phone"
                className="input-form-contact border-[1px] border-[# ccc] w-full h-[50px] pl-[10px] rounded-[5px] text-[#333] input-user"
                placeholder="Vui lòng điền số điện thoại"
                type="text"
                maxLength={15}
                {...register("phone", {
                  pattern: {
                    value: /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
                    message: "Số điện thoại không hợp lệ. Vui lòng nhập lại",
                  },
                  required: {
                    value: true,
                    message: " Bạn chưa nhập số điện thoại",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-error mt-[5px] text-[red]">
                  (*) {errors.phone.message}
                </p>
              )}
            </div>

            <div className="form-user_heading mt-[10px] sm:mt-[20px] md:mt-[20px]">
              <label htmlFor="content-email" className="font-bold">
                Nội dung email
              </label>
              <textarea
                id="content-email"
                maxLength={500}
                className="content-form w-full h-[120px] md:h-[120px] rounded-[5px] pt-[15px] pl-[10px] text-[#333] border-[1px] border-[#ccc]"
              ></textarea>
            </div>

            <div className="btn-submit mt-[20px] ">
              <input
                className="input-submit font-bold w-[150px] md:w-[200px] text-white mx-auto bg-[#BC412C] h-[40px] rounded-[20px] cursor-pointer hover:bg-[#ef4444] sm:w-[200px]"
                type="submit"
                value="Gửi Đi"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
