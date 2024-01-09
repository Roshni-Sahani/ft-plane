import React from "react";
import city1 from "../assets/images/png/city1.png";
import city2 from "../assets/images/png/city2.png";
import city3 from "../assets/images/png/city3.png";
import city4 from "../assets/images/png/city4.png";
import men1 from "../assets/images/png/men1.png"
import girlimg from "../assets/images/png/girlimg.png"
import girl1 from "../assets/images/png/girl1.png"
import girl2 from "../assets/images/png/girl2.png"


const Section4 = () => {
  return (
    <div className="bg-[#FFFFFF] py-9">
      <div className="max-w-[1140px] px-3 mx-auto">
        <h2 className="text-[#011736] font-montserrat sm:text-[40px] text-3xl tracking-[0.6px] pb-[40px] font-bold sm:leading-[150%] capitalize text-center pt-[50px]">
          Best travelars of this month
        </h2>
        <div className="flex flex-row flex-wrap mx-3 justify-center">
          <div
            className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
              <img className="w-full" src={city1} alt="city1" />
              <img className=" absolute top-[52%]" src={men1} alt="short1" />
              <p className="text-[#011736] text-center pt-[68px] text-[24px] font-montserrat font-semibold leading-[150%] self-stretch">
                Raju Mullah
              </p>
              <p className="text-[#979797] pb-[40px] font-montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]">
                @rajumulllah
              </p>
            </div>
          </div>
          <div
            className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center"
            data-aos="flip-down"
            data-aos-duration="3000"
          
            >
            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
              <img className="w-full" src={city2} alt="city2" />
              <img
                className=" absolute top-[52%] sm:top-[56%] md:top-[52.5%] lg:top-[52%]"
                src={girlimg}
                alt="short1"
              />
              <p className="text-[#011736] text-center pt-[68px] text-[24px] font-montserrat font-semibold leading-[150%] self-stretch">
                Zaire Vetrovs
              </p>
              <p className="text-[#979797] pb-[40px] font-montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]">
                @zairevetrovs
              </p>
            </div>
          </div>
          <div
            className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
              <img className="w-full" src={city3} alt="city3" />
              <img
                className=" absolute top-[52%] sm:top-[56%] md:top-[52.5%] lg:top-[52%]"
                src={girl1}
                alt="short1"
              />
              <p className="text-[#011736] text-center pt-[68px] text-[24px] font-montserrat font-semibold leading-[150%] self-stretch">
                Marcus Dias
              </p>
              <p className="text-[#979797] pb-[40px] font-montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]">
                @marcusdias
              </p>
            </div>
          </div>
          <div
            className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center"
            data-aos="flip-down"
            data-aos-duration="3000"
          >
            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
              <img className="w-full" src={city4} alt="city4" />
              <img
                className=" absolute top-[52%] sm:top-[56%] md:top-[52.5%] lg:top-[52%]"
                src={girl2}
                alt="short1"
              />
              <p className="text-[#011736] text-center pt-[68px] text-[24px] font-montserrat font-semibold leading-[150%] self-stretch">
                Davis Schleifer
              </p>
              <p className="text-[#979797] pb-[40px] font-montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]">
                @davisschleifer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
