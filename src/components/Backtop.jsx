import React, { useState } from "react";
import backicon from "../assets/images/png/backicon.png";
const Backtop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className="group animate-bounce-slow flex justify-center items-center p-2 w-[45px] h-[45px] bg-[#01092A] rounded-[100%] fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 "
        onClick={scrollToTop}
        style={{
          display: visible ? "flex " : "none",
        }}
      >
        <img className="w-full" src={backicon} alt="backtoptop" />
      </button>
    </div>
  );
};

export default Backtop;
