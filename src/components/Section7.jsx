import React, { useState } from "react";



const Section7 = () => {
  const [modal, setmodal] = useState(false);
  function show() {
    setmodal(!modal);
  }
  return (
    <div>
      <div className="bg-[#f5f5ff] pt-24 pb-20">
        <div
          className="max-w-[1140px] px-3 mx-auto"
          data-aos="zoom-in-left"
          data-aos-duration="3000"
        >
          <h2 className="text-[#011736] font-montserrat font-bold  text-3xl sm:text-[40px] text-center max-w-[534px] mx-auto sm:leading-[150%]">
            Subscribe Newsletter & get letest news
          </h2>
          <div className="p-[11px_11px_11px_20px] bg-[#fff] rounded-[150px] shadow-[0px 100px 200px 0px #0117361A] mx-auto max-w-[493px] flex justify-between items-center mt-5  ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-[#AEB5BF] font-normal sm:text-xl text-lg outline-0 w-[75%] font-rubik"
            />

            <button
              className="text-white font-montserrat font-semibold sm:text-base text-xs rounded-[56px]  bg-[#313EF7] border-[2px] border-transparent hover:bg-transparent hover:border-[#313EF7] hover:text-[#313EF7] duration-300 sm:px-11 px-5 py-3.5  shadow-[ 0px_10px14px  rgba(49, 62, 247, 0.25)]"
              onClick={show}
            >
              Subscribe
            </button>
          </div>
          <div className="flex justify-center items-center">
            {modal ? (
              <div className="h-[200px] w-[200px] fixed flex-col bg-[#f5f5ff] rounded-3xl flex justify-center items-center">
                <p className="text-black text-xl font-montserrat fw-bold">
                 modal
                </p>
                <button
                  className="text-block px-4 py-2 border-black fw-bold"
                  onClick={show}
                >
                  close
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
