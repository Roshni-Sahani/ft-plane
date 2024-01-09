import React from 'react'
import groupimg from '../assets/images/png/groupimg.png'
import lineimg from '../assets/images/png/lineimg.png'
const Section2 = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-3 relative pt-20 pb-24">
        <div className="flex flex-wrap flex-row items-center">
          <div
            className="lg:w-5/12 w-full px-3 flex justify-center mb-5 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={groupimg} alt="img" className="w-100" />
          </div>
          <div
            className=" lg:w-7/12 w-full px-3 flex flex-col justify-end"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <p className="text-[#313EF7] font-montserrat text-xl font-black leading-[120%] text-center lg:text-start after:w-[75%] after:border-[2px] after:border-dashed after:border-[#E5E7EB] after:absolute relative after:right-10 after:top-3 after:hidden lg:after:block">
              Let’s Fly
            </p>
            <p className="sm:text-[32px] text-2xl font-bold font-montserrat sm:leading-[45px] max-w-[588px] pb-8 mt-3">
              It’s one of the leading online flight booking platforms in the
              world
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-[10px] h-[10px] bg-[#313EF7] rounded-full mb-2 block lg:hidden p-1"></div>
              <p className="sm:text-base text-sm  text-[#030303] font-medium font-montserrat mb-2 lg:pl-3 ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-[10px] h-[10px] bg-[#313EF7] rounded-full mb-2 block lg:hidden p-1"></div>
              <p className="sm:text-base text-sm  text-[#030303] font-medium font-montserrat mb-2 lg:pl-3">
                If you are going to use a passage of Lorem Ipsum
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#313EF7] rounded-full mb-2 block lg:hidden p-1"></div>
              <p className="sm:text-base text-sm text-[#030303] font-medium font-montserrat mb-2 lg:pl-3 ">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-[10px] h-[10px] bg-[#313EF7] rounded-full m b-2 block lg:hidden p-1"></div>
              <p className="sm:text-base text-sm text-[#030303] font-medium font-montserrat mb-2 lg:pl-3 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="m b-5">
              <button className="text-white font-Montserrat font-semibold sm:text-base text-sm rounded-[56px]  bg-[#313EF7] border-[2px] border-transparent hover:border-[#313EF7] hover:bg-transparent hover:text-[#313EF7] duration-300 px-11 py-3.5 mt-3 shadow-[0px_10px_14px_0px_#313EF740]">
                Book Now
              </button>
            </div>
          </div>
          <img
            src={lineimg}
            alt="line"
            className="absolute hidden lg:block top-[45%] left-[42%]"
          />
        </div>
      </div>
    </>
  );
}

export default Section2
 