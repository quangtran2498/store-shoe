import React from "react";
import ImgVesion from "../assets/img/about-us/thuong_hieu_giay_viet.jpg";
import Personnel from "../assets/img/about-us/nhan_su.png";
import companion from "../assets/img/about-us/dong_hang.png";
import creative from "../assets/img/about-us/sang_tao.png";
import responsibility from "../assets/img/about-us/trach_nhiem.png";
import diagram from "../assets/img/about-us/so_do_to_chuc.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div className="w-[1400px] mx-auto mt-[150px]">
        <div className="news-page-heading">Prowin|Thông tin công ty</div>
        <div className="news-page-title px-[30px] w-fit h-[50px] mx-auto flex justify-center items-center font-medium text-white mt-[15px] text-[24px] mb-[50px]">
          THÔNG TIN CÔNG TY
        </div>
      </div>
      <div className="content-about-us mx-auto w-[1200px] px-20px">
        <div className="version flex  mt-[80px]">
          <div className="version-left  w-[50%]">
            <img src={ImgVesion} alt="" className="" />
          </div>
          <div className="version-right w-[50%] bg-[#CE2626] text-[white] px-[50px]">
            <div className="text-[24px] mt-[100px] font-bold">I. TẦM NHÌN</div>
            <div className="mt-[20px]">
              Bằng khát vọng, ý chí và tinh thần không ngừng đổi mới sáng tạo
              của một đội ngũ vững mạnh, một tầm nhìn chiến lược của nhà lãnh
              đạo để phấn đấu đến năm 2025, PROWIN sẽ vươn mình phát triển thành
              công ty hàng đầu có uy tín trong lĩnh vực sản xuất giày thể thao
              mang đẳng cấp quốc tế, thể hiện tầm vóc trí tuệ người Việt Nam.
            </div>
          </div>
        </div>
        <div className="mission w-[700px] mx-auto text-center">
          <p className="text-[24px] mt-[100px] font-bold text-[#CE2626]">
            II. SỨ MỆNH
          </p>
          <p className="font-bold text-left mt-[10px] leading-[2]">
            Đầu tư, cung cấp các sản phẩm và dịch vụ, góp phần thúc đẩy ngành
            công nghiệp giày dép Việt Nam tham gia sâu hơn vào chuỗi giá trị
            toàn cầu. Luôn cải tiến, sáng tạo, đồng hành để phát triển lớn mạnh
            và chia sẻ lợi ích gắn trách nhiệm doanh nghiệp với cộng đồng xã hội
            và luôn mang đến sự tin tưởng, an tâm cho khách hàng, đối tác, nhân
            viên.
          </p>
        </div>
        <div className="core-value text-center pb-[50px]">
          <p className="text-[24px] mt-[100px] font-bold text-[#CE2626]">
            III. GIÁ TRỊ CỐT LÕI
          </p>
          <div className="core-valeu-content text-white flex mt-[50px]">
            <div className="core-value-item px-[15px] w-[25%] bg-[#EF4945] ">
              <img
                src={Personnel}
                alt=""
                className="w-[100px] mx-auto py-[10px]"
              />
              <p className="text-[20px] font-bold py-[5px]">Nhân sự</p>
              <p className="py-[15px] text-left">
                Chú trọng vào phát triển nguồn nhân lực, xem nhân viên là tài
                sản quý giá, là vũ khí chiến lược cho sự thành công và phát
                triển của doanh nghiệp
              </p>
            </div>
            <div className="core-value-item px-[15px] w-[25%] bg-[#D6352A] ">
              <img
                src={companion}
                alt=""
                className="w-[100px] mx-auto py-[10px]"
              />
              <p className="text-[20px] font-bold py-[5px]">Nhân sự</p>
              <p className="py-[15px] text-left">
                Chú trọng vào phát triển nguồn nhân lực, xem nhân viên là tài
                sản quý giá, là vũ khí chiến lược cho sự thành công và phát
                triển của doanh nghiệp
              </p>
            </div>
            <div className="core-value-item px-[15px] w-[25%] bg-[#CE2039] ">
              <img
                src={creative}
                alt=""
                className="w-[100px] mx-auto py-[10px]"
              />
              <p className="text-[20px] font-bold py-[5px]">Nhân sự</p>
              <p className="py-[15px] text-left">
                Chú trọng vào phát triển nguồn nhân lực, xem nhân viên là tài
                sản quý giá, là vũ khí chiến lược cho sự thành công và phát
                triển của doanh nghiệp
              </p>
            </div>
            <div className="core-value-item px-[15px] w-[25%] bg-[#A6271E] ">
              <img
                src={responsibility}
                alt=""
                className="w-[100px] mx-auto py-[10px]"
              />
              <p className="text-[20px] font-bold py-[5px]">Nhân sự</p>
              <p className="py-[15px] text-left">
                Chú trọng vào phát triển nguồn nhân lực, xem nhân viên là tài
                sản quý giá, là vũ khí chiến lược cho sự thành công và phát
                triển của doanh nghiệp
              </p>
            </div>
          </div>
        </div>
        <div className="diagram">
          <img src={diagram} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
