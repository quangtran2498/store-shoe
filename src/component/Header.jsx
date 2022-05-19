import React from "react";
import Logo from "../assets/img/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";

import { Link } from "react-router-dom";
import "../style/header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-aboutus w-full h-[60px] bg-[#000000]">
        <div className="header-top w-[1200px] mx-auto flex justify-between items-center h-[60px]">
          <div className="">
            <Link to="/">
              <img src={Logo} alt="" className="logo w-[80px]" />
            </Link>
          </div>
          <div className="">
            <ul className="flex text-white">
              <Link to="/about-us">
                <li className="header-item introduce flex items-center px-[20px] py-[10px] relative cursor-pointer">
                  Giới thiệu
                  <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                </li>
              </Link>
              <Link to="/about-us">
                <li className="header-item cooperate flex items-center px-[20px] py-[10px] relative cursor-pointer">
                  Hợp tác
                  <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                  {/* <div className="header-item-link cooperate-children z-10 absolute w-[250px] bg-[#333] min-h-[100px] bottom-[-175px] left-[0] hidden">
                    <Link to="/" className="">
                      <div className="header-item-link-children py-[10px] pl-[10px] hover:text-[black]">
                        Chính sách đại lý
                      </div>
                    </Link>
                    <Link to="/" className="">
                      <div className="header-item-link-children py-[10px]  pl-[10px] hover:text-[black]">
                        Tôi muốn làm đại lý
                      </div>
                    </Link>
                    <Link to="/" className="">
                      <div className="header-item-link-children py-[10px]  pl-[10px] hover:text-[black]">
                        Chính sách cộng tác viên
                      </div>
                    </Link>
                    <Link to="/" className="">
                      <div className="header-item-link-children py-[10px]  pl-[10px] hover:text-[black]">
                        Tôi muốn làm cộng tác viên
                      </div>
                    </Link>
                  </div> */}
                </li>
              </Link>
              <Link to="/">
                <li className="header-item flex items-center px-[20px] py-[10px] relative cursor-pointer">
                  Hệ thống phân phối
                  <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                </li>
              </Link>

              <Link to="/">
                <li className="header-item login flex items-center px-[20px] py-[10px] relative cursor-pointer">
                  Đăng nhập
                  <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                  <div className="header-item-link login-children z-10 absolute w-[250px] bg-[#333] min-h-[100px] bottom-[-100px] left-[0] hidden">
                    <Link to="/login" className="">
                      <div className="header-item-link-children py-[10px] pl-[10px] hover:text-[black]">
                        Đăng nhập
                      </div>
                    </Link>
                    <Link to="/" className="">
                      <div className="header-item-link-children py-[10px]  pl-[10px] hover:text-[black]">
                        Đăng ký
                      </div>
                    </Link>
                  </div>
                </li>
              </Link>

              <Link to="/contact">
                <li className="header-item flex items-center px-[20px] py-[10px] relative cursor-pointer">
                  Liên hệ
                  <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                </li>
              </Link>
            </ul>
          </div>
          <div className="cart">
            <div className="cart-item text-white flex items-center">
              Giỏ hàng
              <Link to="/" className="relative">
                <FaShoppingBag className="inline ml-[5px] text-[#ff7158] text-[24px] hover:text-white" />
                <div className="quality absolute top-[-5px] right-[-15px] w-[20px] h-[20px] rounded-full bg-white text-black text-center leading-[20px]">
                  0
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom w-full h-[40px] bg-[#BC412C] ">
        <div className="header-product w-[1200px] mx-auto  h-[40px] flex items-center justify-around">
          <div className="product-item flex items-center">
            <Link to="/male-all-page">
              <li className="header-product-item male text-[14px] hover:bg-[#ff7158] cooperate flex items-center px-[20px] h-[40px] relative cursor-pointer text-white">
                NAM
                <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                <div className="header-item-link cooperate-children z-10 absolute w-[250px] bg-[#BC412C] min-h-[100px] top-[40px] left-[0] hidden">
                  <Link to="/fashion-male-page" className="">
                    <div className="header-item-link-children py-[10px] pl-[10px] hover:bg-[#ff7158]">
                      Giày thời trang
                    </div>
                  </Link>
                  <Link to="/football-male-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Giày đá bóng
                    </div>
                  </Link>
                  <Link to="/multipurpose-male-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Giày thể thao đa dụng
                    </div>
                  </Link>
                  <Link to="/sandal-male-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Dép - Sandal
                    </div>
                  </Link>
                </div>
              </li>
            </Link>
            <Link to="/female-all-page">
              <li className="header-product-item female text-[14px] hover:bg-[#ff7158] cooperate flex items-center px-[20px] h-[40px] relative cursor-pointer text-white">
                NỮ
                <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                <div className="header-item-link cooperate-children z-10 absolute w-[250px] bg-[#BC412C] min-h-[100px] top-[40px] left-[0] hidden">
                  <Link to="/fashion-female-page" className="">
                    <div className="header-item-link-children py-[10px] pl-[10px] hover:bg-[#ff7158]">
                      Giày thời trang
                    </div>
                  </Link>
                  <Link to="/multipurpose-female-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Giày thể thao đa dụng
                    </div>
                  </Link>
                  <Link to="/sandal-female-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Dép - Sandal
                    </div>
                  </Link>
                </div>
              </li>
            </Link>
            <Link to="/children-all-page">
              <li className="header-product-item  children text-[14px] hover:bg-[#ff7158] cooperate flex items-center px-[20px] h-[40px] relative cursor-pointer text-white">
                TRẺ EM
                <BiChevronDown className="inline text-[20px] ml-[3px] font-bold" />
                <div className="header-item-link cooperate-children z-10 absolute w-[250px] bg-[#BC412C] min-h-[100px] top-[40px] left-[0] hidden">
                  <Link to="/fashion-children-page" className="">
                    <div className="header-item-link-children py-[10px] pl-[10px] hover:bg-[#ff7158]">
                      Giày thời trang
                    </div>
                  </Link>
                  <Link to="/multipurpose-children-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Giày thể thao đa dụng
                    </div>
                  </Link>
                  <Link to="/sandal-children-page" className="">
                    <div className="header-item-link-children py-[10px]  pl-[10px] hover:bg-[#ff7158]">
                      Dép - Sandal
                    </div>
                  </Link>
                </div>
              </li>
            </Link>
            <Link to="/sale-product">
              <div className="header-product-item text-[14px] hover:bg-[#ff7158]  px-[20px] h-[40px] text-white leading-[40px]">
                KHUYẾN MÃI
              </div>
            </Link>
            <Link to="/new-product">
              <div className="header-product-item text-[14px] hover:bg-[#ff7158]  px-[20px] h-[40px] text-white leading-[40px]">
                SẢN PHẨM MỚI
              </div>
            </Link>
            <Link to="/articles">
              <div className="header-product-item text-[14px] hover:bg-[#ff7158]  px-[20px] h-[40px] text-white leading-[40px] ">
                TIN TỨC
              </div>
            </Link>
          </div>
          <div className="support font-bold flex items-center">
            <div className="search-btn">
              <HiOutlineSearch className="text-[25px] text-white font-bold" />
            </div>
            <div className="contact-number text-white text-[18px] ml-[20px]">
              0972 588 588
              <FaPhone className="text-[20px] inline ml-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
