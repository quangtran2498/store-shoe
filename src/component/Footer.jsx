import React from "react";
import { Link } from "react-router-dom";
import SliderFooter from "../component/SliderFooter";
import LogoCompany from "../assets/img/logo.png";
import { AiFillHome, AiFillPhone, AiFillBank } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import Visa from "../assets/img/footer/visa.png";
import Mastercard from "../assets/img/footer/mastercard.png";
import Paymoney from "../assets/img/footer/thanh_toan_tien_mat.png";
import Banking from "../assets/img/footer/internet_Banking.png";
import QrCompany from "../assets/img/footer/Nambinh-QR.png";

import "../style/footer.css";
const Footer = () => {
  return (
    <div className="mt-[50px]">
      <SliderFooter />
      <div className="bg-[#202020] ">
        <div className="footer-content mt-[-10px] text-white flex mx-auto w-fit pt-[80px]">
          <div className="footer-col w-[300px] px-[10px]">
            <div className="contact-item ">
              <img src={LogoCompany} alt="" className="w-[100px]" />
            </div>
            <div className="contact-item py-[10px] font-bold text-[red]">
              Prowin - Giày thể thao chuyên nghiệp
            </div>
            <div className="contact-item py-[10px]">
              <AiFillHome className="inline" />
              <p className="text-[13px] inline ml-[10px]">
                Văn phòng: 979B Kha Vạn Cân, Phường Linh Tây, TP.Thủ Đức
              </p>
            </div>
            <div className="contact-item py-[10px]">
              <AiFillHome className="inline" />
              <p className="text-[13px] inline ml-[10px]">
                Địa chỉ xưởng: Ấp 3, Xã Phú Lý, Vĩnh Cửu, Tỉnh Đồng Nai
              </p>
            </div>
            <div className="contact-item py-[10px]">
              <AiFillPhone className="inline" />
              <p className="text-[13px] inline ml-[10px]">ĐT: 0972 588 588</p>
            </div>
            <div className="contact-item py-[10px]">
              <MdEmail className="inline" />
              <p className="text-[13px] inline ml-[10px]">info@prowin.com.vn</p>
            </div>
            <div className="contact-item py-[10px]">
              <MdEmail className="inline" />
              <p className="text-[13px] inline ml-[10px]">MST: 3700799305</p>
            </div>
            <div className="contact-item py-[10px] flex">
              <a href="https://www.facebook.com/prowinvietnam/">
                <div className="brand-item-footer w-[50px] h-[50px] rounded-[10px] bg-[#BC412C] flex items-center justify-center ">
                  <FaFacebookF className="icon-brand-footer text-[24px]" />
                </div>
              </a>
              <a href="https://www.instagram.com/x.prowin/">
                <div className="brand-item-footer w-[50px] h-[50px] rounded-[10px] bg-[#BC412C] flex items-center justify-center ml-[10px]">
                  <AiFillInstagram className="icon-brand-footer text-[40px]" />
                </div>
              </a>
              <a href="https://zalo.me/0972588588">
                <div className="brand-item-footer w-[50px] h-[50px] rounded-[10px] bg-[#BC412C] flex items-center justify-center ml-[10px]">
                  <SiZalo className="icon-brand-footer text-[30px]" />
                </div>
              </a>
            </div>
            <div className="contact-item py-[10px]"></div>
          </div>
          {/*  */}
          <div className="footer-col w-[300px] px-[10px]">
            <div className="heading-footer font-bold text-[20px] w-fit mb-[20px]">
              THƯƠNG HIỆU
              <div className="linefooter w-full h-[1px] bg-[gray] mt-[10px]"></div>
            </div>
            <Link to="">
              <div className="brand-us uppercase py-[10px] text-[20px] font-medium hover:translate-x-[15px] transition-all duration-500">
                prowin
              </div>
              <div className="brand-us uppercase py-[10px] text-[20px] font-medium hover:translate-x-[15px] transition-all duration-500">
                sprowin
              </div>
              <div className="brand-us uppercase py-[10px] text-[20px] font-medium hover:translate-x-[15px] transition-all duration-500">
                xprowin
              </div>
            </Link>
          </div>
          <div className="footer-col w-[300px] px-[10px]">
            <div className="heading-footer font-bold text-[20px] w-fit mb-[20px]">
              VỀ PROWIN
              <div className="linefooter w-full h-[1px] bg-[gray] mt-[10px]"></div>
            </div>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Giới thiệu
              </div>
            </Link>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Thông tin công ty
              </div>
            </Link>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Bản tin
              </div>
            </Link>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Liên hệ
              </div>
            </Link>
            <div className="payment mt-[30px] px-[10px]">
              <div className="heading-payment uppercase text-[20px] font-medium">
                Phương thức thanh toán
              </div>
              <div className="img-icon-pay mt-[15px] flex justify-around w-[180px] flex-wrap">
                <div className="pay-item ">
                  <img
                    src={Visa}
                    alt=""
                    className="img-icon-pay w-[80px] rounded-[5px]"
                  />
                </div>
                <div className="pay-item ">
                  <img
                    src={Mastercard}
                    alt=""
                    className="img-icon-pay w-[80px] rounded-[5px]"
                  />
                </div>
                <div className="pay-item mt-[10px]">
                  <img
                    src={Paymoney}
                    alt=""
                    className="img-icon-pay w-[80px] rounded-[5px]"
                  />
                </div>
                <div className="pay-item mt-[10px]">
                  <img
                    src={Banking}
                    alt=""
                    className="img-icon-pay w-[80px] rounded-[5px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col w-[300px] px-[10px]">
            <div className="heading-footer font-bold text-[20px] w-fit mb-[20px]">
              CHÍNH SÁCH
              <div className="linefooter w-full h-[1px] bg-[gray] mt-[10px]"></div>
            </div>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Hướng dẫn mua hàng
              </div>
            </Link>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Chính sách đổi trả
              </div>
            </Link>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Chính sách giao hàng
              </div>
            </Link>
            <Link to="">
              <div className="brand-us py-[10px] text-[15px] font-medium hover:translate-x-[15px] transition-all duration-500 ">
                <img
                  src={LogoCompany}
                  alt=""
                  className="w-[18px] inline mr-[8px]"
                />
                Chính sách bảo mật
              </div>
            </Link>
            <div className="qr-company mt-[30px]">
              <img
                src={QrCompany}
                alt=""
                className="w-[120px] mr-[20px] inline"
              />
              <img src={QrCompany} alt="" className="w-[120px] inline" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-utimate bg-[black] h-[70px] text-white">
        <div className="footer-utimate-item w-[1200px] h-[70px] mx-auto  flex justify-between items-center">
          <div className="flex">
            <p className="">Bản quyền thuộc</p>
            <p className="font-bold ml-[5px]">Nam Bình</p>
          </div>
          <div className="flex">
            <p className="">Phát triển bởi</p>
            <p className="font-bold ml-[5px]">Mondial.vn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
