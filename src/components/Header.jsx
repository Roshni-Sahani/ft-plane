import React, { useState } from "react";
import whiteplane from "../assets/images/whiteplaneimg.png";
import logo from "../assets/images/png/logo.png"
const Header = () => {
  const [set, setshow] = useState(true);
  function menu() {
    setshow(!set);
    if (set === true) {
      document.querySelector("body").classList.add("overflow-hidden")
    }
    else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }
  return (
    <div className="h-screen">
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="flex justify-between py-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <h2 className="text-white font-montserrat text-[22px]  font-extrabold leading-7">
              FT PLANE
            </h2>
          </div>
          <ul
            className={`flex items-center gap-12 duration-700 mobileView ${
              set ? "right-[-100%]" : "right-0 "
            }`}
          >
            <li>
              <a
                href=""
                className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold"
              >
                All Flight
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold"
              >
                Passengers
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold"
              >
                Your Orders
              </a>
            </li>
            <li>
              <button className="py-[10px] px-10 rounded-[49px] text-white text-base font-semibold border-solid border border-white hover:bg-[#fff] hover:text-[#010223] duration-300">
                Let’s Fly
              </button>
            </li>
          </ul>
          <label className={`flex flex-col lg:hidden  z-20`} onClick={menu}>
            <span className="w-8] h-[4px] bg-white rounded-full mt-2 flex"></span>
            <span className="w-8 h-[4px] bg-white rounded-full mt-2 flex"></span>
            <span className="w-8 h-[4px] bg-white rounded-full mt-2 flex"></span>
          </label>
        </div>
        <img
          src={whiteplane}
          alt="whiteplane"
          className="pt-14"
          data-aos="zoom-in"
          data-aos-duration="3000"
        />
        <p className="text-white text-center font-bold sm:text-5xl text-4xl leading-[150%] tracking-[0.72px] font-montserrat">
          Travel Around The World
        </p>
        <p className="text-[#FFFFFFB2] text-xs mx-auto text-center font-normal font-inter">
          One of the advantages of being disorganized is that one is always
          having surprising discoveries
        </p>
      </div>
    </div>
  );
};

export default Header;
